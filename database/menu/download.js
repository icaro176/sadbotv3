const download = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔* ]----- 🔰
Olá, ${pushname} 👋
${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ Nome : ${pushname}
┃│➸ Level : ${getLevelingLevel(sender)}
┃│➸ ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
ℛℯ𝒸𝓊𝓇𝓈ℴ𝓈
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}ytmp3* <link>
┃│➸ *${prefix}yutubdl* <link>
┃│➸ *${prefix}tiktod* <link>
┃│➸ *${prefix}joox* <título>
┃│➸ *${prefix}play* <título>
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.download = download
