import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-post-control',
  templateUrl: './post-control.component.html',
  styleUrls: ['./post-control.component.css']
})
export class PostControlComponent implements OnInit{
  postForm: FormGroup=this.fb.group({
    title: ['', Validators.required],
    body: ['',Validators.required],
    userId: ['', Validators.required],
  });;
  constructor(private http: ApiServicesService,private fb: FormBuilder ) { }
  ngOnInit(): void {}
  addPost(): void {
    if (this.postForm.valid) {
      this.http.addPost(this.postForm.value).subscribe(() => {
          console.log('Product added successfully');
          this.postForm.reset();
        },
        (error: any) => console.error(error)
      );
    }
  }
}
