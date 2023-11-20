const config = {
		name: "spam",
		description: "spam spam spam",
		usage: "[ná»™i dung]",
		cooldown: 3,
		permissions: [2],
		credits: "",
}

if (!global.spam) {
		global.spam = [];
}

async function onCall({ message, args }) {
	const isStop = args[0]?.toLowerCase() === "stop";
	if (isStop) {
		const index = global.spam.indexOf(message.threadID);
		if (index > -1) {
			global.spam.splice(index, 1);
			return message.reply("𝗡𝗴𝘂𝘆𝗲̂̃𝗻 𝗧𝗵𝗮𝗻𝗵 𝗣𝗵𝘂́ 𝐛𝐚́ 𝐬𝐚̀𝐧 𝐭𝐫𝐞𝐨 𝐦𝐚̀ 𝐜𝐥𝐦𝐦 👈🤣🤣");
		} else {
			return message.reply("𝗡𝗴𝘂𝘆𝗲̂̃𝗻 𝗧𝗵𝗮𝗻𝗵 𝗣𝗵𝘂́ 𝐛𝐚́ 𝐬𝐚̀𝐧 𝐭𝐫𝐞𝐨 𝐦𝐚̀ 𝐜𝐥𝐦𝐦 👈🤣🤣");
		}
	} else {
		const spam_content = args.join(" ");

		if (spam_content.length === 0) {
			return message.reply("Treo ko lũ đú :))))");
		}

		if (global.spam.indexOf(message.threadID) > -1) {
			return message.reply("tuậ lệnh");
		} else {
			global.spam.push(message.threadID);
			while (global.spam.indexOf(message.threadID) > -1) {
				message.send(spam_content).catch(e => { console.error(e) });
				await new Promise(resolve => setTimeout(resolve, 20000)); // delay 19000 mili giÃ¢y = 19 giÃ¢y
			}
		}
	}
}

export default {
		config,
		onCall
}