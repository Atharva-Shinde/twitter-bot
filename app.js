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

