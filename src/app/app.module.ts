import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ApilistComponent } from './apilist/apilist.component';

import { GetTokenService } from './get-token.service';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { LogsComponent } from './logs/logs.component';
import { GetLogsService } from './get-logs.service'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ApilistComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    GetTokenService,
    AuthGuardService,
    AuthService,
    GetLogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
