import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  post: Post[] = [];
  prevData?: any;
  pageOfPost: Array<Post> = [];
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
      console.log('post this' , this.posts);
      this.post = this.posts.map((post, i) =>
        ({userId : post.userId, id: post.id, title: post.title, body: post.body}));
    });
  }

  onChangePage(pageOfPost: Array<Post>): void {
    // update current page of items
    this.pageOfPost = pageOfPost;
  }
}
