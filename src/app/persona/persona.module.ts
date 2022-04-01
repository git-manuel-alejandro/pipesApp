import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PersonaListarComponent } from './persona-listar/persona-listar.component';
import { PersonaCrearComponent } from './persona-crear/persona-crear.component';
import { PersonaEditarComponent } from './persona-editar/persona-editar.component';



@NgModule({
  declarations: [
    PersonaListarComponent,
    PersonaCrearComponent,
    PersonaEditarComponent
  ],
  exports: [
    PersonaCrearComponent,
    PersonaEditarComponent,
    PersonaListarComponent

  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class PersonaModule { }
