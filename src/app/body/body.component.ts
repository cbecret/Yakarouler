import { Component, OnInit } from '@angular/core';
import { RechercheComponent } from '../recherche/recherche.component';
import { BannerComponent } from '../banner/banner.component';
import { MavoitureComponent } from '../mavoiture/mavoiture.component';

@Component({
  moduleId: module.id,
  selector: 'yaka-body',
  templateUrl: 'body.component.html',
  styleUrls: ['body.component.css'],
  directives: [RechercheComponent, BannerComponent, MavoitureComponent]
})
export class BodyComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
