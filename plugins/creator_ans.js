let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Creator'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `*––––––『 INFO CREATOR 』––––––*
`
  conn.send2ButtonImg(m.chat, fla + teks, anu,wm, '🔖 NOMOR CREATOR 🔖', '.owner2', '📬 SOSIALMEDIA CREATOR 📬', '.sosialmedia', m) 
}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
