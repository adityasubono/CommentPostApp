import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../models/Post';
import {Comment} from '../../../models/Comment';
import {UserService} from '../../../services/user.service';
import {PostService} from '../../../services/post.service';
import {User} from '../../../models/User';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  @Input() posts: Post = new Post(0, 0, 'POST YÜKLENİYOR', 'POST YÜKLENİYOR');

  comments: Comment[] = [
    new Comment(
      0,
      0,
      'YORUM YÜKLENİYOR',
      'YORUM YÜKLENİYOR',
      'YORUM YÜKLENİYOR'
    ),
  ];



  user: User = new User(0,
    '',
    'adityasubono@gmail.com',
    '',
    'cilodong',
    '9191919191'
  );

  commentShow = false;

  constructor(
    private userService: UserService,
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.postService.getPostComments(this.route.snapshot.params.id).subscribe((comments) => {
      this.comments = comments;
    });
    console.log('comments', this.comments);

    this.postService.getPost(this.route.snapshot.params.id).subscribe((post) => {
      this.posts = post;
      this.userService.getUser(post.userId).subscribe((user) => {
        this.user = user;
      });
    });


  }

  // tslint:disable-next-line:typedef
  commentToggle() {
    this.commentShow = !this.commentShow;
  }
}
