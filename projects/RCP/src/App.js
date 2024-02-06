const tagsContainer = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus()

const createTags = input => {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    tagsContainer.innerHTML = ''

    tags.forEach(tag => {
        const tagItem = document.createElement('span')
        tagItem.classList.add('tag')
        tagItem.innerText = tag
        tagsContainer.appendChild(tagItem)
    });

}

const randomSelect = () => {
    const times = 29;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        if (randomTag !== undefined) {
            highlight(randomTag);

            setTimeout(() => {
                unHighlight(randomTag)
            }, 100)
        }

    }, 100)
    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlight(randomTag)
        }, 100)
    }, times * 100)

}
const pickRandomTag = () => {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

const highlight = (tag) => {
    tag.style.backgroundColor = 'var(--accent)';
}
const unHighlight = (tag) => {
    tag.style.backgroundColor = 'var(--secondary)'
}


textarea.addEventListener('keyup', e => {
    createTags(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 9)

        randomSelect()
    }
})


