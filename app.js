console.log("Shree Ganeshaya Namaha");

const twtusername = '@atharvashinde_';

//making sure npm run develop works
// if (process.env.NODE_ENV === "develop") {
//     require("dotenv").config();
//   };

// these are rules for node-schedule
//this checks node-schedule in node modules 
const schedule = require("node-schedule");
// RecurrenceRule is a method for, for eg if you want to do a task every 45 min after a hour 
const rule = new schedule.RecurrenceRule();
// these👇 are for every monday at 10 am 
rule.dayOfWeek = 1;
rule.hour = 10;
rule.tz = "Etc/GMT+5:30";

// this is to creat a client i.e twit to connect to twitter Api 
const twitter_client = require('twit');

// Pulling keys from another file
var config = require('./config.js');

// this is created so that we can make requests to twitter api 
// from now on when we want to use twit modules we'll simply reference the T.propertyName suntax
var T = new twitter_client(config);

// this stream variable filters the twitter public stream that mentions your username from other twitter accounts
var stream = T.stream('statuses/filter', {track: twtusername});

// 'tweet' is a parameter that should be listened
// pressStartis a function that handles the events 
stream.on('tweet', pressStart);