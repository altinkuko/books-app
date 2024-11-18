import { Component } from '@angular/core';
import {BooksService} from '../../services/books.service';
import {Book} from '../../models/book';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  books: Book[] = [];
  constructor(private booksService: BooksService,
              private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const searchQuery = params['search'];
      if (searchQuery) {
        this.books = this.booksService.getBooks();
        this.searchBooks(searchQuery);
      } else {
        this.books = this.booksService.getBooks();
      }
    });
  }

  private searchBooks(searchQuery: string) {
    this.books = this.books.filter(book => book.title?.toLowerCase().includes(searchQuery.toLowerCase()));
  }
}
