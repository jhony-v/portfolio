import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-module',
  templateUrl: './history-module.component.html',
  styleUrls: ['./history-module.component.styl']
})
export class HistoryModuleComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  navigateNext() {
    this.route.navigate(['/dedicate'])
  }
}
