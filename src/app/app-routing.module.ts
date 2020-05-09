import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoComponent } from './info/info.component';


import { AppComponent } from './app.component';



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component: DashboardComponent
  },
  {
  path:'info',
  component: InfoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
