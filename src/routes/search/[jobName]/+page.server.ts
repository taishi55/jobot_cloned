import type { PageServerLoad } from '../../../../.svelte-kit/types/src/routes/search/[jobName]/$types';
export const prerender = true;
import puppeteer from 'puppeteer';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const url = `https://jobot.com/search?q=${params.jobName}&l`;
	try {
		console.log('run 1');
		const browser = await puppeteer.launch();
		console.log('run 2');
		const page = await browser.newPage();
		console.log('run 3');
		await page.goto(url, {
			waitUntil: 'load'
		});
		console.log('run 4');
		const results = await page.waitForSelector('.search-result');

		console.log(results);
		browser.close();
	} catch (error) {
		console.log(error);
	}
	return;
};
