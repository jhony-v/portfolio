import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-base',
  templateUrl: './text-base.component.html',
  styleUrls: ['./text-base.component.styl'],
})
export class TextBaseComponent implements OnInit {
  @Input('text') text: string;
  @Input('theme-color') themeColor: string;
  @Input('text-size') textSize: string;

  constructor() {
    this.text = '';
    this.themeColor = 'primary';
    this.textSize = 'normal';
  }

  ngOnInit(): void {}
}
