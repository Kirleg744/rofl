let subjects = document.querySelectorAll('.main__content-subject')

subjects.forEach(el => {
    el.addEventListener('click', event => {
      
      const node = event.currentTarget
      const sibling = node.nextElementSibling
      sibling.classList.toggle('active')
      el.classList.toggle('active')
    })
  })


let view = document.querySelector('.main__frame')
let title1 = document.querySelector('.header__title')






