const container = document.querySelector('#container')
const input = document.querySelector('input')
let inputText = document.querySelector('.inputText')
const grid = document.querySelector('.grid')
const apply = document.querySelector('.applyBtn')
const resetBtn = document.querySelector('.resetBtn')
const redBtn = document.querySelector('.red');
const blueBtn = document.querySelector('.blue')
const greenBtn = document.querySelector('.green')
const eraserBtn = document.querySelector('.eraser')
const blackBtn = document.querySelector('.black')
const yellowBtn = document.querySelector('.yellow')
const rainbowBtn = document.querySelector('.rainbow')
let gridSize = 8
//Function to create a Div with relative dimensions
function createGridDivs (size){
    const div = document.createElement('div');
        div.classList.add('squareDivs');   
        div.style.height =`${size}px`;
        div.style.width =`${size}px`;   
    changeColor()
    return div  
}
//Create multiple divs for grid placement
createGrid = () => {
    for (cellAmount=0;cellAmount < gridSize*gridSize;cellAmount++){
        grid.appendChild(createGridDivs(grid.clientWidth / gridSize))
    }
}

createGrid()
//connects color buttons to drawing grid
function changeColor() {
    redBtn.addEventListener('click', () =>  grid.addEventListener('mouseover', (e) =>{
        e.target.style.backgroundColor = 'red'
            })
        );
    blueBtn.addEventListener('click', () => grid.addEventListener('mouseover', (e) =>{
        e.target.style.backgroundColor = 'blue'
    }));
    greenBtn.addEventListener('click', () => grid.addEventListener('mouseover', (e) =>{
        e.target.style.backgroundColor = 'green'
    }));
    eraserBtn.addEventListener('click', () => grid.addEventListener('mouseover', (e) =>{
        e.target.style.backgroundColor = 'white'
    }));    
    blackBtn.addEventListener('click', () => grid.addEventListener('mouseover', (e) =>{
        e.target.style.backgroundColor = 'black'
    }));
    yellowBtn.addEventListener('click', () => grid.addEventListener('mouseover', (e) =>{
        e.target.style.backgroundColor = 'yellow'
    }));
            //figure out how to do rainbow
    rainbowBtn.addEventListener('click', () => grid.addEventListener('mouseover', (e) =>{
        e.target.style.backgroundColor = 'purple'
    }));
} 
function reset() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    createGrid() 
}
input.addEventListener('input', (e) => {
    gridSize = e.target.value;
    inputText.textContent= `${gridSize} x ${gridSize}`;
})
apply.addEventListener('click', () =>{
    reset()
    console.log(`${input.value}`)
})
resetBtn.addEventListener('click', () => {
    gridSize = 8
    reset()
    console.log(input.value)
})
