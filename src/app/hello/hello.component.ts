import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  message: string = 'Hello World';
  imgUrl= "assets/BridgeLabzNewLogo.svg";

  ngOnInit(): void {
    this.message = "Hello from Bridgelabz";
  }
}
