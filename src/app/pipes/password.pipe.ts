import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {
  asteriscos = '';
  transform(value: string, args: boolean = true): string {
    if (args) {
      this.asteriscos = '';
      for (const i of value) {
        this.asteriscos += '*';
      }
      return this.asteriscos;
    } else {
      return value;
    }
  }
}
