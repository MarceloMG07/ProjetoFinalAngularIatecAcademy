import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { DialogLoginComponent } from '../dialog-login/dialog-login.component';

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, RouterModule]
})
export class ToolBarComponent {
  @Output() toggleSidenav = new EventEmitter<void>();

  menu() {
    this.toggleSidenav.emit();
  }

  readonly username = signal('');
  readonly password = signal('');
  readonly dialog = inject(MatDialog);

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(DialogLoginComponent, {
      data: {username: this.username(), password: this.password()},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The login dialog was closed');
      if (result !== undefined) {
        this.username.set(result.username);
        this.password.set(result.password);
      }
    });
  }
}