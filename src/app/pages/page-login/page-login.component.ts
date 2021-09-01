import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  users: User[] = [new User(0,
    'aditya',
    'adityasubono@gmail.com',
    'aditya',
    'cilodong',
    '9191919191'
    )];

  submitted = false;
  formGroup !: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20)
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(40)
          ]
        ],
        acceptTerms: [false, Validators.requiredTrue]
      },
    );
  }

  retrieveUsers(): void {
    const login = {
      username: this.formGroup.value.username,
      password: this.formGroup.value.password
    };
    this.userService.getUsers()
      .subscribe(
        data => {
          const valid = this.search(login.username, login.password, data);
          if (valid){
            alert('Username :' + login.username + ' dan Password :' + login.password + ' Benar');
          } else {
            alert('Username :' + login.username + ' dan Password :' + login.password + ' Salah');
          }
        },
        error => {
          console.log(error);
        });
  }

  // tslint:disable-next-line:typedef
  search(username: any, password: any, datas: string | any[]){
    let userData = false;
    for (const data of datas) {
      if ((data.username === username) && (data.username === password)) {
        userData = true;
        this.router.navigate(['dashboard', data.id]);
      }
    }
    return userData;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formGroup.controls;
  }

}
