import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionTournoiComponent } from './inscription-tournoi.component';

describe('InscriptionTournoiComponent', () => {
  let component: InscriptionTournoiComponent;
  let fixture: ComponentFixture<InscriptionTournoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionTournoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionTournoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
