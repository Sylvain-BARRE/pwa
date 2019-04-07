import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldIdentiteComponent } from './field-identite.component';

describe('FieldIdentiteComponent', () => {
  let component: FieldIdentiteComponent;
  let fixture: ComponentFixture<FieldIdentiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldIdentiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldIdentiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
