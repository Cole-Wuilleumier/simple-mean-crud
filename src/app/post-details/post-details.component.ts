import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Post } from '../models/post';
import { PostService } from '../services/post.service.component';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  providers: [PostService, FormBuilder]
})
export class PostDetailsComponent implements OnInit {
  private postForm: FormGroup;
  post: Post;
  message: String;
  edit: Boolean = false;
  sent: Boolean = false;
  status: Boolean = false;


  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {     

      this.postForm =  this.fb.group({
        title: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
        subject: ['', Validators.required],
        content: ['', Validators.compose([Validators.required, Validators.minLength(40), Validators.maxLength(10000)])]
      });
    }



  ngOnInit(
    
  ) {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        let _id = params['id'];
        this.getPost(_id);
      });



      
  }

  getPost(_id){
    this.postService.getById(_id)
      .subscribe(
        data=>{
          this.post = data.post[0];
          this.postForm.patchValue(this.post);
        },
      error =>{
        console.log("An error has occurred. Try refreshing the page.");
      });
  }

  deletePost(post) {
    this.postService.delete(post._id)
      .subscribe(
        data => {
          if(data.status){
             this.router.navigate(['/posts']);
          } else {
            console.log("An error has occurred.");
          }
         
        },
        error =>{
          console.log("Failure");
        }
      );
  }

  editView(){
    this.edit = true;
  }

  updatePost() {
      this.sent = true;
      this.post.title = this.postForm.controls['title'].value;
      this.post.subject = this.postForm.controls['subject'].value
      this.post.content = this.postForm.controls['content'].value;

      console.log(this.postForm.controls['title'].value);
      console.log(this.post.title);

      this.postService.update(this.post)
        .subscribe(
          data=>{
            console.log(data);
            this.status = data.status;
            this.message = data.message;
            this.edit = false;
        },
        error =>{
          console.log(error);
        });
  }

  cancel(){
    this.edit = false;
  }

}
