import { Injectable } from '@angular/core';

export interface Stacks {
  image: string;
  name: string;
  detail: string;
}

export interface StackCategory {
  category: string;
  stacks: Stacks[];
}

@Injectable({
  providedIn: 'root',
})
export class StackService {
  constructor() {}
}
