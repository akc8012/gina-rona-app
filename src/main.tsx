import { h, render } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import { calculateTotalNewCases } from './calculateTotalNewCases';
import { fetchCovidCases as getCovidCasesWith } from './fetchCovidCases';

// TODO: Why is there an error?
import gina from './assets/two.png';
import 'bulma/css/bulma.css'


function App() {
	const [cases, setCases] = useState(0);

	useEffect(() => {
		getCovidCasesWith(fetch)
			.then((cases) => setCases(calculateTotalNewCases(cases)));
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
					{cases}
				</h1>

				<img src={gina} />
				<p class='subtitle is-4'>
					<i>"Now's a great time to vacation in Rhode Island, and even visit your second home!"</i> - <b>Gina Romundus</b>, 2020
				</p>
			</div>
		</section>
	);
}

render(<App />, document.getElementById('root'));
