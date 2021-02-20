const wibu = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 INFO DO BOT 〉*
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
┷┯ *〈 ANIME & ANIMAL 〉*
   ╽
   ┠≽ *${prefix}neonime*
   ┃ *Desc* : Pesquisar Neonime
   ┠──────────────╼
   ┠≽ *${prefix}shota*
   ┃ *Desc* : enviar figurinha de shota
   ┠──────────────╼
   ┠≽ *${prefix}lolifig*
   ┃ *Desc* : Enviar figurinha de Loli
   ┠──────────────╼
   ┠≽ *${prefix}pokemon*
   ┃ *Desc* : Imagem aleatória de Pokémon
   ┠──────────────╼
   ┠≽ *${prefix}naruto*
   ┃ *Desc* : Imagem Aleatória de Naruto
   ┠──────────────╼
   ┠≽ *${prefix}dog*
   ┃ *Desc* : Imagem Aleatória de Cachorro
   ┠──────────────╼
   ┠≽ *${prefix}animekiss*
   ┃ *Desc* : Imagem Aleatória de Cachorro
   ┠──────────────╼
   ┠≽ *${prefix}hinata*
   ┃ *Desc* : Imagem Aleatória de Hinata
   ┠──────────────╼
   ┠≽ *${prefix}loli*
   ┃ *Desc* : Imagem Aleatória de Loli
   ┠──────────────╼
   ┠≽ *${prefix}sakura*
   ┃ *Desc* : Imagem aleatória de Sakura
   ┠──────────────╼
   ┠≽ *${prefix}boruto*
   ┃ *Desc* : Imagem aleatória de Boruto
   ┠──────────────╼
   ┠≽ *${prefix}waifu*
   ┃ *Desc* : Imagem Aleatória De Waifu
   ┠──────────────╼
   ┠≽ *${prefix}randomanime*
   ┃ *Desc* : Imagem Aleatória De Waifu
   ┠──────────────╼
   ┠≽ *${prefix}husbu*
   ┃ *Desc* : Imagem Aleatória De Husbu
   ┠──────────────╼
   ┠≽ *${prefix}husbu2*
   ┃ *Desc* : Imagem Aleatória De Husbu2
   ┠──────────────╼
   ┠≽ *${prefix}wait*
   ┃ *Desc* : Enviar nome do anime e cena curta
   ┠──────────────╼
   ┠≽ *${prefix}nekonime*
   ┃ *Desc* : Imagen Aleatória De Nekoanime
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.wibu = wibu
