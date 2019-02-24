import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { PasswordPipe } from './pipes/password.pipe';

@NgModule({
  declarations: [AppComponent, CapitalizadoPipe, DomseguroPipe, PasswordPipe],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }], // aqui va el idioma 'es'
  bootstrap: [AppComponent]
})
export class AppModule {}
