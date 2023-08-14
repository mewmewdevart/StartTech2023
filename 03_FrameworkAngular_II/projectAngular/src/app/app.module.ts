import {  DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// MEUS BLOCOS DE CÓDIGO
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

import { HttpClientModule } from '@angular/common/http';

// MATERIAL UI
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { RodapeComponent } from './rodape/rodape.component';
import { FavoritosComponent } from './favoritos/favoritos.component';


import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    QuemSomosComponent,
    CabecalhoComponent,
    DetalhesComponent,
    RodapeComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    CommonModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
