import { Component } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent {
    title: string = 'Lar Feliz Imóveis';
    copyright: string = 'Desenvolvido em 2023';
    developer: string = 'Start Tech TOTVS';

    redesSociais: Array<any> = [
      {
        nome: 'Facebook',
        link: 'http://www.facebook.com',
        icone: 'https://i.ibb.co/LZYBg8Q/logotipo-circular-do-facebook.png'
      },
      {
        nome: 'Instagram',
        link: 'http://www.instagram.com',
        icone: 'https://i.ibb.co/0nNbcgS/instagram-1.png'
      },
      {
        nome: 'LinkedIn',
        link: 'http://www.linkedin.com',
        icone: 'https://i.ibb.co/12YfRcr/linkedin.png'
      }
    ]
}
