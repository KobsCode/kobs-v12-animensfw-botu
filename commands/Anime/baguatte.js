const { MessageEmbed } = require('discord.js');
const axios = require('axios');
const { prefix,UserAgent } = require('../../ayarlar.json')
//#KobsCode Anime Bot MIT License
module.exports = {
    name: 'baguette',
    aliases: ['bagu','baguet'],
    description: 'Random **Baguette** Görüntüleri Alın ',
    usage: `${prefix}baguette`,
    cooldown: 3,
    async execute(client, message, args) {
            axios.get('https://api.computerfreaker.cf/v1/baguette', { headers: { 'User-Agent': `${UserAgent}`} } )
            .then((res) => {
            const kobscode = new MessageEmbed()
            .setImage(res.data.url)
            .setColor('BLUE')
            .setTimestamp()
            .setFooter('Rastgele Baguette')
//#KobsCode Anime Bot MIT License
            message.channel.send(kobscode)
            })
    }
//#KobsCode Anime Bot MIT License
}
//#KobsCode Anime Bot MIT License