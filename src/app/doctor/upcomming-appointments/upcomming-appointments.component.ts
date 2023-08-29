import { Component } from '@angular/core';

@Component({
  selector: 'app-upcomming-appointments',
  templateUrl: './upcomming-appointments.component.html',
  styleUrls: ['./upcomming-appointments.component.scss']
})
export class UpcommingAppointmentsComponent {
columns:Array<string>=['patient name','Appt Date','Type','Paid Amount']
}
