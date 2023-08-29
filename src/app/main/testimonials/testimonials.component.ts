import { Component, OnInit } from '@angular/core';
import { Carousel } from '../home/carousel.class';
import { slide_items } from '../home/slide.items';
import { ISlideItem } from 'src/app/shared/interfaces/slide-item.interface';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  animations: [
    trigger('activeSlide', [
      state('active', style({
        transform: 'scale(1)',
        opacity: 1,
      })),
      state('inActive', style({
        transform: 'scale(0.6)',
        opacity: 0.8,
      })),
      transition('active => inActive', [
        animate('0.5s')
      ]),
      transition('inActive => active', [
        animate('0.5s')
      ])
    ])
  ]
})
export class TestimonialsComponent extends Carousel implements OnInit{
slides:Array<ISlideItem>=[];
currentItem:string='2';
ngOnInit(){
this.slides =  slide_items.map((item=> {
  return item
}))
}

}
