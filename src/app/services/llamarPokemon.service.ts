import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LlamarPokemonService {

  constructor(private http: HttpClient) { }
 //environment.uri
  //aqui consuminos la API
  llamarListaPokemon() {
    return this.http.get(environment.uri +'pokemon?offset=20&limit=21');
  }
  // llamarImagenPokemon (idPokemon){
  //   return this.http.get(`http://pokeapi.co/api/v2/pokemon/${idPokemon}`);
  // }

  llamarImagenPokemonPorUrl(urlPokemon:string){
    return this.http.get(environment.rutaimage + urlPokemon).toPromise();
  }

}
