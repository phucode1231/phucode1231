const config = {
  name: "reoo",
  description: "",
  usage: "",
  cooldown: 3,
  permissions: [2],
};

let arr = [

    "úi cn {name} bướm khắm:))))",
    "cn già mày đập đt mày à {name} eyy:))) ",
    "úi coi cn bẻm {name} nó bị chà đạp kìa:)))",
    "{name} khắm chui dô bướm con đĩ già nó chặn keo núp trỏng à:))))",
    "câm à con {name} ngu:)))",
    "{name} eyyy:))",
    "úi cái con {name} hôi:)))",
    "chết cn già mày à {name}:)))",
    "địt con {name} cụ mày phọt khí bướm:)))",
    "úi {name} cha bị úp:))) {name} con trốn đâu r ae:)))",
  "lô:)))",
  "con {name} cặt:))",
  "{name} ớt à:))",
"{name} chó eyyyyyy:)))",
"úi cái cn bẻm {name} boài khắm:)))) thèm tra tấn nó vãi=)))",
"lô cn bẻm {name} cặt:))",
"{name} có mẹ kh:)))?",
"where is {name} má mi:))))))))???",
"sủa cái củ bướm mẹ mày đêyyyy cn {name} ngu:))",
"chết cn già mày à {name}:))",
"hình ảnh cn bẻm {name} bị chà đạp:)) úi cái cn giẻ rách:)))",
"tao có noti cn boài {name} sợ tao:))) tí bố cap úp tbg:))",
"akakakkakakaka:))))))",
"{name} đang cảm nhận nổi đauu:))))))",
"{name} ngu sủa mau đi ơ",
"{name} ôi mày bị cha xúc phạm kìa",
"{name} óc ko cha ko mẹ bị khinh thường",
"mày cay tao mà {name}",
"đĩ ngu bị cha chửi mà con {name}",
"mày run sợ trước tao mà {name}",
"con {name} bẻm sợ t mà",
"nhìn mày đơ vậy {name}",
"nhìn {name} gà ỉa chảy",
"{name} bị chửi t mà sợ t mày",
"{name} câm hận tao lắm",
"đừng cay tao nữa nha {name}",
"{name} con chó bú cứt kkkkkk",
"bị tao xúc phạm ko biết nhục à {name}",
"oan ức ko {name}",
"thù ghét tao à {name}",
"con chó làm mẫu sủa cha mày coi tí đi {name}",
"con {name} dái bộng",
"bị tao chửi rung cặc mà đk {name}",
"con chó ỉa cứt chảy mà {name}",
"nào mày ăn dc tao thế {name}",
"sử dụng ngôn từ gây sát thương đi mò {name}",
"có sát thương chí mạng ko {name}",
"m nhà lá dk {name}",
"nào m ở biệt thự như bố vậy {name}",
"cay lắm rồi à {name}",
"cạn ngôn rồi kìa {name}",
"mẹ mày béo như heo vậy {name}",
"thằng nghịch tử sao m giết cha m thế {name}",
"m nỡ đút con cặc vào cái lồn hết tinh dịch của má m vậy {name}",
"mày bị t chửi chỉ biết nghe thôi hả {name}",
"yếu kém đòi va tao vậy {name}",
"coi nó đỏ mặt vì cay đắng kkk 🤣 tội mà ghê {name} ơi",
"cay dữ thần thiên địa đk {name} ngu",
"bố là ác quỷ fefe nè {name}",
"t bắn shot gun nát đầu bà nội m luôn đó tin không {name}",
"m ăn cứt gà xong chà vô mặt í {name}",
"mặt m dính đầy cứt gà lau dùm t đi {name} ơi trông bẩn vcl",
"phèn thì né xa t ra đi {name}",
"mày vs lũ bạn mày ăn dc t ko đó {name}",
"1 lũ phèn v {name}",
"hạ đẳng thế làm j có tuổi với anh vậy {name}",
"ngu ra oai xong bị t sút bại quê ko {name}",
"con chó bú cứt tao mà {name}",
"{name} hửi đít t khen thơm tho",
"{name} ngu mày chưa nghe danh tao à ",
"tao nói con {name} nó gà mà sĩ gái",
"tao đấng bot war mà {name}",
"{name} nghèo có bot 500 củ như a ko",
"tran hoang duy bá vcl mà {name}",
"{name} chó vạn kiếp ko ăn dc tao",
"thằng óc chó {name} bị t chửi đến mét mẹ",
"cay tao à {name} bú dái",
"m tính lên ăn hôi à {name}",
"ức chế tao lắm rồi mà con chó {name}",
"{name} boài sủa chill đi",
"con heo mập {name} cấm m ăn cứt",
"đọ tiền phát ko {name}",
"{name} phèn thì câm nha ai cho m lên tiếng vậy",
"{name} óc chó cay cha lắm dk",
"m đẹp bằng vk tao ko v {name}",
"đọ danh vs bố kh {name} kkk",
"lên đê {name} ăn cứt chó",
"t đếm 123 m chưa lên là t giết mẹ m",
"{name} m bị tao chửi đến off mxh luôn r hả",
"sao m có tuổi ăn tao đó {name}",
"t ra hiệu lệnh m mới dc chạy nha con ngu óc cứt {name}",
"bị tao bón hành ngập mồm mà {name}",
"{name} ngu đối diện vs nghịch cảnh",
"m câm = t win đó {name}"

  ]

setInterval(() => {
    for (let [key, value] of global.reoten_888) {
      if (value.index == arr.length) value.index = 0;
      api.sendMessage(arr[value.index].replace(/{name}/g, value.content), key, () => {
        value.index++;
      });
    }
  }, 4000);

if (!global.reoten_888) {
  global.reoten_888 = new Map();
}

async function onCall({ message, args }) {
  let content = args.join(" ");

  if (content === "off") {
    global.reoten_888.delete(message.threadID);
    return await message.reply("cha là thanh phú =))");
  }

  global.reoten_888.set(message.threadID, { content, index: 0 });
  await message.reply(" ");
}

export default {
  config,
  onCall,
};