import fetch from 'node-fetch';
import { load } from 'cheerio';

const Url = async (req, res) => {
	try {
		const id = req.params.id;
		if (id === null || id === undefined) return;

		let response = await fetch(`https://www.youtube.com/watch?v=${id}`);
		let html = await response.text();

		const $ = load(html);

		let title = $('title').text();
		title = title.substring(0, title.length - 10);

		if (title.trim() !== '') {
			res.status(200).json({ title, error: false });
		} else {
			throw new Error();
		}
	} catch (error) {
		res.status(500).json({ error: true });
	}
};
export default Url;
