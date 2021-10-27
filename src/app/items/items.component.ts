import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { FormGroup, FormControl, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ItemService } from '../Services/items/item.service';
import { UtilService } from '../common/util.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit, OnDestroy {

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

  clients: any = [];
  localClients: any = "";


  constructor(private primengConfig: PrimeNGConfig, private fb: FormBuilder, private itemService: ItemService, private utilService: UtilService) {

  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.utilService.reportAtTime.next(["itemIn",null,null]);
    console.log(new Date())

    this.itemService.getItemList().subscribe((res) => {
      this.clients = res;
      this.clientsCopy = this.clients;
    },
      (err) => {

      });
  }

  katDal(id: any) {
    const bhiduIndex = this.clients.findIndex((nakama: any) => nakama.id === id);
    this.clients.splice(bhiduIndex, 1);
    this.itemService.addItemInList(this.clients).subscribe((res) => { }, (err) => { })
  }

  addBhidu() {
    this.buttonPressed = true;
  }

  findBhidu() {
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
      this.itemService.addItemInList(this.clients).subscribe((res) => { console.log(res) }, (err) => { })
      this.newClients.reset();
      this.newClients.controls['id'].setValue(Math.random() * 10)
      this.buttonPressed = false;
    }
  }

  ngOnDestroy() {
    this.utilService.reportAtTime.next(["itemOut","itemIn","itemTotal"]);
    console.log(new Date())
  }

}


