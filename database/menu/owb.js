const owb = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *𝐌𝐄𝐍𝐔 𝐏𝐑𝐎𝐏𝐑𝐈𝐄𝐓𝐀𝐑𝐈𝐎* ]----- 🔰
Olá, ${pushname} 👋
${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ Nome : ${pushname}
┃│➸ Level : ${getLevelingLevel(sender)}
┃│➸ ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
𝐑𝐄𝐂𝐔𝐑𝐒𝐎𝐒
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}bc*
┃│➸ *${prefix}bcgc*
┃│➸ *${prefix}clearall*
┃│➸ *${prefix}block*
┃│➸ *${prefix}unblock*
┃│➸ *${prefix}clone*
┃│➸ *${prefix}leave*
┃│➸ *${prefix}setppbot*
┃│➸ *${prefix}setreply*
┃│➸ *${prefix}setprefix*
┃│➸ *${prefix}ban*
┃│➸ *${prefix}unban*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.owb = owb
