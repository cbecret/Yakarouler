import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'yaka-mavoiture',
  templateUrl: 'mavoiture.component.html',
  styleUrls: ['mavoiture.component.css']
})
export class MavoitureComponent{
  contenu: string = '';
  contenu2: string = '';
  contenu3: string = '';
  contenu4: string = '';
  contenu5: string = '';
  hide1: boolean = true;
  hide2: boolean = true;
  hide3: boolean = true;
  hide4: boolean = true;
  hide5: boolean = true;
  clickUn() {
    this.contenu = "choisissez votre marque";
    this.contenu2 = "choisissez votre modèle";
    this.contenu3 = "choisissez votre motorisation";
    this.hide1 = false;
    this.hide2 = false;
    this.hide3 = false;
    this.hide4 = true;
    this.hide5 = true;
  }
  clickDeux() {
    this.contenu4 = "Entrez votre numéro d’immatriculation";
    this.hide1 = true;
    this.hide2 = true;
    this.hide3 = true;
    this.hide4 = false;
    this.hide5 = true;
  }
  clickTrois() {
    this.contenu5 = "Entrez le type mine de votre voiture";
    this.hide1 = true;
    this.hide2 = true;
    this.hide3 = true;
    this.hide4 = true;
    this.hide5 = false;
  }
}
