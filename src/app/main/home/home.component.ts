import { Component } from '@angular/core';
import { Carousel } from './carousel.class';
import { slide_items } from './slide.items';
import { ISlideItem } from 'src/app/shared/interfaces/slide-item.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends Carousel {
  slides: Array<ISlideItem> = slide_items;
  constructor() {
    super();
  }
}
