const https = require('https')

const msgObj = {
	'10': '起床了',
	'12': '吃饭了',
	'15': '起来走走',
	'19': '下班下班下班，go go go!',
	'22': '睡觉了',
}
const now = (new Date().getHours() + 8).toString();
const msgNow = msgObj[now];

if (msgNow) {
	console.log('now::: ', now);
	https.get('https://sctapi.ftqq.com/SCT192110T5eQ8LJEyCUiZKZcqXzcQavgd.send?title=' + encodeURI(msgNow));
} else {
	console.log("没到点儿");
}