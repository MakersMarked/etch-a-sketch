const container = document.querySelector('#container')
const input = document.querySelector('input')
let inputText = document.querySelector('.inputText')
const grid = document.querySelector('.grid')
let gridSize = 24
//Function to create a Div with relative dimensions
function createGridDivs (size){
    const div = document.createElement('div');
        div.classList.add('squareDivs');   
        div.style.height =`${size}px`;
        div.style.width =`${size}px`; 
        function changeColor() {
            div.addEventListener('mouseover', (e) =>{
                if (e.target.matches('.squareDivs')){
                    e.target.classList.add('color')
                }
            })
} 
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




function reset() {


}

input.addEventListener('input', (e) => {
    gridSize = e.target.value;
    inputText.textContent= `${gridSize} x ${gridSize}`;

})




