import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from "@angular/material/card";

import { NgOptimizedImage } from "@angular/common";
import { AboutComponent } from './about/about.component';
import { TransformationsComponent } from './transformations/transformations.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BookTrainingComponent } from './book-training/book-training.component';
import { ContactComponent } from './contact/contact.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { SocialMediaDialogComponent } from './about/social-media-dialog/social-media-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTooltipModule } from "@angular/material/tooltip";
import { GalleryDialogComponent } from "./gallery/gallery-dialog/gallery-dialog.component";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    TransformationsComponent,
    GalleryComponent,
    ContactComponent,
    AchievementsComponent,
    SocialMediaDialogComponent,
    GalleryDialogComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSelectModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    NgOptimizedImage,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatTooltipModule,
    SlickCarouselModule,
    TestimonialsComponent,
    BookTrainingComponent,
    ReactiveFormsModule,
    BookTrainingComponent,
  ],
  providers: [],
  exports: [
    BookTrainingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
