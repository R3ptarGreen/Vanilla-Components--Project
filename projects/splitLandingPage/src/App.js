const left = document.getElementById('left')
const right = document.getElementById('right')
const container = document.getElementById('container')

left.addEventListener('mouseenter', () => container.classList.add('hoverLeft'))
left.addEventListener('mouseleave', () => container.classList.remove('hoverLeft'))

right.addEventListener('mouseenter', () => container.classList.add('hoverRight'))
right.addEventListener('mouseleave', () => container.classList.remove('hoverRight'))

