import type { PageServerLoad } from '../../../../.svelte-kit/types/src/routes/search/[jobName]/$types';
export const prerender = true;
import puppeteer from 'puppeteer';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const url = `https://jobot.com/search?q=${params.jobName}&l`;
	try {
    console.log('run 1')
		const browser = await puppeteer.launch();
    console.log('run 2')
		const page = await browser.newPage();
    console.log('run 3')
		await page.goto(url, {
			waitUntil: "load"
		});
    console.log('run 4')
		const [el] = await page.$x(
			'//*[@id="q-app"]/div[1]/div[4]/main/div/div[2]/div[3]/div/span/strong[1]'
		);

		console.log(el);
    browser.close()
	} catch (error) {
		console.log(error);
	}
	return;
};
