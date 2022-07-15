// variables 
const body = document.body;
const container = document.querySelector('.container');

// creates divBox and appends to container 16 times
function loop() {
    for (i=0; i<256; i++) {
        const divBox = document.createElement('div');
        container.append(divBox);
    }
}

loop();

// uses forEach loop to add color to divBoxes on hover
function color() {
    let divBoxes = document.querySelectorAll('.container > div');
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

//replaces grid
function gridResize (selection) {
    for (i=0; i<selection; i++) {
        const newBox = document.createElement('div');
        container.append(newBox);
    }
    console.log(selection);
    color();
}
