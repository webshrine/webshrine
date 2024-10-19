export class Disposer implements Disposable {
  constructor(
    private readonly disposeCallback: () => void,
  ) { }

  [Symbol.dispose]() {
    this.disposeCallback()
  }
}
