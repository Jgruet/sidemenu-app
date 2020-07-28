import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public userName = '';


  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  validate(){
    const data = {name : this.userName};
    console.log(data);
    this.userService.register(data);

  }

}
