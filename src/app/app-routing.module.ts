import { ContactComponent } from './contact/contact.component';
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
import { TrialComponent } from './trial/trial.component';
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './auth/authguard.service';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent, canActivate:[AuthguardService] },
  { path: "item", component: ItemsComponent, canActivate:[AuthguardService] },
  { path: "product", component: ProductComponent, canActivate:[AuthguardService] },
  { path: "dashboard", component: DashboardComponent, canActivate:[AuthguardService]},
  { path: "service", component: ServiceComponent, canActivate:[AuthguardService] },
  { path: "find", component: FindComponent, canActivate:[AuthguardService]},
  { path: "report", component: ReportComponent, canActivate:[AuthguardService] },
  { path: "contact", component: ContactComponent, canActivate:[AuthguardService] },
  { path: "trial", component: TrialComponent, canActivate:[AuthguardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
