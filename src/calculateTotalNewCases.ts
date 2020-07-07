export function calculateTotalNewCases(currentCases: number): number {
	// This number was pulled from covidtracking.com on July 5th, 2020.
	const initialCases = 16991;
	return currentCases - initialCases;
}
