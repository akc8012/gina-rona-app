import * as createjs from '@createjs/easeljs';
import { createStage } from './createStage';
import ginaImage from '../assets/three.png';


let stage: any = undefined;

const ginaFace = new createjs.Bitmap(ginaImage);
const ginaScaleFactor = 0.2;
const ginaFaceHeight = ginaFace.image.height * ginaScaleFactor;

export function initEasel() {
	stage = createStage();

	ginaFace.x = 0;
	ginaFace.y = stage.canvas.height;
	ginaFace.scale = ginaScaleFactor;
	ginaFace.alpha = 0.88;
	stage.addChild(ginaFace);

	console.log('my body is ready');
}

createjs.Ticker.framerate = 60;
createjs.Ticker.addEventListener('tick', function () {
	ginaFace.x += 6;
	ginaFace.y -= 10;

	if (ginaFace.y + ginaFaceHeight < 0) {
		ginaFace.x = 0;
		ginaFace.y = stage.canvas.height;
	}

	stage.update();
});
