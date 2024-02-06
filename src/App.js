import Projects from "./data/db.js"

const containerMap = document.getElementById("cardsContainer")
const cardData = Projects

class myCardButton {
    constructor(title, link, mock, description) {
        //create the element
        this.card = document.createElement('a')
        this.img = document.createElement('img')
        this.cardInfo = document.createElement('div')
        this.cardTitle = document.createElement('h2')
        this.cardDescription = document.createElement('p')
        //create the props

        //card
        this.card.classList.add("cards__card")
        this.card.href = link
        this.card.target = "_Blank"

        //cardInfo
        this.cardInfo.classList.add("cards__info")
        this.cardTitle.classList.add("cards__title")
        this.cardDescription.classList.add("cards__description")
        this.cardTitle.textContent = title
        this.cardDescription.textContent = description
        //img
        this.img.src = mock
        this.img.classList.add("cards__img")

    }
    addToContainer(container) {
        container.appendChild(this.card)
        this.card.appendChild(this.img)
        this.card.appendChild(this.cardInfo)
        this.cardInfo.appendChild(this.cardTitle)
        this.cardInfo.appendChild(this.cardDescription)
    }
}

const createCardFromDb = () => {
    return cardData.map(item => new myCardButton(item.title, item.link, item.mock, item.description))
}

const renderCards = (cards) => {
    cards.forEach(card => card.addToContainer(containerMap));
}

const cards = createCardFromDb();
renderCards(cards)


//Search Button Bar//

const container = document.getElementById('container')
const input = document.getElementById('input')
const btn = document.getElementById('btn')

// event when the user click outside, close the component
window.document.addEventListener('click', e => {
    if (!container.contains(e.target)) {
        container.classList.remove('active')
    }
})
// event to toggle the search widget
btn.addEventListener('click', () => {
    container.classList.toggle('active')
    input.focus()
})

// searching code
input.addEventListener('keyup', e => {
    const searchText = e.target.value.toLowerCase();

    document.querySelectorAll('.cards__card').forEach(card => {
        const cardTitle = card.querySelector('.cards__title').textContent.toLowerCase();
        cardTitle.includes(searchText)
            ? card.classList.remove('filter')
            : card.classList.add('filter');
    });
})
