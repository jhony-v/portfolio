import { Injectable } from '@angular/core';
import stack from '../json/stack.json';
import { StackCategory } from '../@types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class StackService {
  constructor() {}

  getAllStacks(): StackCategory[] {
    return <StackCategory[]>stack;
  }
}
