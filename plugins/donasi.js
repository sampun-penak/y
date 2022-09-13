let fetch = require('node-fetch')
let teks = 'Donasi'
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch('https://telegra.ph/file/a95dbbb9999e450ca2647.jpg'+ teks)).buffer(), `

*𝐇𝐚𝐥𝐨 𝐁𝐚𝐧𝐠 𝐃𝐨𝐧𝐚𝐬𝐢 𝐲𝐮𝐤 𝐁𝐢𝐚𝐫 𝐁𝐨𝐭 𝐀𝐤𝐭𝐢𝐟👋*
╔═══════════════════
║ _*DONASI UNTUK*_  𝐌𝐢𝐦𝐢𝐦 ×͜×
╠═══════════════════
║    ❉ 〔 *𝗗𝗢𝗡𝗔𝗦𝗜* 〕 ❉
║➸ *DANA* : 
║➸ 087848115476
║➸ *PULSA
║➸ 087848115476
║➸ *Saweria*:
║ https://saweria.co/mimimproject
╰═══════════════════
╔════════════════════
║ *Donasi Via Ikuti Sosial media*
╠════════════════════
║   ❉ 〔 𝐒𝐨𝐬𝐢𝐚𝐥 𝐌𝐞𝐝𝐢𝐚 𝐉𝐚𝐫𝐨𝐭 〕 ❉
║➸ *Instasgram*
║ https://instagram.com/sampun_penak
║➸ *Facebook*
║ https://facebook.com/sampun.penak
║➸ *Github*
║ https://github.com/sampun-penak 
╚════════════════════

`.trim(), wm, '🔖 OWNER 🔖', '.owner', '🔁 MENU 🔁', '.menu')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
