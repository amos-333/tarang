import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauhiezenComponent } from './tauhiezen.component';

describe('TauhiezenComponent', () => {
  let component: TauhiezenComponent;
  let fixture: ComponentFixture<TauhiezenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TauhiezenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TauhiezenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
