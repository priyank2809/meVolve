import { Component, OnInit, Renderer2 } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation, SwiperOptions } from "swiper";
// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  config: SwiperOptions = {};

  constructor(
    private _renderer: Renderer2,
  ) {
    const script = this._renderer.createElement('script');
    script.src = `./assets/js/script.js`;
    this._renderer.appendChild(document.head, script);
  }

  ngOnInit(): void {
    this.config = {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: { clickable: true },
    };
  }

}
