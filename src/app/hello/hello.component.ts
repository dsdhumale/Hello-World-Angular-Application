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

  ngOnInit(): void {
    this.message = "Hello from Bridgelabz";
  }

  handleClick(event:any) {
    console.log("bridgelabz logo is clicked",event);
    window.open(this.url,"_blank")
  }
}
