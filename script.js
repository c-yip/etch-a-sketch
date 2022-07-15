// variables 
const body = document.body;
const container = document.querySelector('.container');

// creates divBox and appends to container 16 times
function loop() {
    for (i=0; i<256; i++) {
        divBox = document.createElement('div');
        container.append(divBox);
    }
}

loop();
 
const divBoxes = document.querySelectorAll('.container > div');
// // add color to divBoxes on hover
// divBoxes.addEventListener('mouseover', function addColor () {
//     divBox.classList.add('addColor');
// })
console.log(divBoxes);