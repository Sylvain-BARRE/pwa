import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-espace-membre',
  templateUrl: './espace-membre.component.html',
  styleUrls: ['./espace-membre.component.scss']
})
export class EspaceMembreComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('OBAD - Espace Membre');
  }

  ngOnInit() {
  }

}
