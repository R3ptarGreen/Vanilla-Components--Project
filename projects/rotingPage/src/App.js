const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.main')

console.log(open)
open.addEventListener('click', () => container.classList.add('showNav'))
close.addEventListener('click', () => container.classList.remove('showNav'))
