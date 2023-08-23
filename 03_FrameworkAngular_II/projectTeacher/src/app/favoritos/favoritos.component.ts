import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  nome: string = 'User';
  sobrenome: string = 'dos Lorem';
  imoveis: any;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  // Requisição http
  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/imoveis').subscribe(data => {
      this.imoveis = data;
    });
  }

  verDetalhes(imovelId: string) {
    this.router.navigate(['/detalhes', imovelId]);
  }
  
}
