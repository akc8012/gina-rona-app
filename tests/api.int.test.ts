import fetch from 'node-fetch';

// you: noooooo you can't just call an api in your test you'll ruin it!!!!!!11!1!111
// me: haha api call goes brrrrr
test('ping api returns cases', async () => {
	const result = await fetch('httpscovidtracking.com/api/states?state=ri');
	const data = await result.json();
	expect(data.positive).toBeGreaterThan(16900);
});
