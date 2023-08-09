import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, MatGridListModule, MatCardModule, MatButtonModule],
})

  //Corpo do objeto => const objeto =[{ }, { }]
export class HomeComponent {
  constructor(private router: Router){}


  verDetalhes(imovelID: string) {
    alert("Urubu");
    this.router.navigate(['/details', imovelID]);
  }

  toggleFavorito(index: number): void {
    this.imoveis[index].favorito = !this.imoveis[index].favorito;
  }

  nome: string = "Larissa";
  sobrenome: string = "Cristina";
  imoveis: Array<any> = [ //Array<any> ou Array<object>
    {
      id: 1,
      titulo: 'Casa de Bonecas',
      foto: 'https://i.pinimg.com/originals/77/b1/f0/77b1f026c1754c34011cdb0a2065ae0b.jpg',
      quartos: 4,
      banheiros: 3,
      area: 360,
      preco: 20000,
      favorito: true
    },
    {
      id: 2,
      titulo: 'Casa de Dark',
      foto: 'https://i.pinimg.com/originals/5a/a4/7a/5aa47adefc8f868e7ac0161a13e785f1.jpg',
      quartos: 2,
      banheiros: 1,
      area: 100,
      preco: 5000,
      favorito: false
    },
    {
      id: 3,
      titulo: 'Casa das Bonecas',
      foto: 'https://www.picclickimg.com/o0AAAOSwLQdj3tYR/1997-Vintage-Fisher-Price-Loving-Family-Grande-Dollhouse.webp',
      quartos: 1,
      banheiros: 1,
      area: 70,
      preco: 3000,
      favorito: false
    }
  ]
}
