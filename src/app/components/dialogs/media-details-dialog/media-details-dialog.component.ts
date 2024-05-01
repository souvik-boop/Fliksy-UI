import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-media-details-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './media-details-dialog.component.html',
  styleUrl: './media-details-dialog.component.css'
})
export class MediaDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  play(): void {
    // Implement play functionality here
  }
}
