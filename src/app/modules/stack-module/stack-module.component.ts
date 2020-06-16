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

  ngOnInit(): void {
    this.getStacks();
  }

  getStacks(): void {
    this.allStacks = this.stacks.getAllStacks();
  }

  searchTechnology(value: string) {
    let data: StackCategory[] = [];
    this.stacks.getAllStacks().forEach(({ category, stacks }) => {
      let _stacks = stacks.filter(({ name }) => name.includes(value));
      if (_stacks.length !== 0) {
        data.push({ category, stacks: _stacks });
      }
    });
    this.allStacks = data;
  }


  get totalStackLength(): number {
    let total: number = 0;
    let stacks: StackCategory[] = this.stacks.getAllStacks();
    for (let i in stacks) {
      total += stacks[i].stacks.length;
    }
    return total;
  }
}
