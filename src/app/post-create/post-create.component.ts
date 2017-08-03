import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Http } from '@angular/http'

import { Post } from '../models/post';
import { PostService } from '../services/post.service.component'

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
  providers:[FormBuilder]
})
export class PostCreateComponent implements OnInit {
  private postForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private http: Http
  ) { 
    this.postForm =  fb.group({
       title: ['NEW POST TITLE', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
       subject: ['', Validators.required],
       content: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan arcu quis quam feugiat molestie. Phasellus lobortis bibendum nibh at gravida. Donec lobortis magna enim, vitae sodales arcu sodales ac. Suspendisse elit purus, convallis et varius ultrices, tincidunt eget sem. In rutrum vehicula dui ac fermentum. Ut sed sem efficitur dolor vestibulum pulvinar id non elit. Cras ullamcorper risus sapien, malesuada dignissim risus bibendum et. Morbi imperdiet sodales purus, id imperdiet orci commodo a. Cras a facilisis justo. Aliquam velit turpis, molestie quis euismod ut, commodo a quam. Praesent tempor turpis semper feugiat posuere. Etiam mollis accumsan diam quis vestibulum. Phasellus ut ornare ipsum. Vestibulum fermentum mi risus, varius pulvinar ex ornare vel. Nam nec interdum ex.`,
      Validators.compose([Validators.required, Validators.minLength(40), Validators.maxLength(10000)])]
       
    });
  }

  message: any = {};
  post: any = {};
  loading: Boolean = false;
  status: Boolean = true;
  sent: Boolean = false;

  ngOnInit() {
  }
  createPost(){
    if(this.postForm.valid){
      this.post = {
        title: this.postForm.controls['title'].value,
        subject: this.postForm.controls['subject'].value,
        content: this.postForm.controls['content'].value
      }


      this.postService.create(this.post)
          .subscribe(
              data => {
                this.sent = true;
                this.status = data.status;
                this.message = data.message;
                },
              error => {
                  this.message = "An error has occured. Try refreshing page.";
              });
    }
  }
}
