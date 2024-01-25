import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  model: any = {};
  currentUser$: Observable<User | null> = of(null);

  constructor(public AccountService: AccountService, private router: Router, private toastr: ToastrService) {}

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
      next: () => this.router.navigateByUrl('/members')
      //error: error =>this.toastr.error(error.error)
    })
  }

  logout(){
    this.AccountService.logout();
    //this.loggedIn = false;
    this.router.navigateByUrl('/');
  }
}
