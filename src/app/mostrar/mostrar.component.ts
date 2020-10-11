import { Component, OnInit } from '@angular/core';
import { pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  mostrarPokemon: pokemon[];

  constructor() { }

  ngOnInit(): void {
  }

}
