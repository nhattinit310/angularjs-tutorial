import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponetDetailComponent } from './test-componet-detail.component';

describe('TestComponetDetailComponent', () => {
  let component: TestComponetDetailComponent;
  let fixture: ComponentFixture<TestComponetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
