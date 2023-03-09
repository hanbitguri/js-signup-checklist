const allCheck = document.querySelector('.all-check')
const essentialCheck = document.querySelectorAll('.essential-check')
const optionalCheck = document.querySelector('.optional-check')

const checks = [essentialCheck[0],essentialCheck[1],optionalCheck]

const signUpButton = document.querySelector('.signup-button')

const allCheckedHandler = () =>{
    const allChecked =
    allCheck.classList.contains('is-active')
    essentialCheck[0].classList.contains('is-active') &&
    essentialCheck[1].classList.contains('is-active') &&
    optionalCheck.classList.contains('is-active')

    if(allChecked){
        allCheck.classList.remove('is-active')
        essentialCheck[0].classList.remove('is-active') &&
        essentialCheck[1].classList.remove('is-active') &&
        optionalCheck.classList.remove('is-active')
    }
}

const allCheckHandler=()=>{
    const allChecked =
    allCheck.classList.contains('is-active') &&
    essentialCheck[0].classList.contains('is-active') &&
    essentialCheck[1].classList.contains('is-active') &&
    optionalCheck.classList.contains('is-active')

    if(allChecked){
        allCheck.classList.remove('is-active')
        essentialCheck[0].classList.remove('is-active') 
        essentialCheck[1].classList.remove('is-active')
        optionalCheck.classList.remove('is-active')
        activeSignUp()
        return
    }
    allCheck.classList.toggle('is-active')

    //
    const stuff = checks.filter((check)=>{
        return !(check.classList.contains('is-active'))
    })
    stuff.forEach((stuff)=>{
        stuff.classList.add('is-active')
    })
    activeSignUp()
}
const essentialCheckHandler=(i)=>{
    essentialCheck[i].classList.toggle('is-active')
    activeSignUp()
    allCheckTrigger()
}
const optionalCheckHandler=()=>{
    optionalCheck.classList.toggle('is-active')
    activeSignUp()
    allCheckTrigger()
}

allCheck.addEventListener('click',allCheckHandler)
essentialCheck[0].addEventListener('click',()=>essentialCheckHandler(0))
essentialCheck[1].addEventListener('click',()=>essentialCheckHandler(1))
optionalCheck.addEventListener('click',optionalCheckHandler)

const activeSignUp = () =>{
    const buttonIsActive = 
    essentialCheck[0].classList.contains('is-active') &&
    essentialCheck[1].classList.contains('is-active')
    
    if(buttonIsActive) signUpButton.classList.add('is-active')
    if(!buttonIsActive) signUpButton.classList.remove('is-active')
}
const allCheckTrigger = () =>{
    const allChecked =
    essentialCheck[0].classList.contains('is-active') &&
    essentialCheck[1].classList.contains('is-active') &&
    optionalCheck.classList.contains('is-active')

    if(allChecked) allCheck.classList.add('is-active')
    if(!allChecked) allCheck.classList.remove('is-active')
}

