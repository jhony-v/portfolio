import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-navigator',
  templateUrl: './link-navigator.component.html',
  styleUrls: ['./link-navigator.component.styl']
})
export class LinkNavigatorComponent implements OnInit {

  @Input("text") text : string;
  @Input("href-link") hrefLink : string;

  constructor() { }

  ngOnInit(): void {
  }

}
