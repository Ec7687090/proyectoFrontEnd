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
        }
      );
  }

  abrirPokemos() {
    this.llamarPokemonService.llamarImagenPokemonPorUrl(URL).subscribe(
      (pokemon) => {
        console.log('pokemon', pokemon);
      }
    );
  }
}
