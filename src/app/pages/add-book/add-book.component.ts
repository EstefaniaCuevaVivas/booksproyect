import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksComponent } from '../books/books.component';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  public Books: Book []
  public añadirLibro: void

 constructor(public BooksService: BooksService, private toastr: ToastrService ){
  
 }

 enviar(title: string,type: string,author: string, price: number,photo: string,id_book:number){
     
  let newbook = new Book (title,type,author,price,photo,id_book);
  this.añadirLibro = this.BooksService.add(newbook)
  this.toastr.success ("Se ha añadido un nuevo libro con titulo" +" "+ newbook.title)
 }

 recoger(libro:Book){

  let nuevosLibros=this.Books.filter(book => book.id_book != libro.id_book)
  
    this.Books = nuevosLibros;
   
  
   }

  

}
