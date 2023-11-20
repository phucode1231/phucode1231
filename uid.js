const config = {
    name: "uid",
    aliases: ["uid"],
    version: "1.1.0",
    description: "Lấy id người dùng",
    usage: "[tag]",
    cooldown: 3,
    permissions: [2],
    credits: "..."
}

function onCall({ message }) {
    const { senderID, mentions, reply, type } = message;
    const msg = Object.keys(mentions).length == 0 ? type == "message_reply" ? message.messageReply.senderID : senderID : Object.entries(mentions).map(e => `${e[1].replace(/@/g, '')} - ${e[0]}`).join("\n");

    reply(msg);
}

export default {
    config,
    onCall
}
