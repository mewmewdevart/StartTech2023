import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
// implements OnInit:Quero que seja executada logo no inicio
export class DetailsComponent implements OnInit {

  imovelID: string;
  constructor(private router: ActivatedRoute){}

  ngOnInit(){
    this.router.paramMap.subscribe(params =>{
      this.imovelID = params.get('id') ?? '';
    });
  }
}
