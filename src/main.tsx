import { h, render } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import { calculateTotalNewCases } from './calculateTotalNewCases';
import { fetchCovidCases as getCovidCasesWith } from './fetchCovidCases';

// TODO: Why is there an error?
// import gina from './assets/two.png';
import 'bulma/css/bulma.css'
import './style.scss';
import { useInterval } from './useInterval';

function App() {
	const [total, setTotal] = useState(0);
	const [counter, setCounter] = useState(0);
	const [delay, setDelay] = useState(600);
	const [threshold, setThreshold] = useState(3);

	useEffect(() => {
		getCovidCasesWith(fetch)
			.then((cases) => {
				setTotal(calculateTotalNewCases(cases));
			});
	});

	useInterval(() => {
		setCounter(counter + 1);

		if (counter > threshold) {
			setDelay(delay / 2);
			setThreshold(threshold * 1.5);
		}

	}, (counter < total) ? delay : null);

	return (
		<section class='hero section is-dark is-fullheight'>
			<div class='container'>
				<h3 class='title is-3 is-spaced'>
					Rhode Island's COVID-19 cases since 4th of July weekend
				</h3>

				<p class='subtitle'>
					This is the <b>total</b> number of <b>new</b> cases in RI since <b>July 5, 2020</b>.
				</p>

				<h1 class='title is-1 has-text-centered has-text-danger' style={{ fontSize: '28vw', whiteSpace: 'nowrap' }}>
					{counter}
				</h1>

				<div style={{ position: 'absolute', bottom: '0' }}>
					<p class='bottom-text subtitle is-5'>
						<i>"Now's a great time to vacation in Rhode Island, and even visit your second home!"</i> - <b>Gina Raimondo</b>, 2020
					</p>

					<p class='subtitle is-7 has-text-centered' style={{ marginBottom: 0 }}>
						Made by <a class='has-text-primary-light' href='https://acolannino.io'><b>acolannino</b></a>, <b>u/whalecat4</b>,
						and <a class='has-text-primary-light' href='https://github.com/dillonfagan'><b>dillonfagan</b></a>, with help from friends.
					</p>
					<p class='subtitle is-7 has-text-centered'>
						This app is <a class='has-text-primary-light' href='https://en.wikipedia.org/wiki/Free_software'><b>free software</b></a>,
						and its source is available on <a class='has-text-primary-light' href='https://github.com/akc8012/gina-rona-app'><b>GitHub</b></a>.
					</p>
				</div>
			</div>
		</section>
	);
}

render(<App />, document.getElementById('root'));
