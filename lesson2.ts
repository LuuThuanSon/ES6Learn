for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, 1000)
}

for (var j = 1; j <= 5; j++) {
    (function (x) {
        setTimeout(function () {
            console.log(x)
        }, 1000)
    })(j)
}