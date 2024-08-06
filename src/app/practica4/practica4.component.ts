import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica4',
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
    }
  }

  sumOfDigits(num: number): number {
    return num.toString()
              .split('')
              .map(digit => parseInt(digit, 10))
              .reduce((acc, curr) => acc + curr, 0);
  }
}
