exports.wait = () => {
        return `Em processo, Aguarde`
}

exports.timeEnd = () => {
        return `O tempo acabou`
}

exports.succsess = () => {
        return `✔️ Sucesso ✔️`
}

exports.levelon = () => {
        return `❬ ✔ ❭ *nivel está ativo*`
}

exports.levelnoton = () => {
        return `❬ X ❭  *desativado nivel*`
}

exports.levelnol = () => {
        return `*NÍVEL DE IRMÃO AINDA* 0 °-°`
}

exports.stick = () => {
        return `[❗] Falha, ocorreu um erro ao converter a imagem em um adesivo ❌`
}

exports.Iv = () => {
        return `❌ Link inválido ❌`
}

exports.group = () => {
        return `[❗] Este comando só pode ser usado em grupos! ❌`
}

exports.ownerG = () => {
        return `[❗] Este comando só pode ser usado pelo dono do grupo! ❌`
}

exports.ownerB = () => {
        return `[❗] Este comando só pode ser usado pelo dono do bot! ❌`
}

exports.admin = () => {
        return `[❗] VSFD MEMBRO COMUM, VAI PROCURAR OQ FAZER, COMANDO NÃO É PRA VOCÊ 😘! ❌`
}

exports.Badmin = () => {
        return `[❗] Este comando só pode ser usado quando o bot se torna administrador! ❌`
}

exports.daftarB = (prefix) => {
        return `──「 AINDA NÃO REGISTRADO 」──\nSalve !\nVocê ainda não se registrou, vamos registrar primeiro... \n\nComando : ${prefix}registrar nome|idade\nExemplo : ${prefix}registrar Tiago|18`
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
        return`*「 CADASTRO 」*\n\nPara saber se você se cadastrou, verifique a mensagem que enviei \n\nNOTE:\n*se você não entendeu a mensagem. significa que você não salvou o número do seu bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 DADOS DO CADASTRO 」*\n\nvocê se registrou com os dados \n\n◪ *DADOS* \n  │ \n  ├─ ❏ Nome : ${namaUser} \n  ├─ ❏ Número : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Idade : ${umurUser} \n  ├─ ❏ Hora Do Registro : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTA : \n NÃO ESQUEÇA ESTE NÚMERO PORQUE É IMPORTANTE: v`
}

exports.cmdnf = (prefix, command) => {
        return`comando *${prefix}${command}* não encontrado\tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*Desculpe, mas ${pushname} script do proprietário*`
}

exports.limitend = (pushname) => {
        return`*Desculpe ${pushname} O limite de hoje expira*\n*O limite é zerado a cada 24:00 horas*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 CONTADOR DE LIMITE 」*
o resto do seu limite : ${limitCounts}

NOTE : para chegar ao limite. pode passar de nível ou limite de capacidade`
}

exports.satukos = () => {
        return`*Adicionar parâmetro 1 / ativar ou 0 / desativar`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *SALDO*\n  ❏ *Nome* : ${pushname}\n  ❏ *Número* : ${sender.split("@")[0]}\n  ❏ *Dinheiro* : ${uangkau}`
}
