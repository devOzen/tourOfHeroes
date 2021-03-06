import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.getHeros();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeros(): void {
    this.heroService.getHeroes()
       .subscribe(heroes => this.heroes = heroes);
  }

}
