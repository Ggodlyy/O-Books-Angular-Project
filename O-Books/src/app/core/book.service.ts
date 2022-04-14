import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBook } from './interfaces/book';

const apiUrl = environment.apiUrl;


@Injectable()
export class BookService {


  constructor(private http: HttpClient) { }

 loadBookList$(): Observable<IBook[]> {
   return this.http.get<IBook[]>(`${apiUrl}/data/catalog`);
 }



  addBook$(body): Observable<IBook> {
    const token = sessionStorage.getItem('accessToken');

    if (token) {
      return this.http.post<IBook>(`${apiUrl}/data/catalog`, body, { headers: new HttpHeaders({ 'X-Authorization': token }) })
    } else {
      return this.http.post<IBook>(`${apiUrl}/data/catalog`, body)
    }
  }

  loadBookById$(bookId): Observable<IBook> {
    return this.http.get<IBook>(`${apiUrl}/data/catalog/${bookId}`);
  }

  editBookById$(bookId, body): Observable<IBook> {
    const token = sessionStorage.getItem('accessToken');

    if (token) {
      return this.http.put<IBook>(`${apiUrl}/data/catalog/${bookId}`, body, { headers: new HttpHeaders({ 'X-Authorization': token }) })
    } else {
      return this.http.put<IBook>(`${apiUrl}/data/catalog/${bookId}`, body);
    }
  }

  removeBook$(bookId) {
    const token = sessionStorage.getItem('accessToken');
    return this.http.delete(`${apiUrl}/data/catalog/${bookId}`, { headers: new HttpHeaders({ 'X-Authorization': token }) });
  }

  likeBook$(bookId) {
    const token = sessionStorage.getItem('accessToken');
    return this.http.get<IBook>(`${apiUrl}/data/catalog/like/${bookId}`, { headers: new HttpHeaders({ 'X-Authorization': token }) });
  }

  buyBook$(bookId) {
    const token = sessionStorage.getItem('accessToken');
    return this.http.get<IBook>(`${apiUrl}/data/catalog/buy/${bookId}`, { headers: new HttpHeaders({ 'X-Authorization': token }) });
  }

}
