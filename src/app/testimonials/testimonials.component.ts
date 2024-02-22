import { Component, ViewChild } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  imports: [CommonModule, SlickCarouselModule, MatIconModule],
  standalone: true
})
export class TestimonialsComponent {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  testimonials = [
    { quote: "Zdrowie nie jest wszystkim, ale wszystko bez zdrowia jest niczym.", author: "Arthur Schopenhauer" },
    { quote: "Droga do zdrowia prowadzi przez centrum sklepowe, ale nie przez aptekę.", author: "Andy Rooney" },
    { quote: "Sport to tylko życie.", author: "Janusz Korczak" },
    { quote: "Człowiek żyje tym, czym oddycha, a nie tym, co je.", author: "Sokrates" },
    { quote: "Jesteśmy tym, co regularnie robimy. Doskonałość zatem nie jest aktem, ale nawykiem.", author: "Aristoteles" },
  ];


  slideConfigTestimonials = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
  };

  slickInit(event: any) {}

  goToPrev() {
    if (this.slickModal) {
      this.slickModal.slickPrev();
    }
  }

  goToNext() {
    if (this.slickModal) {
      this.slickModal.slickNext();
    }
  }
}
