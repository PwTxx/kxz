const limit = (prefix, botName, ownerName) => {
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
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Report Bug To Owner Bot
╿
┷┯ *〈 LIMITE 〉*
   ╽
   ┠≽ *${prefix}limite*
   ┃ *Desc* : Verifique o seu limite
   ┠──────────────╼
   ┠≽ *${prefix}saldo*
   ┃ Verifique o seu dinheiro
   ┠──────────────╼
   ┠≽ *${prefix}comprarl* <contar>
   ┃ *Desc* : Comprar Limite
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}
--------------------------------
Note: Você pode comprar limites recolhendo dinheiro primeiro. Verifique seu dinheiro digitando comandos *${prefix}saldo* , 1 preço limite = 1000 dinheiro.
Note2: Você pode coletar dinheiro conversando com amigos do grupo ou subindo de nível.`
}
exports.limit = limit
