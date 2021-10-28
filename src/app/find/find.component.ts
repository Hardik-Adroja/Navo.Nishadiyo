import { UtilService } from './../common/util.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit,OnDestroy {
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
  title = 'Sarif List';
  head = [['ID', 'NAME', 'ADDRESS', 'MOBILE', 'AGE', 'WEIGHT', 'NET WORTH']];


  find = "";
  sarifListCopy: any = [];

  constructor(private utilService:UtilService) { }

  ngOnInit(): void {
    this.sarifListCopy = this.sarifList
    this.utilService.reportAtTime.next(["findIn",null,null])
  }
  ngOnDestroy(){
    this.utilService.reportAtTime.next(["findOut","findIn","findTotal"])
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

  createPdf() {
    var doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Sarif List', 11, 8);
    doc.setFontSize(11);
    doc.setTextColor(100);


    (doc as any).autoTable({
      head: this.head,
      body: this.sarifList,
      theme: 'plain',
      didDrawCell: (data: any) => {
        console.log(data.column.index)
      }
    })
    doc.output('dataurlnewwindow');
    doc.save('myteamdetail.pdf');
  }
}