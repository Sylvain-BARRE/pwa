import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit, AfterViewInit {

  constructor(private titleService: Title) {
    titleService.setTitle('OBAD - Administration');
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();
  }
}
