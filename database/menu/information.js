const information = (prefix, botName, ownerName) => {
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
┷┯ *〈 INFORMATION 〉*
   ╽
   ┠≽ *${prefix}cdidioma*
   ┃ *Desc* : Enviar código de idioma
   ┠──────────────╼
   ┠≽ *${prefix}cdpaís*
   ┃ *Desc* : Enviar código do país
   ┠──────────────╼
   ┠≽ *${prefix}infoclima* <área>
   ┃ *Desc* : Enviar informações meteorológicas
   ┠──────────────╼
   ┠≽ *${prefix}infoterremoto*
   ┃ *Desc* : Enviando informações sobre terremotos
   ┠──────────────╼
   ┠≽ *${prefix}covidpaís* <país>
   ┃ *Desc* : Envio de informações do Covid-19
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.information = information
