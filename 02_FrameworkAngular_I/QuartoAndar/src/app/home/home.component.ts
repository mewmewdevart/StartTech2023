import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [NgFor, MatGridListModule, MatCardModule, MatButtonModule],
})
export class HomeComponent {
  nome: string = "Larissa";
  imoveis: string[] = ["Casa de Briquedo", "Apartamento do Urubu", "Casa das casas", "Fazenda Feliz"];
}
