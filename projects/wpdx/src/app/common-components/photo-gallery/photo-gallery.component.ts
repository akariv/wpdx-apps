import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.less']
})
export class PhotoGalleryComponent implements OnChanges {

  @Input() history: any;
  currentPhotoIndex = 0;
  photoList: any[] = [];
  maxIndex = 0;
  

  constructor() { }


  ngOnChanges(): void {
    if (this.history) {
      this.photoList = Object.keys(this.history)
        .sort((a: string, b: string) => a.localeCompare(b))
        .map((k: any) => this.history[k].photo_lnk)
        .filter((x) => !!x);
      this.maxIndex = this.photoList.length; 
    }
  }

  moveRight(){
    if (this.currentPhotoIndex < this.maxIndex - 1) {
      this.currentPhotoIndex += 1;
    }
  }
  
  moveLeft(){
    if (this.currentPhotoIndex > 0){
      this.currentPhotoIndex -= 1;
    }
  }

  removePhoto(link) {
    this.photoList = this.photoList.filter((x) => x !== link);
    this.maxIndex = this.photoList.length;
  }

}
