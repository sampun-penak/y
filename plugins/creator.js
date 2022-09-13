const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;;;
FN: ᴹᴿ᭄ MimimOffcོ_1ঔৣ꧂
item.ORG: ᴹᴿ᭄ OscarOffcོ_1ঔৣ꧂
item1.TEL;waid=6283816446896:6283816446896@s.whatsapp.net
item1.X-ABLabel:owner selalu ada
item2.INSTAGRAM;type=INTERNET: https://instagram.com/sampun_penak
item2.X-ABLabel:INSTAGRAM
item3.ADR:;;INDONESIA;;;;
item3.X-ABADR:ac
item3.X-ABLabel:asal kota
item4.URL:https//github.com/sampun-penak 
item4.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: '🛡 OWNER BOT 🛡', 
            contacts: [{ vcard }]  
        }
    }
)
let jarot = 'https://telegra.ph/file/ea3959a6bcd824932283c.jpg'
await conn.send3ButtonImg(m.chat, jarot, `*Hai kak @${m.sender.split('@')[0]} 👋,  Itu nomor owner gw…*`, '📮: jngn di spam kack', '💳 𝙎𝙀𝙒𝘼 𝘽𝙊𝙏 💳', '.sewa', '🔁 𝘽𝘼𝘾𝙆 🔁', '.menu', '💰 𝘿𝙊𝙉𝘼𝙎𝙄 𝘽𝙊𝙏 💰', '.donasi', sentMsg)}
handler.help = ['owner2', 'creator2']
handler.tags = ['info']

handler.command = /^(owner2|creator2)$/i

module.exports = handler
