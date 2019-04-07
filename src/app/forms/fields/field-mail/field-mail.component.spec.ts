import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldMailComponent } from './field-mail.component';

describe('FieldMailComponent', () => {
  let component: FieldMailComponent;
  let fixture: ComponentFixture<FieldMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
