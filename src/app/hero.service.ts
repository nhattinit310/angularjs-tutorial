import { Injectable } from '@angular/core';
import { testComponent } from './testComponent';
import { HEROES } from './mock-heroes';
@Injectable()
export class HeroService {

  getHeroes(): testComponent[] {
    return HEROES;
  }
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
