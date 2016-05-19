import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'yaka-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})
export class FooterComponent{
  text1: string = 'Votre commande';
  text2: string = 'Aide et services';
  text3: string = 'A propos';
  hide1: boolean = false;
  hide11:boolean = true;
  hide2: boolean = false;
  hide22:boolean = true;
  hide3: boolean = false;
  hide33:boolean = true;
  afficheUn(){
    this.hide1 = true;
    this.hide11 = false;
    this.hide2 = false;
    this.hide22 = true;
    this.hide3 = false;
    this.hide33 = true;
  }
  afficheDeux(){
    this.hide1 = false;
    this.hide11 = true;
    this.hide2 = true;
    this.hide22 = false;
    this.hide3 = false;
    this.hide33 = true;
  }
  afficheTrois(){
    this.hide1 = false;
    this.hide11 = true;
    this.hide2 = false;
    this.hide22 = true;
    this.hide3 = true;
    this.hide33 = false;
  }

}
