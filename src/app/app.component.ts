import { Component } from '@angular/core';
import { LlamarPokemonService } from './services/llamarPokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LlamarPokemonService]
})
export class AppComponent {

  title: string;

  constructor (){
    this.title = 'CATÁLOGO POKEMON';
  }
  

}
