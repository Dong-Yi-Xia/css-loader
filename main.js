const loader = document.querySelector('.loader')
const main = document.querySelector('.main')

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none'

    // main.style.display = 'block'
    // Same as above
    main.style.setProperty('display', 'block')

    setTimeout(() => (main.style.opacity = 1), 50)
  }, 3000)
}

init()





// Access the css variables
const box1 =  document.querySelector('.box1')
const box1Style = getComputedStyle(box1)

console.log(box1Style)

const boxMainColor = box1Style.getPropertyValue('--box-bg-color')

console.log('this', boxMainColor)

