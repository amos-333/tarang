import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioscopeComponent } from './bioscope.component';

describe('BioscopeComponent', () => {
  let component: BioscopeComponent;
  let fixture: ComponentFixture<BioscopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioscopeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioscopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
