import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatIconModule, NgFor, NgIf, CommonModule ],
})
export class HomeComponent {

  constructor(private router: Router) { }

  verDetalhes(imovelId: string) {
    this.router.navigate(['/detalhes', imovelId]);
  }

  toogleFavorito(index: number): void {
    this.imoveis[index].favorito = !this.imoveis[index].favorito
  }


  nome: string = 'User';
  sobrenome: string = 'dos Lorem';
  data: any = new Date();
  imoveis: Array<any> = [
    {
      id: 1,
      titulo: 'Casa do Unicórnio',
      foto: 'https://htmlcolorcodes.com/assets/images/colors/pastel-purple-color-solid-background-1920x1080.png',
      quartos: 4,
      banheiros: 3,
      area: 360,
      preco: 990000,
      favorito: true
    },
    {
      id: 2,
      titulo: 'Apartamento Encantado',
      foto: 'https://htmlcolorcodes.com/assets/images/colors/pastel-purple-color-solid-background-1920x1080.png',
      quartos: 2,
      banheiros: 1,
      area: 45,
      preco: 120000,
      favorito: false
    },
    {
      id: 3,
      titulo: 'Casa do Arco-Íris',
      foto: 'https://htmlcolorcodes.com/assets/images/colors/pastel-purple-color-solid-background-1920x1080.png',
      quartos: 7,
      banheiros: 5,
      area: 800,
      preco: 1500000,
      favorito: false
    },
    {
      id: 4,
      titulo: 'Flat Encantado',
      foto: 'https://htmlcolorcodes.com/assets/images/colors/pastel-purple-color-solid-background-1920x1080.png',
      quartos: 1,
      banheiros: 1,
      area: 36,
      preco: 180000,
      favorito: false
    },
    {
      id: 5,
      titulo: 'Sala Mágica',
      foto: 'https://htmlcolorcodes.com/assets/images/colors/pastel-purple-color-solid-background-1920x1080.png',
      quartos: 0,
      banheiros: 1,
      area: 25,
      preco: 250000,
      favorito: true
    },
    {
      id: 6,
      titulo: 'Cobertura Celestial',
      foto: 'https://htmlcolorcodes.com/assets/images/colors/pastel-purple-color-solid-background-1920x1080.png',
      quartos: 3,
      banheiros: 3,
      area: 200,
      preco: 1500000,
      favorito: true
    }
  ];
}
