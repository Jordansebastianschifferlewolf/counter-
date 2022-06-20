input.onButtonPressed(Button.A, function () {
    basic.showNumber(count)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0)
    count = _0
})
input.onButtonPressed(Button.B, function () {
    count += 1
    basic.showNumber(count)
})
let count = 0
let _0 = 0
basic.showNumber(0)
count = _0
