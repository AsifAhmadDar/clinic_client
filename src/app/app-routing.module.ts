import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { DocLayoutComponent } from './layout/doc-layout/doc-layout.component';

const routes: Routes = [
  {
    path: '',
    component:AppLayoutComponent,
    loadChildren:()=> import ('../app/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'doctor',
    component:DocLayoutComponent,
    loadChildren:()=> import ('../app/doctor/doctor.module').then(m => m.DoctorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:"top"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
