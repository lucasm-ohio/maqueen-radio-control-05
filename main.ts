input.onButtonPressed(Button.A, function () {
    radio.sendString("LEFT")
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    radio.sendString("CCW")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("FORWARD")
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("RIGHT")
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("SHAKE")
    basic.showLeds(`
        . # . . #
        # . . # .
        # . . # .
        # . . # .
        . # . . #
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    radio.sendString("CW")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("BACK")
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
basic.showIcon(IconNames.Ghost)
basic.pause(500)
let radioGroup = 1
basic.showNumber(radioGroup)
radio.setGroup(radioGroup)
input.setSoundThreshold(SoundThreshold.Loud, 191)
