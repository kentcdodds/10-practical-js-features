// Ternaries

function simpleIfStatement(a) {
  if (a) {
    return 'foo'
  } else {
    return 'bar'
  }
}

function complexIfStatement(a, b) {
  if (a) {
    return 'foo'
  } else if (b) {
    return 'bar'
  } else {
    return 'buzz'
  }
}

function reallyComplexIfStatement(a, b, c) {
  if (a) {
    return 'foo'
  } else if (b) {
    if (c) {
      return 'barc'
    } else {
      return 'bar'
    }
  } else {
    return 'buzz'
  }
}
