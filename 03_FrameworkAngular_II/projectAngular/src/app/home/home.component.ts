import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatIconModule, NgFor, NgIf, CommonModule, HttpClientModule, MatSnackBarModule ],
})
export class HomeComponent implements OnInit {
  nome: string = 'Mandioca';
  sobrenome: string = 'Frita da Lorem Ipsum';
  imoveis: any[] = [];
  imovel: any = {};

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private router: Router, private http: HttpClient, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/imoveis').subscribe((data) => {
      this.imoveis = data;
    });
  }

  verDetalhes(imovelId: string) {
    this.router.navigate(['/detalhes', imovelId]);
  }

  toogleFavorito(imovelId: string): void {
    this.http.get<any>('http://localhost:3000/imoveis/' + imovelId).subscribe((data) => {
      this.imovel = data;
      this.imovel.favorito = !this.imovel.favorito;

      this.http.patch('http://localhost:3000/imoveis/' + imovelId, { favorito: this.imovel.favorito }).subscribe(
        (response) => {
          if (this.imovel.favorito === true) {
            this._snackBar.open('O imóvel foi favoritado!', 'Fechar', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 5000,
            });
          } else {
            this._snackBar.open('O imóvel foi removido dos favoritos...', 'Fechar', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 5000,
            });
          }
          this.http.get<any>('http://localhost:3000/imoveis').subscribe((data) => {
            this.imoveis = data;
          });
        },
        (error) => {
          console.log('Ocorreu um erro', error);
          this.imovel.favorito = !this.imovel.favorito;
        }
      );
    });
  }
}