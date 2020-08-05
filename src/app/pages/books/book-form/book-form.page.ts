import {Component, OnInit} from '@angular/core';
import {Book} from '../../../models/book';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../../services/book.service';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.page.html',
  styleUrls: ['./book-form.page.scss'],
})
export class BookFormPage implements OnInit {

  public book: Book;

  public bookChanged: Subject<Book>;

  constructor(private bookService: BookService, private activeRoute: ActivatedRoute, private router: Router) {
    this.book = new Book();
    this.bookChanged = bookService.bookChanged;
  }

  ngOnInit() {
    const id = parseInt(this.activeRoute.snapshot.paramMap.get('id'), 10);
    this.bookChanged.subscribe((data) => {
      this.book = data;
    });

    this.bookService.findOneByIdFromDatabase(id);
  }

  trackByIndex(pos, book){
    return pos;
  }

  addCategory() {
    this.book.categories.push('');
  }

  deleteCategory(index){
    this.book.categories.splice(index, 1);
  }

  validate() {
    this.book.categories = this.book.categories.filter( item => item.length > 0);
    this.bookService.updateBook( this.book, () => {
      this.router.navigateByUrl('/book-list');
    });
  }
}
