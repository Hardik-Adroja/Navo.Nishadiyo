import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UtilService } from '../common/util.service';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexResponsive, ApexNonAxisChartSeries, ApexDataLabels, ApexPlotOptions } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  responsive: ApexResponsive | any;
  labels: any;
  xaxis: ApexXAxis | any;
  title: ApexTitleSubtitle | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
};
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  @ViewChild("chart", { static: false }) chart?: ChartComponent;
  public chartOptions: Partial<ChartOptions>={
    series: [],
    chart:{},
    responsive:[],
    labels: [],
    xaxis: {},
    title: "",
    dataLabels: {},
    plotOptions: {},
  };
  chartType = ""

  visitTime: any = {}

  constructor(private utilService: UtilService) {

    this.utilService.reportAtTime.subscribe((res: any) => {
      this.utilService.setItemInTIme(res);
    })
  }

  ngOnInit(): void {
    this.visitTime = this.utilService.getItemInTIme()

  }
  changeChartType() {
    let value1 = [this.visitTime.homeTotal, this.visitTime.serviceTotal, this.visitTime.productTotal, this.visitTime.itemTotal, this.visitTime.dashboardTotal, this.visitTime.trialTotal, this.visitTime.findTotal, this.visitTime.contactTotal];

    this.chartOptions = {
      series: this.chartType=="pie"?value1:[{data:value1}],
      chart: {
        width: 420,
        type: this.chartType
      },
      labels: ["Home", "Service", "Product", "Item", "Dashboard", "Trial", "Find Us", "Contact Us"],
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ["Home", "Service", "Product", "Item", "Dashboard", "Trial", "Find Us", "Contact Us"]
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}