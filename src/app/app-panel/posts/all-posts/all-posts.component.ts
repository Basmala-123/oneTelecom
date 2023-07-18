import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';
import {NgxPaginationModule} from 'ngx-pagination';
@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit{

  posts :any;
  deletedId:number=0;
  p:number = 1;
  itemsPerPage = 10;
  constructor( private http:ApiServicesService){}
  ngOnInit(): void {
      this.getPosts();
  }
  getPosts():void{
    this.http.getAllPosts().subscribe((post:any)=>{
      this.posts=post;
    })
  }
  idOfItem(id:number){
    this.deletedId=id;
  }
  deleteItem() {
    // Delete the post with this.idToDelete
    this.http.delete(this.deletedId).subscribe((el:any)=>{
      this.deletedId = 0;
    } )
  }

}


