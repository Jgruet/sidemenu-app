import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage implements OnInit {

  constructor(public bookService: BookService) { }

  ngOnInit() {
    this.bookService.loadBooks();
  }

  public loadMoreBooks(event){
    this.bookService.loadBooks( () => {
      event.target.complete();
    });
  }

  public resetSearch(){
    this.bookService.reset();
    this.bookService.search = null;
    this.bookService.loadBooks();
  }
}
