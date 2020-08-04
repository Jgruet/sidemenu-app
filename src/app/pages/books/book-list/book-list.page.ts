import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../services/book.service';
// pour le message de confirmation avant de suppr un livre
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage implements OnInit {

  constructor(public bookService: BookService, public alertCtrl: AlertController) { }

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

  public async deleteBook(id: number){
    const alert = await this.alertCtrl.create({
      header: 'Voulez-vous vraiment supprimer ce livre ?',
      buttons: [
        {text: 'NON', role: 'cancel'},
        {text: 'OUI', handler: () => this.bookService.deleteBook(id)}
      ]
    });
    await alert.present();
  }
}
