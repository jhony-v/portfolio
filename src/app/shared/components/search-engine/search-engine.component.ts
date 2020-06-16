import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.styl'],
})
export class SearchEngineComponent {
  @Input('placeholder') placeholder: string = '';
  @Output() onSearchEvent : EventEmitter<string> = new EventEmitter<string>();

  keyUpSearch(value: string) {
    this.onSearchEvent.emit(value);
  }
}
