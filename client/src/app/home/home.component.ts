import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  resgisterMode = false;
  users: any;

  constructor(){

  }

  ngOnInit(): void{
  }

  registerToggle(){
    this.resgisterMode = !this.resgisterMode;
  }

  cancelRegisterMode(event: boolean){
    this.resgisterMode = event;
  }

}
