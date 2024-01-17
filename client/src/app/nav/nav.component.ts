import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  model: any = {};
  currentUser$: Observable<User | null> = of(null);

  constructor(public AccountService: AccountService) {}

  ngOnInit(): void {
    //this.currentUser$ = this.AccountService.currentUser$;
    //this.getCurrentUser()
  }

  /* getCurrentUser(){
    this.AccountService.currentUser$.subscribe({
      next: user =>this.loggedIn = !!user,
      error: error => console.log(error)
    })
  }
 */

  login(){
    this.AccountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
        //this.loggedIn = true;
      },
      error: error => console.log(error)
    })
  }

  logout(){
    this.AccountService.logout();
    //this.loggedIn = false;
  }
}
