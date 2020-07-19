import * as createjs from '@createjs/easeljs';
import { createStage } from './createStage';
import ginaImage from '../assets/three.png';


let stage: any = undefined;
const ginaFace = new createjs.Bitmap(ginaImage);

export function initEasel() {
	stage = createStage();

	ginaFace.x = stage.canvas.width;
	ginaFace.y = 40;
	stage.addChild(ginaFace);

	console.log('my body is ready');
}

createjs.Ticker.framerate = 60;
createjs.Ticker.addEventListener('tick', function () {
	ginaFace.x -= 0.6;
	stage.update();
});
