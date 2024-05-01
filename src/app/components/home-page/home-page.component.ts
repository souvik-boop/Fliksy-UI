import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { mediaItem } from '../../models/mediaItem.model';
import { MediaDetailsDialogComponent } from '../dialogs/media-details-dialog/media-details-dialog.component';
import { MediaCardComponent } from '../media-card/media-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MediaDetailsDialogComponent, MediaCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  items: mediaItem[] = [
    { name: 'Item 1', imageUrl: 'path/to/image1.jpg', description: 'Description 1' },
    { name: 'Item 2', imageUrl: 'path/to/image2.jpg', description: 'Description 2' },
    // Add more items as needed
  ];

  constructor(private dialog: MatDialog) {}

  openDialog(item: mediaItem): void {
    const dialogRef = this.dialog.open(MediaDetailsDialogComponent, {
      data: item
    });
  }
}
