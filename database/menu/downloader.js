const downloader = (prefix, botName, ownerName) => {
	return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Show Bot Details
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Show Blocked User
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Show All Chat User
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Show Connection Bot Speed
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Report Bug To Owner Bot
╿
┷┯ *〈 DOWNLOAD 〉*
   ╽
   ┠≽ *${prefix}pinterest* <pesquisar>
   ┃ *Desc* : Baixar imagem do Pinterest
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
