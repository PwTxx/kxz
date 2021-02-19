exports.wait = () => {
        return `⌛ Sendo processado ⌛`
}

exports.timeEnd = () => {
        return `O tempo acabou`
}

exports.succsess = () => {
        return `✔️ Sucesso ✔️`
}

exports.levelon = () => {
        return `❬ ✔ ❭ *Nível Ativado*`
}

exports.levelnoton = () => {
        return `❬ X ❭  *Nivel Desativado*`
}

exports.levelnol = () => {
        return `*SEU NÍVEL AINDA* 0 °-°`
}

exports.stick = () => {
        return `[❗] Falha, ocorreu um erro ao converter a imagem em um Sticker ❌`
}

exports.Iv = () => {
        return `❌ Link inválido ❌`
}

exports.group = () => {
        return `[❗] Este comando só pode ser usado em grupos! ❌`
}

exports.ownerG = () => {
        return `[❗] Este comando só pode ser usado pelo proprietário do grupo! ❌`
}

exports.ownerB = () => {
        return `[❗] Este comando só pode ser usado pelo proprietário do bot! ❌`
}

exports.admin = () => {
        return `[❗] KKKKKKKKKKKK, MEMBRO COMUM QUERENDO USAR ESSE COMANDO🤡! ❌`
}

exports.Badmin = () => {
        return `[❗] Este comando só pode ser usado quando o bot se torna administrador! ❌`
}

exports.daftarB = (prefix) => {
        return `──「 NÃO REGISTRADO 」──\nOlá !\nVocê ainda não se registrou, vamos registrar primeiro... \n\nComando : ${prefix}register nome|idade\nExamplo : ${prefix}register Tiago|18`
}

exports.daftarD = () => {
        return `*「 JÁ REGISTRADO 」*\n\n*você se registrou no banco de dados do bot*`
}

exports.wrongf = () => {
        return`*Formato incorreto / texto em branco*`
}

exports.clears = () => {
        return`*limpar todo o sucesso*`
}

exports.pc = () => {
        return`*「 CADASTRO 」*\n\nif você não entendeu a mensagem. significa que você não salvou o número do seu bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 DADOS DO REGISTRO 」*\n\nvocê se registrou com os dados \n\n◪ *DADOS* \n  │ \n  ├─ ❏ Nome : ${namaUser} \n  ├─ ❏ Número : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Idade : ${umurUser} \n  ├─ ❏ Hora do Registro : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTE : NÃO ESQUEÇA ESTE NÚMERO PORQUE É IMPORTANTE :v`
}

exports.cmdnf = (prefix, command) => {
        return`comando *${prefix}${command}* não encontrado \ tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*Desculpe, mas ${pushname} não o script do dono*`
}

exports.limitend = (pushname) => {
        return`*Desculpe ${pushname} O limite de hoje Acabou*\n*O limite é zerado a cada 00:00 horas*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 CONTADOR DE LIMITE 」*
o resto do seu limite : ${limitCounts}

NOTE : para chegar ao limite. pode passar de nível ou limite de capacidade`
}

exports.satukos = () => {
        return`*Adicione os parâmetros 1 (ativar) ou 0 (desativar)`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *SALDO*\n  ❏ *Nome* : ${pushname}\n  ❏ *Número* : ${sender.split("@")[0]}\n  ❏ *Dinheiro* : ${uangkau}`
}
