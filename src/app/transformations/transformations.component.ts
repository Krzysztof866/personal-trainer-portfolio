import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-transformations',
  templateUrl: './transformations.component.html',
  styleUrls: ['./transformations.component.scss']
})
export class TransformationsComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Osilek Practice - Przemiany');
  }

  loadingProgress: number = 0;
  isLoading: boolean = true;
  isCardShown: boolean = false;
  transformations: { quote: string, author: string }[] = [
    { quote: "Zajęcia są dla mnie prawdziwym odkryciem. Każde z nich staje się nie tylko fizycznym wyzwaniem, ale również duchową podróżą. To, co dla innych było trudnością, dla mnie stało się nową szansą na rozwój", author: "Justyna" },
    { quote: "Dzięki współpracy z profesjonalnym trenerem, nauczyłem się doceniać swoje osiągnięcia i nieustannie dążyć do samodoskonalenia. Wsparcie i mądrość pomogły mi przezwyciężyć wiele trudności i osiągnąć sukcesy, o których wcześniej nawet nie marzyłem", author: "Grzegorz" },
    { quote: "Od momentu rozpoczęcia treningów poczułem, że zmieniłam swoje podejście do życia. Każdy dzień staje się dla mnie okazją do nowych wyzwań i osiągnięć, dzięki inspirującym treningom z Trenerem Tomaszem", author: "Magda" },
    { quote: "Po kilku tygodniach ciężkiej pracy, zauważyłem ogromną poprawę w mojej sile i wytrzymałości. Profesjonalne podejście do treningu sprawia, że codziennie czuję się coraz lepiej", author: "Piotr" },
    { quote: "Odkryłem w sobie siłę i determinację, których wcześniej nie byłam świadomy. Motywacja i wsparcie sprawiły, że osiągnąłem cele, o których wcześniej nawet nie marzyłem", author: "Ksawery" },
  ];

  transformationIndex: number = 0;
  interval: any;
  transformationsLength = this.transformations.length;

  ngOnInit(): void {
    this.simulateDataLoading();
  }

  simulateDataLoading(): void {
    const progressInterval = setInterval(() => {
      if (this.loadingProgress >= 100) {
        clearInterval(progressInterval);
        this.isLoading = false;
        this.isCardShown = true;
        this.startQuoteCycle();
      } else {
        this.loadingProgress += Math.floor(Math.random() * 5) + 5;
      }
    }, 200);
  }

  startQuoteCycle(): void {
    this.transformations.forEach((transformation, index) => {
      setTimeout(() => {
        this.transformationIndex = index;
      }, index * 500);
    });
  }
}
