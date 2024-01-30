const boxes = document.querySelectorAll('.box')

const checkBoxes = () => {
    const triggerBottom = window.innerHeight / 5 * 4;    
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        
        if(boxTop < triggerBottom){
            box.classList.add('active')
        }else {
            box.classList.remove('active')
        }
    })
}

checkBoxes()

window.addEventListener('scroll', checkBoxes)
