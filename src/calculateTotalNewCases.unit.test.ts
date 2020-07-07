import { calculateTotalNewCases } from '../src/calculateTotalNewCases';

test('calculate total new cases', () => {
	let cases = calculateTotalNewCases(20000);
	expect(cases).toBe(3009);
});
