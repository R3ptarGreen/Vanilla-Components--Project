const insert = document.getElementById('insert');

window.addEventListener('keydown', e => {
    insert.innerHTML = 
    `
    <div class='item__key'>
        <span>Key</span>
        <span>${e.key === '' ? 'Space' : e.key}</span>
    </div>
    <div class='item__key'>
        <span>KeyCode</span>
        <span>${e.keyCode}</span>
    </div>
    <div class='item__key'>
        <span>Code</span>
        <span>${e.code}</span>
    </div>
    
    `
})


