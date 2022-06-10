radio.onReceivedNumber(function (receivedNumber) {
    speed = receivedNumber
    if (speed > 0) {
        basic.showString("F")
    } else {
        basic.showString("R")
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("start_stop")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("left")
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendString("straight")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("start_stop")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("start_stop")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("right")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendString("reverse")
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    radio.sendString("reverse")
})
let speed = 0
radio.setGroup(0)
speed = 40
basic.showString("F")
