let grid = document.getElementById('grid');
let currentColor;

function makingGrid(gridNumber) {
    const fragment = document.createDocumentFragment();
    for (let i = 1; i <= gridNumber; i++) {
        const iElem = document.createElement('div');
        iElem.classList.add('box');
        iElem.dataset.boxNumber = i;
        fragment.appendChild(iElem);
    }
    grid.appendChild(fragment);
}

makingGrid(70);

let boxes = document.querySelectorAll('.box');
boxes.forEach((box, index) => {
    box.addEventListener('click', (e) => getBoxes(e, box, boxes.length));
    if (index >= boxes.length - 7) {
        box.style.backgroundColor = generateRandomColor();
    }
})

function generateRandomColor() {
    let maxVal = 0xffffff;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
}

function getBoxes(e, box, size) {
    let boxNumber = e.target.dataset.boxNumber;
    if (boxNumber < size - 7) {
        if (currentColor) {
            box.style.backgroundColor = currentColor;
        } else {
            console.log('no color is active');
        }
    }else {
        currentColor = box.style.backgroundColor;
        console.log('New Background added', currentColor);
    }
}






"use strict";

const $tableElement = $('#pixelCanvas');
const $inputHeight = $('#inputHeight');
const $inputWidth = $('#inputWidth');
const $colorPicker = $('#colorPicker');

$('#sizePicker').submit( event => {
    event.preventDefault();

    let width = $inputWidth.val();
    let height = $inputHeight.val();

    $tableElement.html(''); //clear

    makeGrid(height, width);
    addCellClickListener();
});

function makeGrid(height, width) {
    for(let i = 0; i < height; i++) {
        $tableElement.append('<tr></tr>');
    };

    for(let i = 0; i < width; i++) {
        $('tr').append('<td></td>');
    };
};

function addCellClickListener() {
    $('td').click( event => {
        let color = $colorPicker.val();
        $(event.currentTarget).css("background-color", color)
    });
};


