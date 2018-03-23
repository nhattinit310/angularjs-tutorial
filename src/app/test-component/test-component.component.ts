import { Component, OnInit } from '@angular/core';
import { testComponent } from '../testComponent';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  selectedTest: testComponent;
  test = testComponent[];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  onSelect(test: testComponent): void{
    this.selectedTest = test;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.test = heroes);
  }

}
