import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';


@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit{

  posts :any;
  constructor( private http:ApiServicesService){}
  ngOnInit(): void {
      this.getPosts();
  }
  getPosts():void{
    this.http.getAllPosts().subscribe((post:any)=>{
      this.posts=post;
      console.log("All Postssss", this.posts);
    })
  }

}


