import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-base',
  templateUrl: './button-base.component.html',
  styleUrls: ['./button-base.component.styl']
})
export class ButtonBaseComponent implements OnInit {

  @Input('title') title : string;

  constructor() { }

  ngOnInit(): void {
  }

}
