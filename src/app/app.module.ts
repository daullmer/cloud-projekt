import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WebcamModule} from 'ngx-webcam';
import {FormsModule} from '@angular/forms';
import { AiResultComponent } from './ai-result/ai-result.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryComponent } from './gallery/gallery.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    AiResultComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
	  HttpClientModule,
    FormsModule,
    AppRoutingModule,
    WebcamModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    NgImageSliderModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
