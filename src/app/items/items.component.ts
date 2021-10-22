import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { FormGroup, FormControl, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ItemService } from '../Services/items/item.service';

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
  ungli = "";
  clientsCopy: any = [];
  newClients: any = new FormGroup({
    id: new FormControl(Math.random() * 10, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    thikana: new FormControl('', [Validators.required]),
    dhandha: new FormControl('', [Validators.required]),
    owner: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
  })
  newClientsCopy: any = [];
  clients: any = [];
  localClients: any = "";


  constructor(private primengConfig: PrimeNGConfig, private fb: FormBuilder, private itemService: ItemService) {
    this.localClients = localStorage.getItem("clients");
    if (this.localClients == null) {
      this.localClients = [];
    }
    else {
      this.clients = JSON.parse(this.localClients);
    }
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.clientsCopy = this.clients;
    this.newClientsCopy = this.newClients
    
    this.itemService.getItemList().subscribe((res) => {
      this.clients=res
    },
      (err) => {

      })


  }
  katDal(id: any) {
    console.log(id)
    const bhiduIndex = this.clients.findIndex((nakama: any) => nakama.id === id);
    console.log(bhiduIndex)
    this.clients.splice(bhiduIndex, 1);
    this.itemService.addItemInList(this.clients).subscribe((res)=>{},(err)=>{})
  }



  addBhidu() {
    this.buttonPressed = true;

  }

  findBhidu() {
    console.log(this.ungli);
    this.clients = this.clientsCopy.filter((bhidu: any) => bhidu.name.toUpperCase().includes(this.ungli.toUpperCase())
      || bhidu.thikana.toUpperCase().includes(this.ungli.toUpperCase())
      || bhidu.dhandha.toUpperCase().includes(this.ungli.toUpperCase())
      || bhidu.owner.toUpperCase().includes(this.ungli.toUpperCase())
      || bhidu.status.toUpperCase().includes(this.ungli.toUpperCase())
    )

  }
  newClientsAdd() {
    if (this.newClients.valid) {

      this.clients.push(this.newClients.value);
      this.itemService.addItemInList(this.clients).subscribe((res)=>{console.log(res)},(err)=>{})
      this.newClients.reset();
      this.newClients.controls['id'].setValue(Math.random() * 10)
      this.buttonPressed = false;
    
    }
  }

}


