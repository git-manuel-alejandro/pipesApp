import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona-listar',
  templateUrl: './persona-listar.component.html',
  styleUrls: ['./persona-listar.component.css']
})
export class PersonaListarComponent {

  constructor() { }

  nombreLower: string = 'manuel'
  nombreUpper: string = 'MANUEL'
  nombreCompleto: string = 'manuel ROA'
  fecha: Date = new Date()

}
