//Jangan Di ganti!! 
// Jika ada yang Jual sc langsung Di hapus!!

let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/a95dbbb9999e450ca2647.jpg',
`Hi Kak @${m.sender.split('@')[0]} 

◪ 📮 *SCRIPT BOT*
│ *Script :* 
│ ╰ https://github.com/sampun-penak
│ *Mampir Instagram Owner Banh:* 
│ ╰ https://instagram.com/sampun_penak
╰──────────═┅═──────────
`,`📍 *N o t e :* 
• Jangan lupa mampir Instagram Owner Kak!
• Jangan Lupa kasih star & kasih credit

Official By @${'0'.split('@')[0]}
Powered By @${`${global.owner[0]}`.split('@')[0]}`, '🛡 PEMILIK BOT 🛡', '.owner')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
