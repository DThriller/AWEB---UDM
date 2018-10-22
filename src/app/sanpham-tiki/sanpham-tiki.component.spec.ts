import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanphamTikiComponent } from './sanpham-tiki.component';

describe('SanphamTikiComponent', () => {
  let component: SanphamTikiComponent;
  let fixture: ComponentFixture<SanphamTikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanphamTikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanphamTikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
