import { Component, Input, OnInit } from '@angular/core';
import { max } from 'd3';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.less']
})
export class PhotoGalleryComponent implements OnInit {

  @Input() photo_lnks: any;
  currentPhotoIndex = 0;
  photoList;
  maxIndex;
  

  constructor() { }


  ngOnInit(): void {
    this.photoList = Object.values(this.photo_lnks);
    this.maxIndex = this.photoList.length;
    console.log(this.photoList);

  }

  moveRight(){
    const nextIndex = this.currentPhotoIndex + 1;
    if (nextIndex < this.maxIndex){
      this.currentPhotoIndex = nextIndex;
    }
  }
  
  moveLeft(){
    const prevIndex = this.currentPhotoIndex - 1;
    if (prevIndex > -1){
      this.currentPhotoIndex = prevIndex;
    }
  }

}
