import {   
  buttonForestSvgBg,
  buttonForestSvgImg,
  buttonRainSvgBg,
  buttonRainSvgImg,
  buttonCoffeeSvgBg,
  buttonCoffeeSvgImg,
  buttonFirePlaceSvgBg,
  buttonFirePlaceSvgImg
} from "./elements.js"


export function Controls() {

  function changeForestButtonColors() {
    buttonForestSvgBg.style.fill = "#02799D"
    buttonForestSvgImg.style.fill = "white"

    if(buttonRainSvgImg.style.fill !== "#323238") {
      buttonRainSvgBg.style.fill = "#E1E1E6"
      buttonRainSvgImg.style.fill = "#323238"
    }
    if(buttonCoffeeSvgImg.style.fill !== "#323238") {
      buttonCoffeeSvgBg.style.fill = "#E1E1E6"
      buttonCoffeeSvgImg.style.fill = "#323238"
    }
    if(buttonFirePlaceSvgImg.style.fill !== "#323238") {
      buttonFirePlaceSvgBg.style.fill = "#E1E1E6"
      buttonFirePlaceSvgImg.style.fill = "#323238"
    }
  }

  function changeRainButtonColors() {
    buttonRainSvgBg.style.fill = "#02799D"
    buttonRainSvgImg.style.fill = "white"

    if(buttonForestSvgImg.style.fill !== "#323238") {
      buttonForestSvgBg.style.fill = "#E1E1E6"
      buttonForestSvgImg.style.fill = "#323238"
    }
    if(buttonCoffeeSvgImg.style.fill !== "#323238") {
      buttonCoffeeSvgBg.style.fill = "#E1E1E6"
      buttonCoffeeSvgImg.style.fill = "#323238"
    }
    if(buttonFirePlaceSvgImg.style.fill !== "#323238") {
      buttonFirePlaceSvgBg.style.fill = "#E1E1E6"
      buttonFirePlaceSvgImg.style.fill = "#323238"
    }
  }

  function changeCoffeeButtonColors() {
    buttonCoffeeSvgBg.style.fill = "#02799D"
    buttonCoffeeSvgImg.style.fill = "white"

    if(buttonRainSvgImg.style.fill !== "#323238") {
      buttonRainSvgBg.style.fill = "#E1E1E6"
      buttonRainSvgImg.style.fill = "#323238"
    }
    if(buttonForestSvgImg.style.fill !== "#323238") {
      buttonForestSvgBg.style.fill = "#E1E1E6"
      buttonForestSvgImg.style.fill = "#323238"
    }
    if(buttonFirePlaceSvgImg.style.fill !== "#323238") {
      buttonFirePlaceSvgBg.style.fill = "#E1E1E6"
      buttonFirePlaceSvgImg.style.fill = "#323238"
    }
  }

  function changeFirePlaceButtonColors() {
    buttonFirePlaceSvgBg.style.fill = "#02799D"
    buttonFirePlaceSvgImg.style.fill = "white"

    if(buttonRainSvgImg.style.fill !== "#323238") {
      buttonRainSvgBg.style.fill = "#E1E1E6"
      buttonRainSvgImg.style.fill = "#323238"
    }
    if(buttonCoffeeSvgImg.style.fill !== "#323238") {
      buttonCoffeeSvgBg.style.fill = "#E1E1E6"
      buttonCoffeeSvgImg.style.fill = "#323238"
    }
    if(buttonForestSvgImg.style.fill !== "#323238") {
      buttonForestSvgBg.style.fill = "#E1E1E6"
      buttonForestSvgImg.style.fill = "#323238"
    }
  }

  function resetButtonsColors() {
    if(buttonForestSvgImg.style.fill !== "#323238") {
      buttonForestSvgBg.style.fill = "#E1E1E6"
      buttonForestSvgImg.style.fill = "#323238"
    }
    if(buttonRainSvgImg.style.fill !== "#323238") {
      buttonRainSvgBg.style.fill = "#E1E1E6"
      buttonRainSvgImg.style.fill = "#323238"
    }
    if(buttonCoffeeSvgImg.style.fill !== "#323238") {
      buttonCoffeeSvgBg.style.fill = "#E1E1E6"
      buttonCoffeeSvgImg.style.fill = "#323238"
    }
    if(buttonFirePlaceSvgImg.style.fill !== "#323238") {
      buttonFirePlaceSvgBg.style.fill = "#E1E1E6"
      buttonFirePlaceSvgImg.style.fill = "#323238"
    }
  }

  return {
    changeForestButtonColors,
    changeRainButtonColors,
    changeCoffeeButtonColors,
    changeFirePlaceButtonColors,
    resetButtonsColors
  }
}