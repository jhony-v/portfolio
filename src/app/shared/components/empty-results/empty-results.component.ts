import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empty-results',
  templateUrl: './empty-results.component.html',
  styleUrls: ['./empty-results.component.styl']
})
export class EmptyResultsComponent {

  @Input('text-empty') textEmpty : string;
  @Output() onClickEmiter : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  onClick() {
    this.onClickEmiter.emit();
  }

}
