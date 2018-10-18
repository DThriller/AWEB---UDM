import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhungSanphamComponent } from './khung-sanpham.component';

describe('KhungSanphamComponent', () => {
  let component: KhungSanphamComponent;
  let fixture: ComponentFixture<KhungSanphamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhungSanphamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhungSanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
