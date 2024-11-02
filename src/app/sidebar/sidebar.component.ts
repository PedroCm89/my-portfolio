import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent  implements OnInit, AfterViewInit{

  @ViewChild('asTitle') asTitle: ElementRef | undefined;

  constructor(){

  }

  ngOnInit():void{

    
  }

  ngAfterViewInit(): void{

    this.initEffect();
  }

  initEffect = () =>{
    const titeElement = this.asTitle?.nativeElement;
    const writer = new Typewriter(titeElement, {
      loop: false,
      typeColor: 'black'
    });

    
    writer
      .type('Pedro Carrasco Mora')
      .rest()
      .start()
      .options()
      .removeCursor();

      
  };

}

