import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { WorksComponent } from './features/works/works.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet,
      HeaderComponent,
      SidebarComponent,
      WorksComponent,
    ]
})
export class AppComponent {
  title = 'my-app';
}
