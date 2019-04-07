import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldLicencieComponent } from './field-licencie.component';

describe('FieldLicencieComponent', () => {
  let component: FieldLicencieComponent;
  let fixture: ComponentFixture<FieldLicencieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldLicencieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldLicencieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
