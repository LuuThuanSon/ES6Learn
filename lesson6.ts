let geta = () => 2
let add = (c = 1, c1 = 2 * geta(), c2 = 3) => { console.log(c + c1 + c2) }

add()
add(10)
add(10, 20)
add(10, 20, 30)