import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FeaturesComponent } from './features/features.component';
@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    TestimonialsComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CarouselModule
  ]
})
export class MainModule { }
