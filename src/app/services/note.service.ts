import {Injectable} from '@angular/core';
import {AuthorInterface, UserService} from './user.service';
import {HttpClient} from '@angular/common/http';
// pour le systeme de notif
import {Subject} from 'rxjs';

export interface NoteInterface {
    id: number;
    title: string;
    image: string;
    userId: number;
}

@Injectable({
    providedIn: 'root'
})
export class NoteService {
    // Stockage de la liste des notes
    public noteList: NoteInterface[] = [];
    private url = 'http://localhost:3000/notes/';

    // déclaration de l'emetteur de notification (la notif vient du backend et est envoyée à la page)
    public noteListChanged: Subject<NoteInterface[]>;

    constructor(private userService: UserService, private http: HttpClient) {
        this.noteListChanged = new Subject<NoteInterface[]>();
        this.userService.userChanged.subscribe((user) => {
            this.loadNotes();
        });
    }

    // Chargement des données avec subscribe et emission avec next (vers la page qui va s'abo)
    public loadNotes() {
        this.http.get(this.url + `?userId=${this.userService.getCurrentUser().id}`).subscribe((data: NoteInterface[]) => {
            this.noteList = data;
            this.noteListChanged.next(data);
        });
    }

    public addNote(note: NoteInterface) {
        note.userId = this.userService.getCurrentUser().id;
        this.http.post(this.url, note).subscribe(
            (data: NoteInterface) => {
                this.noteList.push(data);
                this.noteListChanged.next(this.noteList);
            }
        );
    }

    public getNoteById(id) {
        return this.noteList.find((item) => item.id == id);
    }

    public updateNote(note: NoteInterface) {
        this.http.put(this.url + note.id, note).subscribe(
            (data: NoteInterface) => {
                this.noteListChanged.next(this.noteList);
            }
        );
    }

    public deleteNote(note: NoteInterface) {
        this.http.delete(this.url + note.id).subscribe(
            () => {
                this.loadNotes();
            }
        );
    }
}
