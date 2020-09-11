/*global CANVAS_HEIGHT, canvas */
var speed = 5;

function SnakePart(axis) {
    'use strict';
    var self = this;
    self.color = "#00A";
    self.x = axis.x;
    self.y = axis.y;
    self.width  = 32;
    self.height = 32;
    self.draw = function draw() {
        canvas.fillStyle = self.color;
        canvas.fillRect(self.x, self.y, self.width, self.height);
    };
    self.move = function move(axis) {
        switch (axis.direction) {
            case 'up':
                self.y -= speed;
                break;
            case 'down':
                self.y += speed;
                break;
            case 'right':
                self.x += speed;
                break;
            case 'left':
                self.x -= speed;
                break;
        }
    };
}

function Snake() {
    'use strict';
    var self = this,
        calda = { x: 0, y: 100 },
        tail = {},
        head = { x: 35, y: 100 },
        parts = [];

    parts.push(new SnakePart(head));
    parts.push(new SnakePart(calda));

    self.draw = function draw() {
        parts.forEach(function (part) {
            part.draw();
        });
    };

    self.move = function move(axis) {
        if (!axis.direction) return

        tail = parts.pop();
        head = parts.slice(0, 1)[0];
        tail.y = head.y;
        tail.x = head.x;

        switch (axis.direction) {
            case 'up':
                tail.y -= tail.height;
                break;
            case 'down':
                tail.y += tail.height;
                break;
            case 'right':
                tail.x += tail.width;
                break;
            case 'left':
                tail.x -= tail.width;
                break;
        }
        parts.unshift(tail);
    };
    self.add = function add(axis) {
        var part = parts[parts.length - 1], distance = 3;
        calda.y = part.y;
        calda.x = part.x;
        switch (part.direction || axis.direction) {
        case 'up':
            calda.y = part.y + part.height + distance;
            break;
        case 'down':
            calda.y = part.y - part.height - distance;
            break;
        case 'right':
            calda.x = part.x - part.width - distance;
            break;
        case 'left':
            calda.x = part.x + part.width + distance;
            break;
        }
        parts.push(new SnakePart(calda));
    };
    self.explode = function explode() {
        parts = parts.slice(0, 1);
        parts[0].x = 0;
        parts[0].y = 100;
    };
    self.getHead = function getHead() {
        return parts[0];
    };
}