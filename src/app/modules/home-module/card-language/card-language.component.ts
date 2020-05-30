import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-language',
  templateUrl: './card-language.component.html',
  styleUrls: ['./card-language.component.styl'],
})
export class CardLanguageComponent implements OnInit {
  @Input('image') image: string;
  @Input('title') title: string;
  @Input('detail') detail: string;

  constructor() {}

  ngOnInit(): void {}
}
