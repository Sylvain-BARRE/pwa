import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldLicenceComponent } from './field-licence.component';

describe('FieldLicenceComponent', () => {
  let component: FieldLicenceComponent;
  let fixture: ComponentFixture<FieldLicenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldLicenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
