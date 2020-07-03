import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-circle-current-page',
  templateUrl: './circle-current-page.component.html',
  styleUrls: ['./circle-current-page.component.styl'],
})
export class CircleCurrentPageComponent implements OnInit {
  allLinksRouters: string[] = [
    '/home',
    '/history',
    '/dedicate',
    '/stack',
    '/projects',
  ];
  currentRouter: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
      this.currentRouter = location.pathname;
    });
  }

  rename() {
    this.currentRouter = 'jhony';
  }

  ngOnInit(): void {}
}
