import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

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
}