import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-practica4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './practica4.component.html',
  styleUrls: ['./practica4.component.css']
})
export class Practica4Component implements OnInit {

  numbers: { number: number, digitSum: number }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.calculateDigitSums();
  }

  calculateDigitSums(): void {
    for (let i = 23; i <= 99; i++) {
      const digitSum = this.sumOfDigits(i);
      this.numbers.push({ number: i, digitSum });
      console.log(`Número: ${i} - Suma de dígitos: ${digitSum}`);
    }
    console.log(this.numbers);
  }

  sumOfDigits(num: number): number {
    return num.toString()
              .split('')
              .map(digit => parseInt(digit, 10))
              .reduce((acc, curr) => acc + curr, 0);
  }
}
