let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Sewa'
let dana = global.dana
let pulsa = global.pulsa
let saweria = global.saweria
let owner = global.owner
let anu = `Hallo mypren 👋
━━━〔 ıll *Sewa Bot* llı 〕━━ꕥ
━━━━━━━━━━━━━━━━━━━━
━━━〔 ıll *HARGA* llı 〕━━ꕥ
⬡ *1 BULAN:* *30.000*
⬡ *2 BULAN:* *40.000*
⬡ *1 BULAN 2/3 GRUP:* *50.000*
⬡ *lebih dari 3 tambah +5.000*
┗━━━━━━━━━━━━━━━ꕥ
┏━━━〔 ıll *PAYMENT* llı 〕━━ꕥ
⬡ *DANA:* ${dana}
⬡ *SAWERIA:* ${saweria}
⬡ *PULSA:* ${pulsa}
┗━━━━━━━━━━━━━━━━━━ꕥ
┏━━〔 ıll *RULES* llı 〕━ꕥ
⬡ [❗] *Dana yang sudah masuk tidak bisa di kembalikan*
┗━━━━━━━━━━ꕥ
Jika anda berminat hubungi nomor di bawah!!

⟩» *jangan lupa donasi kak* «⟨
Terimakasih yang sudah mendonasikan untuk bot

Contact person Sewa Bot:
wa.me/${6283816446896} (Owner)

*Follow Instagram ku juga kak😼*`
  conn.send3ButtonImg(m.chat, fla + teks, anu, instagram, '☀ PILIHAN STORE ☀', '.pilihanstore', '🛡 OWNER BOT 🛡', '.owner', '🎀 MENU BOT 🎀', '.menu', m) 
}
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewa|sewabot)$/i

module.exports = handler
