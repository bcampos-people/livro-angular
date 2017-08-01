import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  valorClassBinding: boolean = true;

  classes(): any {
    let valores = {
      'cor-fundo': this.valorClassBinding,
      'cor-letra': this.valorClassBinding,
      'estilo-letra': this.valorClassBinding,
      'borda-paragrafo': this.valorClassBinding
    };

    return valores;
  }

  constructor() { }

  ngOnInit() {
  }

  mudarClassBinding() {
    // Toogle the boolean value
    this.valorClassBinding = ! this.valorClassBinding;
  }

}
