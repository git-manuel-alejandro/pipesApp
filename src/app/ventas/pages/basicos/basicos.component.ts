import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'manuel'
  nombreUpper: string = 'MANUEL'
  nombreCompleto: string = 'manuel ROA'
  fecha: Date = new Date()


}
