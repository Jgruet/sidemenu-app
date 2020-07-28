import {Component, NgModule, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User, UserListService} from '../../services/user-list.service';


@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.page.html',
    styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit, OnDestroy {
    public userList: User[] = [];
    public search = {
        nationality: ['fr'],
        gender: 'female'
    };

    constructor(private userService: UserListService) {
    }

    ngOnInit() {
        this.userService.userListNotification.subscribe((data) => this.userList = data);
    }
    getUserList(){
        this.userService.loadUser(this.search, true);
    }

    getMoreUsers(event, mode){
        this.userService.loadUser(this.search, mode, () => {
            event.target.complete();
            console.log(event.refresher);
        });
    }

    ngOnDestroy(): void {
        this.userService.userListNotification.unsubscribe();
    }


}
