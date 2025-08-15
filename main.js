containerDiv = document.querySelector('#container');
newGridButton = document.querySelector('button');


newGridButton.addEventListener('click', 
    function() {
        let inputGridSize = prompt();
        while (inputGridSize > 100) {
            inputGridSize = prompt()
        }
        createGrid(inputGridSize);
    }
)


function createGrid(gridSize) {
    containerDiv.textContent = '';
    for (let i = 0; i < gridSize; i++) {
        const firstChildDiv =  document.createElement('div');
        containerDiv.appendChild(firstChildDiv);
        firstChildDiv.classList.add('firstChild');

        for (j = 0; j < gridSize; j++) {
            secondChildDiv = document.createElement('div');
            firstChildDiv.appendChild(secondChildDiv)
            secondChildDiv.classList.add('secondChild')
            secondChildDiv.addEventListener('mouseenter', (event) => event.target.style.backgroundColor = 'lightblue')
        }
    }
}
createGrid(25)