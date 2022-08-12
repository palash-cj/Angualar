import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponent } from './mycontainer/mycontainer.component';
import { TopnavComponent } from './mycontainer/topnav/topnav.component';
import { HeaderComponent } from './mycontainer/header/header.component';
import { Txtsec1Component } from './mycontainer/txtsec1/txtsec1.component';
import { Txtsec2Component } from './mycontainer/txtsec2/txtsec2.component';
import { DatabindComponent } from './databind/databind.component';

@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopnavComponent,
    HeaderComponent,
    Txtsec1Component,
    Txtsec2Component,
    DatabindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
