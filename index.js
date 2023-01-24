// Write your code here...


const apikey = env.apikey
cuisineSelector = document.querySelector("#cuisine")
const allDishDiv = document.querySelector("body > div.dish-cards")

cuisineSelector.addEventListener('change',(e)=> {
    let cuisine = e.target.value
    allDishDiv.innerHTML = ''
    resp = fetchCuisine(cuisine)

    } )




function fetchCuisine(cuisine){
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&cuisine=${cuisine}`)
    .then(response => response.json())
    .then(dishes => {
        for(let dish of dishes.results){
            renderDish(dish)
            }
        }
          )

}

function renderDish(dish){
    const allDishDiv = document.querySelector("body > div.dish-cards")
    const singleDishCard = document.createElement('div')
    singleDishCard.classList.add('flip-card')
    
    const singleDishInner = document.createElement('div')
    singleDishInner.classList.add('flip-card-inner')
    singleDishInner.addEventListener('mouseover',(e) => {flipCard(singleDishInner)})
    
    const singleDishFront = document.createElement('div')
    singleDishFront.classList.add('flip-card-front')
    
    const singleDishBack = document.createElement('div') 
    singleDishBack.classList.add('flip-card-back')
    
    
    const dishTitle = document.createElement('h3')
    dishTitle.textContent = dish.title
    dishTitle.classList.add('text-align')

    singleDishBack.append(dishTitle)
    
    const singleDishImg = document.createElement("img")
    
    singleDishImg.src = dish.image
    singleDishImg.alt = dish.title
    
    
    singleDishFront.append(singleDishImg)
        
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
