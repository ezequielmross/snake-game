/*global CANVAS_WIDTH, CANVAS_HEIGHT, console, alert, window, document*/
var control = {touch: false, x: 0, y: 0};

(function () {
    'use strict';

    var inputTouch = function () {
        var  lastY = 0, lastX = 0, firstY = 0, firstX = 0;

        function handleGestureEnd(e) {
            lastX = inputTouch.prototype.getGesturePointFromEvent(e).x;
            lastY = inputTouch.prototype.getGesturePointFromEvent(e).y;

            control.x = (100 * lastX) / CANVAS_WIDTH;
            control.y = (100 * lastY) / CANVAS_HEIGHT;

            control.touch = true;

            var overY = (firstY - lastY),
                overX = (firstX - lastX);

            if (overY > 0 && overY > Math.abs(overX)) {
                control.direction = 'up';
            } else if (overY < 0 && Math.abs(overY) > Math.abs(overX)) {
                control.direction = 'down';
            } else if (overX > 0 && overX > Math.abs(overY)) {
                control.direction = 'left';
            } else {
                control.direction = 'right';
            }

            document.removeEventListener('touchend', handleGestureEnd, true);
        }

        function start(e) {
            firstX = inputTouch.prototype.getGesturePointFromEvent(e).x;
            firstY = inputTouch.prototype.getGesturePointFromEvent(e).y;
            document.addEventListener('touchend', handleGestureEnd, true);
        }
        document.addEventListener("touchstart", start, true);
    };

    inputTouch.prototype.getGesturePointFromEvent = function getGesturePointFromEvent(evt) {
        var point = {};

        if (evt.changedTouches && evt.changedTouches.length > 0) {
            point.x = evt.changedTouches[0].clientX;
            point.y = evt.changedTouches[0].clientY;
        } else if (evt.originalEvent && evt.originalEvent.targetTouches) {
            point.x = evt.originalEvent.changedTouches[0].clientX;
            point.y = evt.originalEvent.changedTouches[0].clientY;
        } else {
            //#IE CASE
            point.x = evt.clientX;
            point.y = evt.clientY;
        }

        return point;
    };
    inputTouch();
}());