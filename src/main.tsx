import { h, render } from 'preact';

import 'bulma/css/bulma.css'
// import './style.scss'
// import '@fortawesome/fontawesome-free/css/all.css';

function App() {
	return (
		<section class='section'>
			<div class='container'>
				<h1 class='title'>
					Hello World
				</h1>
				<p class='subtitle'>
					My first website with <strong>Ligma.bs</strong>!
				</p>
			</div>
		</section>
	);
}

render(<App />, document.getElementById('root'));
