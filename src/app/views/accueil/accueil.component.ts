import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  isAuth: boolean;
  yearCopyright = (new Date()).getFullYear();

  constructor(private titleService: Title, private authService: AuthService) {
    titleService.setTitle('OBAD - Accueil');
  }

  ngOnInit() {

    this.isAuth = this.authService.isAuth;
  }

}
