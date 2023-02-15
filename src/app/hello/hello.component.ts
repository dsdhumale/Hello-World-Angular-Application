import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  message: string = 'Hello World';
  imgUrl= "assets/BridgeLabzNewLogo.svg";
  url= "https://www.bridgelabz.com";
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void {
    this.message = "Hello from Bridgelabz";
  }

  handleClick($event:any) {
    console.log("bridgelabz logo is clicked",$event);
    window.open(this.url,"_blank")
  }

  handleInputError($event: any){
    console.log("Change event occured!!", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError = "";
      return;
    }
    this.nameError = "User Name is Invalid!!"
  }
}
