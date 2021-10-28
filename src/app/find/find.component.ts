import { map } from 'rxjs/operators';
import { UtilService } from './../common/util.service';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit, OnDestroy, AfterViewInit {
  map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [22.8252, 70.8491],
      zoom: 2
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 2,

    });
    var circle = L.circle([22.8252, 70.8491], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 5000
    })
      tiles.addTo(this.map);
      circle.addTo(this.map);
  }

  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
    this.utilService.reportAtTime.next(["findIn", null, null])
  }
  ngOnDestroy() {
    this.utilService.reportAtTime.next(["findOut", "findIn", "findTotal"])
  }
  ngAfterViewInit() {
    this.initMap();
  }
}