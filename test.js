

const moment = require('moment');

const date1 = moment().format();  // giving now

// const date2 = moment('2022-08-20T09:35:40+05:30').toDate();
const date2 = moment('2022-08-20T16:32:28+05:30').utc(true).toDate();

const current_date  = moment().utc(true).toDate();

const date3 = moment('2022-08-20T07:35:48Z').format()

const date4 =  moment('2022-08-20T18:32:27+05:30').utc(true).toDate()


var start = moment().startOf('day').utc(true).toDate();
var end = moment().endOf('day').utc(true).toDate();


// console.log(moment(date2).fromNow())
// console.log(typeof(date2));
console.log(date2)

// console.log(start);
// console.log(end);

// console.log(date4)