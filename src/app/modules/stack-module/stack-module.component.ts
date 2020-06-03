import { Component, OnInit } from '@angular/core';
import { StackService, StackCategory } from 'src/app/services/stack.service';

@Component({
  selector: 'app-stack-module',
  templateUrl: './stack-module.component.html',
  styleUrls: ['./stack-module.component.styl'],
})
export class StackModuleComponent implements OnInit {
  allStacks: StackCategory[];
  constructor(private stacks: StackService) {}

  getStacks(): void {
    this.allStacks = this.stacks.getAllStacks();
  }

  ngOnInit(): void {
    this.getStacks();
  }
}
