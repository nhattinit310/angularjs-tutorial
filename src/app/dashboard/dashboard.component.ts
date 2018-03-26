
import { Component, OnInit } from '@angular/core';
import { testComponent } from '../testComponent';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  //testComponent: testComponent[];
  selectedTest: testComponent;
  test: testComponent[];
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(testComponent => this.test = testComponent);
  }

  onSelect(test: testComponent): void {
    this.selectedTest = test;
  }


}
