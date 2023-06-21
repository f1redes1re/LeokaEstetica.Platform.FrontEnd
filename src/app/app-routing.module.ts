import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
  },

  {
    path: "user",
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },

  {
    path: "profile",
    loadChildren: () => import('./modules/backoffice/backoffice.module').then(m => m.BackOfficeModule)
  },

  {
    path: "vacancies",
    loadChildren: () => import('./modules/backoffice/vacancy/vacancy.module').then(m => m.VacancyModule)
  },

  {
    path: "projects",
    loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule)
  },

  {
    path: "resumes",
    loadChildren: () => import('./modules/resume/resume.module').then(m => m.ResumeModule)
  },

  {
    path: "notifications",
    loadChildren: () => import('./modules/backoffice/notification/notification.module').then(m => m.NotificationsModule)
  },

  {
    path: "order-form",
    loadChildren: () => import('./modules/order-form/order-form.module').then(m => m.OrderFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
