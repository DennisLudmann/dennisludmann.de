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
    'Programming isnt about what you know; its about what you can figure out',
    'The only way to learn a new programming language is by writing programs in it',
    'Sometimes its better to leave something alone, to pause, and thats very true of programming',
    'Testing leads to failure, and failure leads to understanding',
    'The best error message is the one that never shows up',
    'The most damaging phrase in the language is.. its always been done this way',
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
