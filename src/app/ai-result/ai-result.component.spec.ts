import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiResultComponent } from './ai-result.component';

describe('AiResultComponent', () => {
  let component: AiResultComponent;
  let fixture: ComponentFixture<AiResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
