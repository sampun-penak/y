let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'JadiBot'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo mypren 👋
*MAAF KAK FITUR JADIBOT TIDAK ADA DI DALAM FITUR KAMI*
⟩» *Kalau kakak mau jadi bot silahkan jasa sewa aja kak*
          
━━━〔 ıll *HARGA* llı 〕━━ꕥ
⬡ *1 minggu:* 15.000
⬡ *3 minggu:* 25.000
⬡ *1 Bulan:* 50.000
┗━━━━━━━━━━━━━━━━━━ꕥ
┏━━━〔 ıll *PAYMENT* llı 〕━━ꕥ
⬡ *DANA:* ${6283816446896}
⬡ *GOPAY:* ${6283816446896}
⬡ *Facebook:* ${'https://facebook.com/sampun.penak'}
┗━━━━━━━━━━━━━━━━━━ꕥ
┏━━〔 ıll *RULES* llı 〕━ꕥ
⬡ [❗] *Dana yang sudah masuk tidak bisa di kembalikan*
⬡ [❗] *Kalau akunmu ke banned bukan urusan saya*
┗━━━━━━━━━━ꕥ
Jika anda berminat hubungi nomor di bawah!!
⟩» *jangan lupa donasi kak* «⟨
Terimakasih yang sudah mendonasikan untuk bot

Contact person jasa sewa:
wa.me/${'6283816446896'} (Owner)

*Follow Instagram ku juga kak😼*`
  conn.send2ButtonImg(m.chat, fla + teks, anu, instagram, '💰 DONASI 💰', '.donasi', '💳 SEWABOT 💳', '.sewa', m) 
}
handler.help = ['jadibot']
handler.tags = ['info']
handler.command = /^(jadibot)$/i

module.exports = handler
