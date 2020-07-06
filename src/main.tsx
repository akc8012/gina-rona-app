import { h, render } from 'preact';
import { useState, useEffect } from 'preact/hooks';

// TODO: Why is there an error?
import gina from './assets/two.png';
import 'bulma/css/bulma.css'

const initialPositive = 16991;

function App() {
	const [stonks, setStonks] = useState(0);

	useEffect(() => {
		fetch('https://covidtracking.com/api/states?state=ri')
			.then((response: any) => response.json())
			.then((data) => setStonks(data.positive - initialPositive));
	});

	return (
		<section class='hero is-dark is-bold is-fullheight'>
			<div class='container'>
				<h1 class='title'>
					Gina Raimondo: "RONA stonks are up!"
				</h1>
				<p class='subtitle'>
					According to all known laws of aviation, there is no reason a bee should be able to fly.
				</p>
				<h1 class='title is-1'>{stonks}</h1>
				<img src={gina} />
			</div>
		</section>
	);
}

render(<App />, document.getElementById('root'));
