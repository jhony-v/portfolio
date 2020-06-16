import { Component, OnInit } from '@angular/core';
import { StackService, StackCategory } from 'src/app/services/stack.service';

@Component({
  selector: 'app-stack-module',
  templateUrl: './stack-module.component.html',
  styleUrls: ['./stack-module.component.styl'],
})
export class StackModuleComponent implements OnInit {
  allStacks: StackCategory[];
  searchedWord : string;
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
      let _stacks = stacks.filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()));
      if (_stacks.length !== 0) {
        data.push({ category, stacks: _stacks });
      }
    });
    this.allStacks = data;
    this.searchedWord = value;
  }

  countStacks(stacks: StackCategory[]): number {
    let total: number = 0;
    for (let i in stacks) {
      total += stacks[i].stacks.length;
    }
    return total;
  }

  cancelSearch() {
    this.allStacks = this.stacks.getAllStacks();
  }

  get totalStackLength(): number {
    return this.countStacks(this.stacks.getAllStacks());
  }

  get totalStacksFiltered(): number {
    return this.countStacks(this.allStacks);
  }
}
