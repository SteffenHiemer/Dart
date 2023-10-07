import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsOfNumbersService {

  numbers: Object =  {
    1: "white",
    2: "black",
    3: "black",
    4: "white",
    5: "white",
    6: "white",
    7: "black",
    8: "black",
    9: "white",
    10: "black",
    11: "white",
    12: "black",
    13: "black",
    14: "black",
    15: "white",
    16: "white",
    17: "white",
    18: "black",
    19: "white",
    20: "black",
    25: "green",
    50: "red",
    "d1": "green",
    "d2": "red",
    "d3": "red",
    "d4": "green",
    "d5": "green",
    "d6": "green",
    "d7": "red",
    "d8": "red",
    "d9": "green",
    "d10": "red",
    "d11": "green",
    "d12": "red",
    "d13": "red",
    "d14": "red",
    "d15": "green",
    "d16": "green",
    "d17": "green",
    "d18": "red",
    "d19": "green",
    "d20": "red",
    "t1": "green",
    "t2": "red",
    "t3": "red",
    "t4": "green",
    "t5": "green",
    "t6": "green",
    "t7": "red",
    "t8": "red",
    "t9": "green",
    "t10": "red",
    "t11": "green",
    "t12": "red",
    "t13": "red",
    "t14": "red",
    "t15": "green",
    "t16": "green",
    "t17": "green",
    "t18": "red",
    "t19": "green",
    "t20": "red"
  }

  getColors(): Object {
    return this.numbers;
  }

  constructor() { }
}
