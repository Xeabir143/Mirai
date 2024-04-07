module.exports.config = {
  name: "botadmin",
  version: "1.0.5",
  hasPermssion: 0,
  credits: "Mirai Team",
  description: "Manage bot admin",
  commandCategory: "config",
  usages: "[list/add/remove] [userID]",
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.languages = {
    "bn": {
        "listAdmin": '[Admin] Danh sách toàn bộ người điều hành bot: \n\n%1',
        "notHavePermssion": '[Admin] Bạn không đủ quyền hạn để có thể sử dụng chức năng "%1"',
        "addedNewAdmin": '[Admin] Đã thêm %1 người dùng trở thành người điều hành bot:\n\n%2',
        "removedAdmin": '[Admin] Đã gỡ bỏ %1 người điều hành bot:\n\n%2'
    },
    "en": {
        "listAdmin": '[Admin] Admin list: \n\n%1',
        "notHavePermssion": '[Admin] You have no permission to use "%1"',
        "addedNewAdmin": '[Admin] Added %1 Admin :\n\n%2',
        "removedAdmin": '[Admin] Remove %1 Admin:\n\n%2'
    }
}

module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    const content = args.slice(1, args.length);
    const { threadID, messageID, mentions } = event;
    const { configPath } = global.client;
    const { ADMINBOT } = global.config;
    const { userName } = global.data;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);

    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);

    switch (args[0]) {
        case "list":
        case "all":
        case "-a": {
            const listAdmin = ADMINBOT || config.ADMINBOT || [];
            var msg = [];

            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                    const name = await Users.getNameUser(idAdmin);
                    msg.push(`- ${name}(https://facebook.com/${idAdmin})`);
                }
            }

            return api.sendMessage(getText("listAdmin", msg.join("\n")), threadID, messageID);
        }

        case "add": {
            if (permssion != 2) return api.sendMessage(getText("notHavePermssion", "add"), threadID, messageID);
            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];

                for (const id of mention) {
                    ADMINBOT.push(id);
                    config.ADMINBOT.push(id);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = await Users.getNameUser(content[0]);
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", 1, `[ ${content[1]} ] » ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }

        case "remove":
        case "rm":
        case "delete": {
            if (permssion != 2) return api.sendMessage(getText("notHavePermssion", "delete"), threadID, messageID);
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.ADMINBOT.findIndex(item => item == id);
                    ADMINBOT.splice(index, 1);
                    config.ADMINBOT.splice(index, 1);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.ADMINBOT.findIndex(item => item.toString() == content[0]);
                ADMINBOT.splice(index, 1);
                config.ADMINBOT.splice(index, 1);
                const name = await Users.getNameUser(content[0]);
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", 1, `[ ${content[0]} ] » ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
        }

        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    };
}

module.exports.config = {
  name: "admin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kawsar",
  description: "Bot operator information",
  commandCategory: "info",
  cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`    THE BOT OPERATOR
             🇧🇩🇦🇷🇦🇷🇦🇷➕️➕️➕🇦🇷🇦🇷🇦🇷
╔══❀══◄░❀░►══❀══╗
 -NAME ➪ ༒ 𝐂𝐄𝐎-⸙ ABIR-❯⸙๏

 -𝗚𝗲𝗻𝗱𝗲𝗿 ➪𝐌𝐚𝐥𝐞__!!🍂💜

 -𝗔𝗴𝗲 ➪ 18+  ___!!🥀✨

 -𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽➪𝐒𝐢𝐧𝐠𝐞𝐥

 -𝗪𝗮𝗿𝗸 ➪ 𝐒𝐭𝐮𝐝𝐞𝐧𝐭

 ~𝐆𝐀𝐌 : 𝐅𝐢𝐫𝐞 𝐋𝐨𝐯𝐞𝐫 

 -𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 ➪ https://www.facebook.com/br4nd.abir.your.next.bf.fan

~𝐋𝐂 : হেই ༒ 𝐂𝐄𝐎-⸙ ABIR-❯⸙๏ ভালোবাসি বলেই দাও 🥱🥱

~𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐏𝐀𝐆𝐄➪ https://www.facebook.com/br4nd.abir.your.next.bf.fan

~𝐅𝐈𝐑𝐄 :  ️༒ 𝐂𝐄𝐎℅ABIR-❯⸙๏🥺🔫̷

-𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐈𝐌𝐎 ➪ বউ নাই তাই কাউকে দিবো নাহ BYE 🥱01704407109 

~𝐓𝐄𝐋𝐄𝐆𝐑𝐄𝐌  :01704407109 🥺🔥🥰

 -𝗠𝗮𝗶𝗹.➪𝐈𝐧𝐛𝐨𝐱 𝐊𝐨𝐫𝐭𝐞 𝐏𝐚𝐫𝐞𝐧

╚══❀══◄░❀░►══❀══╝`, event.threadID, event.messageID);
