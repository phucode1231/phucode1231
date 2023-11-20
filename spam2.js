const config = {
    name: "treov2",
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
      return message.reply("𝐴𝐷𝑀𝐼𝑁 : https://www.facebook.com/NTPyeuEmOmoiTheHe?mibextid=ZbWKwL");
    } else {
      return message.reply("𝐴𝐷𝑀𝐼𝑁 : https://www.facebook.com/NTPyeuEmOmoiTheHe?mibextid=ZbWKwL");
    }
  } else {
    const spam_content = args.join(" ");

    if (spam_content.length === 0) {
      return message.reply("spam đê");
    }

    if (global.spam.indexOf(message.threadID) > -1) {
      return message.reply("나는 당신을 사랑하지만 당신은 모릅니다 :(");
    } else {
      global.spam.push(message.threadID);
      while (global.spam.indexOf(message.threadID) > -1) {
        message.send(spam_content).catch(e => { console.error(e) });
        await new Promise(resolve => setTimeout(resolve, 5000)); // delay 4000 mili giÃ¢y = 4 giÃ¢y
      }
    }
  }
}

export default {
    config,
    onCall
}