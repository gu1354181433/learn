import { Component } from "@angular/core";
import { Hero } from "./hero";
import { HeroService } from "./hero.service";
import { OnInit } from "@angular/core";

@Component({
  selector   : "app-hero",
  providers  : [HeroService],
  templateUrl: "./app.component.html",
  styleUrls  : ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Tour of Heroes";
           heroes      : Hero[];
           selectedHero: Hero;
  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) {}
  getHero(): void {
    this.heroService.getHeroes().then(value => (this.heroes = value));
  }
  ngOnInit(): void {
    this.getHero();
  }
}
