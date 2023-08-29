import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PatientsComponent } from './patients/patients.component';
import { ManageScheduleComponent } from './manage-schedule/manage-schedule.component';
import { BreadcumbComponent } from './breadcumb/breadcumb.component';
import { DoctorWidgetScoresComponent } from './dashboard/doctor-widget-scores/doctor-widget-scores.component';
import { UpcommingAppointmentsComponent } from './upcomming-appointments/upcomming-appointments.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AppointmentsComponent,
    PatientsComponent,
    ManageScheduleComponent,
    BreadcumbComponent,
    DoctorWidgetScoresComponent,
    UpcommingAppointmentsComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
