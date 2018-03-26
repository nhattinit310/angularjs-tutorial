import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { testComponent } from './testComponent';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
@Injectable()
export class HeroService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  getHeroes(): Observable<testComponent[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  
  getHero(id: number): Observable<testComponent> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}

