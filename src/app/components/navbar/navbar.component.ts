import {Component, Input, OnInit} from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() user: User = new User(0,
    'aditya',
    'adityasubono@gmail',
    'aditya',
    'cilodong',
    '1992992929'
  );

  users: User[] = [new User(0,
    'aditya',
    'adityasubono@gmail.com',
    'aditya',
    'cilodong',
    '9191919191'
    )];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
