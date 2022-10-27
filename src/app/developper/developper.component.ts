import { Component, OnInit, Input } from '@angular/core';
import { Developper } from '../models/developper.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css'],
})
export class DevelopperComponent implements OnInit {
  constructor() {}

  angular: Skill = new Skill( 'Angular', 'https://angular.io/assets/images/logos/angular/angular.svg', 'https://angular.io/');
 
  react: Skill = new Skill('React', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png', 'https://fr.reactjs.org/');

  javascript: Skill = new Skill('Javascript', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png', 'https://www.javascript.com/');

  developper: Developper = new Developper(
    'Jean',
    'Dupont',
    24,
    'Homme',
    'je suis developpeur web',
    [
      this.angular,
      this.react,
      this.javascript
    ]
   
  );

  ngOnInit(): void {}
}
