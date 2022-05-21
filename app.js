// DOM
let 
ingredientInputDOM = document.querySelector('#input'),
submitDOM = document.querySelector('#btn'),
randomizeDOM = document.querySelector('#btn2'),
totalIngredients = 0,
outputRandomizerDOM = document.getElementById('output')
const totalIngredientsArr = []

submitDOM.addEventListener('click', addIngreidentToDom)
randomizeDOM.addEventListener('click', randomizeFunc)

function addIngreidentToDom(){
if(totalIngredients<=24){
    const ingredient = ingredientInputDOM.value
    if(ingredient){
        addFunc(ingredient)
    }else{
        console.log('error')
        // change
    }
}else{
    console.log('error')
    // change
}
}

function addFunc(ingredient){
    const newIngredient = document.getElementById(`${String(totalIngredients)}`)

    newIngredient.className = `text-center styleDiv`
    newIngredient.textContent = `${ingredient}`
    totalIngredientsArr.push(ingredient)
    totalIngredients ++
}

function randomizeFunc(){
    if(totalIngredientsArr.length > 2){
        randomizeOutput()
    }else{
        console.log('error')
        // change
    }
}

function randomizeOutput(){
    let ingredientArr = [...totalIngredientsArr]
    const randomItem1 = randomize(ingredientArr)
    ingredientArr = ingredientArr.filter(x=> x !==randomItem1)
    const randomItem2 = randomize(ingredientArr)
    ingredientArr = ingredientArr.filter(x=> x !==randomItem2)
    const randomItem3 = randomize(ingredientArr)
    ingredientArr = ingredientArr.filter(x=> x !==randomItem3)

    outputRandomizerDOM.innerText = `${randomItem1} + ${randomItem2} + ${randomItem3} = EWWWWW!`
}

function randomize(ingredientArr){
    return ingredientArr[Math.floor(Math.random()*ingredientArr.length)]
}

