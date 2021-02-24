const { MessageEmbed } = require('discord.js');
const { prefix } = require('../../ayarlar.json');
const axios = require('axios');
//#KobsCode Anime Bot MIT License
module.exports = {
    name: 'shota',
    aliases: ['shot'],
    description: 'Random **Shota** Görüntüleri Alın ',
    usage: `${prefix}shota`,
    cooldown: 3,
    async execute(client, message, args) {
        axios.get('https://tobz-api.herokuapp.com/api/randomshota?apikey=BotWeA')
        .then((res) => {
            const kobscode = new MessageEmbed()
            .setImage(res.data.result)
            .setColor('BLUE')
            .setTimestamp()
            .setFooter('Rastgele Shota')
//#KobsCode Anime Bot MIT License
            message.channel.send(kobscode)
        })
    }
}
//#KobsCode Anime Bot MIT License