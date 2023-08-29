import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PatientsComponent } from './patients/patients.component';
import { ManageScheduleComponent } from './manage-schedule/manage-schedule.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'appointments',component:AppointmentsComponent},
  {path:'patients',component:PatientsComponent},
  {path:'manage-schedule',component:ManageScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
