let randomNbr = 0
input.onGesture(Gesture.ScreenUp, function () {
    randomNbr = 0
    while (randomNbr < 1) {
        randomNbr = randint(0, 10)
    }
    basic.showNumber(randomNbr)
})
