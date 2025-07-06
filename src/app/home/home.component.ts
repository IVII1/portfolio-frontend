import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HomeService } from '../services/home.service';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [RouterModule, ReactiveFormsModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private homeService: HomeService) {}
  loading!: boolean;
  success!: boolean;
  fail!: boolean;
  messageForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(30)],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    content: new FormControl('', {
      validators: [Validators.required],
    }),
  });
  onSubmit(): void {
    if (this.messageForm.invalid) {
      this.fail = true;
      setTimeout(() => {
        this.fail = false;
      }, 1500);
      return;
    }

    this.loading = true;
    this.success = false;
    this.fail = false;

    this.homeService
      .sendMessage(this.messageForm.value)

      .subscribe({
        next: (response) => {
          if (response) {
            this.messageForm.reset();
            this.messageForm.markAsPristine();
            this.messageForm.markAsUntouched();
          }
          this.loading = false;
          this.success = true;
          setTimeout(() => {
            this.success = false;
          }, 1500);
        },
        error: () => {
          this.loading = false;
          this.fail = true;
          setTimeout(() => {
            this.fail = false;
          }, 1500);
        },
      });
  }
  get nameIsInvalid() {
    return (
      this.messageForm.controls.name.touched &&
      this.messageForm.controls.name.dirty &&
      !this.messageForm.controls.name.value
    );
  }
  get emailIsInvalid() {
    return (
      this.messageForm.controls.email.touched &&
      this.messageForm.controls.email.dirty &&
      this.messageForm.controls.email.invalid
    );
  }
  get messageIsInvalid() {
    return (
      this.messageForm.controls.content.touched &&
      this.messageForm.controls.content.dirty &&
      this.messageForm.controls.content.invalid
    );
  }
  get name() {
    return this.messageForm.get('name');
  }
}
