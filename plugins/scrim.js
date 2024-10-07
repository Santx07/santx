const handler = async (m, {conn}) => {
  m.reply(global.scrim);
};
handler.command = /^(scrim|SCRIM)$/i;
export default handler;

global.scrim = `🐉 LISTA SCRIM 🐉

HORA: 🇨🇴 ¦ 🇲🇽
CASILLA:
CAÍDAS:

ESCUADRA
🥷
🥷
🥷
🥷

RESERVAS
🥷
🥷`;
