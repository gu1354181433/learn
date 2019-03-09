import { Component } from "@angular/core";
import { Hero } from "./hero";
import { HeroService } from "./hero.service";
import { OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector   : "my-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls  : ["./heroes.component.scss"]
})
export class HeroesComponent implements OnInit {
                    heroes      : Hero[];
                    selectedHero: Hero;
           onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService, private router: Router) {}
  getHero(): void {
    this.heroService.getHeroes().then(value => (this.heroes = value));
  }
  ngOnInit(): void {
    this.getHero();
  }
  gotoDetail(): void {
    this.router.navigate(["/detail", this.selectedHero.id]);
  }
}
