const dompet = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *𝐋𝐈𝐌𝐈𝐓𝐄 & 𝐃𝐈𝐍𝐇𝐄𝐈𝐑𝐎* ]----- 🔰
Olá, ${pushname} 👋
${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ Nome : ${pushname}
┃│➸ Level : ${getLevelingLevel(sender)}
┃│➸ ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
𝑹𝒆𝒄𝒖𝒓𝒔𝒐𝒔
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}limit*
┃│➸ *${prefix}atm*
┃│➸ *${prefix}transfer* <@tag|total>
┃│➸ *${prefix}buylimit* <total>
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.dompet = dompet
