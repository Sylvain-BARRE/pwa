import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-field-classement',
  templateUrl: './field-classement.component.html',
  styleUrls: ['./field-classement.component.scss']
})
export class FieldClassementComponent implements OnInit {

  @Input() label: string;
  @Input() required: boolean;

  classements = [ 'NC', 'P12', 'P11', 'P10', 'D9', 'D8', 'D7', 'R6', 'R5', 'R4', 'N3', 'N2', 'N1' ];

  constructor() { }

  ngOnInit() {
  }

}
