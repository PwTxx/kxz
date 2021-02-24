const owner = (prefix, botName, ownerName) => {
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
┠≽ *${prefix}bugreport* <texto>
┃ *Desc* : Reportar bug ao proprietário do bot
╿
┷┯ *〈 OWNER 〉*
   ╽
   ┠≽ *${prefix}setprefix* <text/optional>
   ┃ *Desc* : Substituir Prefixo
   ┠──────────────╼
   ┠≽ *${prefix}block* <@tag>
   ┃ *Desc* : Bloquear usuário
   ┠──────────────╼
   ┠≽ *${prefix}desblock* <@tag>
   ┃ *Desc* : Desbloquear usuário
   ┠──────────────╼
   ┠≽ *${prefix}bc* <text>
   ┃ *Desc* : Transmitir para todos os contatos e grupos
   ┠──────────────╼
   ┠≽ *${prefix}clone* <@tag>
   ┃ *Desc* : Clonar perfil de outros membros
   ┠──────────────╼
   ┠≽ *${prefix}addpalavrao* <texto>
   ┃ *Desc* : Add Palavrão Texto
   ┠──────────────╼
   ┠≽ *${prefix}delpalavrao*
   ┃ *Desc* : Excluir palavrão
   ┠──────────────╼
   ┠≽ *${prefix}clearall
   ┃ *Desc* : Limpar todo o bate-papo
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.owner = owner
