const adult = (prefix, botName, ownerName) => {
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
┷┯ *〈 18+ 〉*
   ╽
   ┠≽ *${prefix}blowgif*
   ┃ *Desc* : Enviar Gif De Blowgif
   ┠──────────────╼
   ┠≽ *${prefix}hentaifig*
   ┃ *Desc* : Enviar Figurinha De Hentai
   ┠──────────────╼
   ┠≽ *${prefix}nekonime*
   ┃ *Desc* : Enviar Foto De Nekonime
   ┠──────────────╼
   ┠≽ *${prefix}nsfwneko*
   ┃ *Desc* : Enviar Foto De Nsfwneko
   ┠──────────────╼
   ┠≽ *${prefix}nekofig*
   ┃ *Desc* : Enviar Figurinha De Neko
   ┠──────────────╼
   ┠≽ *${prefix}neko*
   ┃ *Desc* : Enviar foto de neko
   ┠──────────────╼
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
