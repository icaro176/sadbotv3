const simple = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *𝐌𝐄𝐍𝐔 𝐒𝐈𝐌𝐏𝐋𝐄𝐒* ]----- 🔰
Olá, ${pushname} 👋
${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ Nome : ${pushname}
┃│➸ Level : ${getLevelingLevel(sender)}
┃│➸ ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
❁Recursos❁
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}sticker*
┃│➸ *${prefix}ttp* <texto>
┃│➸ *${prefix}tts* <idioma> <texto>
┃│➸ *${prefix}toimg* 
┃│➸ *${prefix}nulis* <texto>
┃│➸ *${prefix}stalkig* <usuário>
┃│➸ *${prefix}bikinquote*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.simple = simple
