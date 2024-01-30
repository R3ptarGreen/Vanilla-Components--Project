const container = document.getElementById('container')
const input = document.getElementById('input')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    container.classList.toggle('active')
    input.focus()
})
