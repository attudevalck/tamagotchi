input.onButtonPressed(Button.AB, function () {
    knuffel = 20
    voeding = 20
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
let voeding = 0
let knuffel = 0
knuffel = 20
voeding = 20
let dood = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
loops.everyInterval(1000, function () {
    knuffel += -1
    voeding += -1
})
basic.forever(function () {
    if ((knuffel || voeding) < 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
basic.forever(function () {
    if ((knuffel || voeding) < 20) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        knuffel += 5
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        voeding += 5
    }
})
basic.forever(function () {
    if (dood == 1) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
