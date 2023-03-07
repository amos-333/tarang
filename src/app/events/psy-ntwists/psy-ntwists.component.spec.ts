import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsyNtwistsComponent } from './psy-ntwists.component';

describe('PsyNtwistsComponent', () => {
  let component: PsyNtwistsComponent;
  let fixture: ComponentFixture<PsyNtwistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsyNtwistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsyNtwistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
