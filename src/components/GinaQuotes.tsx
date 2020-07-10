import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

export function GinaQuotes() {
	const [startNdx, setStartNdx] = useState(-1);

	const quotes = [
		'We’re setting an example for the rest of the country to follow',
		'Pat yourself on the back!',
		'If you find yourself too close to someone, move!',
		'EGREGIOUS DISREGARD FOR THE RULES',
		"We're going to rebuild a better, stronger, healthier, more equitable, more resilient Rhode Island"
	];

	useEffect(() => {
		let index = Math.floor(Math.random() * quotes.length);
		setStartNdx(index);
	}, []); // [] means only do this once on page-load

	let quote: any = null;
	if (startNdx >= 0)
		quote = <Quote>{quotes[startNdx]}</Quote>;

	return quote;
}

function Quote(props: any) {
	return (
		<p class='subtitle is-5'>
			<i>"{props.children}"</i> - <b>Gina Raimondo</b>, 2020
		</p>
	)
}
