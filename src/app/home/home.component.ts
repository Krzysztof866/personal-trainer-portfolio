import { Component, ElementRef } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { MatIconModule } from '@angular/material/icon';
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { BookTrainingComponent } from "../book-training/book-training.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, SlickCarouselModule, MatIconModule, TestimonialsComponent, BookTrainingComponent],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  currentIndex: number = 1;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Osilek Practice - Home');
  }

  slides = [
    { img: '/assets/images/slider/slider-img-1.jpg' },
    { img: '/assets/images/slider/slider-img-2.jpg' },
    { img: '/assets/images/slider/slider-img-3.jpg' },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1500,
    fade: true,
    swipeToSlide: false,
    draggable: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
