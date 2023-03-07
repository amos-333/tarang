import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicadaComponent } from './cicada.component';

describe('CicadaComponent', () => {
  let component: CicadaComponent;
  let fixture: ComponentFixture<CicadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CicadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
