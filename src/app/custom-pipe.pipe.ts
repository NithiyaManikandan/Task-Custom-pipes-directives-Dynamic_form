import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'exponentialStrength' })

export class CustomPipePipe implements PipeTransform {

  transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
  }
}
