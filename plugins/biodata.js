const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let jarot = `
•·––––––––––––––––––––––––––·•
❑ *Nama* : Mimim
❑ *Umur* : 19 Tahun
❑ *Kelas* : Lulus
❑ *Ulang Tahun* : 26 April 2003
❑ *Alamat* : Indonesia, Jawa Tengah, Demak
•·––––––––––––––––––––––––––·•
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya7)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: jarot,
                imageMessage: message.imageMessage, 
           hydratedFooterText: 'Salam Kenal Bang👋',
           hydratedButtons: [{
             urlButton: {
               displayText: '🐈 𝙂𝙍𝙐𝙋 𝘽𝙊𝙏 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 🐈',
               url: 'https://chat.whatsapp.com/EJik1WvMpxeCoCEGAFRqiV'
             }

           },
                {
               urlButton: {
               displayText: '🌍 𝙁𝙊𝙇𝙇𝙊𝙒 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 🌍',
               url: 'https://instagram.com/sampun_penak'
             }

           },
               {
             quickReplyButton: {
               displayText: '🏧 𝙎𝙀𝙒𝘼 𝘽𝙊𝙏 🏧',
               id: '.sewa',
             }
             
           },
               {
             quickReplyButton: {
               displayText: '⛽ 𝙈𝙀𝙉𝙐 𝘽𝙊𝙏 ⛽',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: '📮 𝘿𝙊𝙉𝘼𝙎𝙄 𝘽𝙊𝙏 📮',
               id: '.donasi',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.customPrefix = /^(biodata|.biodata)$/i
handler.command = new RegExp
handler.help = ['.biodata']
module.exports = handler
