const { MessageEmbed } = require('discord.js')
const { owner } = require('../../ayarlar.json')
module.exports = {
    name: 'eval',
    description: '',
    async execute(client, message, args) {
      let izinli = ["536965289598779395"] // BU ŞEKİLDE ARTTIRABİLİRSİNİZ.
      if(!izinli.includes(message.member.id)) return message.channel.send('Bu Komutu İzinli Olan Kullanıcılar Kullanabilir.')
        
      const msg = message;
      
      const bot = client;
  
      const evalEmbed = new MessageEmbed()
      .setThumbnail(message.author.displayAvatarURL())
      .setColor("BLUE");
  
      let kobscode = args.join(" ");
      
      try {
        const input = clean(kobscode);
  
        if (!kobscode) return msg.channel.send("Bir Kod Yaz!");
  
        evalEmbed.addField("Girdi", `\`\`\`js\n${input}\n\`\`\``);
  
        let evaled;
  
        if (kobscode.includes("--silent") && kobscode.includes("--async")) {
          kobscode = kobscode.replace("--async", "").replace("--silent", "");
  
          return await eval(`(async () => { ${kobscode} })()`);
        } else if (kobscode.includes("--async")) {
          kobscode = kobscode.replace("--async", "");
  
          evaled = await eval(`(async () => { ${kobscode} })()`);
        } else if (kobscode.includes("--silent")) {
          kobscode = kobscode.replace("--silent", "");
  
          return await eval(kobscode);
        } else evaled = await eval(kobscode);
  
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled, { depth: 0 });
  
        let output = clean(evaled);
  
        output = output.replace(new RegExp(client.token, "g"), "[TOKEN]");
        output = output.replace(new RegExp(bot.token, "g"), "[TOKEN]");
  
        if (kobscode.includes("--no-embed")) {
          kobscode = kobscode.replace("--no-embed", "");
  
          return msg.channel.send(`\`\`\`js\n${output}\n\`\`\``);
        }
  
        evalEmbed.addField("Çıktı", `\`\`\`js\n${output}\n\`\`\``);
      } catch (e) {
        const error = clean(e);
  
        if (kobscode.includes("--no-embed")) {
          kobscode = kobscode.replace("--no-embed", "");
  
          return msg.channel.send(`\`\`\`js\n${error}\n\`\`\``);
        }
  
        evalEmbed.addField("Hata", `\`\`\`js\n${error}\n\`\`\``);
      }
  
      msg.channel.send(evalEmbed);
    }
  };
  
  function clean(text) {
    if (typeof text === "string")
      return text
        .replace(/`/g, `\`${String.fromCharCode(8203)}`)
        .replace(/@/g, `@${String.fromCharCode(8203)}`);
    // eslint-disable-line prefer-template
    else return text;
  }