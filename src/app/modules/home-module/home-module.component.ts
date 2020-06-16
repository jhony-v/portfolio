import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface LinkContact {
  link : string;
  name : string;
  image : string;
}

@Component({
  selector: 'app-home-module',
  templateUrl: './home-module.component.html',
  styleUrls: ['./home-module.component.styl']
})
export class HomeModuleComponent implements OnInit {


  private allLinksContact : LinkContact[];

  constructor( private router : Router) { 
  }

  ngOnInit(): void {
  }

  navigateNext() {
    this.router.navigate(['/history']);
  }

}
