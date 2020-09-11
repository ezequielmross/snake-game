/*global CANVAS_WIDTH, CANVAS_HEIGHT, canvas, fruit, snakePart, Snake, control, window*/
var snake = new Snake();
/************************  Regras de colisoes ***********************/

function collides(a, b) {
    'use strict';
    return a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y;
}

function zoneCollisions(a) {
    'use strict';
    return a.x + a.width > CANVAS_WIDTH + 40 || a.x < -40 || a.y + a.height > CANVAS_HEIGHT + 40 || a.y < -40;
}

function handleCollisions() {
    'use strict';
    if (collides(snake.getHead(), fruit)) {
        fruit.explode();
        snake.add(control);
    }

    if (zoneCollisions(snake.getHead())) {
        snake.explode();
        control = {};
    }
}

/******************* GAME LOGIC AND DRAW *************************/

function update() {
    'use strict';
    snake.move(control);

    handleCollisions();
}

function draw() {
    'use strict';
    canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    snake.draw();

    fruit.draw();
}
/******************************* LOOP GAME*************************************/
var start = +new Date();
(function gameLoop() {
    'use strict';
    // Delay
    if (+new Date() - start > 200) {
        start = +new Date()
        update();
        draw();
    }
    window.requestAnimationFrame(gameLoop);
}());