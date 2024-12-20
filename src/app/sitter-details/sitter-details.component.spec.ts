import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitterDetailsComponent } from './sitter-details.component';

describe('SitterDetailsComponent', () => {
  let component: SitterDetailsComponent;
  let fixture: ComponentFixture<SitterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitterDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
