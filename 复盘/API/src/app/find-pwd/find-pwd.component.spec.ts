import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPwdComponent } from './find-pwd.component';

describe('FindPwdComponent', () => {
  let component: FindPwdComponent;
  let fixture: ComponentFixture<FindPwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
