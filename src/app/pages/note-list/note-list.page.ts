import {Component, OnInit} from '@angular/core';
import {NoteInterface, NoteService} from '../../services/note.service';

@Component({
    selector: 'app-note-list',
    templateUrl: './note-list.page.html',
    styleUrls: ['./note-list.page.scss'],
})
export class NoteListPage implements OnInit {
    public noteList: NoteInterface[] = [];
    public noteTitle = '';


    constructor(private noteService: NoteService) {
    }

    ngOnInit() {
        // Chargement des données depuis le back-end
        this.noteService.loadNotes();
        // Abonnement aux modifications sur les notes
        this.noteService.noteListChanged.subscribe(data => this.noteList = data);
    }

    public delete(note) {
        this.noteService.deleteNote(note);
    }


}
