const handler = async (m, {conn}) => {
  m.reply(global.hexa);
};
handler.command = /^(hexa|HEXA)$/i;
export default handler;

global.hexa = `🌋🦅 HEXAGONAL SUPREMO 🦅🌋

⚡ HORA: 🇲🇽 México ¦ 🇨🇴 Colombia
🎭 COLOR: 
🏯 CASILLAS: 

🐉 ESCUADRONES DE ÉLITE 🐉

🔥 ESCUADRÓN ALFA
   🐲 
   🦊 
   🐆 
   🦏 

❄ ESCUADRÓN OMEGA
   🐲 
   🦉 
   🐅 
   🦈 

🌠 FUERZAS DE RESERVA
   🦅 
   🐺`;
