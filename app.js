// DOM
let 
ingredientInputDOM = document.querySelector('#input'),
submitDOM = document.querySelector('#btn'),
randomizeDOM = document.querySelector('#btn2'),
totalIngredients = 0,
outputRandomizerDOM = document.getElementById('output')
const 
totalIngredientsArr = [],
errorDivDOM = document.getElementById('error')


submitDOM.addEventListener('click', addIngreidentToDom)
randomizeDOM.addEventListener('click', randomizeFunc)

function addIngreidentToDom(){
if(totalIngredients<=24){
    const ingredient = ingredientInputDOM.value
    if(ingredient){
        addFunc(ingredient)
    }else{
        errorMsg(`PLEASE ENTER AN INGREDIENT!`, 'lightpink', 'red')
    }
}else{
    errorMsg(`MAXED OUT OF POSSIBLE INGRIDENTS!`, 'lightpink', 'red')
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
        errorMsg(`MUST ENTER AT LEAST 3 INGREDIENTS!`, 'lightpink', 'red')
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

function errorMsg(msg,bckColor,color){
    submitDOM.disabled = true
    randomizeDOM.disabled = true
    errorDivDOM.textContent = msg
    errorDivDOM.style.backgroundColor = bckColor
    errorDivDOM.style.color = color
    setTimeout(clearErrorMsg, 3000)
}

function clearErrorMsg(){
    submitDOM.disabled = false
    randomizeDOM.disabled = false
    errorDivDOM.textContent = ''
    errorDivDOM.style.backgroundColor = none
    errorDivDOM.style.color = none
}