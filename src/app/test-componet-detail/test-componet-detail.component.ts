import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { testComponent } from '../testComponent';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-test-componet-detail',
  templateUrl: './test-componet-detail.component.html',
  styleUrls: ['./test-componet-detail.component.css']
})
export class TestComponetDetailComponent implements OnInit {

  @Input() hero: testComponent;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }


}
