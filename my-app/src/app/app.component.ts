import { Component } from '@angular/core';
export class Hero {
  id  : number;
  name: string;
}

@Component({
  selector : 'app-hero',
  template : `<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
       title = 'Tour of Heroes';
  hero: Hero = {
    id  : 1,
    name: 'Windstorm'
  };
}













