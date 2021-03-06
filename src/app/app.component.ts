import { Component, NgModule, OnInit } from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { VisionApiModel } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'cloud-projekt';
  faceInfo!: VisionApiModel;
  ImageBaseData:string | ArrayBuffer | null = null;
  loading: boolean = false;

  pastImages: any[] = []

  constructor(private http: HttpClient) { }

 // toggle webcam on/off
 public showWebcam = true;
 public deviceId: string = "";
 public videoOptions: MediaTrackConstraints = {
   width: {ideal: 1440},
   height: {ideal: 960}
 };
 public errors: WebcamInitError[] = [];

 // latest snapshot
 public webcamImage: WebcamImage = {} as WebcamImage;
 public image: string = "";
 // webcam snapshot trigger
 private trigger: Subject<void> = new Subject<void>();

 public ngOnInit(): void {
  this.getPastImages();
  WebcamUtil.getAvailableVideoInputs()
    .then((mediaDevices: MediaDeviceInfo[]) => {});
 }

 public triggerSnapshot(): void {
   this.trigger.next();
 }

 public toggleWebcam(): void {
   this.showWebcam = !this.showWebcam;
 }

 public handleInitError(error: WebcamInitError): void {
   this.errors.push(error);
 }

 public handleImage(webcamImage: WebcamImage): void {
   console.info('received webcam image', webcamImage);
   this.image = webcamImage.imageAsDataUrl;
   this.uploadToAPI(webcamImage.imageAsBase64);
 }

 public getPastImages(): void {
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Basic ' + btoa('dhbw-demo:dhbw-demo')
    })
  };

  this.http.get<string[]>('https://cloud-backend.dullmer.de/PastImages', httpOptions).subscribe(data => {
    data.forEach(element => {
      var newObj = {image: `https://cloud-backend.dullmer.de/PastImages/${element}/Image`,
      thumbImage: `https://cloud-backend.dullmer.de/PastImages/${element}/Image`};
      this.pastImages.push(newObj);
    });
  })
}

public displayPastImage(index: number) {
  console.log("Loading past image; index:", index);
  console.log(this.pastImages[index]);
  var obj = this.pastImages[index];
  this.image = obj["image"];
  //https://cloud-backend.dullmer.de/PastImages/4asdf-asdf/VisionResult

  var httpOptions: object = {
    headers: new HttpHeaders({
      'Authorization': 'Basic ' + btoa('dhbw-demo:dhbw-demo')
    })
  };

  var url = this.image.replace("/Image", "/Vision");
  this.http.get<Array<any>>(url, httpOptions).subscribe(data => {
    if (data.length == 0) {
      console.log("Kein Gesicht gefunden!");
      return;
    }
    console.log(data[0]["FaceAttributes"]);
    this.faceInfo = data[0];
    console.log(this.faceInfo.FaceAttributes.Age);
  });
}

 public uploadToAPI(imageBase64: string): void {

  var httpOptions: object = {
    observe: 'response',
    headers: new HttpHeaders({
      'Authorization': 'Basic ' + btoa('dhbw-demo:dhbw-demo')
    })
  };

  this.loading = true;

  this.http.post<any>('https://cloud-backend.dullmer.de/Analyze', imageBase64, httpOptions)
  .subscribe(data => {
    var body: VisionApiModel[] = data.body as Array<VisionApiModel>;
    if (body.length == 0) {
      console.log("Kein Gesicht gefunden!");
      return;
    }
    this.loading = false;
    this.faceInfo = body[0];
    console.log(this.faceInfo);
    let guid = data.headers.get('backendguid')!;
    let newObj = {
      image: `https://cloud-backend.dullmer.de/PastImages/${guid}/Image`,
      thumbImage: `https://cloud-backend.dullmer.de/PastImages/${guid}/Image`};
    this.pastImages.unshift(newObj);
  })
 }
 public get triggerObservable(): Observable<void> {
   return this.trigger.asObservable();
 }

 public handleFileInput(event: any) {
    const file: File = event.target.files[0];
    let me = this;
    let reader = new FileReader();
    let image = reader.readAsDataURL(file);
	
    reader.onload = function () {
      //console.log(reader.result);
      me.ImageBaseData=reader.result;  
	  me.image =  me.ImageBaseData!.toString();
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }
 public btnUpload(){

    if(this.ImageBaseData==null){
      alert("Please select file");
    }else{
      var fileUplodVM: FileUplodVM={
        ImageBaseData:this.ImageBaseData.toString()
      }
	  console.log(this.ImageBaseData.toString());
	  let temp = this.ImageBaseData.toString().split(',');
	  console.log(temp[1]);
      this.uploadToAPI(temp[1]);
	}
  }
}
  export class FileUplodVM{
	  ImageBaseData: string = "";
  }



