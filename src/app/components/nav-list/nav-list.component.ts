import { Component, EventEmitter, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-list',
  standalone: true,
  imports: [MatListModule, RouterModule],
  templateUrl: './nav-list.component.html',
  styleUrl: './nav-list.component.scss'
})
export class NavListComponent {
  @Output() itemSelected = new EventEmitter<void>();

  constructor(private router: Router) {}

  onItemSelected(route: string) {
    this.router.navigate([route]).then(() => {
      this.itemSelected.emit();
    });
  }
}
