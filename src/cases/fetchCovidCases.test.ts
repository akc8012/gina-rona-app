import fetch from 'node-fetch';
import { fetchCovidCases as getCovidCasesWith } from './fetchCovidCases';

test('ping api returns cases', async () => {
	const cases = await getCovidCasesWith(fetch);
	expect(cases).toBeGreaterThan(16900);
});
