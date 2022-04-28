import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
 
export class SlideshowComponent implements OnInit {   // get a file from angular core (a predefined function) - it's "onload"
  images = ['4.jpg', '7.jpg', '8.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg'];
  headlines =[
    'Programming is a skill best acquired by practice and example rather than from books',
    'Programming is a skill best acquired by practice and example rather than from books2',
    'Programming is a skill best acquired by practice and example rather than from books3',
    'Programming is a skill best acquired by practice and example rather than from books4',
    'Programming is a skill best acquired by practice and example rather than from books5',
    'Programming is a skill best acquired by practice and example rather than from books6',
    'Programming is a skill best acquired by practice and example rather than from books7',
  ];
  currentImage = 0;
  showImage = true;
  
  ngOnInit() {
      this.updateImage();
  }
  
  updateImage(){
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;   // looping through the images
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 10);
    } ,8000);
  }
  }
  
}
