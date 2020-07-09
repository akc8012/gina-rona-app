import { h } from 'preact';
import { CloutText } from './CloutText';
import { CaseCounter } from './CaseCounter';
import { GinaQuotes } from './GinaQuotes';

export function App() {
	return (
		<section class='hero section is-dark is-fullheight'>
			<div class='container'>
				<h3 class='title is-3 is-spaced'>
					Rhode Island's COVID-19 cases since 4th of July weekend
				</h3>

				<p class='subtitle'>
					This is the <b>total</b> number of <b>new</b> cases in RI since <b>July 5, 2020</b>.
				</p>

				<CaseCounter />

				<div style={{ position: 'absolute', bottom: '0' }}>
					<GinaQuotes />

					<CloutText>
						Made by <a class='has-text-primary-light' href='https://acolannino.io'><b>acolannino</b></a>, <b>u/whalecat4</b>,
						and <a class='has-text-primary-light' href='https://github.com/dillonfagan'><b>dillonfagan</b></a>, with help from friends.
					</CloutText>

					<CloutText>
						This app is <a class='has-text-primary-light' href='https://en.wikipedia.org/wiki/Free_software'><b>free software</b></a>,
						and its source is available on <a class='has-text-primary-light' href='https://github.com/akc8012/gina-rona-app'><b>GitHub</b></a>.
					</CloutText>
				</div>
			</div>
		</section>
	);
}
