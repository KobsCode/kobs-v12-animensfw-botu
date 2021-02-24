const Discord = require('discord.js');
const { prefix, TOKEN } = require('./ayarlar.json');
const fs = require('fs');
const moment = require('moment');
const client = new Discord.Client();
//#KobsCode Anime Bot MIT License
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();
client.prefix = prefix;
//#KobsCode Anime Bot MIT License
const kobscode = [
    "Genel",
    "Anime",
    "Yetkili"
]
//#KobsCode Anime Bot MIT License
kobscode.forEach(async (res) => {
    const commandFiles = fs.readdirSync(`./commands/${res}`).filter(file => file.endsWith('.js'))
    for (const file of commandFiles) {
        const command = require(`./commands/${res}/${file}`)
        client.commands.set(command.name, command)
    }
})
//#KobsCode Anime Bot MIT License
client.login(TOKEN).catch(() => { console.log('Giriş Yapamadı!') });
//#KobsCode Anime Bot MIT License
//CMD LOG
client.once('ready', async () => {
    console.log(`Bot ${client.user.username} İsmi İle Giriş Yaptı!`)
    client.user.setPresence({
        status: "idle"
    });
})



//Durum
var oyun = [
    `✨ KobsCode #BizBize`,
    `🌍 Komutlara Göz Atmak İçin : ${prefix}yardım`,
    `🔔 Sponsorluk Ve Reklam İçin  : kantasmehmetcan12@gmail.com`,
    `⚡️ Youtube : Youtube/KobsCode`,
    `Kobs ❤️ Anime & 🔞 NSFW Bot`
    ]
       
      
    client.on("ready", () => {
    setInterval(function() {
    
             var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
             client.user.setActivity(oyun[random], {"type": "WATCHING"});
    
            }, 2 * 3500);
    });
//#KobsCode Anime Bot MIT License
client.on('warn', info => console.log(info));
client.on('error', console.error);
//#KobsCode Anime Bot MIT License
client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot || message.channel.type === 'dm') return;
//#KobsCode Anime Bot MIT License
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
//#KobsCode Anime Bot MIT License
    if (!command) return;

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }
//#KobsCode Anime Bot MIT License
    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;
//#KobsCode Anime Bot MIT License
    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
//#KobsCode Anime Bot MIT License
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return (await message.reply(`**Bu Komutu Tekrar Kullanmak İçin __${timeLeft.toFixed(1)}__ saniye Beklemelisin!**`))
            .then(msg => msg.delete({timeout: 2000}));
        }
    }
//#KobsCode Anime Bot MIT License
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
//#KobsCode Anime Bot MIT License
try {
    command.execute(client, message, args)
} catch (error) {
	console.error(error);
	message.reply('Bu Komutu Çalıştırırken Bir Hata Meydana Geldi!');
}
});
//#KobsCode Anime Bot MIT License