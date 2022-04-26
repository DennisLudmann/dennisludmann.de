import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {   // get a file from angular core (a predefined function) - it's "onload"
images = ['4.jpg', '7.jpg', '8.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg'];
currentImage = 0;

ngOnInit() {
    this.updateImage();
}

updateImage(){
  setInterval(() => {
    this.currentImage++;
    this.currentImage = this.currentImage % this.images.length;   // looping through the images
  } ,8000);
}
}
