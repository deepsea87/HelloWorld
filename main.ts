input.onButtonPressed(Button.A, function () {
    basic.showString("Deepsy")
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 A B G A F G E ", 120)
    basic.showIcon(IconNames.SmallHeart)
})
basic.showIcon(IconNames.Heart)
