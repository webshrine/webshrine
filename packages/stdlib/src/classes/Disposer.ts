/** @category Classes */
export class Disposer implements Disposable {
  /** Ctor. */
  constructor(
    private readonly disposeCallback: () => void,
  ) { }

  /**
   *
   */
  [Symbol.dispose]() {
    this.disposeCallback()
  }
}
