import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldMailSubjectComponent } from './field-mail-subject.component';

describe('FieldMailSubjectComponent', () => {
  let component: FieldMailSubjectComponent;
  let fixture: ComponentFixture<FieldMailSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldMailSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldMailSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
