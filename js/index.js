import { Controls } from './controls.js'
import { Timer } from "./timer.js"
import Sounds from './sounds.js'
import {   
  buttonStop,
  buttonPlay,
  buttonLess,
  buttonRain,
  buttonForest,
  buttonPlus,
  minutesDisplay,
  secondsDisplay,
  buttonCoffee,
  buttonFirePlace
} from "./elements.js"


let minutes = Number(minutesDisplay.textContent)

const controls = Controls()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  minutes
})

const sound = Sounds()


buttonPlay.addEventListener('click', function() {
  timer.countdown()
  sound.pressButton()
  buttonPlay.disabled = true
})

buttonStop.addEventListener('click', function() {
  timer.reset()
  sound.pressButton()
  buttonPlay.disabled = false
  sound.stopAudios()
  controls.resetButtonsColors()
})

buttonPlus.addEventListener('click', function() {
  timer.increaseTime()
  sound.pressButton()
})

buttonLess.addEventListener('click', function() {
  timer.decreaseTime()
  sound.pressButton()
})

buttonForest.addEventListener('click', function() {
  sound.stopAudios()
  sound.forestAudio.play()
  controls.changeForestButtonColors()
})

buttonRain.addEventListener('click', function() {
  sound.stopAudios()
  sound.rainAudio.play()
  controls.changeRainButtonColors()
})

buttonCoffee.addEventListener('click', function() {
  sound.stopAudios()
  sound.coffeeAudio.play()
  controls.changeCoffeeButtonColors()
})

buttonFirePlace.addEventListener('click', function() {
  sound.stopAudios()
  sound.firePlaceAudio.play()
  controls.changeFirePlaceButtonColors()
})
