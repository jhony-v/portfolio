import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-point-history',
  templateUrl: './card-point-history.component.html',
  styleUrls: ['./card-point-history.component.styl']
})
export class CardPointHistoryComponent implements OnInit {

  @Input('title-text') titleText : string;
  @Input('detail-text') detailText : string;
  constructor() { }

  ngOnInit(): void {
  }

}
