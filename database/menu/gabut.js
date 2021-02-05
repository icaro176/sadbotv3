const gabut = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *✨𝐄𝐍𝐓𝐑𝐄𝐓𝐄𝐍𝐈𝐌𝐄𝐍𝐓𝐎✨* ]----- 🔰
Olá, ${pushname} 👋
${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ Nome : ${pushname}
┃│➸ Level : ${getLevelingLevel(sender)}
┃│➸ ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Ｒｅｃｕｒｓｏｓ
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}apakah* <texto>
┃│➸ *${prefix}bisakah* <texto>
┃│➸ *${prefix}kapankah* <texto>
┃│➸ *${prefix}hobby* <texto>
┃│➸ *${prefix}rate* <chance de...>
┃│➸ *${prefix}seberapagay* <% gay>
┃│➸ *${prefix}nangis*
┃│➸ *${prefix}cium*
┃│➸ *${prefix}peluk*
┃│➸ *${prefix}truth* <verdade>
┃│➸ *${prefix}dare* <desafio>
┃│➸ *${prefix}timer*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.gabut = gabut
