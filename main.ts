radio.onReceivedString(function (receivedString) {
    if (receivedString == "1") {
        kitronik_servo_lite.forward()
    }
    if (receivedString == "2") {
        kitronik_servo_lite.backward()
    }
    if (receivedString == "3") {
        kitronik_servo_lite.right()
    }
    if (receivedString == "4") {
        kitronik_servo_lite.left()
    }
    if (receivedString == "5") {
        kitronik_servo_lite.stop()
    }
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
})
let strip: neopixel.Strip = null
radio.setGroup(5)
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Orange))
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(500)
})
