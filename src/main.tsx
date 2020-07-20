import './assets/style.scss';
import 'bulma/css/bulma.css'

import { h, render } from 'preact';
import { App } from './components/App';
import { initEasel } from './easel/initEasel';


render(<App />, document.getElementById('root'));

document.getElementById('body').onload = function () {
	// initEasel();
}
