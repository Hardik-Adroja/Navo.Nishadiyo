import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  isCollapsed1 = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  isCollapsed4 = true;
  buttonPressed = false;
  clients = [
    {
      id: 1,
      name: 'Bhikho Batli',
      thikana: "India",
      dhandha: "Earth",
      owner: "Bhikho",
      status: "Jinda"
    },
    {
      id: 2,
      name: 'Babu Chapri',
      thikana: "UAE",
      dhandha: "Apna Adda",
      owner: "Babu Bhai",
      status: "Jinda"
    },
    {
      id: 3,
      name: 'Salim kana',
      thikana: "Narak",
      dhandha: "Garam Oil",
      owner: "Yamraj",
      status: "Murda"
    },
    {
      id: 7,
      name: 'Chaman Langda',
      thikana: "USA",
      dhandha: "Hawala",
      owner: "Trumpwa",
      status: "Jinda"
    },
    {
      id: 100,
      name: 'Usman Choti',
      thikana: "Mexico",
      dhandha: "Ganja",
      owner: "Pablo",
      status: "Jinda"
    },
    {
      id: 23,
      name: 'Bobda Dada',
      thikana: "Sri Lanka",
      dhandha: "Wasooli",
      owner: "Takkkar",
      status: "Jinda"
    },
    {
      id: 65,
      name: 'Khali Bheja',
      thikana: "China",
      dhandha: "Kuch Bhi",
      owner: "Jinglo",
      status: "Jinda"
    }
  ];
  newMember: any = {
    id: (Math.random() * 10),
    name: '',
    thikana: "",
    dhandha: "",
    owner: "",
    status: ""
  };

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

  }
  katDal(id: any) {
    console.log(id)
    const bhiduIndex = this.clients.findIndex(bhidu => bhidu.id === id);
    console.log(bhiduIndex)
    this.clients.splice(bhiduIndex, 1);
  }

  randomDhandha() {
    const months = ["Dakaiti", "Murder", "Lafda", "Panga", "Chindi Chori", "Jasoosi", "Hawa Baji"];

    const random = Math.floor(Math.random() * months.length);
    return months[random];
  }
  randomName() {
    const months = ["Dhiru Khoto", "Phocho Dhilo", "Halko bhuto", "Chhota Lungi", "Kallu Kania", "Tillo Katri", "Mannu Mavo"];

    const random = Math.floor(Math.random() * months.length);
    return months[random];
  }
  randomThikana() {
    const months = ["Under Ground", "Dharavi", "Aamchi Mumbai", "Mirzapur", "Mandva", "Kali Ghodi"];

    const random = Math.floor(Math.random() * months.length);
    return months[random];
  }
  randomOwner() {
    const months = ["Modi Madari", "Amit Shana", "Rahul Gaddha", "Keju Jadu", "Didi Thakeli", "Viju Frenchi"];

    const random = Math.floor(Math.random() * months.length);
    return months[random];
  }

  addBhidu() {
    this.buttonPressed = true
    // let newBhidu =
    // {
    //   id: Math.random(),
    //   name: this.randomName(),
    //   thikana: this.randomThikana(),
    //   dhandha: this.randomDhandha(),
    //   owner: this.randomOwner(),
    //   status: "Murda"
    // };
    // this.clients.push(newBhidu);
  }
  addNewMember() {
    this.clients.push(this.newMember);
    this.buttonPressed = false
  }

}
