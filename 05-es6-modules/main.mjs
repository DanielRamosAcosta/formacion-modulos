import { add } from "./math.mjs";

// console.log(MyMath.add(5, 4))
console.log(add(6, 2))

setTimeout(() => {
  import('./mini-lodash.mjs')
    .then(lodash => {
      console.log(lodash)

      console.log(lodash.uniqueElements(['a', 'b', 'b']))
    })
}, 3000)