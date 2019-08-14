// Modules

// https://kentcdodds.com/talks/#more-than-you-want-to-know-about-e-s6-modules
// https://slides.com/kentcdodds/es6-modules

export default function add(a, b) {
  return a + b
}

/*
 * import add from './add'
 * console.assert(add(3, 2) === 5)
 */

export const foo = 'bar'

/*
 * import {foo} from './foo'
 * console.assert(foo === 'bar')
 */

export function subtract(a, b) {
  return a - b
}

export const now = new Date()

/*
 * import {subtract, now} from './stuff'
 * console.assert(subtract(4, 2) === 2)
 * console.assert(now instanceof Date)
 */

// as list
// with alias
// list as default
// basic import
// import default
// import named exports
// alias imports
// import default as alias
// default & named imports
// import *
// export *
// export {default, foo, bar}
