import { h } from 'preact';

export function CloutFooter() {
	return (
		<footer class='footer has-background-dark'>
			<div class='content has-text-light is-small has-text-centered'>
				<p>
					Made by <CloutLink href='https://acolannino.io'>acolannino</CloutLink>, <b>u/whalecat4</b>,
					and <CloutLink href='https://github.com/dillonfagan'>dillonfagan</CloutLink>, with help from friends.
				</p>

				<p>
					This app is <CloutLink href='https://en.wikipedia.org/wiki/Free_software'>free software</CloutLink>,
					and its source is available on <CloutLink href='https://github.com/akc8012/gina-rona-app'>GitHub</CloutLink>.
				</p>
			</div>
		</footer>
	);
}

function CloutLink(props: { href: string, children: any }) {
	return <a class='has-text-primary-dark' href={props.href}><b>{props.children}</b></a>;
}
