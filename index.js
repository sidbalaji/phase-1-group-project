// Write your code here...


const apikey = env.apikey
cuisineSelector = document.querySelector("#cuisine")
cuisineSelector.addEventListener('change',(e)=> {
    let cuisine = e.target.value
    resp = fetchCuisine(cuisine)
    const cuisineCategories = document.querySelector('.cuisine-nav')
    cuisineCategories.innerHTML = ''

    })



function fetchCuisine(cuisine){
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&cuisine=${cuisine}`)
    .then(response => response.json())
    // .then(dishes => renderDish(dishes.result))
    .then(dishes => {for(let dish of dishes.results){renderDish(dish)}})

}

function renderDish(dish){
    const allDishDiv = document.querySelector("body > div.dish-cards")
    const singleDishCard = document.createElement('div')
    singleDishCard.classList.add('flip-card')
    
    const singleDishInner = document.createElement('div')
    singleDishInner.classList.add('flip-card-inner')
    singleDishInner.addEventListener('click',(e) => {console.log('click')
                                                     flipCard(singleDishInner)}
                                                     )
    
    const singleDishFront = document.createElement('div')
    singleDishFront.classList.add('flip-card-front')
    
    const singleDishBack = document.createElement('div') 
    singleDishBack.classList.add('flip-card-back')

    const singleDishImg = document.createElement("img")
    const singleDishTitle = document.createElement("h5")
    
    singleDishImg.src = dish.image
    singleDishImg.alt = dish.title
    singleDishTitle.textContent = dish.title
    
    
    //singleDish.addEventListener('click', (e) => getIngredients(dish))
    singleDishFront.append(singleDishImg)
    singleDishFront.append(singleDishTitle)
        
    singleDishInner.append(singleDishFront,singleDishBack)
    
    singleDishCard.append(singleDishInner)
    
    allDishDiv.append(singleDishCard)
    
    }

// create a div, append the class cuisine-nav-img to it 
//then we append a class thecard to that same div
//then we create another div and append the class thefront 
//then we create a third div and append the class theback
//then we create an img and an h3
//append cuisine text to the front div
function flipCard(singleDishInner){
    singleDishInner.classList.toggle('flip-card-rotate')
}


function getIngredients(dish){
    
    fetch(`https://api.spoonacular.com/recipes/${dish.id}/summary?apiKey=${apikey}`)
        .then(resp => resp.json())
        .then(resp => alert(resp.summary))
    
}