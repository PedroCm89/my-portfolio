import { Component } from '@angular/core';
import { GithubService } from '../github.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [NgFor],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {

  repos:any;

constructor(private githubService:GithubService){

}

ngOnInit():void{
  this.githubService.LoadRepos().subscribe( res=>{
    this.repos=res;
    }
  );
}

}
