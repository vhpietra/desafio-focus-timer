const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonLess = document.querySelector('.less')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('.coffee')
const buttonFirePlace = document.querySelector('.fireplace')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonForestSvgBg = document.querySelector('.forest').querySelector('svg').querySelector('.path1')
const buttonForestSvgImg = document.querySelector('.forest').querySelector('svg').querySelector('.path2')
const buttonRainSvgBg = document.querySelector('.rain').querySelector('svg').querySelector('.path1')
const buttonRainSvgImg = document.querySelector('.rain').querySelector('svg').querySelector('.path2')
const buttonCoffeeSvgBg = document.querySelector('.coffee').querySelector('svg').querySelector('.path1')
const buttonCoffeeSvgImg = document.querySelector('.coffee').querySelector('svg').querySelector('.path2')
const buttonFirePlaceSvgBg = document.querySelector('.fireplace').querySelector('svg').querySelector('.path1')
const buttonFirePlaceSvgImg = document.querySelector('.fireplace').querySelector('svg').querySelector('.path2')


export {
  buttonStop,
  buttonPlay,
  buttonLess,
  buttonRain,
  buttonForest,
  buttonPlus,
  minutesDisplay,
  secondsDisplay,
  buttonCoffee,
  buttonFirePlace,
  buttonForestSvgBg,
  buttonForestSvgImg,
  buttonRainSvgBg,
  buttonRainSvgImg,
  buttonCoffeeSvgBg,
  buttonCoffeeSvgImg,
  buttonFirePlaceSvgBg,
  buttonFirePlaceSvgImg
}