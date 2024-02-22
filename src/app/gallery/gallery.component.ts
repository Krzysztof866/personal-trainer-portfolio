import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { MatDialog } from '@angular/material/dialog';
import { GalleryDialogComponent } from "./gallery-dialog/gallery-dialog.component";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent {
  constructor(private titleService: Title, public dialog: MatDialog) {
    this.titleService.setTitle('Osilek Practice - Galeria')
  }

  galleryImages: { url: string; alt: string; }[] = [
    { url: 'assets/images/gallery/gallery-img-1.jpg', alt: 'obraz 1' },
    { url: 'assets/images/gallery/gallery-img-2.jpg', alt: 'obraz 2' },
    { url: 'assets/images/gallery/gallery-img-3.jpg', alt: 'obraz 3' },
    { url: 'assets/images/gallery/gallery-img-4.jpg', alt: 'obraz 4' },
    { url: 'assets/images/gallery/gallery-img-5.jpg', alt: 'obraz 5' },
    { url: 'assets/images/gallery/gallery-img-6.jpg', alt: 'obraz 6' },
    { url: 'assets/images/gallery/gallery-img-7.jpg', alt: 'obraz 7' },
    { url: 'assets/images/gallery/gallery-img-8.jpg', alt: 'obraz 8' },
    { url: 'assets/images/gallery/gallery-img-9.jpg', alt: 'obraz 9' }
  ];

  openDialog(index: number): void {
    const dialogRef = this.dialog.open(GalleryDialogComponent, {
      width: 'auto',
      data: { images: this.galleryImages, index: index }
    });
  }
}
