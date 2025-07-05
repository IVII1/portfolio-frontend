import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
messageForm = new FormGroup({
  name: new FormControl(''),
  email: new FormControl(''),
  content: new FormControl('')
})
onSubmit(){
  console.log(this.messageForm.value)
}
}
