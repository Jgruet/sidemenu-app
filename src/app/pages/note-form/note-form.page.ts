import {Component, OnInit} from '@angular/core';
import {NoteInterface, NoteService} from '../../services/note.service';
// pour récup des param dans l'url
import {ActivatedRoute, Router} from '@angular/router';
import {Plugins, CameraOptions, CameraResultType, CameraSource, CameraPhoto, GeolocationOptions} from '@capacitor/core';

const {Camera, Geolocation} = Plugins;

@Component({
    selector: 'app-note-form',
    templateUrl: './note-form.page.html',
    styleUrls: ['./note-form.page.scss'],
})
export class NoteFormPage implements OnInit {

    public note: NoteInterface = {
        title: '',
        id: null,
        userId: null,
        image: null
    };

    constructor(private noteService: NoteService, private router: Router, private activeRoute: ActivatedRoute) {
    }

    ngOnInit() {
        const id = this.activeRoute.snapshot.paramMap.get('id');
        if (id) {
            this.note = this.noteService.getNoteById(id);
        }
    }

    async cliclac() {
        const options: CameraOptions = {
            resultType: CameraResultType.Base64,
            quality: 80
        };
        const photo: CameraPhoto = await Camera.getPhoto(options);

        const position: GeolocationOptions = await Geolocation.getCurrentPosition();

        console.log(position);

        this.note.image = photo.base64String;
    }

    validate() {
        if (this.note.id === null) {
            this.noteService.addNote(this.note);
        } else {
            this.noteService.updateNote(this.note);
        }
        this.router.navigateByUrl('/note-list');
    }

}
