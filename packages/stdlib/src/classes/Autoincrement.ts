export class Autoincrement {
  value!: number

  constructor(readonly initialValue = 0) {
    this.set(initialValue)
  }

  set = (newValue: number) => {
    this.value = newValue
  }

  next = () => this.value++

  reset = () => {
    this.value = this.initialValue
  }

  exclude = (maxExistingId: number) => {
    if (maxExistingId > this.value)
      this.set(maxExistingId)
  }
}

export class AutoincrementMap<Key> {
  map = new Map<Key, Autoincrement>()

  constructor(readonly initialValue = 0) { }

  nextFor(key: Key) {
    if (!this.map.has(key))
      this.map.set(key, new Autoincrement(this.initialValue))

    const itemAutoincrement = this.map.get(key)!
    return itemAutoincrement.next()
  }
}
