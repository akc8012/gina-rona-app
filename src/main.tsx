import { h, render } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import { calculateTotalNewCases } from './calculateTotalNewCases';
import { fetchCovidCases as getCovidCasesWith } from './fetchCovidCases';

// TODO: Why is there an error?
// import gina from './assets/two.png';
import 'bulma/css/bulma.css'

function App() {
	const [cases, setCases] = useState(0);

	useEffect(() => {
		getCovidCasesWith(fetch)
			.then((cases) => setCases(calculateTotalNewCases(cases)));
	});

	return (
		<section class='hero section is-dark is-fullheight'>
			<div class='container'>
				<h3 class='title is-3'>
					Rhode Island's COVID-19 cases since 4th of July weekend
				</h3>

				<p class='subtitle'>
					This is the <b>total</b> number of <b>new</b> cases in RI starting once the <b>July 4th weekend</b> (July 3 - July 5) finishes.
				</p>

				<h1 class='title is-1 has-text-centered has-text-danger' style={{ fontSize: '34vw', whiteSpace: 'nowrap' }}>
					{cases}
				</h1>

				{/* TODO: Move this to .scss file */}
				<p class='bottom-text subtitle is-4' style={{ position: 'absolute', bottom: '0' }}>
					<i>"Now's a great time to vacation in Rhode Island, and even visit your second home!"</i> - <b>Gina Romundus</b>, 2020
				</p>
			</div>
		</section>
	);
}

render(<App />, document.getElementById('root'));
