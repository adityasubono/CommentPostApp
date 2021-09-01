import {Component, Input, OnInit} from '@angular/core';
import {User} from './models/User';
import {UserService} from './services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @Input() user: User = new User(0,
    'aditya',
    'adityasubono@gmail.com',
    'aditya',
    'cilodong',
    '18181910101'
  );

  constructor(private userService: UserService,
              private route: ActivatedRoute) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    console.log('isi user', this.user);
    this.getUserById(this.route.snapshot.params.id);
  }

  getUserById(id: number): any {
    this.userService.getUser(id)
      .subscribe(
        (data) => {
          this.user = data;
          console.log('User', data);
        },
        error => {
          console.log(error);
        });
  }
}
