'use strict'

const number = document.querySelectorAll('.number__sign')
const special = document.querySelectorAll('.special__sign')
const del = document.querySelector('.del')
const input = document.querySelector('.screen__input')
const dot = document.querySelector('.dot')
const result = document.querySelector('.result')
const reset = document.querySelector('.reset')

// Wpisywanie cyferek
for(const el of number){
    el.addEventListener('click', function(){
        input.value += +el.textContent
    })
}
// Wpisywanie znaków
for(const el of special){
     el.addEventListener('click', function(){
        const specialSign = ['+','-','x','/']
        const have = specialSign.some(el => input.value.includes(el))
        if(!have){
            input.value += ` ${el.textContent} `
        }else{
            resultCalc()
        }
        
    })
}
// Usuwanie znaków
del.addEventListener('click', function(){
    let inputz= input.value
    const splited = inputz.split('')
    const finalValue = splited.pop()
    input.value = splited.join('')
})
// Wpisywanie kropki
dot.addEventListener('click', function(){
    const haveDot = input.value.includes('.')
    if(!haveDot){
        input.value += '.'
    }
    
})
// Obliczanie wyniku
function resultCalc(){
    const operation = input.value.split(' ')
    const first = +operation[0]
    const operator = operation[1]
    const second = +operation[2]
    console.log(operation);
    switch (operator) {
        case '+':
            const addition = first + second;
            input.value= addition
            break;
        case '-':
            const subtraction = first - second;
            input.value= subtraction
            break;
        case '/':
            const divide = first / second;
            input.value= divide
            break;
        case 'x':
            const multiplication = first * second;
            input.value= multiplication
            break;
        default:
            break;
    }
}
//Usuwanie wszystkiego
reset.addEventListener('click', function(){
    input.value = ''
})
//Wynik
result.addEventListener('click', function(){
    resultCalc()
})

// Zmiana motywów
const first= document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const header = document.querySelector('.header')
const themeBox = document.querySelector('.theme__box')
const themeSpan = document.querySelector('.theme__span')
const screen = document.querySelector('.screen')
const screenInput = document.querySelector('.screen__input')
const keyboard = document.querySelector('.keyboard')
const miniButons = document.querySelector('.mini__butons')
const buttonMini = document.querySelectorAll('.button__mini')
const resetBtn = document.querySelector('.reset')
const body = document.querySelector('body')





function changeColor(){
    first.classList.remove('theme__active')
    second.classList.remove('theme__active')
    third.classList.remove('theme__active')
    this.classList.add('theme__active')

    if(second.classList.contains('theme__active')){
        body.classList.add('body__second')
        header.classList.add('header___second')
        themeBox.classList.add('theme__box___second')
        themeSpan.classList.add('theme__span___second')
        screen.classList.add('screen___second')
        keyboard.classList.add('keyboard___second')
        miniButons.classList.add('mini__butons___second')
        buttonMini.forEach(el => el.classList.remove('button__mini___second'))
        resetBtn.classList.add('reset___second')
        del.classList.add('reset___second')
        screenInput.classList.add('screen__input___second')

    }else{
        body.classList.remove('body__second')
         header.classList.remove('header___second')
         themeBox.classList.remove('theme__box___second')
         themeSpan.classList.remove('theme__span___second')
         screen.classList.remove('screen___second')
         keyboard.classList.remove('keyboard___second')
         miniButons.classList.remove('mini__butons___second')
        buttonMini.forEach(el => el.classList.remove('button__mini___second'))
         resetBtn.classList.remove('reset___second')
         del.classList.remove('reset___second')
         screenInput.classList.remove('screen__input___second')
    }
    if(third.classList.contains('theme__active')){
        body.classList.add('body__third')
        header.classList.add('header__third')
        themeBox.classList.add('theme__box__third')
        themeSpan.classList.add('theme__span__third')
        screen.classList.add('screen__third')
        keyboard.classList.add('keyboard__third')
        miniButons.classList.add('mini__butons__third');
        buttonMini.forEach(el => el.classList.add('btn'))
        resetBtn.classList.add('reset___second__third')
        del.classList.add('del___second__third')
        screenInput.classList.add('screen__input__third')
        result.classList.add('del___second__third')
    }else{
        body.classList.remove('body__third')
        header.classList.remove('header__third')
        themeBox.classList.remove('theme__box__third')
        themeSpan.classList.remove('theme__span__third')
        screen.classList.remove('screen__third')
        keyboard.classList.remove('keyboard__third')
        miniButons.classList.remove('mini__butons__third')
        buttonMini.forEach(el => el.classList.remove('btn'))
        resetBtn.classList.remove('reset___second__third')
        del.classList.remove('del___second__third')
        screenInput.classList.remove('screen__input__third')
        result.classList.remove('del___second__third')
    }
}
first.addEventListener('click', changeColor.bind(first))
second.addEventListener('click', changeColor.bind(second))
third.addEventListener('click', changeColor.bind(third))

