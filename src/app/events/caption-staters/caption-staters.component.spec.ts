import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptionStatersComponent } from './caption-staters.component';

describe('CaptionStatersComponent', () => {
  let component: CaptionStatersComponent;
  let fixture: ComponentFixture<CaptionStatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptionStatersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptionStatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
