import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInscriptionTournoiComponent } from './form-inscription-tournoi.component';

describe('FormInscriptionTournoiComponent', () => {
  let component: FormInscriptionTournoiComponent;
  let fixture: ComponentFixture<FormInscriptionTournoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInscriptionTournoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInscriptionTournoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
