// variables 
const body = document.body;
const container = document.querySelector('.container');
/// select css variables
window.getComputedStyle(document.documentElement).getPropertyValue('--grid-rows');
window.getComputedStyle(document.documentElement).getPropertyValue('--grid-cols');

// creates divBox and appends to container 16 times
function loop() {
    for (i=0; i<256; i++) {
        divBox = document.createElement('div');
        container.append(divBox);
    }
}

loop();

// uses forEach loop to add color to divBoxes on hover
divBoxes = document.querySelectorAll('.container > div');
function color() {
    divBoxes = document.querySelectorAll('.container > div');
    divBoxes.forEach(box => {
    box.addEventListener('mouseover', () => box.classList.add('addColor'));
    })
}
color();

// selection button event
const selectionBtn = document.querySelector('.selectionBtn');
selectionBtn.addEventListener('click', () => {
    userSelection();
})

//prompts user 
function userSelection() {
    selection = prompt('Please select a grid size. You can enter any number between 1 - 100.');
    if (selection >= 1 && selection <= 100) {
        gridResize (selection);
    } else return alert(selection + ' is not a valid entry. Please enter a number between 1 - 100.');
}

//new grid
function gridResize (selection) {
    removeAllChildNodes(container);
    selectionSize = selection * selection;
    for (i=0; i<selectionSize; i++) {
        const newBox = document.createElement('div');
        container.append(newBox);
    }
    console.log(selection);
    // makes sure grid rows and columns are equal so stays a square
    document.documentElement.style.setProperty('--grid-rows', selection);
    document.documentElement.style.setProperty('--grid-cols', selection);
    color();
}

// remove div elements
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
