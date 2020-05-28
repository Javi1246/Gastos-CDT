import {Component} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'carousel',
  templateUrl: '../views/Carousel.html',
  providers: [NgbCarouselConfig]
})
export class Carousel {
		constructor(config: NgbCarouselConfig) {
		    // customize default values of carousels used by this component tree
		    config.interval = 10000;
		    config.wrap = false;
		    config.keyboard = false;
  		}
}