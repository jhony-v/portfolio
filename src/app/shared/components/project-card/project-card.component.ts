import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.styl']
})
export class ProjectCardComponent implements OnInit {

  @Input('image') image : string;
  @Input('title') title : string;
  @Input('detail') detail : string;

  constructor() { }

  ngOnInit(): void {
  }

}
