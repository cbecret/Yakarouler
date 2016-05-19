import { Component, OnInit } from '@angular/core';
import { RechercheComponent } from '../recherche/recherche.component';
import { BannerComponent } from '../banner/banner.component';
import { MavoitureComponent } from '../mavoiture/mavoiture.component';
import { OffresComponent } from '../offres/offres.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import { SocialComponent } from '../social/social.component';
import { FooterComponent } from '../footer/footer.component';
import { GaragesComponent } from '../garages/garages.component';
import { CertifComponent } from '../certif/certif.component';
import { DiscountComponent } from '../discount/discount.component';
import { VideoComponent } from '../video/video.component';
import { PartenairesComponent } from '../partenaires/partenaires.component';
import { Articles2Component } from '../articles2/articles2.component';
import { Articles3Component } from '../articles3/articles3.component';
import { Reducs2Component } from '../reducs2/reducs2.component';
import { Reducs3Component } from '../reducs3/reducs3.component';
import { PiecesComponent } from '../pieces/pieces.component';

@Component({
  moduleId: module.id,
  selector: 'yaka-body',
  templateUrl: 'body.component.html',
  styleUrls: ['body.component.css'],
  directives: [RechercheComponent, BannerComponent, MavoitureComponent, OffresComponent,
              NewsletterComponent, SocialComponent, FooterComponent, GaragesComponent,
              CertifComponent, DiscountComponent, VideoComponent, PartenairesComponent,
              Articles2Component, Articles3Component, Reducs2Component, Reducs3Component,
              PiecesComponent]
})
export class BodyComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
