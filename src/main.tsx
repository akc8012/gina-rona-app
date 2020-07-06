import { h, render } from 'preact';
import gina from './assets/two.png'; // TODO: why is there an error?
import 'bulma/css/bulma.css'
// import './style.scss'
// import '@fortawesome/fontawesome-free/css/all.css';

function App() {
	return (
		<section class='hero is-dark is-bold is-fullheight'>
			<div class='container'>
				<h1 class='title'>
					Gina Raimondo: "RONA stonks are up!"
				</h1>
				<p class='subtitle'>
					According to all known laws of aviation, there is no reason a bee should be able to fly.
				</p>
				<h1 class='title is-1'>3,000</h1>
				<img src={gina} />
			</div>
		</section>
	);
}

render(<App />, document.getElementById('root'));
