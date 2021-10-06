import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- header -->
  <app-header></app-header>

  <!-- routes will be rendered here -->
  <router-outlet></router-outlet>

`,
styles: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproject';

  relatorio: any = [{
    Nome: "André",
    Sobrenome: "Joaquim",
    idade: "23",
    cidadenatal: "Rio de Janeiro",
  },
  {
    Nome: "Tobias",
    Sobrenome: "Silva",
    idade: "54",
    cidadenatal: "Teresina",
  },
  {
    Nome: "Márcia",
    Sobrenome: "Dos Anjos",
    idade: "33",
    cidadenatal: "Recife",
  },
  {
    Nome: "Catarina",
    Sobrenome: "De Sena",
    idade: "51",
    cidadenatal: "São luís",
  },
  {
    Nome: "Andréia",
    Sobrenome: "Marques",
    idade: "26",
    cidadenatal: "Brasília",
  },
  ];
  


  // teste log
  /*
   constructor(){
     console.log(this.relatorio);
   }
   */
}


