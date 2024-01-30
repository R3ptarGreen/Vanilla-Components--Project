const loadingText = document.getElementById('text')
const bg = document.getElementById('bg')

let load = 0;


const blurring = () => {
    load++
    
    if(load > 99){
        clearInterval(init)
    }
    
    loadingText.innerHTML = `${load}%`;
    loadingText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, inMin, inMax, outMin, outMax) => {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
let init = setInterval(blurring, 30)