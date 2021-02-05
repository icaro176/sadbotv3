exports.wait = () => {
	return`*[❗] AGUARDE*`
}

exports.succes = () => {
	return`*⟪ SUCESSO ⟫*`
}

exports.lvlon = () => {
	return`*[❗] ATIVOU LEVELING*`
}

exports.lvloff = () => {
	return`*[❗] DESATIVOU LEVELING*`
}

exports.lvlnul = () => {
	return`*[❗] LEVEL 0 KAKAKA*`
}

exports.lvlnoon = () => {
	return`*[❗] O NÍVEL DO GRUPO NÃO FOI ATIVADO*`
}

exports.noregis = () => {
	return`*[❗] NÃO REGISTRADO*\n*como registrar ${prefix}daftar nome|idade* \n\n*exemplo ${prefix}daftar ${pushname}|idade*`
}

exports.baned = () => {
	return`*[❗] DESCULPA MAS VOCÊ FOI BANIDO HAUAHHAUAUAHU :V*`
}

exports.rediregis = () => {
	return`*⟪ JÁ REGISTRADO ⟫*\n\n*você já está registrado*`
}

exports.stikga = () => {
	return`*sim ${pushname} falhou tente repetir*`
}

exports.linkga = () => {
	return`*desculpe link inválido*`
}

exports.groupo = () => {
	return`*[❗] ESSE COMANDO SÓ PODE SER USADO EM GRUPO*`
}

exports.ownerb = () => {
	return`*[❗] ESSE COMANDO SÓ PODE SER USADO PELO PROPRIETÁRIO DO BOT*`
}

exports.ownerg = () => {
	return`*[❗] ESSE COMANDO SÓ PODE SER USADO PELO PROPRIETÁRIO DO GRUPO*`
}

exports.admin = () => {
	return`*[❗] ESSE COMANDO SÓ PODE SER USADO POR ADMINISTRADORES*`
}

exports.badmin = () => {
	return`*[❗] O BOT PRECISA SER ADM*`
}

exports.nsfwoff = () => {
	return`*[❗] NSFW DEVE TÁ ATIVADO*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos*`
}

exports.wrongf = () => {
	return`*Onde está o texto, mano?*`
}

exports.clears = () => {
	return`*[🚮] limpado com sucesso*`
}

exports.pc = () => {
	return`*[❗] CADASTRO*\n\nPara saber se você se cadastrou, verifique a mensagem que enviei \n\nNOTA:\n*se você não entendeu a mensagem. significa que você não salvou o número do seu bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender, botName) => {
	return`*[ REGISTRADO COM SUCESSO ]*\ninformações do usuário :\n\n*➸ Nome : ${namaUser}*\n*➸ Número : wa.me/${sender.split("@")[0]}*\n*➸ Idade : ${umurUser}*\n*➸ Hora do registro : ${time}*\n\n*[ CÓDIGO ] : ${serialUser}*`
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}* não encontrado\verifique no *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe ${pushname} você não é meu dono*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏➸Seu level : ${getLevelingLevel(sender)}*\n*┣➸tipo de comando : ${command}*\n*┗➸requisitos de nível : ${aha}*\n\n_NOTA : CHAT/SEMPRE LIGADO PARA OBTER XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏➸Seu level : ${getLevelingLevel(sender)}*\n*┣➸tipo de comando : ${command}*\n*┗➸requisitos de nível : ${ahb}*\n\n_NOTA : CHAT/SEMPRE LIGADO PARA OBTER XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏➸Seu level : ${getLevelingLevel(sender)}*\n*┣➸tipo de comando : ${command}*\n*┗➸requisitos de nível : ${ahc}*\n\n_NOTA : CHAT/SEMPRE LIGADO PARA OBTER XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏➸Seu level : ${getLevelingLevel(sender)}*\n*┣➸tipo de comando : ${command}*\n*┗➸requisitos de nível : ${ahd}*\n\n_NOTA : CHAT/SEMPRE LIGADO PARA OBTER XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏➸Seu level : ${getLevelingLevel(sender)}*\n*┣➸tipo de comando : ${command}*\n*┗➸requisitos de nível : ${ahe}*\n\n_NOTA : CHAT/SEMPRE LIGADO PARA OBTER XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏➸Seu level : ${getLevelingLevel(sender)}*\n*┣➸tipo de comando : ${command}*\n*┗➸requisitos de nível : ${ahf}*\n\n_NOTA : CHAT/SEMPRE LIGADO PARA OBTER XP_`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*⟪ ᏞᎬᏙᎬᏞ ႮᏢ ⟫*
➸ *Nome* : ${pushname}
➸ *Número* : wa.me/${sender.split("@")[0]}
➸ *XP* : ${getLevelingXp(sender)}
➸ *Level* : ${getLevel} ➸ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Desculpa ${pushname} o limite expirou*\n*O limite é zerado a cada 24:00 horas*`
}

exports.limitcount = (limitCounts) => {
	return`
*⟪ ＬＩＭＩＴＥ ＤＡ ＣＯＮＴＡ ⟫*
SEU LIMITE : ${limitCounts}`
}

exports.satukos = () => {
	return`*Adicionar 1/enable ou 0/disable*`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *DINHEIRO* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ Nome : ${pushname}\n┃│➸ Número : ${sender.split("@")[0]}\n┃│➸ Dinheiro : ${uangkau}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
}
