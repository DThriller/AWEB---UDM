import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DANHMUCComponent } from './danhmuc.component';

describe('DANHMUCComponent', () => {
  let component: DANHMUCComponent;
  let fixture: ComponentFixture<DANHMUCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DANHMUCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DANHMUCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
