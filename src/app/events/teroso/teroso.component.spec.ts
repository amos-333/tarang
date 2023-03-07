import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerosoComponent } from './teroso.component';

describe('TerosoComponent', () => {
  let component: TerosoComponent;
  let fixture: ComponentFixture<TerosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerosoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
