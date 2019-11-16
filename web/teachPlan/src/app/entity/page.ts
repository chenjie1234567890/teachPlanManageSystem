import {Sort} from "./sort";

export class Page<T> {
  content: Array<T>;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number;
  constructor() {
    this.content = [];
  }
}
