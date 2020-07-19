import * as createjs from '@createjs/easeljs';
import { createStage } from './createStage';


let stage: any = undefined;
const text = new createjs.Text('coronavirus is a series of tubes', '20px Arial', '#FFB6C1');

export function initEasel() {
	stage = createStage();

	text.x = stage.canvas.width;
	text.y = 40;
	text.textBaseline = 'top';
	stage.addChild(text);

	console.log('my body is ready');
}

createjs.Ticker.framerate = 60;
createjs.Ticker.addEventListener('tick', function () {
	text.x -= 0.6;
	stage.update();
});
