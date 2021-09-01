import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css'],
})
export class PageUserComponent implements OnInit {
  userId = 0;
  user: User = new User(0,
    'aditya',
    'adityasubono@gmail.com',
    'aditya',
    'cilodong',
    '9191919191'
  );
  posts: Post[] = [new Post(0, 0, 'POST YÜKLENİYOR', 'POST YÜKLENİYOR')];
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(`ID => ${params.id}`);
      this.userId = params.id;
    });
    this.userService.getUser(this.userId).subscribe((user) => {
      this.user = user;
    });
    this.userService.getUserPosts(this.userId).subscribe((posts) => {
      this.posts = posts;
    });
  }
}
