const downloader = (prefix, botName, ownerName) => {
	return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 INFO DO BOT 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Criador* : ${ownerName}
   ┠≽ *Versão* : 0.0.5
   ╿
┯┷ *〈 INFO 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Mostrar detalhes do bot
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Mostrar usuário bloqueado
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Mostrar todos os usuários de bate-papo
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar velocidade do bot de conexão
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Report Bug To Owner Bot
╿
┷┯ *〈 DOWNLOAD 〉*
   ╽
   ┠≽ *${prefix}pinterest* <pesquisar>
   ┃ *Desc* : Baixar imagem do Pinterest
   ┠──────────────╼
   ┠≽ *${prefix}fb* <linkfb>
   ┃ *Desc* : Baixar vídeo do Facebook
   ┠──────────────╼
   ┠≽ *${prefix}ytmp3* <linkyt>
   ┃ *Desc* : Baixar vídeo do Youtube para mp3
   ┠──────────────╼
   ┠≽ *${prefix}ytmp4* <linkyt>
   ┃ *Desc* : Baixe o vídeo do Youtube
   ┠──────────────╼
   ┠≽ *${prefix}tiktok* <linktiktok>
   ┃ *Desc* : Baixe o vídeo do TikTok
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.downloader = downloader
