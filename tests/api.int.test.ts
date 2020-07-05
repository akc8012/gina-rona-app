import fetch from 'node-fetch';

test('ping api returns cases', async () => {
	const result = await fetch('https://covidtracking.com/api/states?state=ri');
	const data = await result.json();
	expect(data.positive).toBeGreaterThan(16900);
});
