import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WebcamModule} from 'ngx-webcam';
import {FormsModule} from '@angular/forms';
import { AiResultComponent } from './ai-result/ai-result.component';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    AiResultComponent
  ],
  imports: [
    BrowserModule,
	  HttpClientModule,
    FormsModule,
    AppRoutingModule,
    WebcamModule,
    FlexLayoutModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
