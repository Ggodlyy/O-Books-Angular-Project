import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get currentUser(): IUser {
    return this.userService.currentUser;
  }

  
 
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  logoutHandler() {
    this.userService.logout$().subscribe(data => console.log(data));
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('_id');
    this.router.navigate(['/home']);
  }

}
