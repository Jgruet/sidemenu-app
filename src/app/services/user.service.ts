import {Injectable} from '@angular/core';
// sert a envoyer des requetes
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

export interface AuthorInterface {
    name: string;
    id: number;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public authorList: AuthorInterface[] = [];
    public authorListChanged: Subject<AuthorInterface[]>;
    public userChanged: Subject<AuthorInterface>;
    private url = 'http://localhost:3000/users/';

    private currentUser: AuthorInterface = {
        id: null,
        name: 'Anonyme'
    };

    constructor(public http: HttpClient) {
        this.userChanged = new Subject<AuthorInterface>();
        this.userChanged.next(this.currentUser);
        this.authorListChanged = new Subject<AuthorInterface[]>();
    }

    public loadAuthors(){
        this.http.get(this.url).subscribe(
            (data: AuthorInterface[]) => {
                this.authorList = data;
                this.authorListChanged.next(data);
            }
        );
    }

    public register(userData) {
        this.http.post(this.url, userData).subscribe(
            (data: AuthorInterface) => {
                console.log(data);
                this.userChanged.next(data);
                this.currentUser = data;
                // Modification de la liste des auteurs et notifications aux abonnés
                this.authorList.push(data);
                this.authorListChanged.next(this.authorList);

            }, (err) => console.log(err));
    }
    public getCurrentUser(){
        return this.currentUser;
    }

    public setCurrentUser(author: AuthorInterface){
        this.currentUser = author;
        this.userChanged.next(author);
    }
}
