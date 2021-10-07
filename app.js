console.log("Shree Ganeshaya Namaha");

const twtusername = '@atharvashinde_';

//making sure npm run develop works
if (process.env.NODE_ENV === "develop") {
    require("dotenv").config();
  };

// these are rules for node-schedule
//this checks node-schedule in node modules 
const schedule = require("node-schedule");
// RecurrenceRule is a method for, for eg if you want to do a task every 45 min after a hour 
const rule = new schedule.RecurrenceRule();
// these👇 are for every monday at 10 am 
rule.dayOfWeek = 1;
rule.hour = 10;
rule.tz = "Etc/GMT+5:30";

const repliesArray = ['thanks', 'thank you', 'ty', ':) thanks'];

// this is to creat a client i.e twit to connect to twitter Api 
const twitter_client = require('twit');

// Pulling keys from another file
var config = require('./config.js');

// as mentioned in twit api readme it needs configuration object with the form that is present in .config.js, so this lines connect twit to config 
var T = new twitter_client(config);

// this stream variable filters the twitter public stream that mentions your username from other twitter accounts
var stream = T.stream('statuses/filter', {track: twtusername});

// 'tweet' is a parameter that should be listened
// pressStartis a function that handles the events 
stream.on('tweet', pressStart);

// tweet paramter is the tweet that another twitter user has twitted
function pressStart(tweet) {
    const id = tweet.id_str;
    const text = tweet.text;
    // this gives username of person who twitted and mentioned you
    const name = tweet.user.screen_name;

    // this regex search for word 'please' to activate the bot 
    let regex1 = /(congrats)/gi;
    const check1 = text.match(regex1) || [];
    const check2 = check1.length > 0;
    
    if(check2==true && text.includes(twtusername)){
        const reply = ('@'+ name + repliesArray[Math.floor(Math.random() * repliesArray.length)]);
        // this👇 is used to post the tweet 
        T.post('statuses/update', { status:reply, in_reply_to_status_id: id});

    } else {
        config.log(':|');
    };
}

