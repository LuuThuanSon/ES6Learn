

let f = (message: string, ...colors: string[]) => {
    console.log(message)
    for (let i in colors) {
        console.log(colors[i])
        console.log(colors)
    }
}

let msg = "Hello"

f(msg, "Red")
f(msg, "Red", "Green")
f(msg, "Red", "Green", "Yellow")

let fu = (message: string, ...colors: string[]) => {
    console.log(message)
    for (let i in colors) {
        console.log(colors[i])
    }
}

let msg1 = "Hello"
let colors: string[] = ["Red", "Green", "Yellow"]

fu(msg1, ...colors)