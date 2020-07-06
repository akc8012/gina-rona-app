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
					RI COVID-19 CASES SINCE 4TH OF JULY WEEKEND
				</h1>

				<p class='subtitle'>
					This is the <b>total</b> number of new cases in RI starting once the <b>July 4th weekend</b> (July 3 - July 5) finishes.
				</p>

				<h1 class='title is-1'>
					{stonks}
				</h1>

				<img src={gina} />
			</div>
		</section>
	);
}

render(<App />, document.getElementById('root'));
