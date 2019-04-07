import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent implements OnInit, AfterViewInit {

  constructor(private titleService: Title) {
    titleService.setTitle('OBAD - Calendrier');
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();
  }

}
