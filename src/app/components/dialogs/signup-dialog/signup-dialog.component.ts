import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrl: './signup-dialog.component.css',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule],
  encapsulation: ViewEncapsulation.None
})
export class SignupDialogComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    public dialogRef: MatDialogRef<SignupDialogComponent>,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Validate email and password
    if (this.email && this.password) {
      // If validation successful, close the dialog and navigate to home page
      this.dialogRef.close(true);

      // Navigate to home page or any other component
      this.router.navigate(['/home']); // Replace '/home' with the desired route
    } else {
      // If validation fails, do something (e.g., show error message)
    }
  }
}
