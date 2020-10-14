import { RepositoryapiService } from './../../services/repositoryapi.service';
import { Component, OnInit } from '@angular/core';
import { pokemon } from '../../models/pokemon.model';
import { LlamarPokemonService } from '../../services/llamarPokemon.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  mostrarPokemon: pokemon[];
  mostrarPokemon2: any;
  imagePokemon: string;
  responseView: any;

  constructor(private llamarPokemonService: LlamarPokemonService) {
    this.llamarListaPokemon();
  }

  ngOnInit(): void {
  }

  llamarListaPokemon() {
    this.llamarPokemonService.llamarListaPokemon()
      .subscribe((response) => {
          this.mostrarPokemon = response['results'];
          let i= 21;
          this.mostrarPokemon.forEach(element => {
            this.mostrarPokemon.find(item => item.name == element.name).image ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"+i+".png";
            i++;
          });
          console.log(this.mostrarPokemon);
        }
      );
  }

  pokeImages(pokemon:string):string{
    this.llamarPokemonService.llamarImagenPokemonPorUrl(pokemon)
    .then((response) => {
      this.imagePokemon = response['sprites']['back_default'];
    });
    return this.imagePokemon;
  }

  // abrirPokemos() {
  //   this.llamarPokemonService.llamarImagenPokemonPorUrl(URL).subscribe(
  //     (pokemon) => {
  //       console.log('pokemon', pokemon);
  //     }
  //   );
  // }
}
