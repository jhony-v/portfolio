import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-image',
  templateUrl: './circle-image.component.html',
  styleUrls: ['./circle-image.component.styl'],
})
export class CircleImageComponent implements OnInit {
  @Input('image') image: string;
  @Input('size-image') sizeImage: string;
  constructor() {}

  ngOnInit(): void {}
}
