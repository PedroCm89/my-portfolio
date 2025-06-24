import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import { TITTLE_WEBSITE } from '../../shared/constants/text';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

tittle_website = TITTLE_WEBSITE;
}
