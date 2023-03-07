import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafiaComponent } from './grafia.component';

describe('GrafiaComponent', () => {
  let component: GrafiaComponent;
  let fixture: ComponentFixture<GrafiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrafiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
