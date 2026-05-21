exports.respondGroup = () => {
return `⛱ ғᴜɴᴄ̧ᴀ̃ᴏ ᴇxᴄʟᴜsɪᴠᴀ ᴘᴀʀᴀ ɢʀᴜᴘᴏs.`;
};

exports.respondBrinc = (prefix) => {
  return `╭─❖「 MODO BRINCADEIRAS 」
│
│ 🐦 Para usar essa função,
│ ative o modo brincadeiras.
│
│ └➤ ${prefix}modobrincadeira
╰───────────────`;
}

exports.respondAdm = () => {
return `👤 ᴘʀᴇᴄɪsᴀ sᴇʀ ᴀᴅᴍ ᴘᴀʀᴀ ᴜsᴀʀ ᴇssᴀ ғᴜɴᴄ̧ᴀ̃ᴏ.`;
};

exports.respondRegistro = () => {
return `
╔══════◇◆◇══════╗
💬 ❝ 𝑳𝒐 𝒍𝒂𝒎𝒆𝒏𝒕𝒐, 𝒚𝒂 𝒆𝒔𝒕𝒂́𝒔 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒅𝒐 🗒 ❞
╚══════◇◆◇══════╝`;
};

exports.respondBot = () => {
return `🤭 ᴇᴜ ᴘʀᴇᴄɪsᴏ sᴇʀ ᴀᴅᴍ sᴇᴜ ʙᴜʀʀᴏ.`;
};

exports.respondDono = () => {
return `🐦 sᴏ́ ᴍᴇᴜ ᴅᴏɴᴏ ᴘᴏᴅᴇ ᴇxᴇᴄᴜᴛᴀʀ ᴇssᴀ ғᴜɴᴄ̧ᴀ̃ᴏ.`;
};

exports.error = () => {
return 'Desculpe, ocorreu um erro.'
}

exports.messageProhibitedDetAdmin = () => {
return `Mensagem proibida detectada, porém é admin logo a punição será anulada.`
}

exports.messageProhibitedDetUser = () => {
return `Mensagem proibida detectada, banindo o infrator...`
}

exports.permissionDenied_rUser = () => {
return `Infelizmente, vou te banir, essa palavra é proibida aqui!`
}

exports.infoOwner = (prefix, NickDono, numerodn, nomeBot, sender) => {
return `Olá @${sender.split("@")[0]}, aqui está as informações sobre meu dono:
–
• Número do proprietário: wa.me/${numerodn}
• Proprietário: ${NickDono}`
}

exports.groupInvitation = (sender, pushname, cnvt, prefix) => {
return `*[SOLICITAÇÃO]* - Foi enviado um convite para o bot entrar em um grupo.\n–\n⚙️ *📑Como aceitar o pedido?*\n      • Para aceitar o pedido é nescessario você usar o comando: ${prefix}entrar e o link do grupo do(a) solicitante.\n        • Ex: *${prefix}entrar ${cnvt}*`
}


