const handler = async (m, {conn}) => {
  m.reply(global.cuadri);
};
handler.command = /^(cuadri|CUADRI)$/i;
export default handler;

global.cuadri = `🔥🐺 CUADRILÁTERO LEGEND 🐺🔥

⏰ HORA: 🇲🇽 México | 🇨🇴 Colombia
🎨 COLOR: 
🏟 CASILLAS: 

👥 ESCUADRAS

🔹 ESCUADRA 1 
   👑 
   🥷🏻 
   🥷🏻 
   🥷🏻

🔸 ESCUADRA 2
   👑 
   🥷🏻 
   🥷🏻 
   🥷🏻 

🔹 ESCUADRA 3
   👑 
   🥷🏻
   🥷🏻 
   🥷🏻 

🔆 RESERVAS
   🥷🏻 
   🥷🏻`;
