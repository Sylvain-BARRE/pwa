import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldVilleComponent } from './field-ville.component';

describe('FieldVilleComponent', () => {
  let component: FieldVilleComponent;
  let fixture: ComponentFixture<FieldVilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldVilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
