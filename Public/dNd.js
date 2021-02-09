/*
console.log("appearance")
console.log(document.querySelectorAll('.box'))
let draggables = document.createElement('.draggable')
console.log(draggables)
let containers = document.querySelectorAll('.box')
console.log(containers)

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () =>{
        console.log("drag")
    })
})
*/


/*
const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => { //listens to event of object being dragged
        //console.log('drag start')
        draggable.classList.add('dragging')
    })
   
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', e => {
    e.preventDefault()
    const draggable = document.querySelector('.dragging')
    container.appendChild(draggable)
      //  console.log('dragging over')
    })
})
*/