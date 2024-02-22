import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SocialMediaDialogComponent } from './social-media-dialog/social-media-dialog.component';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent {
  constructor(private titleService: Title, public dialog: MatDialog) {
    this.titleService.setTitle('Osilek Practice - O mnie')
  }

  trainerImages: string[] = [
    '/assets/images/about/about-img-1.jpg',
    '/assets/images/about/about-img-2.jpg',
    '/assets/images/about/about-img-3.jpg'
  ];

  aboutTexts: string[] = [
    "Witaj! Jestem Tomasz Osiłek, trener personalny z pasją i zaangażowaniem w zdrowy styl życia oraz aktywność fizyczną. Od najmłodszych lat sport odgrywał ważną rolę w moim życiu, a obecnie jestem licencjonowanym trenerem z ponad 10-letnim doświadczeniem.",
    "Moja specjalizacja obejmuje szeroki zakres treningów, w tym treningi funkcjonalne, treningi siłowe, treningi cardio oraz treningi interwałowe. Jestem również certyfikowanym instruktorem jogi oraz pilatesu, co pozwala mi dostosować treningi do indywidualnych potrzeb i celów moich klientów.",
    "W wolnym czasie uwielbiam aktywność na świeżym powietrzu, wędrówki po górach, jogging oraz jazdę na rowerze. Dbam o równowagę między pracą a życiem prywatnym, co pozwala mi zachować energię i entuzjazm w pracy z moimi klientami. Jeśli szukasz motywacji, wsparcia i profesjonalnego podejścia do treningu, zapraszam Cię do kontaktu. Razem osiągniemy Twoje cele fitnessowe i sprawimy, że każdy dzień będzie pełen energii i pozytywnej motywacji!"
  ];

  socialMediaLinks = [
    { name: 'Facebook', icon: 'facebook', link: 'https://www.facebook.com/tomasz-osilek' },
    { name: 'Instagram', icon: 'instagram', link: 'https://www.instagram.com/tomasz-osilek' },
    { name: 'Twitter', icon: 'message', link: 'https://twitter.com/tomasz-osilek' }
  ];

  openSocialMediaDialog(): void {
    this.dialog.open(SocialMediaDialogComponent, {
      width: '400px',
      data: { socialMediaLinks: this.socialMediaLinks }
    });
  }
}
