const help = (pushname, prefix, botName, ownerName, reqXp, uangku) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 INFO DO USUÁRIO 〉*
   ╽
   ┠≽ *Nome* : ${pushname}
   ┠≽ *XP* : ${reqXp}
   ┠≽ *Money* : ${uangku}
   ┠≽ *Registrado : ✔️
   ╿
┯┷ *〈 BOT INFO 〉*
╽
┠≽ *Prefix* : 「  ${prefix}  」
┠≽ *Criador* : ${ownerName}
┠≽ *Versão* : 0.0.5
╿
┷┯ *〈 MENU 〉*
   ┠≽ *${prefix}stickermenu*
   ┠≽ *${prefix}procurarmenu*
   ┠≽ *${prefix}downloadmenu*
   ┠≽ *${prefix}mememenu*
   ┠≽ *${prefix}grupomenu*
   ┠≽ *${prefix}sommenu*
   ┠≽ *${prefix}musicamenu*
   ┠≽ *${prefix}stalkmenu*
   ┠≽ *${prefix}animemenu*
   ┠≽ *${prefix}+18menu*
   ┠≽ *${prefix}funmenu*
   ┠≽ *${prefix}infomenu*
   ┠≽ *${prefix}xpmenu*
   ┠≽ *${prefix}limitemenu*
   ┠≽ *${prefix}donomenu*
   ┠≽ *${prefix}outromenu*
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.help = help
