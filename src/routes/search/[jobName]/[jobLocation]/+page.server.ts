import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { parse } from 'node-html-parser';
export const prerender = true;

export const load: PageServerLoad = async ({ fetch, params }) => {
	// scrape data from the following url
	const url = `https://jobot.com/search?q=${params.jobName}&l=${params.jobLocation}`;
	try {
		const response = await fetch(url);
		const body = await response.text();
		const root = parse(body);
		// parse string of html
		const jobs = root.querySelectorAll('.search-result');
		// return a list of jobs

		const info = jobs.map((element) => {
			const title = element.querySelector('a')?.textContent?.trim();
			const url = element.querySelector('a')?.attrs?.href.trim();
			const description = element.querySelector('.ellipsis')?.textContent?.trim();
			const isRemote = element.querySelectorAll('li')[0]?.textContent?.trim() === 'REMOTE';
			const location = element.querySelectorAll('li')[1]?.textContent?.trim();
			const salary = element.querySelectorAll('li')[2]?.textContent?.trim();
			return {
				title: title || '',
				url: url || '',
				description: description || '',
				isRemote: isRemote,
				location: location || '',
				salary: salary || ''
			};
		});
		return { jobs: info };
	} catch (err) {
		throw error(404, 'Not found');
	}
};
