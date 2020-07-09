import { h } from 'preact';

export function CloutText(props: any) {
	return (
		<p class='subtitle is-7 has-text-centered' style={{ marginBottom: 0 }}>
			{props.children}
		</p>
	);
}
