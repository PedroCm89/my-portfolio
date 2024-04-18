import { Component } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";
import { ProjectsComponent } from "../projects/projects.component";
import {Router, RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ContactComponent, ProjectsComponent]
})
export class HomeComponent {
    constructor( private router:Router){ }

  GoProjects(){
    this.router.navigate(['Projects'])
  }
  GoContact(){
    this.router.navigate(['Contact'])
  
  }

}
