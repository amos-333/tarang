import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquizateComponent } from './inquizate.component';

describe('InquizateComponent', () => {
  let component: InquizateComponent;
  let fixture: ComponentFixture<InquizateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InquizateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InquizateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
