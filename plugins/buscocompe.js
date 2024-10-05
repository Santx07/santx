import fetch from 'node-fetch';


const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
  const tradutor = _translate.plugins.menu_anime

  try {
    const pp = imagen2;
    // let vn = './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3'
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `🦥 𝐁𝐔𝐒𝐂𝐎 𝐕𝐒 MASCULINO/MIXTO 🦥
🕷┇ 𝟒 𝐕𝐒 𝟒 / 𝟔 𝐕𝐒 𝟔

🕷┇ 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐎 / CLK 

𝐇𝐎𝐑𝐀𝐑𝐈𝐎𝐒 𝐃𝐈𝐒𝐏𝐎𝐍𝐈𝐁𝐋𝐄𝐒 🦥

🐒┇ 12:00 pm 🇲🇽 1:00 pm 🇨🇴🇪🇨
🐒┇ 1:00 pm 🇲🇽 2:00 pm 🇨🇴🇪🇨
🐒┇ 2:00 pm 🇲🇽 3:00 pm 🇨🇴🇪🇨
🐒┇ 3:00 pm 🇲🇽 4:00 pm 🇨🇴🇪🇨
🐒┇ 4:00 pm 🇲🇽 5:00 pm 🇨🇴🇪🇨
🐒┇ 5:00 pm 🇲🇽 6:00 pm 🇨🇴🇪🇨
🐒┇ 6:00  pm 🇲🇽 7:00  pm 🇨🇴🇪🇨
🐒┇ 7:00  pm 🇲🇽 8:00  pm 🇨🇴🇪🇨
🐒┇ 8:00  pm 🇲🇽 9:00  pm 🇨🇴🇪🇨
🐒┇ 9:00  pm 🇲🇽 10:00 pm 🇨🇴🇪🇨
🐒┇ 10:00 pm 🇲🇽 11:00 pm 🇨🇴🇪🇨
🐒┇ 11:00 pm 🇲🇽 12:00 am 🇨🇴🇪🇨
🐒┇ 12:00 am 🇲🇽 1:00 am 🇨🇴🇪🇨


🐣┇ 𝐀 𝐌𝐈𝐒 𝐑𝐄𝐆𝐋𝐀𝐒
🐣┇ 𝐂𝐎𝐍 𝐋𝐎𝐆𝐎 𝐄 𝐈𝐆
🐣┇ 𝐍𝐎 𝐒𝐄 𝐌𝐎𝐃𝐈𝐅𝐈𝐂𝐀 𝐍𝐀𝐃𝐀`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, tradutor.texto1[3], m);
  }
};
handler.command = /^(buscovs|BUSCOVS)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
