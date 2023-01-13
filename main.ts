input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
})
input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.SmallHeart)
})
basic.showIcon(IconNames.Heart)
