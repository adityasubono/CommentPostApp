import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/User";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User = new User(
    0,
    'Aditya Nugroho Subono',
    'adityasubono@gmail.com',
    'aditya',
    'cilodong',
    '14141409201'
  );

  constructor() {}

  ngOnInit(): void {}

  userUrl(): string {
    return `user/${this.user.id}`;
  }

}
