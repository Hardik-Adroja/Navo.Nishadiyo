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
import {FieldsetModule} from 'primeng/fieldset';
import {TableModule} from 'primeng/table';
import { TrialComponent } from './trial/trial.component';
import { ContactComponent } from './contact/contact.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { Trial01Component } from './trial/trial01/trial01.component';
import { Trial02Component } from './trial/trial02/trial02.component';
import { Trial03Component } from './trial/trial03/trial03.component';
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './auth/authguard.service';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { InterseptorService } from './interceptor/interseptor.service';
import { TimeformatPipe } from './pipes/timeformat.pipe';
import { NgApexchartsModule } from 'ng-apexcharts';


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
    ReportComponent,
    TrialComponent,
    ContactComponent,
    Trial01Component,
    Trial02Component,
    Trial03Component,
    LoginComponent,
    TimeformatPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    AccordionModule,
    FieldsetModule,
    TableModule,
    TabsModule.forRoot(),
    ToastModule,
    NgApexchartsModule
    

  ],
  providers: [AuthguardService, 
    MessageService,{
    provide: HTTP_INTERCEPTORS, 
    useClass: InterseptorService, 
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
