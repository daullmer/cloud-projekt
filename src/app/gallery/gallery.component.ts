import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {

  @Input() pastImages: object[] = [];
  @Output() imageClick = new EventEmitter<number>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  galleryClick(index: number) {
    this.imageClick.emit(index);
  }
}
