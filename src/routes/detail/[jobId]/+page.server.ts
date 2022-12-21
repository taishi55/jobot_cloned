import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import chromium from 'chrome-aws-lambda';
export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	// scrape data from the following url
	const url = `https://jobot.com/search?j=${params.jobId}`;
	try {
		const browser = await chromium.puppeteer.launch({
			args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
			defaultViewport: chromium.defaultViewport,
			executablePath: await chromium.executablePath,
			headless: true,
			ignoreHTTPSErrors: true
		});
		const page = await browser.newPage();
		await page.goto(url, {
			waitUntil: 'load'
		});

		const result = await page.evaluate(() => {
			const job = document.querySelector('.JobPanel');

			if (!job) {
				throw error(404, 'Not found');
			}
			const title = job.querySelector('.header-title')?.textContent?.trim();
			const description = job.querySelector('.text-h6')?.textContent?.trim();
			const isRemote = job.querySelectorAll('li')[0]?.textContent?.trim() === 'REMOTE';
			const location = job.querySelectorAll('li')[1]?.textContent?.trim();
			const salary = job.querySelectorAll('li')[2]?.textContent?.trim();
			const manager = job.querySelector('li > span > a')?.textContent?.trim();
			const managerUrl = job.querySelector('li > span > a')?.getAttribute('href')?.trim();
			const jobApplyUrl = job.querySelector('.col-shrink > a')?.getAttribute('href')?.trim();
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
			return info;
		});

		browser.close();

		return { ...result };
	} catch (err) {
		console.log(err);
		throw error(404, 'Not found');
	}
};
