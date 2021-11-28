import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PivotViewModule} from '@syncfusion/ej2-angular-pivotview';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PivotViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
