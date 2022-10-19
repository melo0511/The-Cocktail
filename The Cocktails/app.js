const containerCards = document.querySelector('.containerCards')
const search = document.getElementById('input')



window.addEventListener('DOMContentLoaded',()=>{
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s'
    API(url)
})

function API(data){
    fetch(data)
    .then(response=>response.json())
    .then(response=>response.drinks.map(element=>{
        // console.log(element);
        createCards(element)
    }))
}

search.addEventListener('keypress',searchInput)

function searchInput(event){
    if(event.key === 'Enter'){
        let urlSearch = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search.value}`
    API(urlSearch)
    containerCards.innerHTML=''
    }
}

function createCards(element){

    const card = document.createElement('div')
    card.classList.add('card')

    const containerText = document.createElement('div')
    containerText.classList.add()

    const containerImg = document.createElement('div')
    containerImg.classList.add('down')

    const nameCockTail = document.createElement('p')
    nameCockTail.textContent = element.strDrink
    
    const imgCockTail = document.createElement('img')
    imgCockTail.classList.add('img')
    imgCockTail.setAttribute('src',element.strDrinkThumb)

    containerCards.appendChild(card)
    
    card.appendChild(containerText)
    card.appendChild(containerImg)

    containerText.appendChild(nameCockTail)
    containerImg.appendChild(imgCockTail)

}

