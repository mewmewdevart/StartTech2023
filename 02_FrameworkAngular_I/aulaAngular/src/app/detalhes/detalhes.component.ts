import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  imovelId: string;

  titulo: string = 'Casa Magnífica';
  foto: string = 'https://i.ibb.co/JKzFtzj/casa.jpg';

  description: string = 'Bem-vindo(a) ao seu futuro lar! Esta magnífica casa de 4 quartos, com duas suítes, é a oportunidade perfeita para você e sua família desfrutarem de uma vida confortável e elegante. Com seus generosos 4 quartos, esta casa oferece amplo espaço para acomodar toda a família. Além disso, duas suítes privativas garantem o máximo de conforto e privacidade para os moradores. A sala de estar espaçosa e aconchegante é perfeita para momentos de lazer em família ou para receber amigos. O ambiente proporciona um cenário ideal para desfrutar de noites agradáveis e descontraídas.';
  description2: string = 'Essa casa representa uma oportunidade imperdível para conquistar um lar que combina conforto, elegância e praticidade em uma localização privilegiada. Não perca tempo e agende uma visita hoje mesmo!';
  warnings: string = 'Nota: A disponibilidade e o preço estão sujeitos a alterações. Entre em contato conosco para mais informações e agendamento de visitas.';


  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.imovelId = params.get('id') ?? '';
    });
  }

}
