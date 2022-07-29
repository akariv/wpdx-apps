import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.less']
})
export class PhotoGalleryComponent implements OnInit {

  @Input() photo_lnks: any;
  currentPhotoIndex = 0;
  photoList;
  

  constructor() { }


  ngOnInit(): void {
    this.photoList = Object.values(this.photo_lnks);
    console.log(this.photoList);

  }

}
