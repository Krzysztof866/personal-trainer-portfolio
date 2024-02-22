import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Osilek Practice - Osiągnięcia')
  }

  achievements = [
    { title: 'Certyfikowany Trener Personalny', description: 'Certyfikat od organizacji "Do Celu"' },
    { title: 'Nagroda za Doskonałość w Fitnessie', description: 'Nagroda za wybitne osiągnięcia w treningu fitness' },
    { title: 'Stopień Magistra w Nauce o Sporcie', description: 'Ukończony program magisterski specjalizujący się w Nauce o Sporcie' },
    { title: 'Autor Publikacji z Zakresu Zdrowia i Fitnessu', description: 'Opublikowane artykuły i książki na temat zdrowia i fitnessu' }
  ];

  icons = ['star', 'favorite', 'thumb_up', 'book'];
}
