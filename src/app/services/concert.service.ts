import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

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

    public url = 'http://localhost:3000/concerts/?_expand=groupe&_expand=salle';

    public listeConcert: ConcertInterface[];
    public concertChange: Subject<ConcertInterface[]>;

    constructor(private http: HttpClient) {
        this.concertChange = new Subject<ConcertInterface[]>();
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
        this.http.get(this.url).subscribe((data: any) => {
            // on utilise .map pour bosser sur les objets concert et pas sur le tableau d'objet concert
            this.listeConcert = data.map( (concert) => {
                return this.hydrate(concert);
            });
            this.concertChange.next(this.listeConcert);
        });
    }
}
