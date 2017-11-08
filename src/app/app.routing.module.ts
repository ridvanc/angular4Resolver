import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from 'app/home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from 'app/first-page/first-page.component';
import { SecondPageComponent } from 'app/second-page/second-page.component';
import { AppResolver } from './app.resolver';
const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'first/:name',
    component: FirstPageComponent,
    resolve: {
      cres: AppResolver
    }
  }
  ,
  {
    path: 'second',
    component: SecondPageComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [
    AppResolver
  ]
})
export class AppRoutingModule { }
