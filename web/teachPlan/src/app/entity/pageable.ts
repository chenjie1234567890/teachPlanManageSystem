import {Sort} from "./sort";

export class Pageable {
  offset: number;
  page: number;
  size: number;
  paged: boolean;
  sort: Sort;
  unpaged: boolean;


  constructor(page: number, size: number) {
    this.page = page;
    this.size = size;
  }
}
