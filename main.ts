input.onButtonPressed(Button.AB, function () {
    voeding = 20
    knuffel = 20
    dood = 0
})
let dood = 0
let voeding = 0
let knuffel = 0
knuffel = 20
voeding = 20
dood = 0
loops.everyInterval(1000, function () {
    knuffel += -1
    voeding += -1
})
basic.forever(function () {
    if (voeding < 0 || knuffel < 0) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
    } else if (voeding < 10 || knuffel < 10) {
        basic.showIcon(IconNames.Sad)
    } else if (voeding < 20 || knuffel < 20) {
        basic.showIcon(IconNames.Happy)
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
    if (true) {
    	
    }
})
