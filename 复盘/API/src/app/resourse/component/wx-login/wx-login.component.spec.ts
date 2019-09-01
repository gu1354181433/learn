import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WxLoginComponent } from './wx-login.component';

describe('WxLoginComponent', () => {
  let component: WxLoginComponent;
  let fixture: ComponentFixture<WxLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WxLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WxLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
