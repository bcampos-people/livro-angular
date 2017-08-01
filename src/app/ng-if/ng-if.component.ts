import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  mostraNome: boolean;
  cursos: string [] = [];

  constructor() { }

  ngOnInit() {
  }

  // Métodos
  mostrar(): void {
    this.mostraNome = !this.mostraNome;
  }
  getValor(): boolean {
    return this.mostraNome;
  }

  // Condicionais
  addCurso() {
    this.cursos.push('Angular');
  }

}
