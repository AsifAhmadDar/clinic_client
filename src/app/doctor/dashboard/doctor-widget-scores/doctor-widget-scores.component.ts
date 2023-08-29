import { Component } from '@angular/core';
interface widjetInfo{
  name:string,
  count:number,
  icon?:string
}
@Component({
  selector: 'app-doctor-widget-scores',
  templateUrl: './doctor-widget-scores.component.html',
  styleUrls: ['./doctor-widget-scores.component.scss']
})
export class DoctorWidgetScoresComponent {
docInfos: Array<widjetInfo>=[
  {name:'Total Patients',count:923,icon:'/assets/img/widget/patients.png'},
  {name:'Today Appointments',count:323,icon:'/assets/img/widget/today-patients.png'},
  {name:'Appointments',count:23,icon:'/assets/img/widget/appointments.png'}];

}
