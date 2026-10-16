basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        music.play(music.stringPlayable("D E G D G A A F ", 1000), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . # . .
            . # # # .
            . # . # .
            # . # . #
            # . # . #
            `)
    }
})
