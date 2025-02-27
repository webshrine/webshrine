/** @see https://github.com/lukeed/clsx */
export {
  clsx as classNames,
} from 'clsx'

// export function scrollTo() {

// }

export enum KeyboardKeyCodes {
  Enter = 13,
  Escape = 27,
  Space = 32,
  ArrowUp = 38,
  ArrowDown = 40,
  ArrowLeft = 37,
  ArrowRight = 39,
  Home = 36,
  End = 35,
  Tab = 9,
  Backspace = 8,
  Delete = 46,
  A = 65,
  Z = 90,
  Zero = 48,
  Nine = 57,
  NumPadZero = 96,
  NumPadNine = 105,
  Backquote = 192,
  Minus = 189,
  Equal = 187,
  BracketLeft = 219,
  BracketRight = 221,
  Backslash = 220,
  Semicolon = 186,
  Quote = 222,
  Comma = 188,
  Period = 190,
  Slash = 191,
  Backslash2 = 226,
  // IntlBackslash = 220,
  CapsLock = 20,
  PageUp = 33,
  PageDown = 34,
  Insert = 45,
  Pause = 19,
  ScrollLock = 145,
  NumpadDivide = 111,
  NumpadMultiply = 106,
  NumpadSubtract = 109,
  NumpadAdd = 107,
  NumpadDecimal = 110,
  F1 = 112,
  F2 = 113,
  F3 = 114,
  F4 = 115,
  F5 = 116,
  F6 = 117,
  F7 = 118,
  F8 = 119,
  F9 = 120,
  F10 = 121,
  F11 = 122,
  F12 = 123,
  NumLock = 144,
  NumpadEqual = 12,
}

interface IHandlerOptions {
  stop?: boolean
  stopImmediate?: boolean
  prevent?: boolean
}

/**
 *
 */
export const handler = <E extends Event>(callback, options: IHandlerOptions) => {
  return (event: E) => {
    callback()

    if (options.stop)
      event.stopPropagation()
    if (options.stopImmediate)
      event.stopPropagation()
    if (options.prevent)
      event.preventDefault()
  }
}
