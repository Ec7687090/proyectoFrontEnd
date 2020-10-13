import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  nombre:string;

  constructor (){
    this.title = 'PROYECTO POKEMON';
    this.nombre = 'Grupo 2';
  }
  

}
