import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

interface UserInterface {
    id: string;
    fullName: string;
    gender: string;
    address: string;
    postalCode: string;
    city: string;
    country: string;
    picture: string;
    dateOfBirth: Date;
    age: number;
}

export class User implements UserInterface {
    id: string;
    fullName: string;
    gender: string;
    address: string;
    postalCode: string;
    city: string;
    country: string;
    picture: string;
    dateOfBirth: Date;
    age: number;
}

const URL = 'https://randomuser.me/api?results=10';

@Injectable({
    providedIn: 'root'
})
export class UserListService {

    public userList: User[] = [];
    public userListNotification: Subject<User[]>;

    constructor(private http: HttpClient) {
        this.userListNotification = new Subject<User[]>();
    }

    public hydrateUser(data): User {
        const user = new User();
        user.id = data.id.value;
        user.fullName = data.name.first + ' ' + data.name.last;
        user.gender = data.gender;
        user.address = data.location.street.number + ' ' + data.location.street.name;
        user.postalCode = data.location.postcode;
        user.city = data.location.city;
        user.country = data.location.country;
        user.picture = data.picture.medium;
        user.dateOfBirth = new Date(data.dob.date);
        user.age = data.dob.age;
        return user;
    }

    loadUser(search, mode = '', callback = null) {
        const searchURL = `${URL}&gender=${search.gender}&nat=${search.nationality.join(',')}`;
        // retourne un "observable" qu'on traite avec subscribe (équivalent à then)
        this.http.get(searchURL).subscribe((data: any) => {
                console.log(data);
                const newUsers = data.results.map(
                    (user: any) => {
                        return this.hydrateUser(user);
                    });
                if (mode === 'append') {
                    this.userList = this.userList.concat(newUsers);
                } else if (mode === 'prepend') {
                    this.userList = newUsers.concat(this.userList);
                } else {
                    this.userList = newUsers;
                }
                if (callback) {
                    callback();
                }
                this.userListNotification.next(this.userList);
            },
            (err) => {
                console.log(err);
                if (callback) {
                    callback();
                }
            });
    }

    findOneById(id: string): User {
        return this.userList.find((item) => item.id === id);
    }
}
