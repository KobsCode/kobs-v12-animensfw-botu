const { MessageEmbed } = require('discord.js');
const { prefix } = require('../../ayarlar.json');

module.exports = {
    name: 'avatar',
    aliases: ['ava','icon','photo'],
    cooldown: 3,
    description: 'Avatarını göster',
    usage: `${prefix}avatar Veya ${prefix}avatar @tag`,
    async execute(client, message, args) {
        const avataruser = message.mentions.users.first() || message.author;
//#KobsCode Anime Bot MIT License
        const embed = new MessageEmbed()
        .setImage(avataruser.displayAvatarURL({ size: 4096, format: 'png', dynamic: true }))
        .setColor('BLUE')
        .setTimestamp()
        .setDescription(`[GİF](${avataruser.avatarURL({dynamic:true, format: 'gif'})}) - [PNG](${avataruser.avatarURL({format: 'png'})}) - [JPG](${avataruser.avatarURL({format: 'jpg'})}) `)
        .setAuthor(`${message.author.tag}`,message.author.avatarURL({dynamic:true}))
        .setImage(avataruser.avatarURL({dynamic:true}))
        .setFooter(`Avatar ${avataruser.tag}`)
//#KobsCode Anime Bot MIT License
        message.channel.send(embed)
    }
}