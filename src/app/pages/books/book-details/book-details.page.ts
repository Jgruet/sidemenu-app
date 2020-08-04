import { Component, OnInit } from '@angular/core';
// pour récupérer l'id passé dans l'url
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../../../models/book';
import {BookService} from '../../../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage implements OnInit {

  public book: Book;

  constructor(private activeRoute: ActivatedRoute, private bookService: BookService, private router: Router) {
    const id = parseInt(activeRoute.snapshot.paramMap.get('id'), 10);
    this.book = this.bookService.getOneBoookById(id);
  }

  ngOnInit() {
  }

  public search(term){
    this.bookService.reset();
    this.bookService.search = term;
    this.bookService.loadBooks();
    this.router.navigateByUrl('/book-list');
  }

}
