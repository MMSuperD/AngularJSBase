import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSecoundComponent } from './shop-secound.component';

describe('ShopSecoundComponent', () => {
  let component: ShopSecoundComponent;
  let fixture: ComponentFixture<ShopSecoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSecoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopSecoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
