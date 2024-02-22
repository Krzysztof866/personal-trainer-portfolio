import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-social-media-dialog',
  templateUrl: './social-media-dialog.component.html',
  styleUrls: ['./social-media-dialog.component.scss']
})
export class SocialMediaDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { socialMediaLinks: any[] }) {}
}
