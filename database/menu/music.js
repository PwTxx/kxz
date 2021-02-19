const music = (prefix, botName, ownerName) => {
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
┷┯ *〈 MUSIC 〉*
   ╽
   ┠≽ *${prefix}play* <nome da música>
   ┃ *Desc* : Tocar música de áudio
   ┠──────────────╼
   ┠≽ *${prefix}joox* <nome da música>
   ┃ *Desc* : Tocar música Joox
   ┠──────────────╼
   ┠≽ *${prefix}lirik* <nome da música>
   ┃ *Desc* : Pesquisar Letras de Músicas
   ┠──────────────╼
   ┠≽ *${prefix}chord* <nome da música>
   ┃ *Desc* : Pesquisar letras de músicas de acordes
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.music = music
