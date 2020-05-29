import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.styl']
})
export class CardImageComponent implements OnInit {

  @Input("image") image : string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
