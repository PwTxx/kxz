const stalk = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 INFO DO BOT© 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Criador* : ${ownerName}
   ┠≽ *Versão* : 0.0.5
   ╿
┯┷ *〈 INFO© 〉*
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
┠≽ *${prefix}bugreport* <texto>
┃ *Desc* : Reportar bug ao proprietário do bot
╿
┷┯ *〈 STALK 〉*
   ╽
   ┠≽ *${prefix}tiktokstalk* <username>
   ┃ *Desc* : Obtenha informações do TikTok, usuário
   ┠≽ *${prefix}igstalk* <username>
   ┃ *Desc* : Obter informações do Instagram, usuário
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.stalk = stalk
