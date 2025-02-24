input.onButtonPressed(Button.A, function () {
    if (dood == 1) {
        knuffel += 0
    } else {
        knuffel += 5
    }
})
input.onButtonPressed(Button.B, function () {
    if (dood == 1) {
        voeding += 0
    } else {
        voeding += 5
    }
})
let dood = 0
let knuffel = 20
let voeding = 20
dood = 0
loops.everyInterval(1000, function () {
    knuffel += -1
    voeding += -1
})
basic.forever(function () {
    if (voeding < 0 && knuffel < 0) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
        dood = 1
    } else if (voeding < 10 && knuffel < 10) {
        basic.showIcon(IconNames.Sad)
    } else if (voeding < 20 && knuffel < 20) {
        basic.showIcon(IconNames.Happy)
    }
})
basic.forever(function () {
    if (dood == 1) {
    	
    }
})
