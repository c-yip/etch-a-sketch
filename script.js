// variables 
const body = document.body;
const container = document.querySelector('.container');

// creates divBox and appends to container 16 times
function loop() {
    for (i=0; i<256; i++) {
        let divBox = document.createElement('div');
        container.append(divBox);
    }
}

loop();