import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ],
  exports:[AppLayoutComponent]
})
export class LayoutModule { }
