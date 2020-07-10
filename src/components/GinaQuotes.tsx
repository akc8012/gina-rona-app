import { h } from 'preact';

export function GinaQuotes() {
	const quotes = [
		'We’re setting an example for the rest of the country to follow',
		'Pat yourself on the back!',
		'If you find yourself too close to someone, move!',
		'EGREGIOUS DISREGARD FOR THE RULES',
		"We're going to rebuild a better, stronger, healthier, more equitable, more resilient Rhode Island"
	];

	return (
		<Quote>{quotes[1]}</Quote>
	);
}

function Quote(props: any) {
	return (
		<p class='subtitle is-5'>
			<i>"{props.children}"</i> - <b>Gina Raimondo</b>, 2020
		</p>
	)
}
