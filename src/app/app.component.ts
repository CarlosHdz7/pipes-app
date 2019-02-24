import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'pipes-app';
  texto = 'One for All';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI = Math.PI;
  porcentaje = 0.234;
  moneda = 1234.5;
  nombre = 'carLos eduardO caBrera hErnánDez';
  video = '7g1sFUxAlcI';
  password = 'carlos';
  activar = true;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '19'
    }
  };

  fecha = new Date();

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Llego la data'), 3500);
  });
}
