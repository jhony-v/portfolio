import { Component, OnInit } from '@angular/core';

export interface PathNavigation {
  href: string;
  text: string;
}

@Component({
  selector: 'app-list-links-navigator',
  templateUrl: './list-links-navigator.component.html',
  styleUrls: ['./list-links-navigator.component.styl'],
})
export class ListLinksNavigatorComponent implements OnInit {
  linksNavigator: PathNavigation[];

  constructor() {
    this.linksNavigator = [
      { href: '/', text: 'Quien soy' },
      { href: '/history', text: 'Mi historia' },
      { href: '/dedicate', text: 'Que hago' },
      { href: '/stack', text: 'Stack tecnologico' },
      { href: '/projects', text: 'Proyectos' },
    ];
  }

  ngOnInit(): void {}
}
