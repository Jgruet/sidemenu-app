import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AuthorInterface, UserService} from './services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    public currentUser: AuthorInterface;
    public authorList: AuthorInterface[] = [];
    public selectedIndex = 0;
    public appPages = [
        {
            title: 'Paramètres',
            url: '/settings',
            icon: 'settings',
        },
        {
            title: 'Liste des utilisateurs',
            url: '/user-list',
            icon: 'person'
        },
        {
            title: 'Inscription',
            url: '/register',
            icon: 'person'
        }
    ];
    public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private userService: UserService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    ngOnInit() {
        this.userService.loadAuthors();
        this.currentUser = this.userService.getCurrentUser();
        this.userService.userChanged.subscribe((data) => this.currentUser = data);
        this.userService.authorListChanged.subscribe( (data) => this.authorList = data);
    }

    pickAuthor(author: AuthorInterface){
        this.userService.setCurrentUser(author);
    }
}
