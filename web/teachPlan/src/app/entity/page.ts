export class Page<T> {
  content: Array<T>;
  number: number;
  size: number;
  totalElements: number;
  constructor() {
    this.content = [];
  }
}
