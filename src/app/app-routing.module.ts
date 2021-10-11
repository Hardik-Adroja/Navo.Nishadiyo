import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { FindComponent } from './find/find.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "item", component: ItemsComponent },
  { path: "product", component: ProductComponent },
  { path: "dashboard", component: DashboardComponent},
  { path: "service", component: ServiceComponent },
  { path: "find", component: FindComponent},
  { path: "report", component: ReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
