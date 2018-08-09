(function (globalName, root, factory) {
  const estoyEnNode = typeof exports === 'object'

  if (estoyEnNode) {
    module.exports = factory()
  } else {
    root[globalName] = factory()
  }
})('MyMath', this, function() {
  function add(num1, num2) {
    return num1 + num2
  }
  
  function mult(num1, num2) {
    return num1 * num2
  }
  
  return {
    add,
    mult
  }
})
