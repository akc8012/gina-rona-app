// TODO: Why is there an error?
// import gina from './assets/two.png';
import './assets/style.scss';
import 'bulma/css/bulma.css'

import { h, render } from 'preact';
import { App } from './components/App';
import * as createjs from '@createjs/easeljs';

let stage: any = undefined;
const text = new createjs.Text('coronavirus is a series of tubes', '20px Arial', '#FFB6C1');

document.getElementById('body').onload = function () {
	stage = createStage();

	text.x = stage.canvas.width;
	text.y = 40;
	text.textBaseline = 'top';
	stage.addChild(text);

	console.log('my body is ready');
}

function createStage() {
	const canvas = createCanvas();
	document.body.appendChild(canvas);

	return new createjs.Stage(canvas);
}

function createCanvas(): HTMLCanvasElement {
	const canvas = document.createElement('canvas');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	canvas.className = 'canvas';

	return canvas;
}

createjs.Ticker.framerate = 60;
createjs.Ticker.addEventListener('tick', function () {
	text.x -= 0.6;
	stage.update();
});

render(<App />, document.getElementById('root'));
