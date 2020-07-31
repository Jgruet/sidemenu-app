import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

export interface ConcertInterface {
    id: number;
    groupe: string;
    salle: string;
    note: number;
    date: Date;
}


@Injectable({
    providedIn: 'root'
})
export class ConcertService {

    public urlConcert = 'http://localhost:3000/concerts/?_expand=groupe&_expand=salle';
    public urlGroupe = 'http://localhost:3000/groupes/';
    public urlSalle = 'http://localhost:3000/salles/';
    public url = 'http://localhost:3000/';

    public listeConcert: ConcertInterface[];
    public concertChange: Subject<ConcertInterface[]>;
    public groupeChange: Subject<{ id: number, nom: string }>;
    public salleChange: Subject<{id: number, nom: string }>;

    constructor(private http: HttpClient) {
        this.concertChange = new Subject<ConcertInterface[]>();
        this.groupeChange = new Subject<{ id: number, nom: string }>();
        this.salleChange = new Subject<{id: number, nom: string}>();
    }

    public hydrate(data) {
        const concert: ConcertInterface = {
            id: data.id,
            groupe: data.groupe.nom,
            salle: data.salle.nom,
            note: data.note,
            date: new Date(data.date)
        };
        return concert;
    }

    public chargementConcert() {
        this.http.get(this.urlConcert).subscribe((data: any) => {
            // on utilise .map pour bosser sur les objets concert et pas sur le tableau d'objet concert
            this.listeConcert = data.map((concert) => {
                return this.hydrate(concert);
            });
            this.concertChange.next(this.listeConcert);
        });
    }

    public chargementGroupe() {
        this.http.get(this.urlGroupe).subscribe((data: any) => {
            this.groupeChange.next(data);
        });
    }

    public chargementSalle(){
        this.http.get(this.urlSalle).subscribe( (data: any) => {
            this.salleChange.next(data);
        });
    }

    public insertConcert(concert){
        this.http.post(this.urlConcert, concert).subscribe((data: any) => {
            this.chargementConcert();
        });
    }

    public insertGroupe(groupe){
        this.http.post(this.urlGroupe, groupe).subscribe(() => {
            this.chargementGroupe();
        });
    }

    public insertSalle(salle){
        this.http.post(this.urlSalle, salle).subscribe( () => {
            this.chargementSalle();
        });
    }

    supressionConcert(id: number){
        this.http.delete(this.url + 'concerts/' + id).subscribe( () => {
            this.chargementConcert();
        });
    }
}
