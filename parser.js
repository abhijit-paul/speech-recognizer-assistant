var Knwl = require("./node_modules/knwl.js");
var knwlInstance = new Knwl('english');
knwlInstance.register('dates', require('./node_modules/knwl.js/default_plugins/dates'));
knwlInstance.register('links', require('./node_modules/knwl.js/default_plugins/links_2'));
knwlInstance.register('emails', require('./node_modules/knwl.js/default_plugins/emails'));
knwlInstance.register('places', require('./node_modules/knwl.js/default_plugins/places'));
knwlInstance.register('times', require('./node_modules/knwl.js/default_plugins/times'));

knwlInstance.init("This is a link: .timesofindia.indiatimes.com/live-tv. This was written on the 2nd of June, of 2015 to send an email to abhijit.paul@blippar.com exactly at 4:28 AM");
var dates = knwlInstance.get('dates');
var emails = knwlInstance.get('emails');
var times = knwlInstance.get('times');
var links = knwlInstance.get('links');
console.log('Dates:');
for(let i=0; i< dates.length; i++)	{
	console.log(dates[i].year + '/' + dates[i].month + '/' + dates[i].day);
}
console.log('\nTimes:');
for(let i=0; i< times.length; i++)	{
	console.log(times[i].hour + ':' + times[i].minute + ":" + times[i].daynight);
}
console.log('\nEmails:');
for(let i=0; i< emails.length; i++)	{
	console.log(emails[i].address);
}
console.log('\nLinks:');
for(let i=0; i< links.length; i++)	{
	console.log(links[i].link);
}
//console.log(links);
// console.log(emails);