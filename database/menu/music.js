const music = (prefix, botName, ownerName) => {
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
┷┯ *〈 MUSIC 〉*
   ╽
   ┠≽ *${prefix}play* <nome da música>
   ┃ *Desc* : Baixar música do YouTube
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
