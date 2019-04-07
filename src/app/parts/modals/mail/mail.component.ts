import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  @Input() modalName: string;

  constructor() { }

  ngOnInit() {
  }

}
