const fun = (prefix, botName, ownerName) => {
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
┷┯ *〈 FUN 〉*
   ╽
   ┠≽ *${prefix}alay* <text>
   ┃ *Desc* : Changing Words Into Alay
   ┠──────────────╼
   ┠≽ *${prefix}bucin*
   ┃ *Desc* : Send a Random Slave of Love
   ┠──────────────╼
   ┠≽ *${prefix}trust*
   ┃ *Desc* : Send a Random Truth
   ┠──────────────╼
   ┠≽ *${prefix}dare*
   ┃ *Desc* : Send a Random Dare
   ┠──────────────╼
   ┠≽ *${prefix}simi* <text>
   ┃ *Desc* : Talk to Simi
   ┠──────────────╼
   ┠≽ *${prefix}say* <text>
   ┃ *Desc* : Saying:v
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.fun = fun
