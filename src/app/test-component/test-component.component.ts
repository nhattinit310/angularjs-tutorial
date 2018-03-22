import { Component, OnInit } from '@angular/core';
import { testComponent } from '../testComponent';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  test = HEROES;
  selectedTest: testComponent;
  constructor() { }

  ngOnInit() {
  }
  onSelect(test: testComponent): void{
    this.selectedTest = test;
  }

}
