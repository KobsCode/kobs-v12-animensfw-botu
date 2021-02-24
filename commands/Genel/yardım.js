const { MessageEmbed } = require('discord.js');
const { prefix } = require('../../ayarlar.json')
module.exports = {
    name: 'yardım',
    aliases: ['help','menu','cmd'],
    description: 'Tüm Komutları Gösterir',
    usage: `${prefix}yardım\n${prefix}yardım [komut]`,
    cooldown: 3,
    async execute(client, message, args) {
        if (args[0]) {
            const data = [];
            const name = args[0].toLowerCase();
            const { commands } = message.client;
            const command = commands.get(name) || commands.find(cmd => cmd.aliases && cmd.aliases.includes(name));
            data.push(`**Komut**: ${command.name}`)
            if (command.aliases) data.push(`**Diğer Kullanımlar**: ${command.aliases.join(', ')}`)
            if (command.description) data.push(`**Açıklama**: ${command.description}`)
            if (command.usage) data.push(`**Kullanım**: ${command.usage}`)
            if (command.cooldown) data.push(`**Bekleme süresi**: ${command.cooldown} Saniye`)
            //#KobsCode Anime Bot MIT License
            const embed = new MessageEmbed()
            .setDescription(data)
            .setColor('BLUE')
            .setTimestamp()
            .setFooter(message.author.username, message.author.avatarURL())
            //#KobsCode Anime Bot MIT License
            message.channel.send(embed)
            //#KobsCode Anime Bot MIT License
        } else {
        const data = [];
        const { commands } = message.client;
        data.push(`İşte Benim Komutlarım:`);
        data.push(commands.map(command => `\`${command.name}\``).join(', '));
        data.push(`\nKomutun ayrıntılarını görüntülemek için bunu yapabilirsiniz: **\`${prefix}yardım [komut]\`**`);
//#KobsCode Anime Bot MIT License
        const kobscode = new MessageEmbed()
        .setDescription(data)
        .setColor('BLUE')
        .setImage('https://cdn.discordapp.com/attachments/811246298807140393/813682459165327360/reaction.gif')
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL())
//#KobsCode Anime Bot MIT License
        message.channel.send(kobscode)
        }
    }
}//#KobsCode Anime Bot MIT License
