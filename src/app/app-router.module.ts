import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';
import { PersonaCrearComponent } from './persona/persona-crear/persona-crear.component';
import { PersonaListarComponent } from './persona/persona-listar/persona-listar.component';



const routes: Routes = [
  // Personas
  { path: 'personas/buscar', component: PersonaListarComponent },
  { path: 'personas/agregar', component: PersonaCrearComponent },


  { path: '', component: BasicosComponent, pathMatch: 'full' },
  { path: 'numeros', component: NumerosComponent },
  { path: 'no-comunes', component: NoComunesComponent },
  { path: 'ordenar', component: OrdenarComponent },
  { path: '**', redirectTo: '' },
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
