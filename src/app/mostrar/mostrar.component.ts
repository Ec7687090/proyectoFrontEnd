import { Component, OnInit } from '@angular/core';
import { pokemon } from '../models/pokemon.model';
import { LlamarPokemonService } from '../services/llamarPokemon.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  mostrarPokemon: pokemon[];
  responseView: any;  

  constructor(private llamarPokemonService: LlamarPokemonService) { 
    this.llamarListaPokemon();
  }

  ngOnInit(): void {
  }

  llamarListaPokemon (){
    console.log ('Paso 1');
    this.llamarPokemonService.llamarListaPokemon().subscribe(
      (response)=>{
        console.log('response', response);
        this.responseView = response;
        this.llamarListaPokemon = response['results'];
      }
    );
    console.log('paso 2');
  }

  abrirPokemos(){
      this.llamarPokemonService.llamarImagenPokemonPorUrl(url).subscribe(
        ( pokemon ) => {
          console.log('pokemon', pokemon);
        }
      );    
  }
}
