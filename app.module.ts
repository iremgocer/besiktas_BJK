import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // ✅ Buraya ekledik

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,  // ✅ Buraya ekledik
    AppComponent  // ✅ Buraya ekledik
  ],
  providers: []
})
export class AppModule { }
