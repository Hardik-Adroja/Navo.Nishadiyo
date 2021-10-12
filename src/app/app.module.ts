import { ItemsComponent } from './items/items.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceComponent } from './service/service.component';
import { FindComponent } from './find/find.component';
import { ReportComponent } from './report/report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {AccordionModule} from 'primeng/accordion';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    HomeComponent,
    ProductComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    ServiceComponent,
    FindComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    AccordionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
