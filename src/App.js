import Projects from "./data/db.js"

const containerMap = document.getElementById("cardsContainer")
const cardData = Projects

class myCardButton {
    constructor(title, link, srcImg, description) {
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
        this.img.src = srcImg
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
    return cardData.map(item => new myCardButton(item.title, item.link, item.srcImg, item.description))
}

const renderCards = (cards) => {
    cards.forEach(card => card.addToContainer(containerMap));
}

const cards = createCardFromDb();
renderCards(cards)
