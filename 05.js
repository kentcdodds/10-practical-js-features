// Arrow Functions

function multiArgument() {
  // refactor to an arrow function
  const divide = function(a, b) {
    return a / b
  }
  return divide(40, 10)
}

function noArgument() {
  // refactor to an arrow function
  const getFive = function() {
    return 5
  }
  return getFive()
}

function singleArgument() {
  // refactor to an arrow function
  const identity = function(i) {
    return i
  }
  return identity(350)
}

function spreadWithArrow() {
  // refactor to an arrow function
  const asArray = function(...args) {
    return args
  }
  return asArray(1, 2, 3, 4)
}

function withStatements() {
  // refactor to an arrow function
  const tryInvoke = function(obj, fn, ...args) {
    try {
      return obj[fn](...args)
    } catch (e) {
      return undefined
    }
  }
  return tryInvoke(Math, 'pow', 2, 3)
}

function withObject() {
  // refactor to an arrow function
  const getObject = function(favoriteCandy) {
    return {favoriteCandy}
  }
  return getObject('twix')
}

function withMultiLineExpression() {
  const getString = function(name) {
    return `
        Hello there ${name}
        How are you doing today?
      `
  }
  return getString('Ryan')
}

function curryAdd() {
  // refactor to a arrow functions
  return curryAddition(9)(3)(5)

  function curryAddition(a) {
    return function(b) {
      return function(c) {
        return a + b + c
      }
    }
  }
}

function context() {
  const population = {
    unit: 'Million',
    data: [
      {city: 'Tokyo', value: 37.833},
      {city: 'Sanghai', value: 22.991},
      {city: 'New Delhi', value: 24.953},
    ],
    display() {
      return this.data.map(function populationStringMapper(element) {
        return `Population in ${element.city} is ${element.value} ${this.unit}`
      }, this) // passing `this` as second argument to bind properly
    },
  }
  return population.display()
}

function noBind() {
  // what will this function return?
  const user = {
    id: 42,
    getIdGetter() {
      return () => this.id
    },
  }
  const idGetter = user.getIdGetter()
  const idGetter24 = idGetter.bind({id: 24})
  return idGetter24()
}
