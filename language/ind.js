exports.wait = () => {
	return`*[❗] WAIT GANS*`
}

exports.succes = () => {
	return`*⟪ SUCCES ⟫*`
}

exports.lvlon = () => {
	return`*[❗] ENABLE LEVELING*`
}

exports.lvloff = () => {
	return`*[❗] DISABLE LEVELING*`
}

exports.lvlnul = () => {
	return`*[❗] LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*[❗] LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*[❗] BELUM DAFTAR*\n*cara daftar ${prefix}daftar nama|umur* \n\n*contoh ${prefix}daftar ramlan|18*`
}

exports.baned = () => {
	return`*[❗] SORRY SORRY AJA NIH BRO, TAPI KAU SUDAH KU BANNED YAHAHAHA HAYUUU :V*`
}

exports.rediregis = () => {
	return`*⟪ SUDAH TERDAFTAR ⟫*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*[❗] GROUP ONLY*`
}

exports.ownerb = () => {
	return`*[❗] OWNER BOT ONLY*`
}

exports.ownerg = () => {
	return`*[❗] OWNER GROUP ONLY*`
}

exports.admin = () => {
	return`*[❗] ADMIN GROUP ONLY*`
}

exports.badmin = () => {
	return`*[❗] BOT HARUS JADI ADMIN*`
}

exports.nsfwoff = () => {
	return`*[❗] NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*Teks nya mana kak?*`
}

exports.clears = () => {
	return`*[🚮] Clear all Success*`
}

exports.pc = () => {
	return`*[❗] REGISTRASI*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender, botName) => {
	return`*[ REGISTRASI BERHASIL ]*\nUntuk User Info :\n\n*➸ Nama : ${namaUser}*\n*➸ Nomor : wa.me/${sender.split("@")[0]}*\n*➸ Umur : ${umurUser}*\n*➸ Waktu Pendaftaran : ${time}*\n\n*[ SN ] : ${serialUser}*\n_NOTE : jangan Hapus chat ini tod siapa tau butuh:v_`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏➸level mu : ${getLevelingLevel(sender)}*\n*┣➸jenis command : ${command}*\n*┗➸syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏➸level mu : ${getLevelingLevel(sender)}*\n*┣➸jenis command : ${command}*\n*┗➸syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏➸level mu : ${getLevelingLevel(sender)}*\n*┣➸jenis command : ${command}*\n*┗➸syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏➸level mu : ${getLevelingLevel(sender)}*\n*┣➸jenis command : ${command}*\n*┗➸syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏➸level mu : ${getLevelingLevel(sender)}*\n*┣➸jenis command : ${command}*\n*┗➸syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏➸level mu : ${getLevelingLevel(sender)}*\n*┣➸jenis command : ${command}*\n*┗➸syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*⟪ SELAMAT ⟫*
➸ *Nama* : ${pushname}
➸ *Nomor* : wa.me/${sender.split("@")[0]}
➸ *Xp* : ${getLevelingXp(sender)}
➸ *Level* : ${getLevel} ➸ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*⟪ LIMIT COUNT ⟫*
sisa limit anda : ${limitCounts}

UPGRADE PREMIUM JIKA INGIN\nBEBAS MENGGUNAKAN BOT`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NAMA : ${pushname}\n┃│➸ NOMOR : ${sender.split("@")[0]}\n┃│➸ UANG : ${uangkau}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
}