import { NgFor } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent  implements OnInit, AfterViewInit{

  @ViewChild('asTitle') asTitle: ElementRef | undefined;
  links: Array<any> =[
    {
      link: 'https://www.linkedin.com/in/pedro-carrasco-mora-08a273254/',
      icon: '<i class="uil uil-linkedin"></i>'
    },
    {
      link: 'https://github.com/PedroCm89',
      icon: '<i class="uil uil-github"></i>'
    },
    {
      link: 'mailto:pecamo.1989@gamil.com',
      icon: '<i class="uil uil-envelope"></i>'
    },
   
     
  ];

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

//class LinkModel {
  //link: string;
  //icon: string;

//}



