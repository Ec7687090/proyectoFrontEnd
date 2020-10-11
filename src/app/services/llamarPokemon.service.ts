import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LlamarPokemonService {

  constructor(private http: HttpClient) { }

  //aqui consuminos la API
  llamarListaPokemon (){
    return this.http.get('http://pokeapi.co/api/v2/pokemon/');
  }
}
