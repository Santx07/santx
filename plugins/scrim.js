const handler = async (m, {conn}) => {
  m.reply(global.scrim);
};
handler.command = /^(scrim|SCRIM)$/i;
export default handler;

global.scrim = `🐉✨ 𝕃𝕀𝕊𝕋𝔸 𝕊ℂℝ𝕀𝕄 ✨🐉

⏰ HORA:  🇨🇴 Colombia ¦ 🇲🇽 México
🏠 CASILLA: 
 🗺 MAPAS:

👥 𝔼𝕊ℂ𝕌𝔸𝔻ℝ𝔸 ℙℝ𝕀ℕℂ𝕀ℙ𝔸𝕃
   🥷 
   🥷 
   🥷
   🥷

🔄 ℝ𝔼𝕊𝔼ℝ𝕍𝔸𝕊
   🥷 
   🥷 

💪 ¡𝔸 𝕝𝕒 𝕧𝕚𝕔𝕥𝕠𝕣𝕚𝕒, 𝕖𝕢𝕦𝕚𝕡𝕠! 🏆`;
