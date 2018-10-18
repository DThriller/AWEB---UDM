import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanphamLazadaComponent } from './sanpham-lazada.component';

describe('SanphamLazadaComponent', () => {
  let component: SanphamLazadaComponent;
  let fixture: ComponentFixture<SanphamLazadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanphamLazadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanphamLazadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
