import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }


  register$(userData: {email: string, password: string}): Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrl}/users/register`, userData)
  }
}
