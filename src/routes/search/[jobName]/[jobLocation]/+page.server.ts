import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import puppeteer from 'puppeteer';
export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	// scrape data from the following url
	const url = `https://jobot.com/search?q=${params.jobName}&l=${params.jobLocation}`;
	try {
		const browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();
		await page.goto(url, {
			waitUntil: 'load'
		});

		const result = await page.evaluate(() => {
			const jobs = Array.from(document.querySelectorAll('.search-result'));
			const info = jobs.map((element) => {
				const title = element.querySelector('a')?.textContent?.trim();
				const url = element.querySelector('a')?.href?.trim();
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
			return info;
		});

		browser.close();

		return { jobs: result };
	} catch (err) {
		console.log(err);
		throw error(404, 'Not found');
	}
};
