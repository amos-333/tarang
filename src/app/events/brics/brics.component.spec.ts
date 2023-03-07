import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BricsComponent } from './brics.component';

describe('BricsComponent', () => {
  let component: BricsComponent;
  let fixture: ComponentFixture<BricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
