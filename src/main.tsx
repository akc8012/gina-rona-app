import { h, render } from 'preact';
import gina from './assets/two.png'; // TODO: why is there an error?
import 'bulma/css/bulma.css'
// import './style.scss'
// import '@fortawesome/fontawesome-free/css/all.css';

function App() {
	return (
		<section class='section'>
			<div class='container'>
				<h1 class='title'>
					Gina Raimondo: "RONA stonks are up!"
				</h1>
				<p class='subtitle'>

				</p>
				<h1 class='title is-1'>3,000</h1>
				<img src={gina} />
			</div>
		</section>
	);
}

render(<App />, document.getElementById('root'));
