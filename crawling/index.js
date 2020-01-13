const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log();
const fs = require('fs');

const getHtml = async () => {
	try {
		//크롤링을 원하는 사이트의 url 가져오기
		return await axios.get("https://www.yna.co.kr/sports/all");
	} catch (err) {
		console.error(err);
	}
}
const json = getHtml().then(html => {
	let ulList = [];
	const $ = cheerio.load(html.data);
	//크롤링을 원하는 부분의 최상위와 크롤링 해당 태그 지정
	const $bodyList = $("div.headline-list ul").children("li.section02");

	$bodyList.each(function(i, elem) {
		ulList[i] = {
			//크롤링하고싶은 내용을 지정
			title: $(this).find('strong.news-tl a').text(),
			url: $(this).find('strong.news-tl a').attr('href'),
			image_url: $(this).find('p.poto a img').attr('src'),
			image_alt: $(this).find('p.lead').text().slice(0, -11),
			summary: $(this).find('p.lead').text()
		}
	})
	const data = ulList.filter(n => n.title);
	return data;
}).then(res => {
	console.log(res)
	//json parser
	res = JSON.stringify(res)
	fs.writeFileSync('./newsJSON.json', res, 'utf-8')

});
