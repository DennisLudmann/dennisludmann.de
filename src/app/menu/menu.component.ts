import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input()darkMode = true;      // annotation, so i can defined it from outside- fx app.componet
  constructor() { }

  ngOnInit(): void {
  }

}
