import { Injectable } from '@angular/core';
import {Book} from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  id : number = 3;
  books : Book[] = [
    {
      id: 1,
      title: 'Angular 1',
      author: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      price: 10,
      image: 'book1.jpg',
      isbn: '1234567890',
      category: 'Programming'
    },
    {
      id: 2,
      title: 'Angular 2',
      author: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      price: 10,
      image: 'book2.jpg',
      isbn: '1234567890',
      category: 'Programming'
    }
    ];
  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }

  getBook(id: number): Book {
    let book = this.books.find(book => book.id === id);
    if (book) {
      return book;
    } else {
      return new Book();
    }
  }

  generateId() {
    return this.id++;
  }

  editBook(book: Book) {
    let index = this.books.findIndex(b => b.id === book.id);
    if (index !== -1) {
      this.books[index] = book;
    }
  }
  addBook(book: Book) {
    this.books.push(book);
  }

  searchBooks(searchQuery: string): Book[] {
    return this.books.filter(book => book.title?.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  deleteBook(id: number | undefined) {
    this.books = this.books.filter(book => book.id !== id);
  }
}
