const adult = (prefix, botName, ownerName) => {
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
┷┯ *〈 18+ 〉*
   ╽
   ┠≽ *${prefix}randomhentai*
   ┃ *Desc* : Envio de imagem aleatória Hentai
   ┠──────────────╼
   ┠≽ *${prefix}nsfwtrap*
   ┃ *Desc* : Enviando imagem aleatória de Nsfw Trap (nsfw necessário)
   ┠──────────────╼
   ┠≽ *${prefix}nsfwneko*
   ┃ *Desc* : Enviando imagem Nsfw Neko aleatória (nsfw necessário)
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.adult = adult
