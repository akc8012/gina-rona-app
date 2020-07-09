import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import { calculateTotalNewCases } from '../calculateTotalNewCases';
import { fetchCovidCases as getCovidCasesWith } from '../fetchCovidCases';
import { useInterval } from '../useInterval';

export function CaseCounter() {
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
		<h1 class='title is-1 has-text-centered has-text-danger' style={{ fontSize: '28vw', whiteSpace: 'nowrap' }}>
			{counter}
		</h1>
	);
}
