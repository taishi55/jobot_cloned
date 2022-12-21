import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { parse } from 'node-html-parser';
export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	// scrape data from the following url
	const url = `https://jobot.com/search?j=${params.jobId}`;
	try {
		const response = await fetch(url);
		const body = await response.text();
		const root = parse(body);
		// parse string of html
		const job = root.querySelector('.JobPanel');
		if (!job) {
			throw error(404, 'Not found');
		}
		// get job info
		const title = job.querySelector('.header-title')?.textContent?.trim();
		const description = job.querySelector('.text-h6')?.textContent?.trim();
		const isRemote = job.querySelectorAll('li')[0]?.textContent?.trim() === 'REMOTE';
		const location = job.querySelectorAll('li')[1]?.textContent?.trim();
		const salary = job.querySelectorAll('li')[2]?.textContent?.trim();
		const manager = job.querySelector('li > span > a')?.textContent?.trim();
		const managerUrl = job.querySelector('li > span > a')?.attrs?.href?.trim();
		const jobApplyUrl = job.querySelector('.col-shrink > a')?.attrs?.href?.trim();
		const about = job
			.querySelectorAll('.JobDescription > .description > div')[0]
			?.innerHTML?.trim();
		const benefit = job
			.querySelectorAll('.JobDescription > .description > div')[1]
			?.innerHTML?.trim();
		const detail = job
			.querySelectorAll('.JobDescription > .description > div')[2]
			?.innerHTML?.trim();

		const info = {
			title: title || '',
			description: description || '',
			isRemote: isRemote,
			location: location || '',
			salary: salary || '',
			manager: manager || '',
			managerUrl: managerUrl || '',
			jobApplyUrl: jobApplyUrl || '',
			about: about || '',
			benefit: benefit || '',
			detail: detail || ''
		};

		return { ...info };
	} catch (err) {
		console.log(err);
		throw error(404, 'Not found');
	}
};
