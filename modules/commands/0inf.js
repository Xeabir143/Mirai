module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "info",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"]
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/1QaosHO.jpg", 
            
            "https://i.imgur.com/1BurIt1.jpg", 
            
            "https://i.imgur.com/tUFeHX3.jpg",

"https://i.imgur.com/iS52fh5.jpg",
            
            "https://i.imgur.com/1QaosHO.jpg"];
  
var callback = () => api.sendMessage({body:`ADMIN AND BOT INFORMATION 
________________________________________

❇️🅑︎🅞︎🅣︎ 🅝︎🅐︎🅜︎🅔︎ : ${global.config.BOTNAME}

❇️𝐁𝐎𝐓 𝐀𝐅𝐌𝐈𝐍 : 𝐈𝐓𝐙 ABIR

❇️𝐀𝐃𝐃𝐑𝐄𝐒𝐒 : RAJSHAHI 𝐂𝐈𝐓𝐘

_____________CONTACT_____________

❇️𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃: https://www.facebook.com/br4nd.abir.your.next.bf.fan

❇️𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐏𝐀𝐆𝐄 : https://www.facebook.com/br4nd.abir.your.next.bf.fan🤟🤟

❇️𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗 : ${global.config.PREFIX}

❇️𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑 : {𝐂𝐑𝐔𝐒𝐇 ABIR}

OTHER NFORMATION____________________

TYPE /admin 

➟ UPTIME

TODAY IS TIME : ${juswa} 

BOT IS RUNNING ${hours}:${minutes}:${seconds}.

THANKS FOR USING ${global.config.BOTNAME} 『🤖🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
