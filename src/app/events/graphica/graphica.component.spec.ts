import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicaComponent } from './graphica.component';

describe('GraphicaComponent', () => {
  let component: GraphicaComponent;
  let fixture: ComponentFixture<GraphicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
