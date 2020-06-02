import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fluid-card-information',
  templateUrl: './fluid-card-information.component.html',
  styleUrls: ['./fluid-card-information.component.styl'],
})
export class FluidCardInformationComponent implements OnInit {
  @Input('title') title: string;
  @Input('detail') detail: string;
  @Input('image-avatar') imageAvatar: string;
  constructor() {}

  ngOnInit(): void {}
}
