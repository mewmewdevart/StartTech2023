import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit  {

  imovelId: string;
  imovel: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.imovelId = params.get('id') ?? '';
      this.http.get<any>('http://localhost:3000/imoveis/' + this.imovelId).subscribe(data => {
        this.imovel = data;
      });
    });
  }
}
