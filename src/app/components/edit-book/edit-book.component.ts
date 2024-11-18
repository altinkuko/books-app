import { Component } from '@angular/core';
import {Book} from '../../models/book';
import {ActivatedRoute, Router} from '@angular/router';
import {BooksService} from '../../services/books.service';
import {Categories} from '../../models/categories';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent {

  book: Book;
  categories = Object.values(Categories);
  constructor(private booksService: BooksService,
              private route: ActivatedRoute,
              private router: Router) {
    this.book = new Book();
    this.route.params.subscribe(params => {
      let id = +params['id'];
      let existingBook = this.booksService.getBook(id);
      if (existingBook.title) {
        this.book.id = existingBook.id;
        this.book.title = existingBook.title;
        this.book.author = existingBook.author;
        this.book.description = existingBook.description;
        this.book.price = existingBook.price;
        this.book.image = existingBook.image;
        this.book.isbn = existingBook.isbn;
        this.book.category = existingBook.category;
      } else {
        this.router.navigate(['/books']);
      }
    });
  }

  onSubmit() {
    this.booksService.editBook(this.book);
    this.router.navigate(['/books']);
  }

  onCancel() {
    this.router.navigate(['/books']);
  }
}
