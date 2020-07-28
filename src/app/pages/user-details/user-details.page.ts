import { Component, OnInit } from '@angular/core';
import {User, UserListService} from '../../services/user-list.service';
// permet de récupérer les parametres de l'id
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  public user: User;

  constructor(private userService: UserListService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.user = this.userService.findOneById(id);
    console.log(this.user);
  }

}
