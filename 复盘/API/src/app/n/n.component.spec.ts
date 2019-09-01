import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NComponent } from './n.component';

describe('NComponent', () => {
  let component: NComponent;
  let fixture: ComponentFixture<NComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
