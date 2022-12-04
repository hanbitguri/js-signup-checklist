const button = document.querySelector('.signup-button')
const checkboxAll = document.querySelector('.choosebox-all')
const checkboxEssential = document.querySelectorAll('.choosebox-essential')
const checkbox = document.querySelector('.choosebox')

checkboxAll.addEventListener('click',()=>{
    checkboxEssential.forEach((item)=>{
        item.setAttribute('checked','checked')
    })
    checkbox.setAttribute('checked','checked')
})
