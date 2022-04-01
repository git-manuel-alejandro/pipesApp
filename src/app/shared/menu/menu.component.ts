import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Personas', icon: 'pi pi-user', items: [
          { label: 'Buscar', icon: 'pi pi-search', routerLink: 'personas/buscar' },
          { label: 'Agregar', icon: 'pi pi-plus', routerLink: 'personas/agregar' },


          // { label: 'Numeros', icon: 'pi pi-dollar', routerLink: 'numeros' },
          // { label: 'No comunes', icon: 'pi pi-globe', routerLink: 'no-comunes' },
          // { label: 'Ordenar', icon: 'pi pi-align-left', routerLink: 'ordenar' },
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog'
      }


    ];
  }

}
