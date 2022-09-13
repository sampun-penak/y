const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let owner = 6283816446896
let wa = '0'
let handler = async (m) => {
let jarot = `
*Hai kak @${m.sender.split('@')[0]} 👋*
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya5)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: jarot,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '📮Note : HALO KAK SAYA THEBOTZ, JIKA KAMU MENGGUNAKAN WA LAMA ATAU WA MOD, DAN BUTTON TIDAK KELIATAN, LANGSUNG AJA KETIK .allmenu',
           hydratedButtons: [{
             urlButton: {
               displayText: '🔮 𝙂𝙍𝙊𝙐𝙋 𝘽𝙊𝙏 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋🔮',
               url: 'https://chat.whatsapp.com/EJik1WvMpxeCoCEGAFRqiV'
             }

           },
                {
               urlButton: {
               displayText: '🐻 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝘾𝙍𝙀𝘼𝙏𝙊𝙍 🐻',
               url: 'https://instagram.com/sampun_penak'
             }

           },
               {
             quickReplyButton: {
               displayText: '🚀 𝙎𝙀𝙒𝘼 𝘽𝙊𝙏 🚀',
               id: '.sewa',
             }
             
           },
               {
             quickReplyButton: {
               displayText: '🔖 𝘿𝙊𝙉𝘼𝙎𝙄 𝘽𝙊𝙏 🔖️',
               id: '.donasi',
             }
             
             },
               {
             quickReplyButton: {
               displayText: '📖 𝙎𝙀𝙈𝙐𝘼 𝙋𝙀𝙍𝙄𝙉𝙏𝘼𝙃 📖',
               id: '.allmenu',
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
handler.customPrefix = /^(menu|help|.menu|.help)$/i
handler.help = ['.menu']
handler.command = new RegExp

module.exports = handler
