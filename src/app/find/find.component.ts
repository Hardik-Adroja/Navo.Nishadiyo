import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {
  sarifList = [
    {
      id: 1,
      name: "Bhikho",
      address: "Dharavi",
      mobile: "Nokia 5233",
      age: 61,
      weight: 64,
      netWorth: 3208000000
    },
    {
      id: 2,
      name: "Sidhu",
      address: "Punjab",
      mobile: "Guru 1200",
      age: 63,
      weight: 75,
      netWorth: 170750
    },
    {
      id: 3,
      name: "Ranjeet",
      address: "Bombay",
      mobile: "Samsung WAV",
      age: 66,
      weight: 72,
      netWorth: 86000
    },
    {
      id: 4,
      name: "Shambha",
      address: "London",
      mobile: "Moto Edge",
      age: 22,
      weight: 95,
      netWorth: 433060
    },
    {
      id: 5,
      name: "Gabbar",
      address: "Las Vegas",
      mobile: "Apple",
      age: 33,
      weight: 86,
      netWorth: 162700
    },
    {
      id: 6,
      name: "Kaleen",
      address: "Mirzapur",
      mobile: "One plus",
      age: 61,
      weight: 78,
      netWorth: 3720000000
    }
  ];
  find = "";
  sarifListCopy: any = [];

  constructor() { }

  ngOnInit(): void {
    this.sarifListCopy = this.sarifList
  }
  deleteSarif(id: number) {
    console.log(id)
    const sarifIndex = this.sarifList.findIndex((item) => item.id === id);
    console.log(sarifIndex)
    this.sarifList.splice(sarifIndex, 1)
  }
  addSarif() {
    const newSarif = {
      id: 7,
      name: "Munna",
      address: "Mirzapur",
      mobile: "Mi",
      age: 28,
      weight: 78,
      netWorth: 37200000
    };
    this.sarifList.push(newSarif);
  }
  findSarif() {
    console.log(this.find)
    this.sarifList = this.sarifListCopy.filter((sarif: any) => sarif.name.toLocaleLowerCase().includes(this.find.toLocaleLowerCase()) 
    || sarif.address.toLocaleLowerCase().includes(this.find.toLocaleLowerCase())
    || sarif.mobile.toLocaleLowerCase().includes(this.find.toLocaleLowerCase()))
  }
}