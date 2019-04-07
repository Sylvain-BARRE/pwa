import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-tournoi',
  templateUrl: './tournoi.component.html',
  styleUrls: ['./tournoi.component.scss']
})
export class TournoiComponent implements OnInit, AfterViewInit {

  constructor(private titleService: Title) {
    titleService.setTitle('OBAD - Tournois');
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();
  }
}
