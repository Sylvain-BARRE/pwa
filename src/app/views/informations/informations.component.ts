import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('OBAD - Informations');
  }

  ngOnInit() {
  }

}
