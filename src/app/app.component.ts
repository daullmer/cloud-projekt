import { Component, NgModule, OnInit } from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'cloud-projekt';

  click() {
    this.title += "Hallo";
    console.log("TEst button");
  }
 // toggle webcam on/off
 public showWebcam = true;
 public deviceId: string = "";
 public videoOptions: MediaTrackConstraints = {
   // width: {ideal: 1024},
   // height: {ideal: 576}
 };
 public errors: WebcamInitError[] = [];

 // latest snapshot
 public webcamImage: WebcamImage = {} as WebcamImage;

 // webcam snapshot trigger
 private trigger: Subject<void> = new Subject<void>();

 public ngOnInit(): void {
   WebcamUtil.getAvailableVideoInputs()
     .then((mediaDevices: MediaDeviceInfo[]) => {});
 }

 public triggerSnapshot(): void {
   this.trigger.next();
   console.log("hallo ich hab ein Bild gemacht");
 }

 public toggleWebcam(): void {
   this.showWebcam = !this.showWebcam;
 }

 public handleInitError(error: WebcamInitError): void {
   this.errors.push(error);
 }


 public handleImage(webcamImage: WebcamImage): void {
   console.info('received webcam image', webcamImage);
   this.webcamImage = webcamImage;
 }

 public uploadToAPI(): void {

 }


 public get triggerObservable(): Observable<void> {
   return this.trigger.asObservable();
 }


}

