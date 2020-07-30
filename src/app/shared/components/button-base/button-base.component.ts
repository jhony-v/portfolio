import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-base',
  templateUrl: './button-base.component.html',
  styleUrls: ['./button-base.component.styl']
})
export class ButtonBaseComponent implements OnInit {

  @Input('title') title : string;
  @Input('primary') primary : boolean;
  @Input('dark') dark : boolean;
  @Output() onClickEmiter : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickPressed() {
    this.onClickEmiter.emit();
  }

}
