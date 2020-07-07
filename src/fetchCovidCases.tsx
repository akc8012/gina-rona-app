type Fetch = (input: any, init?: any) => Promise<any>;

export function fetchCovidCases(fetchImplementation: Fetch): Promise<number> {
	return fetchImplementation('https://covidtracking.com/api/states?state=ri')
		.then((response: any) => response.json())
		.then((data: any) => data.positive);
}
