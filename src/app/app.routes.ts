import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

export const routes: Routes = [
  {
    path: 'projects/:slug',
    component: ProjectDetailComponent,
  },
  { path: '', component: HomeComponent },
];
