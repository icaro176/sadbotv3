const help = (pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered, uangku) => {
        return `🔰 -----[ *Eu sou ${botName}* ]----- 🔰
Olá, ${pushname} 👋
${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ Nome : ${pushname}
┃│➸ Dinheiro : Rp:${uangku}
┃│➸ XP : ${reqXp}
┃│➸ Level : ${getLevelingLevel(sender)}
┃│➸ ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
╭━━━➼ *𝐁𝐎𝐓 𝐏𝐀𝐔𝐋𝐈𝐒𝐓𝐀【2】*
│➼ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂
├─ ❏ *${prefix}help* ❏
├─ ❏ *${prefix}menu* ❏
╰──────────────
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭──────────────────
┃│➸ *${prefix}ping*
┃│───────────────────
┃│➸ *${prefix}simple*
┃│➸ *${prefix}maker*
┃│➸ *${prefix}gabut*
┃│➸ *${prefix}download*
┃│➸ *${prefix}random*
┃│➸ *${prefix}dompet*
┃│➸ *${prefix}other*
┃│➸ *${prefix}group*
┃│➸ *${prefix}owb*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.help = help
