import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JournalComponent } from './journal/journal.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'journal', component: JournalComponent },
];
