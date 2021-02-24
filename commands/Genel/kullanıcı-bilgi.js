const { MessageEmbed } = require('discord.js')
const moment = require("moment")
const { prefix } = require('../../ayarlar.json');
require("moment-duration-format")
//#KobsCode Anime Bot MIT License
module.exports = {
  name: 'kb',
  aliases: ['kullanıcıbilgi','kullanıcı-bilgi'],
  cooldown: 3,
  description: 'Kullanıcı Bilgilerini Gösterir',
  usage: `${prefix}kb Veya ${prefix}kb @tag`,
    async execute(client, message, args) {
       //#KobsCode Anime Bot MIT License
       //DURUM
        var u = '';
        let member = message.mentions.users.first() || client.users.cache.get(args[0]);
        let author = message.author; 
        if(member) {
             var u = member;
        } else {
             var u = author;
        }   //#KobsCode Anime Bot MIT License 
        member = message.guild.member(u);
        var Durum = u.presence.status;
        var durm = (Durum == "online" ? ("💚Çevrimiçi💚") : (Durum == "offline" ? ("🖤Çevrimdışı🖤") : (Durum == "idle" ? ("\`💛Boşta💛") : (Durum == "dnd" ? ("❤️Rahatsız Etmeyin❤️") : ("Bilinmiyor/bulunamadı.")))));
//Tarih
var tarih = ''
var gün;
if (moment(u.createdAt).format('dddd') === 'Monday') gün = "Pazartesi"//#KobsCode Anime Bot MIT License
if (moment(u.createdAt).format('dddd') === 'Tuesday') gün = "Salı"
if (moment(u.createdAt).format('dddd') === 'Wednesday') gün = "Çarşamba"
if (moment(u.createdAt).format('dddd') === 'Thursday') gün = "Perşembe"
if (moment(u.createdAt).format('dddd') === 'Friday') gün = "Cuma"
if (moment(u.createdAt).format('dddd') === 'Saturday') gün = "Cumartesi"
if (moment(u.createdAt).format('dddd') === 'Sunday') gün = "Pazar"
//#KobsCode Anime Bot MIT License
   if(moment(u.createdAt).format('MM') === '01') {
     var tarih = `${moment(u.createdAt).format('D')} Ocak ${gün} ${moment(u.createdAt).format('YYYY HH:mm:ss')} `
   }
   if(moment(u.createdAt).format('MM') === '02') {//#KobsCode Anime Bot MIT License
     var tarih = `${moment(u.createdAt).format('D')} Şubat ${gün} ${moment(u.createdAt).format('YYYY HH:mm:ss')} `
   }
   if(moment(u.createdAt).format('MM') === '03') {
     var tarih = `${moment(u.createdAt).format('D')} Mart ${gün} ${moment(u.createdAt).format('YYYY HH:mm:ss')} `
   }
   if(moment(u.createdAt).format('MM') === '04') {//#KobsCode Anime Bot MIT License
     var tarih = `${moment(u.createdAt).format('D')} Nisan ${gün} ${moment(u.createdAt).format('YYYY HH:mm:ss')} `
   }
   if(moment(u.createdAt).format('MM') === '05') {
     var tarih = `${moment(u.createdAt).format('D')} Mayıs ${gün} ${moment(u.createdAt).format('YYYY HH:mm:ss')} `
   }
   if(moment(u.createdAt).format('MM') === '06') {//#KobsCode Anime Bot MIT License
     var tarih = `${moment(u.createdAt).format('D')} Haziran ${gün} ${moment(u.createdAt).format('YYYY HH:mm:ss')} `
   }
   if(moment(u.createdAt).format('MM') === '07') {
     var tarih = `${moment(u.createdAt).format('D')} Temmuz ${gün} ${moment(u.createdAt).format('YYYY HH:mm:ss')} `
   }
   if(moment(u.createdAt).format('MM') === '08') {//#KobsCode Anime Bot MIT License
     var tarih = `${moment(u.createdAt).format('D')} Ağustos ${gün} ${moment(u.createdAt).format('YYYY HH:mm:ss')} `
   }
   if(moment(u.createdAt).format('MM') === '09') {
     var tarih = `${moment(u.createdAt).format('D')} Eylül ${gün} ${moment(u.createdAt).format('YYYY HH:mm:ss')} `
   }
   if(moment(u.createdAt).format('MM') === '10') {//#KobsCode Anime Bot MIT License
     var tarih = `${moment(u.createdAt).format('D')} Ekim ${gün} ${moment(u.createdAt).format('YYYY HH:mm:ss')} `
   }
   if(moment(u.createdAt).format('MM') === '11') {
     var tarih = `${moment(u.createdAt).format('D')} Kasım ${gün} ${moment(u.createdAt).format('YYYY HH:mm:ss')} `
   }
   if(moment(u.createdAt).format('MM') === '12') {//#KobsCode Anime Bot MIT License
     var tarih = `${moment(u.createdAt).format('D')} Aralık ${gün} ${moment(u.createdAt).format('YYYY HH:mm:ss')} `
   }
   
         var tarih2 = ''
   if(moment.utc(u.joinedTimestamp).format('MM') === '01') {//#KobsCode Anime Bot MIT License
     var tarih2 = `${moment.utc(u.joinedAt).format('D')} Ocak ${gün} ${moment.utc(u.joinedAt).format('YYYY HH:mm:ss')} `
   }
   if(moment.utc(u.joinedTimestamp).format('MM') === '02') {
     var tarih2 = `${moment.utc(u.joinedAt).format('D')} Şubat ${gün} ${moment.utc(u.joinedAt).format('YYYY HH:mm:ss')} `
   }
   if(moment.utc(u.joinedAt).format('MM') === '03') {
     var tarih2 = `${moment.utc(u.joinedAt).format('D')} Mart ${gün} ${moment.utc(u.joinedAt).format('YYYY HH:mm:ss')} `
   }
   if(moment.utc(u.joinedAt).format('MM') === '04') {//#KobsCode Anime Bot MIT License
     var tarih2 = `${moment.utc(u.joinedAt).format('D')} Nisan ${gün} ${moment.utc(u.joinedAt).format('YYYY HH:mm:ss')} `
   }
   if(moment.utc(u.joinedAt).format('MM') === '05') {
     var tarih2 = `${moment.utc(u.joinedAt).format('D')} Mayıs ${gün} ${moment.utc(u.joinedAt).format('YYYY HH:mm:ss')} `
   }
   if(moment.utc(u.joinedAt).format('MM') === '06') {
     var tarih2 = `${moment.utc(u.joinedAt).format('D')} Haziran ${gün} ${moment.utc(u.joinedAt).format('YYYY HH:mm:ss')} `
   }
   if(moment.utc(u.joinedAt).format('MM') === '07') {//#KobsCode Anime Bot MIT License
     var tarih2 = `${moment.utc(u.joinedAt).format('D')} Temmuz ${gün} ${moment.utc(u.joinedAt).format('YYYY HH:mm:ss')} `
   }
   if(moment.utc(u.joinedAt).format('MM') === '08') {
     var tarih2 = `${moment.utc(u.joinedAt).format('D')} Ağustos ${gün} ${moment.utc(u.joinedAt).format('YYYY HH:mm:ss')} `
   }
   if(moment.utc(u.joinedAt).format('MM') === '09') {//#KobsCode Anime Bot MIT License
     var tarih2 = `${moment.utc(u.joinedAt).format('D')} Eylül ${gün} ${moment.utc(u.joinedAt).format('YYYY HH:mm:ss')} `
   }
   if(moment.utc(u.joinedAt).format('MM') === '10') {
     var tarih2 = `${moment.utc(u.joinedAt).format('D')} Ekim ${gün} ${moment.utc(u.joinedAt).format('YYYY HH:mm:ss')} `
   }
   if(moment.utc(u.joinedAt).format('MM') === '11') {
     var tarih2 = `${moment.utc(u.joinedAt).format('D')} Kasım ${gün} ${moment.utc(u.joinedAt).format('YYYY HH:mm:ss')} `
   }
   if(moment.utc(u.joinedAt).format('MM') === '12') {//#KobsCode Anime Bot MIT License
     var tarih2 = `${moment.utc(u.joinedAt).format('D')} Aralık ${gün} ${moment.utc(u.joinedAt).format('YYYY HH:mm:ss')} `
   }
   //#KobsCode Anime Bot MIT License
const millisCreated = new Date().getTime() - u.createdAt.getTime();//#KobsCode Anime Bot MIT License
 const daysCreated = moment.duration(millisCreated).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
 const millisCreated1 = new Date().getTime() - member.joinedAt.getTime();
const daysCreated1 = moment.duration(millisCreated1).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
//Bağlandığı Cihaz
let baglanti;
    if (u.presence.clientStatus && !u.bot) {
            if (u.presence.clientStatus.mobile) baglanti = ':iphone: Mobil'
            if (u.presence.clientStatus.desktop) baglanti = ':computer: Bilgisayar'
            if (u.presence.clientStatus.web) baglanti = ':globe_with_meridians:  Web'}
//ÖzelDurum
let ozeldurum = u.presence.activities[0] || 'Özel durumun yok'//#KobsCode Anime Bot MIT License

        const user = message.mentions.users.first() || message.author;//#KobsCode Anime Bot MIT License
//#KobsCode Anime Bot MIT License
        const embed = new MessageEmbed()
        .setColor('BLUE')
        .setThumbnail(user.displayAvatarURL({ size: 4096, format: 'png', dynamic: true }))
        .addField('Ad:', u.username + '#' + u.discriminator)
        .addField('ID:', u.id)
        .addField('Hesap Kayıt tarihi:', tarih + '\n Toplam ' + daysCreated + ' ')
        .addField('Sunucuya katılma tarihi:', tarih2 + '\n Toplam ' + daysCreated1 + ' ')     
        .addField('Durum', durm)
        .addField('Bağlandığı Cihaz', baglanti || 'Bulunamadı')
        .addField('Özel Durum', ozeldurum.state || 'Yok')
        .addField('Hesap Türü', `${user.bot ? 'Bot' : 'Doğrulanmış Kullanıcı'}`) 
        embed.addField('Rozetlerin',u.flags.toArray().join('\n') ? u.flags.toArray().join('\n')
        .replace("HOUSE_BRAVERY", "HypeSquad Bravery") 
        .replace("HOUSE_BRILLIANCE", "HypeSquad Brilliance")
        .replace("HOUSE_BALANCE", "HypeSquad Balance")
        .replace("VERIFIED_DEVELOPER", "Doğrulanmış Bot Geliştiricisi")
        .replace("DISCORD_EMPLOYEE", "Discord Çalışanı")
        .replace("DISCORD_PARTNER", "Partner")
        .replace("HYPESQUAD_EVENTS", "`HypeSquad Etkinlikleri")
        .replace("BUGHUNTER_LEVEL_1", "Bug Avcısı Level 1")
        .replace("EARLY_SUPPORTER", "Erken Dönem Destekcisi")
        .replace("TEAM_USER", "Takım Üyesi")
        .replace("SYSTEM", "Sistem")
        .replace("BUGHUNTER_LEVEL_2", "Bug Avcısı Level 2")
        .replace("VERIFIED_BOT", "Doğrulanmış Bot") : 'Yok')
        .addField('Son Gönderdiği Mesaj', u.lastMessage || 'Yok')
        .addField('Rollerin:', `${member.roles.cache.filter(r => r.name !== "@everyone").map(r => r.name).join(' ') ? member.roles.cache.filter(r => r.name !== "@everyone").map(r => `\`${r.name}\``).join('  ') : 'Yok'}`)
//#KobsCode Anime Bot MIT License
        message.channel.send(embed)
    }
    }