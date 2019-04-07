import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-field-licencie',
  templateUrl: './field-licencie.component.html',
  styleUrls: ['./field-licencie.component.scss']
})
export class FieldLicencieComponent implements OnInit {

  @Input() listeLicence: any[];
  @Input() required = false;
  @Input() label = 'Licencié(e)';

  constructor() { }

  ngOnInit() {
  }

}
