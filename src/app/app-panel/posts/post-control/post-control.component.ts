import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-post-control',
  templateUrl: './post-control.component.html',
  styleUrls: ['./post-control.component.css']
})
export class PostControlComponent implements OnInit{
  
  constructor(private http: ApiServicesService ) { }
  newPost!: { title: string; body: string; };

  ngOnInit(): void {
  }

  addPost(): void {
    this.http.postPosts('posts', this.newPost).subscribe((response: any) => {
      console.log('New post added:', response);
      this.newPost = { title: '', body: '' };
    });
  }
}
