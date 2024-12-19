import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetSitterSignupComponent } from './pet-sitter-signup.component';

describe('PetSitterSignupComponent', () => {
  let component: PetSitterSignupComponent;
  let fixture: ComponentFixture<PetSitterSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetSitterSignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetSitterSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
