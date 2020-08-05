import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Book, BookJson, ResponseJson} from '../models/book';
import {HttpClient} from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';
const BOOK_URL = BASE_URL + 'books/';

@Injectable({
    providedIn: 'root'
})
export class BookService {

    // initialisation de la variable de notification de changement
    public bookListChanged: Subject<Book[]>;

    public bookChanged: Subject<Book>;

    private bookList: Book[] = [];

    private currentPage = 0;

    private totalPages: number = null;

    public  search: string;

    // à la construction de la classe on a besoin de httpClient pour requêter et on instancie bookChanged
    constructor(private http: HttpClient) {
        this.bookListChanged = new Subject<Book[]>();
        this.bookChanged = new Subject<Book>();
    }

    // loadBooks attend un callback qui est initialisé à null pour le premier chargement de la fonction
    public loadBooks(callback = null) {
        if (this.hasMoreBooks()) {
            this.getBooks(callback);
        }
    }

    public hasMoreBooks(): boolean {
        return this.currentPage < this.totalPages || this.currentPage === 0;
    }

    public getURL(){
        let url = BOOK_URL + '?page=' + this.currentPage;
        if (this.search){
            url += '&search=' + this.search;
        }
        return url;
    }

    public reset(){
        this.bookList = [];
        this.currentPage = 0;
        this.totalPages = null;
    }

// choper la liste des bouquins sous forme de tableau depuis l'adresse http
    // puis envoyer une notification comme quoi on a les données aux variables sub
    private getBooks(callback = null) {
        this.currentPage++;
        this.http.get(this.getURL()).subscribe(
            (response: ResponseJson) => {

                this.totalPages = response.totalPages;
                let bookList: Book[] = [];


                bookList = response.data.map(item => {
                    const book = new Book();
                    book.hydrate(item);
                    return book;
                });

                this.bookList = this.bookList.concat(bookList);
                this.bookListChanged.next(this.bookList);

                if (callback) {
                    callback();
                }
            }
        );
    }

    public getOneBoookById(id: number){
        return this.bookList.find(item => item.id === id);
    }

    public deleteBook(id: number){
        this.http.delete(BOOK_URL + id).subscribe(
            (response: {success: boolean, error?: string}) => {
                if (response.success){
                    const index = this.bookList.findIndex(item => item.id === id);
                    this.bookList.splice(index, 1);
                } else {
                    console.log(response.error);
                }
            }
        );
    }

    public findOneByIdFromDatabase(id: number){
        this.http.get(BOOK_URL + id).subscribe((response: any) => {
            const book = new Book();
            book.hydrate(response);
            this.bookChanged.next(book);
        });
    }
// je fais un subscribe et quand j'ai des données j'execute la fonction callback
    public updateBook(book, callback) {
        this.http.put(BOOK_URL + book.id, book).subscribe(
            () => {
                const index = this.bookList.findIndex( item => item.id === book.id);
                this.bookList[index] = book;
                if (callback){
                    callback();
                }
            }
        );
    }
}
