import { Component, OnInit, Input} from '@angular/core';
import { testComponent } from '../testComponent';

@Component({
  selector: 'app-test-componet-detail',
  templateUrl: './test-componet-detail.component.html',
  styleUrls: ['./test-componet-detail.component.css']
})
export class TestComponetDetailComponent implements OnInit {

  @Input() hero: testComponent;
  constructor() { }

  ngOnInit() {
  }

}
