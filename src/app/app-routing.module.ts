import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {AchievementsComponent} from "./achievements/achievements.component";
import {TransformationsComponent} from "./transformations/transformations.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {BookTrainingComponent} from "./book-training/book-training.component";
import {ContactComponent} from "./contact/contact.component";
import {CarouselComponent} from "ngx-bootstrap/carousel";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'achievements', component: AchievementsComponent},
  {path: 'transformations', component: TransformationsComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'book-training', component: BookTrainingComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
