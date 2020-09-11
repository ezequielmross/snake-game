/*global canvas, alert, CANVAS_WIDTH, CANVAS_HEIGHT*/
var fruit = {
    color: "red",
    x: 100,
    y: 100,
    width: 32,
    height: 32,
    draw: function () {
        'use strict';
        canvas.fillStyle = this.color;
        canvas.fillRect(this.x, this.y, this.width, this.height);
    },
    explode: function () {
        'use strict';
        this.x = Math.floor(Math.random() * (CANVAS_WIDTH - this.width));
        this.y = Math.floor(Math.random() * (CANVAS_HEIGHT - this.height));
    }
};