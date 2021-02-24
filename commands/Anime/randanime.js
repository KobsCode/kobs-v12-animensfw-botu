const { MessageEmbed } = require('discord.js');
const axios = require('axios');
const { prefix,UserAgent } = require('../../ayarlar.json')
//#KobsCode Anime Bot MIT License
module.exports = {
    name: 'anime',
    aliases: ['randomanime','random-anime'],
    description: 'Random **Anime** Görüntüleri Alın ',
    usage: `${prefix}anime`,
    cooldown: 3,
    async execute(client, message, args) {
            axios.get('https://api.computerfreaker.cf/v1/anime', { headers: { 'User-Agent': `${UserAgent}`} } )
            .then((res) => {
            const kobscode = new MessageEmbed()
            .setImage(res.data.url)
            .setColor('BLUE')
            .setTimestamp()
            .setFooter('Rastgele Anime')
//#KobsCode Anime Bot MIT License
            message.channel.send(kobscode)
            })
    }
//#KobsCode Anime Bot MIT License
}
//#KobsCode Anime Bot MIT License