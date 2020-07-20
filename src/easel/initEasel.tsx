import * as createjs from '@createjs/easeljs';
import { createStage } from './createStage';

import ginaTwo from '../assets/ginaTwo.png';
import ginaThree from '../assets/ginaThree.png';


let stage: any = undefined;

let ginaFaceHeight: number = undefined;

export function initEasel() {
	stage = createStage();
	stage.addChild(createGinaFace());

	console.log('my body is ready');
}

// TODO: handle gina face elsewhere
function createGinaFace() {
	const ginaFace = new createjs.Bitmap(selectGinaFace());
	ginaFace.name = 'ginaFace';

	const ginaScaleFactor = 0.2;
	ginaFaceHeight = ginaFace.image.height * ginaScaleFactor;

	ginaFace.x = 0;
	ginaFace.y = stage.canvas.height;
	ginaFace.scale = ginaScaleFactor;
	ginaFace.alpha = 0.88;

	return ginaFace;
}

function selectGinaFace() {
	const faces = [ginaTwo, ginaThree];
	return faces[randomRange(faces.length)];
}

function randomRange(max: number) {
	return Math.floor(Math.random() * Math.floor(max));
}

createjs.Ticker.framerate = 60;
createjs.Ticker.addEventListener('tick', function () {
	const ginaFace = stage.getChildByName('ginaFace');

	ginaFace.x += 6;
	ginaFace.y -= 10;

	if (ginaFace.y + ginaFaceHeight < 0) {
		stage.removeChild(ginaFace);
		stage.addChild(createGinaFace());
	}

	stage.update();
});
