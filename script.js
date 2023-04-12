const container = document.querySelector('#container')
//const gridSize = document.querySelector('input')
const grid = document.querySelector('.grid')
const gridSize = 10;
function createGridDivs (size){
    const div = document.createElement('div');
        div.classList.add('squareDivs');   
        div.style.height =`${size}px`;
        div.style.width =`${size}px`;
        
    return div
    
}

//function createGrid (gridSize) {
    
//        for (i=0;i<gridSize;i++) {
//            for (j=0;j<gridSize;j++) {
 //               grid.appendChild(createGridDivs(grid.clientWidth / gridSize))
//
//            }
 //       }
//}

createGrid = () => {
for (cellAmount=0;cellAmount < gridSize*gridSize;cellAmount++){
    grid.appendChild(createGridDivs(grid.clientWidth / gridSize))
}
console.log(grid.clientWidth)
}

createGrid()

