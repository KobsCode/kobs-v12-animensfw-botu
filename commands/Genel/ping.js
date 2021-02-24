const { MessageEmbed } = require('discord.js')
const { prefix } = require('../../ayarlar.json');

//#KobsCode Anime Bot MIT License
module.exports = {
    name: 'ping',
    aliases: ['ms','ping-pong'],
    cooldown: 3,
    description: 'Botun Ping & Gecikmesini Gösterir',
    usage: `${prefix}ping`,
    async execute(client, message, args) {
        const m = await message.channel.send('💓Kobs💓Bot💓 PingPong...')
//#KobsCode Anime Bot MIT License
        const embed = new MessageEmbed()
        .setTitle('PingPong')
        .addField('⏳ Gecikme', `_**${m.createdTimestamp - message.createdTimestamp}ms**_`)
        .addField('💓 Ping', `_**${client.ws.ping}ms**_`)
        .setColor('BLUE')
        .setTimestamp()
        //#KobsCode Anime Bot MIT License
        return m.edit('Tamamlandı!', {embed: embed})
    }
}