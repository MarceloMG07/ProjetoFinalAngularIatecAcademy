import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { NavListComponent } from "../nav-list/nav-list.component";
import { ToolBarComponent } from "../tool-bar/tool-bar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-main-layout',
    standalone: true,
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        RouterModule,
        NavListComponent,
        ToolBarComponent,
        FooterComponent
    ]
})
export class MainLayoutComponent {}