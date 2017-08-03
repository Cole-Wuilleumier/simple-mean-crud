import { Component, OnInit } from '@angular/core';


import { Post } from '../models/post';
import { PostService } from '../services/post.service.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostService]
})
export class PostListComponent implements OnInit {

  constructor( 
    private postService: PostService,
    private router: Router
  ) { }

  message: string = '';
  posts: Array<object> = [];


  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getAll()
      .subscribe(
        data=>{
          this.posts = data.posts;
        },
        err=>{
          this.message = "Somthing went wrong. Try refreshing the page."
        });
  }

  viewPostDetails(post){
    this.router.navigate(['/post/'+ post._id]);
  }

  
}
