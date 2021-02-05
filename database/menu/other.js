const other = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *✤OUTROS✤* ]----- 🔰
Olá, ${pushname} 👋
${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ Nome : ${pushname}
┃│➸ Level : ${getLevelingLevel(sender)}
┃│➸ ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}brainly*
┃│➸ *${prefix}pinterest*
┃│➸ *${prefix}bitly*
┃│➸ *${prefix}moddroid* <aplicativos>
┃│➸ *${prefix}resepmakanan*
┃│➸ *${prefix}beritahoax*
┃│➸ *${prefix}virtex* [não use em grupos]
┃│➸ *${prefix}virtex2* [não use em grupos]
┃│➸ *${prefix}timer*
┃│➸ *${prefix}komenyt*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.other = other
