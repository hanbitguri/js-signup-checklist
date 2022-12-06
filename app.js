const button = document.querySelector('.signup-button')
const checkboxAll = document.querySelector('.choosebox-all')
const checkboxEssential = document.querySelectorAll('.choosebox-essential')
const checkbox = document.querySelector('.choosebox')


checkboxEssential[0].addEventListener('click',()=>{
    checkboxEssential[0].toggleAttribute('checked')
    reValue()
    setAllcheck()
})
checkboxEssential[1].addEventListener('click',()=>{
    checkboxEssential[1].toggleAttribute('checked')
    reValue()
    setAllcheck()
})
checkbox.addEventListener('click',()=>{
    checkbox.toggleAttribute('checked')
    setAllcheck()
})

checkboxAll.addEventListener('click',allClickHandler)

function allClickHandler(){
        checkboxAll.toggleAttribute('checked')
        if(checkboxEssential[0].getAttribute('checked')===null && checkboxEssential[1].getAttribute('checked')===null && checkbox.getAttribute('checked') === null){
            checkboxEssential.forEach((item)=>{
                item.setAttribute('checked','')
            })
            checkbox.setAttribute('checked','')
            reValue()
        }else if(checkboxEssential[0].getAttribute('checked')!=null && checkboxEssential[1].getAttribute('checked')!=null && checkbox.getAttribute('checked') != null){
            checkboxEssential.forEach((item)=>{
                item.removeAttribute('checked')
            })
            checkbox.removeAttribute('checked')
            reValue()
        }
        
    
    //
    
}

function setAllcheck(){
    if(checkboxEssential[0].getAttribute('checked') !=null && checkboxEssential[1].getAttribute('checked') !=null && checkbox.getAttribute('checked') != null){
        checkboxAll.setAttribute('checked','')
    }else{
        checkboxAll.removeAttribute('checked','')
    }
}

function reValue(){
    if(checkboxEssential[0].getAttribute('checked') !=null && checkboxEssential[1].getAttribute('checked') !=null){
        button.classList.add('is-active')
        
    }else{
        button.classList.remove('is-active')
    }
}

