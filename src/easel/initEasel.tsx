import * as createjs from '@createjs/easeljs';
import { createStage } from './createStage';

import ginaTwo from '../assets/ginaTwo.png';
import ginaThree from '../assets/ginaThree.png';


let stage: any = undefined;

let ginaFace: any = undefined;
let ginaFaceHeight: number = undefined;
const ginaScaleFactor = 0.2;

export function initEasel() {
	stage = createStage();
	stage.addChild(createGinaFace());

	console.log('my body is ready');
}

function createGinaFace() {
	ginaFace = new createjs.Bitmap(selectGinaFace());
	ginaFaceHeight = ginaFace.image.height * ginaScaleFactor;

	ginaFace.x = 0;
	ginaFace.y = stage.canvas.height;
	ginaFace.scale = ginaScaleFactor;
	ginaFace.alpha = 0.88;

	return ginaFace;
}

function selectGinaFace() {
	return ginaThree;
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
