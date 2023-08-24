import { OwlOptions } from "ngx-owl-carousel-o";

export class Carousel{
    Options: OwlOptions = {
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        autoplay: true,
        autoplaySpeed: 1500,
        dotsSpeed: 500,
        // dotsData: true,
        // mouseDrag: false,
        // touchDrag: false,
        // pullDrag: false,
        dots: false,
        navSpeed: 700,
        navText: [ '<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>' ],
        responsive: {
          0: {
            items: 1
          },
          400: {
            items: 1
          },
          740: {
            items: 1
          },
          940: {
            items: 1
          },
          1024:{
            items:1
          }
        },
        nav: true
      }

}