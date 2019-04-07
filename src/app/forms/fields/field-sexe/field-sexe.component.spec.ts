import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldSexeComponent } from './field-sexe.component';

describe('FieldSexeComponent', () => {
  let component: FieldSexeComponent;
  let fixture: ComponentFixture<FieldSexeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldSexeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldSexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
