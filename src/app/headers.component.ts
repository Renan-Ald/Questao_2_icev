import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <nav class="navbar">

    <!-- logo -->
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="img src="assets/imagens/relatorio-gerencial.png">">
      </a>
    </div>
  </nav>
`,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}