// TODO: Why is there an error?
// import gina from './assets/two.png';
import './assets/style.scss';
import 'bulma/css/bulma.css'

import { h, render } from 'preact';
import { App } from './components/App';

render(<App />, document.getElementById('root'));
