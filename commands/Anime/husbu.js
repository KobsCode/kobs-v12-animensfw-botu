const { MessageEmbed, Message } = require('discord.js')
const axios = require('axios')
const { prefix } = require('../../ayarlar.json')
//#KobsCode Anime Bot MIT License
module.exports = {
    name: "husbu",
    aliases: ['hus'],
    description: "Random **Husbu** Görüntüleri Alın ",
    cooldown: 3,
    usage: `${prefix}husbu`,
    async execute(client, message, args) {
        axios.get('https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA')
        .then((res) => {
            const kobscode = new MessageEmbed()
            .setImage(res.data.image)
            .setDescription(`**${res.data.name}**`)
            .setTimestamp()
            .setFooter('Rastgele Husbu')
            .setColor('BLUE')
//#KobsCode Anime Bot MIT License
   //#KobsCode Anime Bot MIT License
            message.channel.send(kobscode)
        })
    }
}
//#KobsCode Anime Bot MIT License