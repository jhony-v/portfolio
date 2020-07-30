import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-detail-master',
  templateUrl: './card-detail-master.component.html',
  styleUrls: ['./card-detail-master.component.styl']
})
export class CardDetailMasterComponent implements OnInit {

  @Input('title') title : string;
  @Input('description') description : string;
  @Input('background') background : string;
  @Input('icon') icon : string;
  @Input('link') link : string = null;
  constructor() { }

  ngOnInit(): void {
  }

}
