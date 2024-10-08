import fetch from 'node-fetch';

// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language
    const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu
    // const pp = imagen7;

    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, { weekday: 'long' });
    const date = d.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' });
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const { money, joincount } = global.db.data.users[m.sender];
    const { exp, limit, level, role } = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `╭━━━━━━━━ ⋆⋅☆⋅⋆ ━━━━━━━━╮
                  𝕊𝔸ℕ𝕋𝕏 𝔹𝕆𝕋 🤖
╰━━━━━━━━ ⋆⋅☆⋅⋆ ━━━━━━━━╯

👑 𝘾𝙧𝙚𝙖𝙙𝙤𝙧: SANTX
📱 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥: wa.me/573132641948
🌐 𝙂𝙧𝙪𝙥𝙤: https://chat.whatsapp.com/L481VM9rJ2JJj5y3atndy8

     ㅤ   ◥◣◆◢◤
     ◢████████◣
  ◢██████████◣
 ◥███████████◤
  ◥██████████◤
     ◥████████◤
   ㅤ    ◥████◤     

┏━━━━━━━━━━━━━━━━━━━━┓
┃    𝙈𝙀𝙉Ú 𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇                  ┃
┗━━━━━━━━━━━━━━━━━━━━┛

⚙ 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘾𝙄Ó𝙉
╠ .enable 🟢 | .disable 🔴

👥 𝙂𝙍𝙐𝙋𝙊𝙎

╠ .kick
╠ .grupo
╠ .promote
╠ .demote
╠ .link
╠ .invocar
╠ .setwelcome
╠ .setbye
╠ .hidetag
╠ .fantasmas
╠ .kickfantasmas
╠ .menuff
╠ .catalogobot
╠ .catalogoproductos

🎭 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 & 𝙁𝙄𝙇𝙏𝙍𝙊𝙎

╠ .sticker | s
╠ .qc
╠ .scircle
╠ .semoji
╠ .attp
╠ .ttp (1-6)
╠ .dado
╠ .stickermarker
╠ .stickerfilter
╠ .cs | cs2

🎮 𝙅𝙐𝙀𝙂𝙊𝙎

╠ .mates
╠ .ppt
╠ .love
╠ .slot
╠ .simisimi
╠ .pregunta
╠ .cuando
╠ .ship5
╠ .abrazo
╠ .verdad
╠ .reto
╠ .ruleta
╠ .zodiac
╠ .sorteo
╠ .kchero

📥 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎

╠ .play
╠ .playlist
╠ .spotify
╠ .tiktok
╠ .instagram
╠ .mediafire
╠ .gdrive
╠ .twitter
╠ .ytv
╠ .imagen
╠ .pinteres
╠ .igstory

🔄 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙍𝙀𝙎

╠ .toimg
╠ .tomp3
╠ .toptt
╠ .tovideo
╠ .tts

✨ 𝙀𝙁𝙀𝘾𝙏𝙊𝙎 & 𝙇𝙊𝙂𝙊𝙎

╠ .logos
╠ .logocorazon
╠ .ytcomment
╠ .hornycard
╠ .itssostupid
╠ .pixelar

💌 𝙁𝙍𝘼𝙎𝙀𝙎 & 𝙏𝙀𝙓𝙏𝙊𝙎

╠ .piropo
╠ .consejo
╠ .fraseromantica

🔍 𝘽𝙐𝙎𝘾𝘼𝘿𝙊𝙍𝙀𝙎

╠ .google
╠ .letra
╠ .wikipedia
╠ .ytsearch
╠ .playstore
╠ .mercadolibre

🛠 𝙃𝙀𝙍𝙍𝘼𝙈𝙄𝙀𝙉𝙏𝘼𝙎

╠ .clima
╠ .afk
╠ .ocr
╠ .calc
╠ .del
╠ .qrcode
╠ .traducir

💰 𝙀𝘾𝙊𝙉𝙊𝙈Í𝘼

╠ .verificar
╠ .unreg
╠ .minar
╠ .buy
╠ .work
╠ .mendigar
╠ .transfer

┏━━━━━━━━━━━━━━━━━━━━┓
┃        𝙁𝙐𝙉𝘾𝙄𝙊𝙉𝙀𝙎 𝙊𝙒𝙉𝙀𝙍         ┃
┗━━━━━━━━━━━━━━━━━━━━┛

╠ .join
╠ .unete
╠ .dardiamantes
╠ .darxp
╠ .dargatacoins
╠ .addprem
╠ .idioma
╠ .cajafuerte
╠ .comunicar
╠ .borrartmp
╠ .delexp
╠ .reiniciar
╠ .actualizar
╠ .listapremium

╭━━━━━━━━ ⋆⋅☆⋅⋆ ━━━━━━━━╮
   ¡𝔻𝕚𝕤𝕗𝕣𝕦𝕥𝕒 𝕦𝕤𝕒𝕟𝕕𝕠 𝕊𝔸ℕ𝕋𝕏 𝔹𝕆𝕋!
╰━━━━━━━━ ⋆⋅☆⋅⋆ ━━━━━━━━╯`

    let pp
    // Nouvelles images de menu disponibles 
    if (idioma == 'es') {
      pp = global.imagen4
    } else if (idioma == 'pt-br') {
      pp = global.imagen7
    } else if (idioma == 'fr') {
      pp = global.imagen8
    }else if (idioma == 'en') {
      pp = global.imagen9
    } else if (idioma == 'ru') {
      pp = global.imagen10
    } else {
      pp = global.imagen4 // Imagem Default em espanhol
    }



    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
const fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
     conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak });
    } else {
      //await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
const fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
   conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak });
    }
  } catch {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language
    const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu

    conn.reply(m.chat, tradutor.texto1[29], m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
      }
