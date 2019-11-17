const container = document.querySelector('#container');
const btn = document.querySelector('#GridBtn'); 
btn.addEventListener('click', createGrid);//Create a new grid when click on the button


/* This function used to make a grid of squares, the number of squares in each row and column
    specified by your self */
function createGrid() {
    removeSquares(); // remove the previous squars
    let squares = [];
    let grid = prompt('How many squares you need in each direction?', 16);
    if(grid < 0 || grid > 64 || isNaN(grid)){ //Check if the input is a valid numbers

        alert("Please enter a valid number of grid more than 0 and less than or equal 64 grids.")

    }else{
    let squareSize = (100 / grid) + '%';
    for (let i = 1; i <= grid ** 2; i++) {
        squares[i] = document.createElement('div');
        squares[i].id = 'square' + i;
        squares[i].className = 'squares';
        container.appendChild(squares[i]);
    }

    const squareStyle = document.querySelectorAll('.squares');
    squareStyle.forEach((e) => {
        e.setAttribute('style', `width:${squareSize};height:${squareSize};`);
    });
    keepColor();
}
}

// This function used to keep on color after hover
function keepColor() {
const squareTarget = document.querySelectorAll('.squares');
squareTarget.forEach((e) => e.addEventListener('mouseover', function() {
    e.style.backgroundColor = randomColor();
    }));
}

//This function used to generate random color
function randomColor() {
    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);
    return `rgb(${r},${g},${b})`;
}

//This function remove squares used to remove previous grid
function removeSquares() {
    const selectSquares = document.querySelectorAll('.squares');
    selectSquares.forEach((e) => e.remove());
}

