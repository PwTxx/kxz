const group = (prefix, botName, ownerName) => {
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
┷┯ *〈 GRUPO 〉*
   ╽
   ┠≽ *${prefix}abrirgp*
   ┃ *Desc* : Abrir Grupo
   ┠──────────────╼
   ┠≽ *${prefix}fechargp*
   ┃ *Desc* : Fechar Grupo
   ┠──────────────╼
   ┠≽ *${prefix}promover* <@tag>
   ┃ *Desc* : Promova pessoas para serem grupo de administradores
   ┠──────────────╼
   ┠≽ *${prefix}rebaixar* <@tag>
   ┃ *Desc* : Rebaixar pessoas para serem membros Comum
   ┠──────────────╼
   ┠≽ *${prefix}marcar*
   ┃ *Desc* : Mencione todos os membros
   ┠──────────────╼
   ┠≽ *${prefix}marcar2*
   ┃ *Desc* : Mencione todos os membros
   ┠──────────────╼
   ┠≽ *${prefix}marcar3*
   ┃ *Desc* : Mencione todos os membros
   ┠──────────────╼
   ┠≽ *${prefix}marcar4*
   ┃ *Desc* : Mencione todos os membros
   ┠──────────────╼
   ┠≽ *${prefix}marcar5*
   ┃ *Desc* : Mencione todos os membros
   ┠──────────────╼
   ┠≽ *${prefix}add* <12542123926>
   ┃ *Desc* : Adicionar Membros
   ┠──────────────╼
   ┠≽ *${prefix}banir* <@tag>
   ┃ *Desc* : Banir Membro Do Grupo
   ┠──────────────╼
   ┠≽ *${prefix}adminlist*
   ┃ *Desc* : Mostrar Grupo de Lista de Adm
   ┠──────────────╼
   ┠≽ *${prefix}linkgc*
   ┃ *Desc* : Mostrar link do grupo
   ┠──────────────╼
   ┠≽ *${prefix}leave*
   ┃ *Desc* : Diga ao bot para sair do grupo
   ┠──────────────╼
   ┠≽ *${prefix}bemvindo* <1/0>
   ┃ *Desc* : Ativando / desativando o recurso de boas-vindas
   ┠──────────────╼
   ┠≽ *${prefix}nsfw* <1/0>
   ┃ *Desc* : Ativando / desativando o recurso NSFW
   ┠──────────────╼
   ┠≽ *${prefix}delete*
   ┃ *Desc* : Excluir mensagem do bot
   ┠──────────────╼
   ┠≽ *${prefix}simih* <1/0>
   ┃ *Desc* : Ativando / desativando o recurso Simih
   ┠──────────────╼
   ┠≽ *${prefix}tagme*
   ┃ *Desc* : Mencionar você
   ┠──────────────╼
   ┠≽ *${prefix}donogrupo*
   ┃ *Desc* : Mostra quem é o proprietário do grupo
   ┠──────────────╼
   ┠≽ *${prefix}antilinkgroup* <1/0>
   ┃ *Desc* : Ativando / Desativando o Recurso Anti-Link
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.group = group
