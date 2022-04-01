import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import { AppRouterModule } from './app-router.module';


//Cambiar el locale de la app

import localEs from '@angular/common/locales/es-CL'
import { registerLocaleData } from '@angular/common';
import { PersonaModule } from './persona/persona.module';

registerLocaleData(localEs)


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    PersonaModule,
    VentasModule


  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
