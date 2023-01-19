input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
basic.forever(function () {
    music.playMelody("F B A F F A B D ", 200)
})
