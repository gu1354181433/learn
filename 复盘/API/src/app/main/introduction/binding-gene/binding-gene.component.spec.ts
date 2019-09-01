import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingGeneComponent } from './binding-gene.component';

describe('BindingGeneComponent', () => {
  let component: BindingGeneComponent;
  let fixture: ComponentFixture<BindingGeneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingGeneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingGeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
