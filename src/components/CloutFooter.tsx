import { h } from 'preact';

export function CloutFooter() {
	return (
		<div style={{ position: 'absolute', bottom: 0, right: 0 }}>
			<CloutLine>
				Made by <CloutLink href='https://acolannino.io'>acolannino</CloutLink>, <b>u/whalecat4</b>,
				and <CloutLink href='https://github.com/dillonfagan'>dillonfagan</CloutLink>, with help from friends.
			</CloutLine>

			<CloutLine>
				This app is <CloutLink href='https://en.wikipedia.org/wiki/Free_software'>free software</CloutLink>,
				and its source is available on <CloutLink href='https://github.com/akc8012/gina-rona-app'>GitHub</CloutLink>.
			</CloutLine>
		</div>
	);
}

function CloutLine(props: any) {
	return (
		<p class='content is-small has-text-centered' style={{ marginBottom: 0, color: 'rgba(255, 255, 255, 0.6)' }}>
			{props.children}
		</p>
	);
}

function CloutLink(props: { href: string, children: any }) {
	return <a class='has-text-primary-dark' href={props.href}><b>{props.children}</b></a>;
}
