import { Component } from '@angular/core';
import { Carousel } from './carousel.class';
import { slide_items } from './slide.items';
interface ISlideItem {
  id: string;
  src: string;
  alt: string;
  title: string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends Carousel {
  slides: Array<ISlideItem> = slide_items;
  constructor() {
    super();
    console.log(this.Options);
    
  }
}
