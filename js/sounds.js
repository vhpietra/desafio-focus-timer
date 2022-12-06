export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const forestAudio = new Audio('../sounds/Floresta.wav')
  const rainAudio = new Audio('../sounds/Chuva.wav')
  const coffeeAudio = new Audio('../sounds/Cafeteria.wav')
  const firePlaceAudio = new Audio('../sounds/Lareira.wav')

  forestAudio.loop = true
  rainAudio.loop = true
  coffeeAudio.loop = true
  firePlaceAudio.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function stopAudios() {
    if(forestAudio.play()) {
      forestAudio.pause()
    }
    if(rainAudio.play()) {
      rainAudio.pause()
    }
    if(coffeeAudio.play()) {
      coffeeAudio.pause()
    }
    if(firePlaceAudio.play()) {
      firePlaceAudio.pause()
    }
  }

  return {
    pressButton,
    timeEnd,
    stopAudios,
    forestAudio,
    rainAudio,
    coffeeAudio,
    firePlaceAudio
  }
}
