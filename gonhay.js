

const config = {
  "name": "gonhay",
  "aliases": ["cmm"],
  "description": "",
  "usage": "",
  "cooldown": 3,
  "permissions": [2],
  "credits": "WaifuCat",
  "extra": {}
};

const list = [
  "sủa đi con thú êii",
"cố lên con óc đú 👈🤣",
"sồn hăng lên cha xem coi :))",
"sao m yếu v con thú? ",
"m là con thú ngu bị cha hnam bem rớt óc mà 👈🤣🤣",
"thg bẻm sủa chill đeee =)))",
"hăng hái lên tí chứ ơ",
"cố trụ tới sáng đi alo 🤪🤪",
"xem thg ngu đú dốt kìa clm 🤣🤣",
"sao thế trụ ko được à 🤣",
"con chó ngu cố đeee",
"sao v câm rồi à?",
"con điếm chó sủa sồn như ban đầu đeee",
"mày sợ anh à =)) 🤣",
"m gà mà con bẻmm",
"mày ngu rõ mà 👈😳",
"tao nói đúng mà 🤣",
"m còn cãi à",
"mày còn gì khác k hở",
"óc dái học lỏm kìa",
"cố tí em eee 👈🤪",
"m mếu à con điếm?",
"sao mếu rồi kìa 👈🤣",
"tao đã cho m mếu đâu",
"va nhau hăng lên con điếm.",
"sao thế?",
"từ bỏ cuộc chơi r à",
"mạnh mẽ tí đi con điếm chó 🐶🐕🤣",
"cố lên con chó ngu êii",
"m ớt tao à con điếm ??",
"m sợ t lắm à",
"sao lại sợ t rồi kkk 😂🤣🤣",
"con ngu cay lắm phải kh",
"ớt rồi kìa em",
"mày còn chối à",
"làm tí đeeee",
"mới đó đã mệt r kìa",
"sao gà mà sồn v",
"sồn như lúc đầu cho tao",
"sao à",
"ai cho m nhai",
"cay lắm r", 
"từ bỏ đi em",
"mày nghĩ mày làm t cay đc à",
"có đâu",
"tao đang hành m mà",
"bịa à",
"cay :)))))",
"cố lên chó dốt",
"hăng tiếp đi",
"tới sáng k em",
"k tới sáng à",
"chán v",
"m gà mà",
"log acc thay phiên à",
"coi tụi nó dồn ngu kìa",
"sợ tao à con chó đần",
"lại win à",
"lại win r",
"lũ cặc cay tao lắm🤣🤣",
"cố lên đê",
"sao mới 5p đã câm r",
"yếu đến thế à",
"sao kìa",
"khóc kìa",
"cầu cứu lẹ ei",
"ai cứu đc m à :))",
"tao bá mà",
"sao m gà thế",
"hăng lẹ cho tao",
"con chó eiii🤣",
"ổn k em",
"kh ổn r à",
"mày óc à con chó bẻm=))",
"mẹ mày ngu à",
"bú cặc cha m k em",
"thg giả gái :))",
"coi nó ngu kìa ae",
"con chó này giả ngu à",
"m ổn k",
"mồ côi kìa",
"sao v sợ r à",
"cố gắng tí em",
"cay cú lắm r",
"đấy đấy bắt đầu",
"chảy nước đái bò r à em",
"sao kìa đừng run",
"mày run à:))",
"thg dái lở",
"cay mẹ m lắm",
"lgbt xuất trận à con đĩ",
"thg cặc giết cha mắng mẹ",
"sủa mạnh eii",
"mày chết r à:))",
"sao chết kìa",
"bị t hành nên muốn chết à",
"con lồn ngu=))",
"sao kìa",
"mạnh lên kìa",
"yếu sinh lý à",
  "sủa đê",
"cay à",
"hăng đê",
"gà kìa ae",
"akakaa",
"óc chó kìa",
"🤣🤣🤣",
"ổn không🤣🤣",
"bất ổn à",
"ơ kìaaa",
"hăng hái đê",
"chạy à 🤣🤣",
"tởn à",
"kkkk",
"mày dốt à",
"cặc ngu",
"cháy đê",
"chat hăng lên",
"cố lên",
"mồ côi cay",
"cay à",
"cn chó ngu",
"óc cặc kìa",
"đĩ đú:))",
"đú kìa",
"cùn v",
"r x",
"hhhhh",
"kkakak",
"sao đú",
"cặc con",
"ngu kìa",
"chat mạnh đê",
"hăng ee",
"ơ ơ ơ",
"sủa cháy đê",
"sủa mạnh eei",
"mày óc à con",
"tao cho m chạy à",
"con đĩ ngu sủa?",
"mày chạy à con đĩ lồn",
"anh bá mà con đú",
];

let index = 0;
let isStopped = false;

export function onCall({ message }) {
  const args = message.body.split(" ").slice(1); 
  if (args[0] === "stop") {
    isStopped = true; 
    message.send("𝑊𝑖𝑛 𝑤𝑖𝑛 𝑤𝑖𝑛 🤣👈");
    return;
  }

  if (isStopped) {
    isStopped = false;
  }

  const sendText = () => {
    message.send(list[index]);
    index = (index + 1) % list.length;
    if (!isStopped) {
      setTimeout(sendText, 2000); 
    }
  };
  sendText();
}

export default {
  config,
  onCall
};