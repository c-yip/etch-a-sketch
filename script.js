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

// selects all divs that are children of container
let divBoxes = document.querySelectorAll('.container > div');
// uses forEach loop to add color to divBoxes on hover
divBoxes.forEach(box => {
    box.addEventListener('mouseover', () => box.classList.add('addColor'));
})
