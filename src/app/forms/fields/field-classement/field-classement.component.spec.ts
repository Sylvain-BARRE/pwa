import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldClassementComponent } from './field-classement.component';

describe('FieldClassementComponent', () => {
  let component: FieldClassementComponent;
  let fixture: ComponentFixture<FieldClassementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldClassementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldClassementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
