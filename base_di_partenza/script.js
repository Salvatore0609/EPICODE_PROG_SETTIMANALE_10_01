const header = document.querySelector('header')
const button = document.querySelector('header button')

window.addEventListener('scroll', () => {
  if (window.scrollY >= 460 ) {

      header.style.backgroundColor = "#fff"
      button.style.backgroundColor = "#1a8917" 
    } else {
        header.style.backgroundColor = "#ffc117"
        button.style.backgroundColor = "#191919"
    }
})
