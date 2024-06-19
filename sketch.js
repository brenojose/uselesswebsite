let b;
let distMouse = 10;
let size = 10;
let cols;
let rows;
let offset = 4;
let blocks = [];
let slider;
let randomizeButton;
let randomTrail = false;


function setup() {
    createCanvas(1600, 400);
    rectMode(CENTER);
    angleMode(DEGREES);
    cols = width / size;
    rows = height / size;

    for (let i = 0; i < cols; i++) {
        blocks[i] = [];
        for (let j = 0; j < rows; j++) {
            blocks[i][j] = new Block(size / 2 + i * size, size / 2 + j * size);
        }
    }

    b = new Block(width / 2, height / 2);

    slider = createSlider(1, 30, 0);
    slider.size(400);
    slider.position(CENTER, height + 475);
    randomizeButton = createButton("Rainbow effect");
    randomizeButton.position(CENTER, height + 550);
    randomizeButton.mousePressed(() => {
        randomTrail = !randomTrail;
    });
}

function draw() {
    background(0);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            blocks[i][j].move();
            blocks[i][j].display();
        }
        let distanceX = pmouseX - mouseX;
        let distanceY = pmouseY - mouseY;
        if (distanceX <= -15 || distanceX >= 15 || distanceY >= 15 || distanceY <= -15) {
            distMouse += 0.005;
        } else {
            distMouse = 10;
        }
    }

    // Define the width of each letter in blocks
    let letterWidth = 7; // Adjusted for larger letters
    let totalLetters = 9; // Number of letters in "Code Breno"
    let totalWidth = letterWidth * totalLetters;

    // Calculate the offset to centralize the text
    let xOffset = Math.floor((cols - totalWidth) / 2);
    let yOffset = 8; // Set a vertical offset to position the text centrally in height

    // Define the coordinates for the letters in "Code Breno"
    let colors = {
        "C": color(255, 255, 255),
        "O": color(240, 240, 255),
        "D": color(215, 215, 255),
        "E": color(200, 200, 255),
        "B": color(185, 185, 255),
        "R": color(170, 170, 255),
        "E2": color(155, 155, 255),
        "N": color(130, 130, 255),
        "O2": color(115, 115, 255)
    };

    // Define the coordinates for the letters in "Code Breno"
    let letters = {
        "C": [[0, 0], [0, 1], [1, 1], [0, 2], [1, 2], [0, 3], [1, 3], [0, 4], [1, 4], [0, 5], [1, 5], [0, 6], [1, 0], [2, 0], [3, 0], [4, 0], [1, 6], [2, 6], [3, 6], [4, 6], [-7, 0], [-9, -4], [-18, -2], [-28, -5], [7, 0], [9, -4], [18, -2], [28, -5], [10, 19], [-9, 12], [-18, 6], [-28, 15]],
        "O": [[6, 0], [6, 1], [7, 1], [6, 2], [7, 2], [6, 3], [7, 3], [6, 4], [7, 4], [6, 5], [7, 5], [6, 6], [7, 0], [8, 0], [9, 0], [10, 0], [7, 6], [8, 6], [9, 6], [10, 6], [11, 1], [11, 2], [11, 3], [11, 4], [11, 5], [11, 6]],
        "D": [[13, 0], [13, 1], [14, 1], [13, 2], [14, 2], [13, 3], [14, 3], [13, 4], [14, 4], [13, 5], [14, 5], [13, 6], [14, 0], [15, 0], [16, 0], [17, 0], [14, 6], [15, 6], [16, 6], [17, 6], [18, 1], [18, 2], [18, 3], [18, 4], [18, 5]],
        "E": [[20, 0], [20, 1], [21, 1], [20, 2], [21, 2], [20, 3], [20, 4], [21, 4], [20, 5], [21, 5], [20, 6], [21, 0], [22, 0], [23, 0], [24, 0], [21, 3], [22, 3], [23, 3], [24, 3], [21, 6], [22, 6], [23, 6], [24, 6]],
        "B": [[28, 0], [28, 1], [29, 1], [28, 2], [29, 2], [28, 3], [28, 4], [29, 4], [28, 5], [29, 5], [28, 6], [29, 0], [30, 0], [31, 0], [32, 0], [29, 3], [30, 3], [31, 3], [32, 3], [29, 6], [30, 6], [31, 6], [32, 6], [33, 1], [33, 2], [33, 4], [33, 5], [28, 10], [32, 18], [42, 12]],
        "R": [[35, 0], [35, 1], [36, 1], [35, 2], [36, 2], [35, 3], [35, 4], [36, 4], [35, 5], [36, 5], [35, 6], [36, 6], [36, 0], [37, 0], [38, 0], [39, 0], [36, 3], [37, 3], [38, 3], [39, 3], [40, 1], [40, 2], [40, 4], [40, 5], [40, 6]],
        "E2": [[42, 0], [42, 1], [43, 1], [42, 2], [43, 2], [42, 3], [42, 4], [43, 4], [42, 5], [43, 5], [42, 6], [43, 0], [44, 0], [45, 0], [46, 0], [43, 3], [44, 3], [45, 3], [46, 3], [43, 6], [44, 6], [45, 6], [46, 6]],
        "N": [[48, 0], [48, 1], [48, 2], [49, 2], [48, 3], [50, 3], [48, 4], [51, 4], [48, 5], [48, 6], [49, 1], [50, 2], [51, 3], [52, 4], [52, 5], [52, 6], [52, 0], [52, 1], [52, 2], [52, 3], [52, 13], [58, -5]],
        "O2": [[54, 0], [54, 1], [55, 1], [54, 2], [55, 2], [54, 3], [55, 3], [54, 4], [55, 4], [54, 5], [55, 5], [54, 6], [55, 0], [56, 0], [57, 0], [58, 0], [55, 6], [56, 6], [57, 6], [58, 6], [59, 1], [59, 2], [59, 3], [59, 4], [59, 5], [59, 6], [60, 18], [90, 10], [68, 6], [74, 2], [85, -3]]
    };

    
    for (let letter in letters) {
        let coords = letters[letter];
        let color = colors[letter];
        for (let coord of coords) {
            let x = coord[0] + xOffset;
            let y = coord[1] + yOffset;
            blocks[x][y].setToX(color);
        }
    }
}

