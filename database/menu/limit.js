const limit = (prefix, botName, ownerName) => {
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
Note: Kamu bisa membeli limit dengan cara mengumpulkan uang terlebih dahulu. Cek uang kamu dengan cara mengetikan perintah *${prefix}bal* , harga 1 limit = 1000 uang.
Note2: Kamu bisa mengumpulkan uang dengan cara chat dengan teman segroup atau bisa dengan naik level.`
}
exports.limit = limit
