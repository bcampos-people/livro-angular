import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  nomes: any [] = [
    {id: 1, nome: 'Marina'},
    {id: 2, nome: 'Maurício'},
    {id: 3, nome: 'Cynthia'},
    {id: 4, nome: 'Barney'}
  ];

  constructor() { }

  ngOnInit() {
  }

  meuSave(index: number, nomes: any) {
    return nomes.id;
  }

  atualizar() {
    this.nomes = [
      {id: 1, nome: 'Marina'},
      {id: 2, nome: 'Maurício'},
      {id: 3, nome: 'Cynthia'},
      {id: 4, nome: 'Barney'},
      {id: 5, nome: 'Magali'}
    ];
  }

}
