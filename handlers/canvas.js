/*global window, document*/
var CANVAS_WIDTH = window.innerWidth - 100;
var CANVAS_HEIGHT = window.innerHeight - 100;

var canvasElement = document.createElement('canvas');

canvasElement.id = "myCanvas";
canvasElement.width = CANVAS_WIDTH;
canvasElement.height = CANVAS_HEIGHT;
canvasElement.style.backgroundColor = 'white';

var canvas = canvasElement.getContext("2d");

document.body.appendChild(canvasElement);