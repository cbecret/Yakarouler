import { Component, OnInit } from '@angular/core';
import { MenudeskComponent } from '../menudesk/menudesk.component';

@Component({
  moduleId: module.id,
  selector: 'yaka-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [ MenudeskComponent ]
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
