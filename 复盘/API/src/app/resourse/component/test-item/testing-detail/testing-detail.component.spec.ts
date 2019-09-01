import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingDetailComponent } from './testing-detail.component';

describe('TestingDetailComponent', () => {
  let component: TestingDetailComponent;
  let fixture: ComponentFixture<TestingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
