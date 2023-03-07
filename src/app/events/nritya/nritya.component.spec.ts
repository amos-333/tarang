import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NrityaComponent } from './nritya.component';

describe('NrityaComponent', () => {
  let component: NrityaComponent;
  let fixture: ComponentFixture<NrityaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NrityaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NrityaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
