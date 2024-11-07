import { Component } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {

  repos:any;

constructor(private githubService:GithubService){

}

ngOnInit():void{
  this.githubService.LoadRepos().subscribe( res=>{
    console.log(res);
    }
  );
}

}
