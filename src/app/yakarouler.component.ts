import { Component } from '@angular/core';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";
import { HeaderComponent } from './header';
import { BodyComponent } from './body';

@Component({
  moduleId: module.id,
  selector: 'yakarouler-app',
  templateUrl: 'yakarouler.component.html',
  styleUrls: ['yakarouler.component.css'],
  directives: [HeaderComponent, BodyComponent]
})
export class YakaroulerAppComponent {
  title = 'yakarouler works!';
}
