const discord = require('discord.js');
const { prefix } = require('../../ayarlar.json');

//#KobsCode Anime Bot MIT License
module.exports = {
    name: "istatistik",
    aliases: ['i','boti','bot-istatistik'],
    description: "Botun İstatistiklerini Gösterir",
    cooldown: 30,
    usage: `${prefix}istatistik`,
    async execute(client, message, args) {
        const kobscode = new discord.MessageEmbed() //#KobsCode Anime Bot MIT License
        .setDescription(`
**\`Genel Bilgiler;\`**
\`\`\`
👑 Sahip İsim : Kobs
👑 Sahip İd : 536965289598779395

📃 Bot İsim: ${client.user.username}
📃 Bot ID: ${client.user.id}\`\`\`

**\`Genel İstatistikler;\`**
\`\`\`
📂 Sunucu: ${client.guilds.cache.size} 
📂 Kanal: ${client.channels.cache.size} 
📂 Kullanıcı: ${client.guilds.cache
      .reduce((a, b) => a + b.memberCount, 0)
      .toLocaleString()} 
📂 Komut Sayısı: ${client.commands.size} \`\`\`

**\`Sürümler;\`**
\`\`\`
📋 Discord.js: ${discord.version}
📋 Node.js: ${process.version}\`\`\`
`)//#KobsCode Anime Bot MIT License 
//#KobsCode Anime Bot MIT License
        message.channel.send(kobscode)
    }
}