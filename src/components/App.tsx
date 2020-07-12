import { h } from 'preact';
import { CaseCounter } from './CaseCounter';
import { GinaQuotes } from './GinaQuotes';
import { CloutFooter } from './CloutFooter';

export function App() {
	return (
		<div class='main'>
			<section class='hero section is-dark'>
				<div class='container'>
					<h3 class='title is-3 is-spaced'>
						Rhode Island's COVID-19 cases since 4th of July weekend
					</h3>

					<p class='subtitle'>
						This is the <b>total</b> number of <b>new</b> cases in RI since <b>July 5, 2020</b>.
					</p>

					<CaseCounter />
				</div>

				<div class='container'>
					<GinaQuotes />
					{/* <CloutFooter /> */}
				</div>
			</section>

			<footer class='footer has-background-dark'>
				<div class='content has-text-light is-small has-text-centered'>
					Hello footer friends.
				</div>
			</footer>
		</div>
	);
}
