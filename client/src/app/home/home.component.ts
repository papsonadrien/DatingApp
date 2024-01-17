import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  resgisterMode = false;
  users: any;

  constructor(private http: HttpClient){

  }

  ngOnInit(): void{
    this.getUsers();
  }

  registerToggle(){
    this.resgisterMode = !this.resgisterMode;
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: Response => this.users = Response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })
  }

  cancelRegisterMode(event: boolean){
    this.resgisterMode = event;
  }

}
