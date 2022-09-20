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
      this.photoList = Object.values(this.history)
        .map((obj: any) => obj.photo_lnk)
        .filter((x) => !!x);
      this.maxIndex = this.photoList.length; 
    }
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

  removePhoto(index) {
    this.photoList.splice(index, 1);
  }

}
