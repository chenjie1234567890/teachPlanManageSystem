export class Page<T> {
  content: Array<T>;
  number: number;
  size: number;
  total: number;
  constructor() {
    this.content = [];
  }
}
