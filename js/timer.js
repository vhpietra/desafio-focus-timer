import Sounds from "./sounds.js"

export function Timer({
  minutesDisplay,
  secondsDisplay,
  minutes
}) {

  let timerTimeOut


  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }
  
  function countdown() {
    timerTimeOut = setTimeout(function() {
      let seconds =  Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
  
      updateDisplay(minutes, 0)
  
      if (minutes <= 0 && seconds <= 0) {
        updateDisplay()
        Sounds().timeEnd()
        return
      }
  
      if(seconds <= 0) {
        seconds = 60
        --minutes
      }
  
      updateDisplay(minutes, String(seconds - 1))
  
      countdown()
    }, 1000)
  }

  function increaseTime() {
    let minutes = Number(minutesDisplay.textContent)
    let seconds =  Number(secondsDisplay.textContent)
    seconds = seconds
    updateDisplay(minutes + 5, seconds)
  }

  function decreaseTime() {
    let minutes = Number(minutesDisplay.textContent)
    let seconds =  Number(secondsDisplay.textContent)
    seconds = seconds
    updateDisplay(minutes - 5, seconds)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  return {
    reset,
    countdown,
    updateDisplay,
    updateMinutes,
    increaseTime,
    decreaseTime
  }
}