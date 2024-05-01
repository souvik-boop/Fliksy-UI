import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupDialogComponent } from '../dialogs/signup-dialog/signup-dialog.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  standalone: true,
  imports: [LogoComponent, SignupDialogComponent],
})
export class LandingPageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSignupDialog(): void {
    const dialogRef = this.dialog.open(SignupDialogComponent, {
      width: '400px', // Set the width of the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      // Check if dialog was closed with a successful submission
      if (result) {
        // Redirect to home page
        // You can navigate using Angular Router or perform any other action here
        console.log('Redirecting to home page...');
      }
    });
  }
}
