import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  topButton: boolean = false;
  constructor() { }

  onScroll = (event): void => {
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
      this.topButton = true;
    }
    else {
      this.topButton = false;
    }
  }
  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll, true);
  }
  scrollToTop() {
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}
