import { Component } from '@angular/core';
import {BooksService} from '../../services/books.service';
import {Book} from '../../models/book';
import {Router} from '@angular/router';
import {Categories} from '../../models/categories';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {

  book : Book = new Book();
  categories = Object.values(Categories);
  constructor(private booksService: BooksService,
              private router: Router) {
  }

  onSubmit() {
    console.log(this.book);
    this.book.id = this.booksService.generateId();
    this.booksService.addBook(this.book);
    this.router.navigate(['/books']);
  }

  onCancel() {
    this.router.navigate(['/books']);
  }

  validateBook(): boolean {
    if ((this.book.title && this.book.author && this.book.description && this.book.price && this.book.image && this.book.isbn && this.book.category) &&
      (this.book.title !== '' && this.book.author !== '' && this.book.description !== '' && this.book.price !== 0 && this.book.image !== '' && this.book.isbn !== '' && this.book.category !== '')) {
      return false;
    } else {
      return true;
    }
  }
}
