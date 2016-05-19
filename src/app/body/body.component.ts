import { Component, OnInit } from '@angular/core';
import { RechercheComponent } from '../recherche/recherche.component';
import { BannerComponent } from '../banner/banner.component';
import { MavoitureComponent } from '../mavoiture/mavoiture.component';
import { OffresComponent } from '../offres/offres.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import { SocialComponent } from '../social/social.component';

@Component({
  moduleId: module.id,
  selector: 'yaka-body',
  templateUrl: 'body.component.html',
  styleUrls: ['body.component.css'],
  directives: [RechercheComponent, BannerComponent, MavoitureComponent, OffresComponent,
              NewsletterComponent, SocialComponent]
})
export class BodyComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
