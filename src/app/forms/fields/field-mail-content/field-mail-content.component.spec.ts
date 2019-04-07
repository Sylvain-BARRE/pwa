import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldMailContentComponent } from './field-mail-content.component';

describe('FieldMailContentComponent', () => {
  let component: FieldMailContentComponent;
  let fixture: ComponentFixture<FieldMailContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldMailContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldMailContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
