import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { useInterval } from '../hooks/useInterval';


export function GinaQuotes() {
	const [quoteNdx, setQuoteNdx] = useState(-1);

	const transitionDelay = 3500;
	const quotes = [
		'We’re setting an example for the rest of the country to follow',
		'Pat yourself on the back!',
		'If you find yourself too close to someone, move!',
		'EGREGIOUS DISREGARD FOR THE RULES',
		"We're going to rebuild a better, stronger, healthier, more equitable, more resilient Rhode Island"
	];

	useEffect(() => {
		setQuoteNdx(randomRange(quotes.length));
	}, []); // [] means only do this once on page-load

	useInterval(() => {
		setQuoteNdx(randomRange(quotes.length));
	}, transitionDelay);

	let quote: any = null;
	if (quoteNdx >= 0)
		quote = <Quote>{quotes[quoteNdx]}</Quote>;

	return quote;
}

function randomRange(length: number) {
	return Math.floor(Math.random() * length);
}

function Quote(props: any) {
	return (
		<p class='subtitle is-5'>
			<i>"{props.children}"</i> - <b>Gina Raimondo</b>, 2020
		</p>
	)
}
