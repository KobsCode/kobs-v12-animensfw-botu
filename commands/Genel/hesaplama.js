const math = require('mathjs')
const { MessageEmbed } = require('discord.js')
const { prefix } = require('../../ayarlar.json');

module.exports = {
        name: "hesaplama",
        aliases: ['mat','hesap','mat-hesaplama'],
        description: "Matematik Hesaplama",
        cooldown: 3,
        usage: `${prefix}istatistik`,
    async execute(client, message, args) {
        if (!args[0]) return message.channel.send('Herhangi bir hesaplama yapmadınız!')
        const m = await message.channel.send('Hesaplama...')
//#KobsCode Anime Bot MIT License
        var resp;
        resp = math.evaluate(args.join(' '))
//#KobsCode Anime Bot MIT License
        const embed = new MessageEmbed()
        .setAuthor('Matematik Hesaplama')
        .setColor('BLUE')
        .addField('Problem', `\`\`\`${args.join(' ')}\`\`\``)
        .addField('Sonuç', `\`\`\`${resp}\`\`\``)
        .setTimestamp()
//#KobsCode Anime Bot MIT License
        m.edit('Sonuç!', { embed: embed })
    }
}//#KobsCode Anime Bot MIT License