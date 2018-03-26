import { Injectable } from '@angular/core';
import { testComponent } from './testComponent';
import { HEROES } from './mock-heroes';
@Injectable()
export class HeroService {
  constructor(private heroService: HeroService) { }
  getHeores(): testComponent[] {
    return HEROES;
  }

}

