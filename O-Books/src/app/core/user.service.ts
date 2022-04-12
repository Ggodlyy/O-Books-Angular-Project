import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { IUser } from './interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  currentUser: IUser;

  get isLogged() {
    return !!this.currentUser;
  }


  register$(userData: {email: string, password: string}): Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrl}/users/register`, userData)
  }

  login$(userData: {email: string, password: string}): Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrl}/users/login`, userData)
    .pipe(tap(user => {
      sessionStorage.setItem('email', user.email);
      sessionStorage.setItem('accessToken', user.accessToken);
      sessionStorage.setItem('_id', user._id);
      this.currentUser = user
    }));
  }

  logout$() { 
    this.currentUser = null;
    return this.httpClient.get(`${environment.apiUrl}/users/logout`)
  }
}
