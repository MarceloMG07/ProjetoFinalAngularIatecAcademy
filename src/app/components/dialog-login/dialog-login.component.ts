import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginData } from './login-data';

@Component({
  selector: 'app-dialog-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule],
  templateUrl: './dialog-login.component.html',
  styleUrl: './dialog-login.component.scss'
})
export class DialogLoginComponent {
  readonly dialogRef = inject(MatDialogRef<DialogLoginComponent>);
  readonly username = signal('');
  readonly password = signal('');

  onNoClick(): void {
    this.dialogRef.close();
  }

  onLoginClick(): void {
    const loginData: LoginData = {
      username: this.username(),
      password: this.password(),
    };
    this.dialogRef.close(loginData);
  }
}
