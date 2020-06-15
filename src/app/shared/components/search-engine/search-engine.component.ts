import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.styl']
})
export class SearchEngineComponent implements OnInit {

  @Input('placeholder') placeholder : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
