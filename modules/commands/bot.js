const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Obot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["বেশি bot Bot করলে leave নিবো কিন্তু😒😒 " , "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺" , "আমি আবাল দের সাথে কথা বলি না,ok😒" , "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑", "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?" , "এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬" , "I love you janu🥰" , "আরে Bolo আমার জান ,কেমন আছো?😚 " , "Bot বলে অসম্মান করছি,😰😿" , "Hop beda😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে ব্যাস্ত আছি😋" , "বোকাচোদা এতো ডাকিস কেন🤬" , "আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘 " , "আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒" , "হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আছি" , "কি হলো , মিস্টেক করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "হুম বলো কি বলবে😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒","হুম জান তোমার ওই খানে উম্মহ😑😘" , "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘" , " jang hanga korba😒😬" , "হুম জান তোমার অইখানে উম্মমাহ😷😘" , "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰" , "আমাকে এতো না ডেকে বস আমিনুল কে একটা গফ দে 🙄" , "আমাকে এতো না ডেকে বস রাহাদ কে একটা গফ দে 🙄" ,];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🕵️‍♀️")) {
     return api.sendMessage("☹︎シ︎আমি ভাবি ই একটু আলাদা আর যা করি নিজের মন মতো করি  ಠ★\n\n\n\n༆কারোরমতো হওয়ার ইচ্ছা  আমার নাইシ︎\n\n\n\n☺︎︎কারন আমি নিজেই ব্যান্ড তোমার মতো আবাল না🤟\n\n𓂀 𝔸𝕞𝕚𝕟𝕦𝕝 𝕊𝕠𝕣𝕕𝕒𝕣 𓂀🤟💥", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬", threadID);
   };
   
    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍")) {
     return api.sendMessage("সর এখান থেকে লাইকার আবাল..!🐸🤣👍⛏️", threadID);
   };
  
   if ((event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "assalamualaikum")) {
     return api.sendMessage("Walaikumassalam.🥀🖤", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("এত হাই-হ্যালো ..!🍆⛏️🐸🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🎭") || (event.body.toLowerCase() == "👏")) {
     return api.sendMessage("༎🎭༅•─༅༅─•༅🎭༎\n\nচুলা জ্বালাইতে পারে না  একটা  ༎﹏ღ\n❌༅༎সম্পর্কে আগুন লাগাইতে।পারে༎❌\n\n༊_༎কিছু মাদারচোদ লোক🎭\n\n༎🎭༅•༅༅༎༅•༅🎭༎\n꧁✨☬̈́☆☆☆☬̈́✨꧂\n 𝔸𝕞𝕚𝕟𝕦𝕝 𝕊𝕠𝕣𝕕𝕒𝕣 𓂀😈", threadID);
   };

   if ((event.body.toLowerCase() == "✍️") || (event.body.toLowerCase() == "Ami vlo") || (event.body.toLowerCase() == " kharap") || (event.body.toLowerCase() == "Ami vlo")) {
     return api.sendMessage( "༎🎭༅•─༅༅─•༅🎭༎\n\n\n༊_༎ আগে আমি অনেক ভালো ছিলাম  \n\n﹏😌ღ\n\n༅༎﹏ আগে তবে এখন না 😈👿🎭\n\n ༎🎭༅•༅༅༎༅•༅🎭༎\n𓂀 𝔸𝕞𝕚𝕟𝕦𝕝 𝕊𝕠𝕣𝕕𝕒𝕣 𓂀😈",threadID);
   };
     


   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("Main Hun Naw JaNyMan ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "aminul") || (event.body.toLowerCase() == "aminul sordar") || (event.body.toLowerCase() == "Aminul") || (event.body.toLowerCase() == "@Aminul Sordar")) {
     return api.sendMessage( "উনি এখন কাজে বিজি আছে যা বলার আমাকে বলতে পারেন😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "create you")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞𓂀 𝔸𝕞𝕚𝕟𝕦𝕝 𝕊𝕠𝕣𝕕𝕒𝕣 𓂀(✷‿✷)☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𓂀 𝔸𝕞𝕚𝕟𝕦𝕝 𝕊𝕠𝕣𝕕𝕒𝕣 𓂀\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/www.xnxx.com07\nContact Him on WhatsApp :- +8801704407109", threadID);
   };

   if ((event.body.toLowerCase() == "Tore banaice ke") || (event.body.toLowerCase() == "tumko banaya kisne")) {
     return api.sendMessage("𓂀 𝔸𝕞𝕚𝕟𝕦𝕝 𝕊𝕠𝕣𝕕𝕒𝕣 𓂀 ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Ladkaye Mat Rakkha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ar admin k")) {
     return api.sendMessage("He is 𓂀 𝔸𝕞𝕚𝕟𝕦𝕝 𝕊𝕠𝕣𝕕𝕒𝕣 𓂀. He Gives his name 𓂀 𝔸𝕞𝕚𝕟𝕦𝕝 𝕊𝕠𝕣𝕕𝕒𝕣 𓂀(✷‿✷)everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "💋") || (event.body.toLowerCase() == "🫦")) {
     return api.sendMessage("️🍀~হালা তুই তো বড় লুইচ্চা ~🌿", threadID);
   };


   if ((event.body.toLowerCase() == "biya korba amake") || (event.body.toLowerCase() == "bot amake biye korba")) {
     return api.sendMessage("হ্যাঁ করবো কিন্তু বাচ্চা আপনার পেটে হবে আপনি রাজি?🤰😹", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "চুপ কর") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("না আজকে আমি বলবো অনেক সহ্য করছি আর না 🤬", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("Tu H Btc. Bhos DK", threadID);
   };

   if ((event.body.toLowerCase() == "Amar bot amar kothasune na") || (event.body.toLowerCase() == "amar bot amar kotha sune na") || (event.body.toLowerCase() == "Ami bot ar admib amar kitha sune na") || (event.body.toLowerCase() == "amar Bot amar kotha sune na ")) {
     return api.sendMessage("সরি বস মাফ করে দেন আর এমন ভুল হবে না🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "Jannat") || (event.body.toLowerCase() == "jannat")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস আমিনুল এর বউ এর নাম..!😠🥰⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "কিস দেও") || (event.body.toLowerCase() == "Kiss me")) {
     return api.sendMessage("️ তুমি পঁচা তোমাকে কিস দিবো না 🤭", threadID);
   };

   if ((event.body.toLowerCase() == "tnx you") || (event.body.toLowerCase() == "tnx") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you Rahad")) {
     return api.sendMessage("️এতো ধন্যবাদ না দিয়ে পারলে গার্লফ্রেন্ড টা দিয়ে দে..!🌚⛏️🌶️", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️রাগ করে না সোনা পাখি এতো রাগ শরীরের জন্য ভালো না🥰", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️হুম  মাথা এমনিতেই গরম আছে🤬⛏️😷", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️my name 𓂀 𝔸𝕞𝕚𝕟𝕦𝕝 𝕊𝕠𝕣𝕕𝕒𝕣 𓂀", threadID);
   };

   if ((event.body.toLowerCase() == "bot ar baccha") || (event.body.toLowerCase() == "bot ar baccha bot")) {
     return api.sendMessage("️আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "Pic de") || (event.body.toLowerCase() == "ছবি দে")) {
     return api.sendMessage("️", threadID);
   };

   if ((event.body.toLowerCase() == "anowar") || (event.body.toLowerCase() == "hhhshhdhdhdhsh")) {
     return api.sendMessage("️Kiss Randi Ka Name Le Ke Mood Khrab Kr Diya.🙄 Dubara Naam Mat Lena Iska", threadID);
   };

   if ((event.body.toLowerCase() == "xudi") || (event.body.toLowerCase() == "tor nanire xudi")) {
     return api.sendMessage("️এত চোদা চুদি করস কেনো দেখা যাবে বাসর-রাতে-তুই-কতো পারিস..!🥱🌝🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️কি গো কলিজা তোমার কি মন খারাপ🥺", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ এইদিকে ওইদিকে কি দেখো জানু আমি তোমার সামনে দেখো😘", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️M Hu Na bby, Meri Pas Aoo M Pyar Karunga☺️", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("Bhikari Ban gye kya tum? Sirpe Hath Q de Rakkha H?😬", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("ভাই তুই এত হাসিস না হাসলে তোরে চোরের মত লাগে..!🌚🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("ভালোবাসা নামক আবলামী করতে চাইলে রাহাত বসের ইনবক্সে চলে যা পাগল ছাগল🌚🐸🌶️🍆", threadID);
   };

   if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "কেমন আছেন") || (event.body.toLowerCase() == "Kemon acen") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("আমি তখনই ভালো থাকি যখন আপনাকে হাসতে দেখি🤎☺️", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "Love you") || (event.body.toLowerCase() == "I Love You") || (event.body.toLowerCase() == "ভালোবাসি") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("", threadID);
   };

     if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "By") || (event.body.toLowerCase() == "বায়") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "তোরা থাক আমি গেলাম") || (event.body.toLowerCase() == "যাই গা")) {
     return api.sendMessage("কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️🍆⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "bot tumi ki amake bhalobaso") || (event.body.toLowerCase() == "Bot tumi ki amake vlo basho")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "ami aminul") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("হ্যা aminul ভালো আছো?", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
