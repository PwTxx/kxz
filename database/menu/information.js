const information = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┯ *〈 INFO DO BOT 〉*
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
