const progress = document.getElementById('progress');
const circle = document.querySelectorAll('.item__circle')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

let currentActive = 1;

nextBtn.addEventListener('click', () => {
    currentActive++;
    if(currentActive > circle.length){
        currentActive = circle.length;
    }
   update()
})

prevBtn.addEventListener('click', () => {
    currentActive--;
    if(currentActive < 1){
        currentActive = 1
    }
   update()
})

const update = () => {
    circle.forEach((item, index) => {
        if(index < currentActive){
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circle.length - 1) * 100 + '%';

    if(currentActive === 1){
        prevBtn.disabled = true
    } else if (currentActive === circle.length){
        nextBtn.disabled = true
    } else {
        prevBtn.disabled = false
        nextBtn.disabled = false 
    }
}