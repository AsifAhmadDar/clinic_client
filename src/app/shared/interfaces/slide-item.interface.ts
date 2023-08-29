import { SlideModel } from "ngx-owl-carousel-o";
interface ISlideBase {
    id: string;
    src: string;
    alt: string;
    text: string
  }
export interface ISlideItem extends SlideModel,ISlideBase {

}
