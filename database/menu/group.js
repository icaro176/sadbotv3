const groupm = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *𝐌𝐄𝐍𝐔 𝐆𝐑𝐔𝐏𝐎* ]----- 🔰
Olá, ${pushname} 👋
${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ Nome : ${pushname}
┃│➸ Level : ${getLevelingLevel(sender)}
┃│➸ ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
【Recursos】
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}welcome* ⟪ 1/0 ⟫
┃│➸ *${prefix}leveling* ⟪ 1/0 ⟫
┃│➸ *${prefix}event* ⟪ 1/0 ⟫
┃│➸ *${prefix}simih* ⟪ 1/0 ⟫
┃│➸ *${prefix}nsfw* ⟪ 1/0 ⟫
┃│➸ *${prefix}grup* ⟪ buka/tutup ⟫
┃│➸ *${prefix}add* <55112xxxxxx>
┃│➸ *${prefix}kick* <@tag>
┃│➸ *${prefix}hedsot* <@tag>
┃│➸ *${prefix}linkgrup*
┃│➸ *${prefix}promote* <@tag>
┃│➸ *${prefix}demote* <@tag>
┃│➸ *${prefix}setname* <texto>
┃│➸ *${prefix}setdesc* <texto>
┃│➸ *${prefix}tagall*
┃│➸ *${prefix}admin*
┃│➸ *${prefix}level*
┃│➸ *${prefix}fitnah* <@tag&mensagem&mensagem>
┃│➸ *${prefix}hidetag*
┃│➸ *${prefix}hidetag5*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.groupm = groupm
