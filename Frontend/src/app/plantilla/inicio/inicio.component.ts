import { Component, OnInit } from '@angular/core';
declare var funcion:any;
declare var plusSlides:any;
declare var currentSlide:any;
declare var showSlides:any;
declare var java:any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  funcion(){
    java();
    plusSlides();
    currentSlide();
    showSlides();
  }
}
