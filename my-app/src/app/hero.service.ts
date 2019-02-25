import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { promise } from 'protractor';




@Injectable()
export class HeroService{
    getHeroes():Promise<Hero[]> {
       return Promise.resolve(HEROES);
    }
}













