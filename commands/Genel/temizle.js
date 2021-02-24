const { prefix } = require('../../ayarlar.json');

//#KobsCode Anime Bot MIT License
module.exports = {
    name: 'temizle',
    aliases: ['c','del','delete','sil','clear'],
    description: 'Belirtilen Miktar Kadar Mesajı Siler',
    cooldown: 3,
    usage: `${prefix}temizle \`10\``,
    async execute(client, message, args) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(`Bu Kullanmak Icın \`Mesajları Yönet\` Yetkisine Sahip Olmalısınız `)
//#KobsCode Anime Bot MIT License
    if(!args[0]) return message.channel.send("**Lütfen Silinicek Mesaj Miktarını Yazın!**");
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(` ${args[0]} Adet Mesajı Sildim. ✅`).then(msg => msg.delete({timeout:5000}));
    })
    }
}//#KobsCode Anime Bot MIT License