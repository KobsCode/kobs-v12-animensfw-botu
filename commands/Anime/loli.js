const { MessageEmbed } = require('discord.js');
const { prefix } = require('../../ayarlar.json');
const axios = require('axios');
//#KobsCode Anime Bot MIT License
module.exports = {
    name: 'loli',
    aliases: ['randloli','lolis'],
    description: 'Random **Loli** Görüntüleri Alın ',
    usage: `${prefix}loli`,
    cooldown: 3,
    async execute(client, message, args) {
        axios.get('https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA')
        .then((res) => {
            const kobscode = new MessageEmbed()
            .setImage(res.data.result)
            .setColor('BLUE')
            .setTimestamp()
            .setFooter('Rastgele Lolis')
//#KobsCode Anime Bot MIT License
            message.channel.send(kobscode)
        })
    }
}
//#KobsCode Anime Bot MIT License