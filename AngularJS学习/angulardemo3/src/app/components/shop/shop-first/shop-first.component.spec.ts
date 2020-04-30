import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFirstComponent } from './shop-first.component';

describe('ShopFirstComponent', () => {
  let component: ShopFirstComponent;
  let fixture: ComponentFixture<ShopFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
