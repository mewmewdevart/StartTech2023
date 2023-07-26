import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importando as rotas(routes) da aplicação
import { HomeComponent } from './home/home.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, // Rota padrão da aplicação, é a raiz do projeto
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component: AboutUSComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
