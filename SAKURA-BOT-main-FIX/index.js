///｡☆✼★━━━━━━ATENÇÃO━━━━━━━━━━★✼☆｡
//👑 Base criada e desenvolvida 100% por mim (@boladinho). Código original, feito na raça, com sistema otimizado e comandos exclusivos. Se for usar, mantém os créditos e respeita o trampo! ♨️👨‍💻🔥 Não vender essa base fdp
//｡☆✼★━━━━━━ATENÇÃO━━━━━━━━━━★✼☆｡
////////////////////////////////////////////////////////
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('BOTIZIN ONLINE ⚡')
})

app.listen(process.env.PORT || 3000)

const {
default: makeWASocket,
DisconnectReason,
useMultiFileAuthState,
fetchLatestBaileysVersion,
makeCacheableSignalKeyStore,
downloadContentFromMessage,
prepareWAMessageMedia,
generateWAMessageFromContent,
proto } = require("baileys");

//————| ⚙️ MODULES ⚙️ |————// 
const fs = require('fs');
const readline = require('readline');
const chalk = require('chalk');
const pino = require('pino');
const cfonts = require('cfonts');
const moment = require('moment-timezone');
const NodeCache = require("node-cache");
const mimetype = require('mime-types');
const ffmpeg = require('fluent-ffmpeg')
const FormData = require('form-data')
const axios = require("axios")
const fsExtra = require('fs-extra');
const webp = require('node-webpmux')
const colors = require('colors');
const path = require('path');
const archiver = require('archiver')
const crc32 = require('buffer-crc32');
const fetch = require('node-fetch');
const { Boom } = require('@hapi/boom');
const os = require('os');
const speed = require("performance-now");
const { exec, spawn, execSync } = require("child_process")
const cheerio = require('cheerio');
let phoneNumber = "5511953265144";
const ms = require('ms');
const ytdl = require("ytdl-core");
const yts = require("yt-search");

const { pastaLogos, pastaFoto, seloPicpay, tabela, version, selonubank, selopagbank, seloMpg, selobBrasil, banner, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, photo, mess, menu, menuadm, menudono, brincadeiras, upload, apizero, nescessario, setting } = require('./exports.js');

const { MoneyOfSender, addkoin, delkoin, AddReg, checkOfReg , addLevel, addXp,levelOfsender , xpOfsender ,checkOfRegM ,addkoinM , delkoinM , MoneyOfM,Rxp, addRxp ,addRep , delRep , repUser  } = require('./SRC/rg/Js/reg.js')

const { imggostosa, imgbebado, chutecmd, bruxo, puto, gifgay, imgvesgo } = require("./SRC/links_img.json");

const { numero, jpgBot, channelnk, owner, numberBot, NickDono, nomeBot, prefix } = require('./arquivo/settings/setting.json');

const { audio_menu, bom_dia, boa_tarde, boa_noite, corno, qviado } = require('./fuction/media/audios.json');

const caminhoEmoji = './arquivo/saveF/emojisBanidos.json'
let emojisBanidos;
try {
emojisBanidos = JSON.parse(fs.readFileSync(caminhoEmoji, 'utf8'))
} catch (err) {
emojisBanidos = [] }
function temEmojiBanido(texto) {
  return emojisBanidos.some(e => texto.includes(e)) }
 
//---- 🔐 ÁREA PROTEGIDA POR SENHA ----//
const prompt = require('prompt-sync')({ sigint: true });
const { NEW_BACKUP } = require('./arquivo/password/senha.js')
const pastaAuth = path.join(__dirname, '🔒backup');
const arquivoAuth = path.join(pastaAuth, 'autorizado🔑.txt');
function verificarSenha() {
if (fs.existsSync(arquivoAuth)) {
return true;
}

// Evita crash em hospedagens sem terminal (/dev/tty)
if (!process.stdin.isTTY) {
console.log(chalk.yellow('⚠️ Ambiente sem terminal detectado. Verificação de senha ignorada.'));
return true;
}

let tentativas = 0;

while (tentativas < 3) {
const senha = prompt(chalk.green('🔑 Digite a senha de conexão: '));

if (senha === NEW_BACKUP) {
if (!fs.existsSync(pastaAuth)) fs.mkdirSync(pastaAuth, { recursive: true });

fs.writeFileSync(
arquivoAuth,
'🔐 ATENÇÃO! SISTEMA DE SEGURANÇA ATIVO\nEste bot possui proteção por senha para garantir mais segurança no uso.\nEstamos liberando o acesso para utilização normalmente.'
);

console.log('✅ Senha correta! Bot autorizado.');
return true;

} else {
console.log('⚠️ Senha incorreta.');
tentativas++;
}
}

console.log('🚫 Número máximo de tentativas atingido.');
return false;
}

if (!verificarSenha()) {
process.exit(1);
}

const pathSenha = path.join(__dirname, './arquivo/password/senha.js');
function trocarSenha(novaSenha) {
  if (!novaSenha) {
console.log('‼️ Nenhuma senha informada.');
return false; }
if (novaSenha.length < 4) {
console.log('👤 A senha precisa ter no mínimo 4 caracteres.');
return false; }
const conteudo = `module.exports = { NEW_BACKUP: '${novaSenha}' };`;
 try {
fs.writeFileSync(pathSenha, conteudo);
console.log('🔐 Senha atualizada com sucesso!');
return true;
  } catch (erro) {
console.log('⚠️ Erro ao atualizar a senha:', erro);
return false; }}
module.exports = { trocarSenha };

function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms)); }

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchJson(url) {
  try {
const res = await axios.get(url);
return res.data;
  } catch (err) {
console.log('Erro no fetchJson:', err);
return null; }}

function kyun(seconds){
function pad(s){return (s < 10 ? "0" : "") + s};
var horas = Math.floor(seconds / (60*60) % (24));
var minutos = Math.floor(seconds % (60*60) / 60);
var segundos = Math.floor(seconds % 60);
return `${pad(horas)} horas, ${pad(minutos)} minutos e ${pad(segundos)} segundos.`;
}

/* Função para transformar segundos em dia, hora, minutos e segundos... */
function TimeCount(seconds){
function pad(s){return (s < 10 ? "0" : "") + s};
var dias = Math.floor(seconds / (60*60) / (24));
var horas = Math.floor(seconds / (60*60) % (24));
var minutos = Math.floor(seconds % (60*60) / 60);
var segundos = Math.floor(seconds % 60);
return `${pad(dias)} dia(s), ${pad(horas)} hora(s), ${pad(minutos)} minuto(s) e ${pad(segundos)} segundo(s).`;
}

const runtime = function(seconds) {
    seconds = Number(seconds);
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60); // Utilizando Math.floor() para asegurar que los segundos sean enteros
    const parts = [];    
    if (days > 0) {
        parts.push(days + (days === 1 ? " 𝙳𝙸𝙰" : " 𝙳𝙸𝙰𝚂"));
    }
    if (hours > 0) {
        parts.push(hours + (hours === 1 ? " 𝙷𝙾𝚁𝙰" : " 𝙷𝙾𝚁𝙰𝚂"));
    }
    if (minutes > 0) {
        parts.push(minutes + (minutes === 1 ? "  𝙼𝙸𝙽𝚄𝚃𝙾" : " 𝙼𝙸𝙽𝚄𝚃𝙾𝚂"));
    }
   if (remainingSeconds > 0) {
    parts.push(remainingSeconds + (remainingSeconds === 1 ? " 𝚂𝙴𝙶𝚄𝙽𝙳𝙾" : " 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂"));
    }    
    return parts.join(', ');
}

const cooldowns = {};
async function checkCooldown(sender, command, cooldownTime) {
const key = `${sender}_${command}`;
const now = Date.now();
if (cooldowns[key]) {
const timePassed = now - cooldowns[key];
if (timePassed < cooldownTime) {
let waitSeconds = (cooldownTime - timePassed) / 3000;
if (waitSeconds <= 0) return false;
waitSeconds = waitSeconds < 3 ? 3 : waitSeconds.toFixed(3);
return `*⏰𝙴𝚂𝙿𝙴𝚁𝙴 ${waitSeconds} 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂 𝙰𝙽𝚃𝙴𝚂 𝙳𝙴 𝚄𝚂𝙰𝚁 𝙾𝚄𝚃𝚁𝙾 𝙲𝙾𝙼𝙰𝙽𝙳𝙾*`;
}
}
cooldowns[key] = now;
return false;
}


function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) { }}

const pairingCode = true;
const useMobile = process.argv.includes("--mobile")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

async function startBot() {
  try {
const { state, saveCreds } = await useMultiFileAuthState('./conexão');
const { version } = await fetchLatestBaileysVersion();
const msgRetryCounterCache = new NodeCache();

console.clear();
console.log(banner.string);

const sock = makeWASocket({
version,
logger: pino({ level: "silent" }),
printQRInTerminal: false,
browser: ["Ubuntu", "Chrome", "20.0.04"],
auth: {creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" })) },
markOnlineOnConnect: true,
generateHighQualityLinkPreview: true,
msgRetryCounterCache,
syncFullHistory: false, });

if (!sock.authState.creds.registered) {
let number = await question(chalk.cyan("📱 Digite seu número de WhatsApp com o código do país\n (apenas números): "));
rl.close();
number = number.replace(/\D/g, "");
if (!number) {
console.log(chalk.red("❌ Número inválido."));
process.exit(1); }

console.log(chalk.yellow("⌛ Solicitando código de vinculação..."));
  try {
const code = await sock.requestPairingCode(number);
console.log(chalk.bgGreen.black("✅ CÓDIGO DE VINCULAÇÃO:"), chalk.white(code));
  } catch (err) {
console.error(chalk.red("❌ Error ao gerar código de vinculação:"), err.message);
process.exit(1); }}

sock.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
const reason = lastDisconnect?.error?.output?.statusCode;
if (reason === DisconnectReason.loggedOut) {
console.log(chalk.red("❌ Sessão encerrada. Apague a pasta 'conexao' e emparelhe novamente."));
   } else {
console.log(chalk.yellow("⚠️ Conexão encerrada, reconectando..."));
startBot(); }
 } else if (connection === "open") {
console.log(chalk.black("  ✨🟢 ★ CONEXÃO FINALIZADA ★ 🟢✨\n🌐🤖 ★ BOT CONECTADO COM SUCESSO ★ 🤖🌐 ")); 
exec("rm -rf 🥁 && mkdir 🥁"); }});

sock.ev.on("creds.update", saveCreds);

//✧══════〔 🤺 𝙱𝙾𝙰𝚂 𝚅𝙸𝙽𝙳𝙰𝚂 🤺 〕══════✧
sock.ev.on("group-participants.update", async (anu) => {
  try {
const groupId = anu.id;
const dirGroup = `./SRC/grupo/${groupId}.json`;
if (!fs.existsSync(dirGroup)) return;

const dataGp = JSON.parse(fs.readFileSync(dirGroup));
const mdata = await sock.groupMetadata(groupId);

const jid = anu.participants[0].id || anu.participants[0];

const groupDesc = mdata.desc || "Sem descrição";
const time = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

for (let participant of anu.participants) {
const id = typeof participant === 'string' ? participant : participant.id;

let profileUrl;
let texto = null;

      // 🟢 ENTRADA
if (anu.action === "add") {
profileUrl = pastaLogos; 

const welcomeObj = dataGp[0]?.wellcome?.find(w => w.bemvindo1 || w.bemvindo2);
texto = welcomeObj?.legendabv;

      // 🔴 SAÍDA
 } else if (anu.action === "remove") {
profileUrl = pastaFoto; 

const exitObj = dataGp[0]?.wellcome?.find(w => w.legendasaiu1);
texto = exitObj?.legendasaiu; }

if (!texto) continue;
texto = String(texto || "")
.replace(/#hora#/g, time)
.replace(/#nomedogp#/g, mdata.subject)
.replace(/#numerodele#/g, '@' + jid.split('@')[0])
.replace(/#nomebot#/g, sock.user.id.split(':')[0])
.replace(/#prefixo#/g, prefix)
.replace(/#descrição#/g, groupDesc);

await sock.sendMessage(groupId, {
image: { url: profileUrl },
caption: texto,
mentions: [id],
contextInfo: {
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: setting.channelnk,
newsletterName: nomeBot
}}}); }
 } catch (e) {
console.log(e); }});

sock.ev.on('messages.upsert', async (m) => {
const info = m.messages[0];
if (!info.message || info.key.fromMe) return;
if (info.key?.remoteJid === "status@broadcast") return;
const content = JSON.stringify(info.message);
const altpdf = Object.keys(info.message);
const type = altpdf[0] === "senderKeyDistributionMessage"
? (altpdf[1] === "messageContextInfo" ? altpdf[2] : altpdf[1]) : altpdf[0];
const from = info.key.remoteJid;
const body = 
info.message?.conversation || info.message?.extendedTextMessage?.text || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption ||  info.message?.documentMessage?.caption || info.message?.listResponseMessage?.singleSelectReply?.selectedRowId || info.message?.buttonsResponseMessage?.selectedButtonId ||   "";
//✪════〔 🍥 isQuoted/const 🍥 〕════✪//
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isSticker) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVisuU = type === 'extendedTextMessage' && content.includes('viewOnceMessage')
const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
const quoted = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
const text = (info.message?.conversation || info.message?.extendedTextMessage?.text || '').trim();
let command = '';
const isCmd = body.startsWith(prefix)
if (text.startsWith(prefix)) {
command = text.slice(prefix.length).split(/ +/).shift().toLowerCase();
 } else {
command = text.split(/ +/).shift().toLowerCase(); }
const texto = (body && budy || "").trim().toLowerCase();
const enviar = (texto) => sock.sendMessage(from, { text: texto }, { quoted: info });
const args = body.split(' ').slice(1)
const q = args.join(' ')
const isGroup = info.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? info.key.participant: from
const groupMetadata = isGroup ? await sock.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const pushname = info.pushName ? info.pushName : ''

const budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

const isBot = info.key.fromMe ? true : false
const BotNumber = await sock.user.id.split(':')[0]+'@s.whatsapp.net';
const isGroupAdmins = isGroup
? groupMetadata.participants.some(
p => p.admin && p.id === sender ) : false
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
function getGroupAdmins(participants) {
return participants
.filter(p => p.admin !== null) 
.map(p => p.id);  }
const participants = isGroup ? await groupMetadata.participants : ''
const isBotGroupAdmins = groupAdmins.includes(numberBot) || groupAdmins.includes(BotNumber) || false;
const isCreator = sender === owner

//funcion para mencionar 
const obterMencionar = (info) => {
const context = info.message?.extendedTextMessage?.contextInfo || info.message?.contextInfo || null;
if (context?.mentionedJid && context.mentionedJid.length > 0) {
return context.mentionedJid[0]; }
if (context?.participant) {
return context.participant; }
return null;
};
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`;
};
const getExtension = async (type) => {
return await mimetype.extension(type)
}
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}

const getBuffer = async (url, opcoes) => {
try {
opcoes ? opcoes : {}
const post = await axios({
method: "get",
url,
headers: {
'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', 
'DNT': 1,
'Upgrade-Insecure-Request': 1
},
...opcoes,
responseType: 'arraybuffer' })
return post.data
} catch (e) {
console.log(e) }}

async function escrever () {
await sock.sendPresenceUpdate('composing', from) 
await sleep(1000)   
reagir(from, "⏳️")
await sleep(2000)
reagir(from, "✅️")
}

// LOADING
async function carregamento() {
txt1 = `_『ʟᴏᴀᴅɪɴɢ』\n:`
var carre = [
`${txt1}ʟᴏᴀᴅɪɴɢ ▁ 10%`,
`${txt1}ʟᴏᴀᴅɪɴɢ ▁ ▂ ▃30%`,
`${txt1}ʟᴏᴀᴅɪɴɢ ▁ ▂ ▃ ▄50%`,
`${txt1}ʟᴏᴀᴅɪɴɢ ▁ ▂ ▃ ▄ ▅ 60%`,
`${txt1}ʟᴏᴀᴅɪɴɢ ▁ ▂ ▃ ▄ ▅ ▆ 80%`,
`${txt1}ʟᴏᴀᴅɪɴɢ ▁ ▂ ▃ ▄ ▅ ▆ █ 100%`,
`_᭥ꩌ゚໋ @${sender.split("@")[0]}_\n_• Pesquisa realizada, Aguarde um pouco para ser enviado.._`]
let { key } = await sock.sendMessage(from, {text: `_᭥ꩌ゚໋ Ok @${sender.split("@")[0]}_\n_• Obtendo os resultados de sua pesquisa.._`, mentions: [sender]}, {quoted: loc})
for (let i = 0; i < carre.length; i++) {
await sock.sendMessage(from, {text: carre[i], mentions: [sender], edit: key });
}
}

const deviceType = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'IPhone' : 'WhatsApp web'

const adivinha = info.key.id.length > 21 ? 'Android ツ' : info.key.id.substring(0, 2) == '3A' ? 'IPhone ｯ' : 'WhatsApp web シ';

const isCargo = isCreator ? "Meu Mestre." : isGroupAdmins ? "Adminstrador.": "Membro Comum."

const data = moment.tz("America/Sao_Paulo").format("DD/MM/YY");
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const reagir = async (idgp, emj) => {
await sock.sendMessage(idgp, {react: {text: emj, key: info.key}}); }

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? sock.sendMessage(from, {text: teks.trim(), mentions: memberr}) : sock.sendMessage(from, {text: teks.trim(), mentions: memberr})}

const loc = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363034719882460@g.us" } : {}) },
message: { 
"locationMessage": {
"name": 'localização', }}}

function generarCodigo() {
const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let codigo = '';
for (let i = 0; i < 6; i++) {
const indice = Math.floor(Math.random() * caracteres.length);
codigo += caracteres.charAt(indice); }
return codigo; }

//✪════〔 🍾 VERIFICADOS 🍾 〕════✪//
const sabLive = {key: {participant: '0@s.whatsapp.net'}, message: {liveLocationMessage: {caption: `Usuário: ${pushname}`}}} 

const sabPhoto = {key: {participant : '0@s.whatsapp.net'}, message: {imageMessage: {caption: pushname}}}

const sabVideo = {key: {participant : '0@s.whatsapp.net'},message: {videoMessage: {caption: pushname}}}

const sabContact = {key: {participant : '0@s.whatsapp.net'},message: {contactMessage: {displayName: `${pushname}`}}}

const sabDocument = {key: {participant : '0@s.whatsapp.net'}, message: {documentMessage: {caption: pushname}}}

const Presence = {
  composing: async (jid) => {
    await gl.sendPresenceUpdate('composing', jid)
  }
}

async function salvarSticker(info, enviar) {
    try {
const quotedMessage = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
if (!quotedMessage) return enviar('❌ Marque um sticker para salvar.');
const type = Object.keys(quotedMessage)[0];
if (type !== 'stickerMessage') return enviar('❌ Apenas stickers podem ser salvos.');
const stream = await downloadContentFromMessage(quotedMessage.stickerMessage, 'sticker');
let buffer = Buffer.from([]);
for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk]);
const fs = require('fs');
const filename = `sticker_${Date.now()}.webp`; 
fs.writeFileSync(`./arquivo/figuras/${filename}`, buffer);
enviar(`✅ Sticker salvo com sucesso como ${filename}`);
    } catch (err) {
console.error(err);
enviar('❌ Erro ao salvar o sticker. Certifique-se de marcar corretamente.'); }}

if(!isCmd && info.key.fromMe) return;
if (isCmd) {
const waitMsg = await checkCooldown(sender, command, 3000);
if (waitMsg) return enviar(waitMsg);
}

//──〔 🍓 ATIVAÇÃO DO GRUPO 🍓 〕──//
const dirGroup = `./SRC/grupo/${from}.json`;
const nescj = "./SRC/settings/nescessario.json";
const data_IDGP = [{
name: groupName,
welkom: false,
sairGp: false,
autofigu: false,
antisalvargp: false,
antiimg: false,
antilink: false,
antivideo: false,
antinotas: false,
antiemoji: false,
antidoc: false,
antictt: false,
antisticker: false,
antiaudio: false,
antiloc: false,
anticatalog: false,
Odelete: false,
autorepo: false,
console: false,
jogos: false,
reacão: false,
menu_audio: false,
delimg: false,
soadm: false, 
bangp: false,
antipalavrao: {
active: false,
palavras: []
  },
wellcome: [{
bemvindo1: false,
legendabv: `💙 𝙾𝙻𝙰 #numerodele#\n𝚂𝙴𝙹𝙰 𝙱𝙴𝙼 𝚅𝙸𝙽𝙳𝙾 [ 𝙰 ] 𝙰𝙾 𝙶𝚁𝚄𝙿𝙾\n#nomedogp#\n\n• 𝙻𝙴𝙸𝙰 𝙰𝚂 𝚁𝙴𝙶𝚁𝙰𝚂 𝙴 𝙰𝙿𝚁𝙾𝚅𝙴𝙸𝚃𝙴 𝙾 𝙶𝚁𝚄𝙿𝙾`,
legendasaiu1: false,
legendasaiu: 0
},
{
bemvindo2: false,
legendabv: `💙 𝙾𝙻𝙰 #numerodele#\n𝚂𝙴𝙹𝙰 𝙱𝙴𝙼 𝚅𝙸𝙽𝙳𝙾 [ 𝙰 ] 𝙰𝙾 𝙶𝚁𝚄𝙿𝙾\n#nomedogp#\n\n• 𝙻𝙴𝙸𝙰 𝙰𝚂 𝚁𝙴𝙶𝚁𝙰𝚂 𝙴 𝙰𝙿𝚁𝙾𝚅𝙴𝙸𝚃𝙴 𝙾 𝙶𝚁𝚄𝙿𝙾`,
legendasaiu: 0
}
]

}]

if(isGroup && !fs.existsSync(dirGroup)){
fs.writeFileSync(dirGroup, JSON.stringify(data_IDGP, null, 2) + '\n');
}
try {
var dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined;
} catch (e){
fs.writeFileSync(dirGroup, JSON.stringify(data_IDGP));
}
function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}
function setNes(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2))}

const isAwelKom = isGroup ? dataGp[0].welkom : undefined 
const isAutofigu = isGroup ? dataGp[0].autofigu : undefined 
const isAntiSalvargp = isGroup ? dataGp[0].antisalvargp : undefined
const isAntiImg = isGroup ? dataGp[0].antiimg : undefined
const isAsairGp = isGroup ? dataGp[0].sairGp : undefined 
const isAntiLink = isGroup ? dataGp[0].antilink : undefined 
const isAntiVid = isGroup ? dataGp[0].antivideo : undefined
const isAntiNotas = isGroup ? dataGp[0].antinotas : undefined
const isAntiemoji = isGroup ? dataGp[0].antiemoji : undefined
const isAntidoc = isGroup ? dataGp[0].antidoc : undefined
const isAntiCtt = isGroup ? dataGp[0].antictt : undefined
const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined
const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined
const isAntiLoc = isGroup ? dataGp[0].antiloc : undefined
const isAntiCatalog = isGroup ? dataGp[0].anticatalog : undefined
const IS_DELETE = isGroup ? dataGp[0].Odelete : undefined
const isAutorepo = isGroup ? dataGp[0].autorepo : undefined
const isConsole = isGroup ? dataGp[0].console : undefined 
const isModobn =isGroup ? dataGp[0].jogos : undefined
const isAudioMenu =isGroup ? dataGp[0].menu_audio : undefined
const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined
const isWelkom2 = isGroup ? dataGp[0].wellcome[1].bemvindo2 : undefined
const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined
const isPalavras = isGroup ? dataGp[0].antipalavrao.palavras : undefined
const isDeLimg = isGroup ? dataGp[0].delimg : undefined 
const isWelkom3 = isGroup ? dataGp[0].wellcome[0].legendasaiu1 : undefined
const So_Adm = isGroup ? dataGp[0].soadm : undefined
const isBanchat = isGroup ? dataGp[0].bangp : undefined
const isAntireacão = isGroup ? dataGp[0].reacão : undefined 

if(isAutofigu && isGroup) {
async function autofiguf() {
setTimeout(async() => {
if(budy.includes(`${prefix}sticker`) ||
budy.includes(`${prefix}s`) ||
budy.includes(`${prefix}stk`) ||
budy.includes(`${prefix}st`) ||
budy.includes(`${prefix}fsticker`) ||
budy.includes(`${prefix}f`) ||
budy.includes(`${prefix}fstiker`)) return
if(type == 'imageMessage') {
var pack = `➪🛸ᴄʀɪᴀᴅᴀ ᴘᴏʀ: ${nomeBot}
➪ 📅Data dia: ${data}⁩
➪ 👥grupo: ${groupName}`
owgi = await getFileBuffer(info.message.imageMessage, 'image')
let encmediaa = await sendImageAsSticker2(sock, from, owgi, info, {
packname: pack,
contextInfo: {
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: setting.channelnk,
newsletterName: nomeBot }}})
DLT_FL(encmediaa)}
if(type == 'videoMessage') {
if((isMedia && info.message.videoMessage.seconds < 10)) {
var pack = `➪🛸ᴄʀɪᴀᴅᴀ ᴘᴏʀ: ${nomeBot}
➪ 📅Data dia: ${data}⁩
➪ 👥grupo: ${groupName}`
owgi = await getFileBuffer(info.message.videoMessage, 'video')
let encmedia = await sendVideoAsSticker2(sock, from, owgi, info, {
packname: pack,
contextInfo: {
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: setting.channelnk,
newsletterName: nomeBot }}})
DLT_FL(encmedia) }}
}, 1000) }
autofiguf().catch((error) => {
console.log(error) }) }

//✪════〔 🔗 ANTI-DELETAR 🔗 〕════✪//
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return await sock.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info});
await sock.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info});
if(IS_DELETE) {
setTimeout(async() => {
await sock.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500) }
if(!JSON.stringify(groupMembers).includes(sender)) return  
await sock.groupParticipantsUpdate(from, [sender], 'remove'); }

//✪════〔 🔗 ANTI-IMAGEM 🔗 〕════✪//
if (isDeLimg && isBotGroupAdmins && type === 'imageMessage') {
if (info.key.fromMe) return;
if (IS_DELETE) {
setTimeout(async () => {
await sock.sendMessage(from, {
delete: {remoteJid: from,
fromMe: false,
id: info.key.id, participant: sender }});
 }, 1000); }}

//✪════〔 🎬 ANTI-VIDEOS 🎬 〕════✪//
if(isAntiVid && isBotGroupAdmins && type === 'videoMessage') {
if(info.key.fromMe) return;
if(isGroupAdmins) {
return await sock.sendMessage(from, {text: `Mensagem proibida detectada, porém é admin logo a punição será anulada.` },
 { quoted: info }); }
enviar('🚫 Vídeo detectado, banindo usuário..');
setTimeout(async () => {
await sock.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } }); }, 500);
if(!JSON.stringify(groupMembers).includes(sender)) return;
await sock.groupParticipantsUpdate(from, [sender], 'remove'); }

//✪════〔 ⚡ ANTI-NOTAS ⚡ 〕════✪//
if(isAntiNotas && body.match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !isCreator && !info.message?.reactionMessage?.text && body.length > 20) {
let verificar = body.match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if(verificar && body.length < 100) return  
if(IS_DELETE) {
setTimeout(() => {
sock.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500) }
if(!JSON.stringify(groupMembers).includes(sender)) return  
sock.groupParticipantsUpdate(from, [sender], 'remove') }

//✪════〔 🍥 ANTI-EMOGI 🍥 〕════✪//
if(isAntiemoji && isBotGroupAdmins && !isCmd) {
const msg =
info.message?.conversation ||
info.message?.extendedTextMessage?.text ||
info.message?.imageMessage?.caption ||
info.message?.videoMessage?.caption || ''
if (temEmojiBanido(msg)) {
if (isGroupAdmins) {
await sock.sendMessage(from,
{ text: mess.messageProhibitedDetAdmin() },
{ quoted: info })
  } else {
if (IS_DELETE) {
setTimeout(async () => {
await sock.sendMessage(from, {
delete: {remoteJid: from,
fromMe: false,
id: info.key.id,
participant: sender } })
  }, 500) }
await sock.groupParticipantsUpdate(from, [sender], 'remove') }}}

//✪════〔 📋 ANTI-DOC 📋 〕════✪//
if(isAntidoc && isBotGroupAdmins && type == 'documentMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return await sock.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info})
if(IS_DELETE) {
setTimeout(async() => {
await sock.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500) }
if(!JSON.stringify(groupMembers).includes(sender)) return  
await sock.groupParticipantsUpdate(from, [sender], 'remove') }

//✪════〔 👥 ANTI-CTT 👥 〕════✪//
if(isAntiCtt && isBotGroupAdmins && type == 'contactMessage') {
if(isGroupAdmins) return await sock.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info});
await sock.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info});
if(IS_DELETE) {
setTimeout(async() => {
await sock.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500); }
if(!JSON.stringify(groupMembers).includes(sender)) return
await sock.groupParticipantsUpdate(from, [sender], 'remove'); }

//✪════〔 🛸 ANTI-STICKER 🛸 〕════✪//
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return await sock.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info});
await sock.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info});
if(IS_DELETE) {
setTimeout(async() => {
await sock.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500) }
if(!JSON.stringify(groupMembers).includes(sender)) return  
await sock.groupParticipantsUpdate(from, [sender], 'remove'); }

//✪════〔 🎙️ ANTI-AUDIO 🎙️ 〕════✪//
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return await sock.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info});
await sock.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info});
if(IS_DELETE) {
setTimeout(async() => {
await sock.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500); }
if(!JSON.stringify(groupMembers).includes(sender)) return
await sock.groupParticipantsUpdate(from, [sender], 'remove'); }

//✪════〔 🛠️ ANTI-LOCAL 🛠️ 〕════✪//
if(isAntiLoc && isBotGroupAdmins && type == 'locationMessage') {
if(isGroupAdmins) return await sock.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info});
await sock.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info});
if(IS_DELETE) {
setTimeout(async() => {
await sock.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500); }
if(!JSON.stringify(groupMembers).includes(sender)) return
await sock.groupParticipantsUpdate(from, [sender], 'remove'); }

//✪════〔 🌊 ANTI-CATALOG 🌊 〕════✪//
if(isAntiCatalog && isBotGroupAdmins && type == 'productMessage') {
if(isGroupAdmins) return await sock.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info});
await sock.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info});
if(IS_DELETE) {
setTimeout(async() => {
await sock.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500); }
if(!JSON.stringify(groupMembers).includes(sender)) return
await sock.groupParticipantsUpdate(from, [sender], 'remove'); }

//✪════〔 🐸 ANTI-REAÇÃO 🐸 〕════✪//
if(isAntireacão && isBotGroupAdmins && type === 'reactionMessage') {
if(info.key.fromMe) return;
if(isGroupAdmins) {
return await sock.sendMessage(from, {text: `Mensagem proibida detectada, porém é admin logo a punição será anulada.` },
 { quoted: info }); }
enviar('🚫 Reação detectado, banindo usuário..');
setTimeout(async () => {
await sock.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } }); }, 500);
if(!JSON.stringify(groupMembers).includes(sender)) return;
await sock.groupParticipantsUpdate(from, [sender], 'remove'); }

const isBotoff = nescessario.botoff
const isAntiPv3 = nescessario.antipv3
const isReg = checkOfReg(sender)
const isVerificado = nescessario.verificado

//✪════〔 🎴 RESP-CONSOLE 🎴 〕════✪//
if(isConsole) {
if (isCmd && isGroup && !info.key.fromMe) {
console.log(chalk.black(`
┌──────────────────────────────┐
│ 🐾 E aí, pessoal do grupo!   │
├──────────────────────────────┤
│ 🕒 Hora: ${colors.black(hora)}
│ 👤 Usuário: ${colors.black(pushname)}
│ 💬 Comando: ${colors.black(prefix + command)}
│ 👥 Grupo: ${colors.black(groupName)}
└──────────────────────────────┘
`)); }

if (isCmd && !isGroup &&  !info.key.fromMe) {
console.log(chalk.black(`
┌──────────────────────────────┐
│ 🌸 Olá, meu docinho!         │
├──────────────────────────────┤
│ 🕒 Hora: ${colors.black(hora)}
│ 👤 Usuário: ${colors.black(pushname)}
│ 💬 Comando: ${colors.black(prefix + command)}
└──────────────────────────────┘
`)); }}

const mention = async(teks = '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy) { 
for(zn of vz.split(' ')) {
if(zn.includes('@')) memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}
}
}

async function sendAudioMenu(from) {
await sock.sendMessage(from, {
audio: { url: audio_menu },
mimetype: "audio/mpeg",
contextInfo: {
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: `${setting.channelnk}`,
newsletterName: `${nomeBot}`,
},
},
}, { quoted: loc });
}

//BAN GRUPO & BOT OFF
if(isBotoff && !isCreator) return
if(isGroup && So_Adm && !isGroupAdmins) return
if(isGroup && isBanchat && !isCreator) return

//✪════〔 🧊 APAGA IMAGEM 🧊 〕════✪//
if(isDeLimg && !isGroupAdmins && isBotGroupAdmins && type == 'imageMessage') {
if(IS_DELETE) {
setTimeout(async() => {
await sock.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
  }, 1000); }}
  
const nmrdn = (setting.numero || "")
  .replace(/[()+\-\/\s]/g, "") + "@s.whatsapp.net";  
  
if (command === 'base64') {
const sub = args[0]?.toLowerCase(); 
const texto = args.slice(1).join(' ');   

if (!sub || !texto || !['enc', 'dec'].includes(sub)) {
return await sock.sendMessage(from, { text: `🕌 Use: ${prefix}base64 enc/dec <texto>` }); }

  try {
let resultado;

if (sub === 'enc') {
resultado = Buffer.from(texto, 'utf-8').toString('base64');
  } else {
 try {
resultado = Buffer.from(texto, 'base64').toString('utf-8');
   } catch {
return await sock.sendMessage(from, { text: '⚡ Este texto não é um Base64 válido.' }); }}

return await sock.sendMessage(from, {
text: `🔐 *BASE64 ${sub.toUpperCase()}*\n\n${resultado}` });
  } catch (err) {
return await sock.sendMessage(from, { text: '🗼 Falha ao processar base64.' }); }}

const repl = (texto) => {
sock.sendMessage(from, { text: texto, contextInfo: {
forwardingScore: 100000, isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: "120363298695038212@newsletter", newsletterName: '𓂀 𝖘𝖆𝖐𝖚𝖗𝖆-𝖇𝖔𝖙 𓂀'}}, 
mentions: [sender] }); }

const reply = (texto) => {
sock.sendMessage(from, {
text: texto, contextInfo: { isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: setting.channelnk || '', 
newsletterName: nomeBot || '',  
serverMessageId: '' }}}); };

/* ANTIPV3 - Bloqueia PV e responde com xingamentos aleatórios */
if (!isGroup && !info.key.fromMe && isAntiPv3) {
 const respostas = [
 "Vai se catar! 😤",
 "Não enche o saco no privado! 😡",
 "Vai procurar o que fazer, seu inútil! 🤬",
 "Cala a boca aí! 🕳️",
 "Fica longe do meu PV, seu chato! 😒"
    ];
const resposta = respostas[Math.floor(Math.random() * respostas.length)];
enviar(resposta); return; }

const vip = "✅ Não" 

const mencionarIMG = async(teks = '', FileN, thisQuoted = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy) { 
for(zn of vz.split(' ')) {
if(zn.includes('@')) memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net');
}
}
await sock.sendMessage(from, {image: {url: FileN}, caption: teks.trim(), mentions: memberr}, {quoted: thisQuoted}).catch(async(error) => {
await selo.sendMessage(from, {text: 'Ocorreu um erro ao encaminhar a imagem e o texto pré-definidos na função.'}, {quoted: info});
});
}

const replys = async (texto) => {
if (!texto) texto = " ";

const imageUrl = "https://i.ibb.co/LhJHD6P1/img-1774792027901.jpg"; 

const axios = require("axios");
const thumb = await axios
 .get(imageUrl, { responseType: "arraybuffer" })
 .then((res) => Buffer.from(res.data, "binary"));

const mimetype =
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

return sock.sendMessage(
 from, { document: fs.readFileSync("./INFON/LOGOS/selo.xlsx"), // 📄 SELO
mimetype: mimetype,
fileName: `${nomeBot}`,
fileLength: 10737418240,
caption: texto,
footer: `Usuário: ${pushname}`,

contextInfo: {
isForwarded: true,
forwardingScore: 1,

forwardedNewsletterMessageInfo: {
newsletterJid: `${setting.channelnk}`,
newsletterName: `${nomeBot}`,
serverMessageId: "", },

externalAdReply: { title: `${nomeBot}`,
body: `ɴᴏᴍᴇ: ${pushname}`,
previewType: "PHOTO",

thumbnail: thumb, sourceUrl: "https://tokito-apis.site", }, }, },
 { quoted: info }); };
 
const botNumber = sock.user.id.split(':')[0];

const path = './SRC/notas.json'
if (!fs.existsSync('./SRC')) {
fs.mkdirSync('./SRC') }
if (!fs.existsSync(path)) {
fs.writeFileSync(path, JSON.stringify({})) }

// Respuesta
const respuesta = {

  registro: `
╔════◇◆◇════╗
💬 ❝ Primeiro você precisa se registrar 🤔 É fácil! 😄 ❞
💬 ❝ Digite: *${prefix}reg* ❞
╚════◇◆◇════╝
`,

  yaregistro: `
╔══════◇◆◇══════╗
💬 ❝ Desculpe, você já está registrado 🗒 ❞
╚══════◇◆◇══════╝
`,
}
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss');
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'Boa noite'
var tempo2 = '𝙱𝙾𝙰 𝙽𝙾𝙸𝚃𝙴'
var tempo3 = '𝐁𝐎𝐀 𝐍𝐎𝐈𝐓𝐄'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'Bom dia'
var tempo2 = '𝙱𝙾𝙼 𝙳𝙸𝙰'
var tempo3 = '𝐁𝐎𝐌 𝐃𝐈𝐀'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'Boa tarde'
var tempo2 = '𝙱𝙾𝙰 𝚃𝙰𝚁𝙳𝙴'
var tempo3 = '𝐁𝐎𝐀 𝐓𝐀𝐓𝐃𝐄'
} if(time2 > "18:00:00"){
var tempo = 'Boa noite'
var tempo2 = '𝙱𝙾𝙰 𝙽𝙾𝙸𝚃𝙴'
var tempo3 = '𝐁𝐎𝐀 𝐍𝐎𝐈𝐓𝐄'
}
//============(VERIFICADOS)============\\
if (nescessario.verificado) {
var selo = { "key": { "participant": "0@s.whatsapp.net", "remoteJid": from, "fromMe": false }, "message": { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;${pushname};;;\nFN:${pushname}\nitem1.TEL;waid=13135550002:13135550002\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": { "forwardingScore": 1, "isForwarded": true }}}}
} else {
var selo = info
}

const getallcases = () => {
  findindex = fs.readFileSync("index.js").toString().match(/case\s+'(.+?)'/g)
  cstt = []
  for(i of findindex) {
    cstt.push(i.split(`'`)[1])
  }
  return cstt
}
const allCases = getallcases();
const getSimilarity = require(`./SRC/similaridade.js`)
const rmLetras = (txt) => {
  return txt.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}
const similarityCmd = (txt) => {
  getsmlrt = getSimilarity(allCases, txt)
  if(rmLetras(getsmlrt.nome).includes(`nao encontrado`)) return [{comando: getsmlrt.nome, porcentagem: getsmlrt.porcentagem}]
  return [{comando: prefix+getsmlrt.nome, porcentagem: Number(getsmlrt.porcentagem).toFixed(1)}]
}

//————| ⚙️ início das cases ⚙️ |————//
// ᴄᴏᴍᴀɴᴅᴏs ᴄᴏᴍ ᴘʀᴇғɪxᴏ ᴇ sᴇᴍ ᴘʀᴇғɪxᴏ
switch(command) {
//Começo dos comandos com prefix // 

//         /\/\
//     < (° v °) >
//       /|   |\
//       V---V

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'bemvindo1':
case 'welcome'://ʙᴏʟᴀᴅɪɴʜᴏ 
if (!isGroup) return enviar(mess.respondGroup());
if (!isGroupAdmins && !isCreator) return enviar(mess.espondAdm());
if (!isBotGroupAdmins) return enviar(mess.respondBot());
if (isWelkom) {
dataGp[0].wellcome[0].bemvindo1 = false;
setGp(dataGp);
enviar('*𝙾 𝚁𝙴𝙲𝚄𝚁𝚂𝙾 𝙵𝙾𝙸 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾 𝙲𝙾𝙼 𝚂𝚄𝙲𝙴𝚂𝚂𝙾 𝙽𝙾 𝙶𝚁𝚄𝙿𝙾 🙇🏻‍♂️*');
} else {
dataGp[0].wellcome[0].bemvindo1 = true;
setGp(dataGp);
enviar('*𝙾 𝚁𝙴𝙲𝚄𝚁𝚂𝙾 𝙱𝙴𝙼𝚅𝙸𝙽𝙳𝙾 𝙵𝙾𝙸 𝙰𝚃𝙸𝚅𝙾 𝙲𝙾𝙼 𝚂𝚄𝙲𝙴𝚂𝚂𝙾 🙇🏻‍♂️*');
}
break;

case 'apresentar':
case 'apr':
if (!isGroup) return enviar(mess.respondGroup());
if(!isGroupAdmins) return enviar(mess.respondAdm())
if(!isBotGroupAdmins) return enviar(mess.respondBot())
inff = `Bem vindo(a) ao grupo : ${groupName}
👾 •𝑬𝑵𝑻𝑹𝑶𝑼 𝑺𝑬 𝑨𝑷𝑹𝑬𝑺𝑬𝑵𝑻𝑨•
📸 •F𝜣T𝜣
👻 •N𝜣ME
📌 •CID∆DE
🗓️ •ID∆DE
⚠️ •LEI∆ ∆S REGR∆S D𝜣 GRUP𝜣
*APROVEITE O GRUPO!*`
sock.sendMessage(from, {text: inff}, {quoted: loc})
break

case 'prefixo': case 'setprefix':
if(!isGroup) return enviar(mess.respondGroup())
if(!isCreator) return enviar(mess.respondDono())
if(!q) return enviar(`Digite o exemplo ${command} !`)
if(args.length < 1) return
if(!isCreator && !info.key.fromMe) return enviar(mess.respondDono())
setting.prefix = q.trim()
fs.writeFileSync('./arquivo/settings/setting.json', JSON.stringify(setting, null, 2))
enviar(`*𝙾𝙺𝙰𝚈 𝙼𝙴𝚂𝚃𝚁𝙴, 𝙰𝙶𝙾𝚁𝙰 𝙼𝙴𝚄 𝙿𝚁𝙴𝙵𝙸𝚇𝙾 𝙴『 ${setting.prefix} 』🙇🏻‍♂️*`)
break

case 'antipalavrão':
case 'antipalavrao':  
case 'antipalavra'://ʙᴏʟᴀᴅɪɴʜᴏ    
if(!isGroup) return enviar(mess.respondGroup())
if(!isGroupAdmins) return enviar(mess.respondAdm())
if(!isBotGroupAdmins) return enviar(mess.respondBot())
if(args.length < 1) return enviar(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isPalavrao) return enviar('O recurso de anti palavrões hardcore já se encontra ativo atualmente no grupo senhor(a)!')
dataGp[0].antipalavrao.active = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de anti palavras hardcore neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isPalavrao) return enviar('O recurso de anti palavrões hardcore já se encontra desativado atualmente no grupo senhor(a)!')
dataGp[0].antipalavrao.active = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de anti palavra harcore neste grupo.️')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'addpalavra': 
if(!isGroup) return enviar(mess.respondGroup())
if (!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
if(!isPalavrao) return enviar('Anti palavrão desativado!')
if(args.length < 1) return enviar(`Use assim: ${prefix + command} [palavrão]. Um exemplo desmontrativo de como usar aqui: ${prefix + command} puta`)
let texto = args.join(' ')
.toLowerCase()
.normalize('NFD')
.replace(/[\u0300-\u036f]/g, "")
if(isPalavras.includes(texto)) return enviar('A palavra já foi adicionada na lista de proibições. do anti palavra, verifique...')
dataGp[0].antipalavrao.palavras.push(texto)
setGp(dataGp)
enviar(`Palavrão adicionado com sucesso! Consulte a lista, usando: ${prefix+command}`)
break

case 'reflexao':
sock.sendMessage(from, {
video: { url: 'https://files.catbox.moe/7koxrj.mp4' },
caption: `💘⋆˚࿔ 𝑹𝑬𝑭𝑳𝑬𝑿𝑨̃𝑶 𝑷𝑨𝑹𝑨 𝑨 𝑽𝑰𝑫𝑨 𝜗𝜚˚⋆💘`,
}, { quoted: loc });
break

case 'meses':
case 'data': {
if (!isGroup) return enviar(mess.respondGroup());
const agora = new Date();
const dias = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const diaSemana = dias[agora.getDay()];
const dia = agora.getDate();
const mes = meses[agora.getMonth()];
const ano = agora.getFullYear();
const hora = agora.getHours().toString().padStart(2,'0');
const minuto = agora.getMinutes().toString().padStart(2,'0');
const texto = `\n📆 *Calendário*\n🗓️ ${diaSemana}, ${dia} de ${mes} de ${ano}\n⏰ Agora são ${hora}:${minuto}\n😄 ${tempo} Sr.(a) ${pushname}\n`;
const imagens = [
'https://files.catbox.moe/utlxw3.jpg',
'https://files.catbox.moe/d9zhlb.jpg',
'https://files.catbox.moe/53xs8u.jpg',
'https://files.catbox.moe/tt1qn4.jpg',
'https://files.catbox.moe/g9ptj8.jpg',
'https://files.catbox.moe/c9is5g.jpg',
'https://files.catbox.moe/q2riis.jpg',
'https://files.catbox.moe/uirpnt.jpg',
'https://files.catbox.moe/zp6xdl.jpg',
'https://files.catbox.moe/9fap6p.jpg',
'https://files.catbox.moe/hqto09.jpg',
'https://files.catbox.moe/tg9rwp.jpg'
];
const imageLink = imagens[agora.getMonth()];
await sock.sendMessage(from, {
image: { url: imageLink },
caption: texto, 
contextInfo: {
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: `${setting.channelnk}`,
newsletterName: `${nomeBot}` }}
}, { quoted: selo }); }
break

case 'calendario':
case 'cal': {
if (!isGroup) return enviar(mess.respondGroup());
const agora = new Date()
const diaAtual = agora.getDate()
const mes = agora.getMonth()
const ano = agora.getFullYear()
const meses = [
    'JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL',
    'MAIO', 'JUNHO', 'JULHO', 'AGOSTO',
    'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'
]
const totalDias = new Date(ano, mes + 1, 0).getDate()
let texto = `📅 *${meses[mes]} ⭐ ${ano}*\n`
texto += `SEG TER QUA QUI SEX SAB DOM\n`
const primeiroDia = new Date(ano, mes, 1).getDay()
const inicio = primeiroDia === 0 ? 6 : primeiroDia - 1
texto += '    '.repeat(inicio)
for (let i = 1; i <= totalDias; i++) {
let dia = i.toString().padStart(2, '0')
if (i === diaAtual) dia = `[${dia}]📌`
texto += dia + ' '
if ((i + inicio) % 7 === 0) texto += '\n' }
texto = texto.trim()
const imageLink = 'https://files.catbox.moe/bcxx09.jpg'
await sock.sendMessage(from, {
image: { url: imageLink },
caption: texto, 
contextInfo: {
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: `${setting.channelnk}`,
newsletterName: `${nomeBot}` }}
}, { quoted: selo }); }
break

case 'verificado-global':
case 'verificado':
try {
if(!isCreator) return reply(mess.respondDono())
if (!nescessario.verificado) {
nescessario.verificado = true;
fs.writeFileSync(`./SRC/settings/nescessario.json`, JSON.stringify(nescessario, null, 2) + "\n");
reply(`*𝙾 𝚁𝙴𝙲𝚄𝚁𝚂𝙾 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾 𝙶𝙻𝙾𝙱𝙰𝙻 𝙵𝙾𝙸 𝙰𝚃𝙸𝚅𝙾 𝙲𝙾𝙼 𝚂𝚄𝙲𝙴𝚂𝚂𝙾 🙇🏻‍♂️*`)
} else if (nescessario.verificado) {
nescessario.verificado = false
fs.writeFileSync(`./SRC/settings/nescessario.json`, JSON.stringify(nescessario, null, 2) + "\n");
reply(`*𝙾 𝚁𝙴𝙲𝚄𝚁𝚂𝙾 𝙵𝙾𝙸 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾 𝙲𝙾𝙼 𝚂𝚄𝙲𝙴𝚂𝚂𝙾🙇🏻‍♂️*`) }
} catch (e) {
console.error(e);
reply("Houve um erro no comando!"); }
break;

case 'play':
case 'playaudio':
case 'ytmp3':
case 'playmp3': {
 try {
if (!args[0]) 
return reply("❌ Digite o nome da música!\nEx: play Slash inferno");
const axios = require('axios'); 
const texto = args.join(" ");
const apiUrl = `https://systemzone.store/api/play?text=${encodeURIComponent(texto)}`;
await reply("⏳ Processando sua música... Aguarde um momento.");
// 🔎 Busca dados da API
const { data: json } = await axios.get(apiUrl);
if (!json.status || !json.download_url) {
return reply("❌ Música não encontrada. Tente outro nome."); }
// ========================
// 1️⃣ Thumbnail
// ========================
if (json.thumbnail) {
await sock.sendMessage(from, {
image: { url: json.thumbnail },
caption: `🎵 *${json.title || 'Sem título'}*\n` +
`⏱️ Duração: ${json.duration || '—'}\n` +
`🔗 ${json.youtube_url || ''}\n\n` +
`👑 Parceiro Oficial: boladin`,
contextInfo: {
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: `${setting.channelnk}`,
newsletterName: `${nomeBot}` }}
}, { quoted: loc }); }
// ========================
// 2️⃣ Baixa o áudio
// ========================
const audioRes = await axios.get(json.download_url, {
responseType: 'arraybuffer' });
const audioBuffer = audioRes.data;
// ========================
// 3️⃣ Envia o áudio
// ========================
await sock.sendMessage(from, {
audio: audioBuffer,
mimetype: 'audio/mpeg',
fileName: `${json.title || "audio"}.mp3`,
ptt: false,
contextInfo: {
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: `${setting.channelnk}`,
newsletterName: `${nomeBot}` }}
}, { quoted: loc });
 } catch (e) {
console.error("Erro no comando play:", e);
reply("❌ Ocorreu um erro ao processar a música. Tente novamente."); }
break; }

case 'gerarnick': {
if (!args[0]) {
return sock.sendMessage(info.key.remoteJid, {
text: '❌ Digite um nome.\nEx: gerarnick Andrei'
}, { quoted: loc }); }
const fontes = [
{
a:'ᴀ', b:'ʙ', c:'ᴄ', d:'ᴅ', e:'ᴇ', f:'ғ', g:'ɢ', h:'ʜ',
i:'ɪ', j:'ᴊ', k:'ᴋ', l:'ʟ', m:'ᴍ', n:'ɴ', o:'ᴏ',
p:'ᴘ', q:'ǫ', r:'ʀ', s:'s', t:'ᴛ', u:'ᴜ', v:'ᴠ',
w:'ᴡ', x:'x', y:'ʏ', z:'ᴢ'
},
{
a:'ⓐ', b:'ⓑ', c:'ⓒ', d:'ⓓ', e:'ⓔ', f:'ⓕ', g:'ⓖ', h:'ⓗ',
i:'ⓘ', j:'ⓙ', k:'ⓚ', l:'ⓛ', m:'ⓜ', n:'ⓝ', o:'ⓞ',
p:'ⓟ', q:'ⓠ', r:'ⓡ', s:'ⓢ', t:'ⓣ', u:'ⓤ', v:'ⓥ',
w:'ⓦ', x:'ⓧ', y:'ⓨ', z:'ⓩ'
},
{
a:'🄰', b:'🄱', c:'🄲', d:'🄳', e:'🄴', f:'🄵', g:'🄶', h:'🄷',
i:'🄸', j:'🄹', k:'🄺', l:'🄻', m:'🄼', n:'🄽', o:'🄾',
p:'🄿', q:'🅀', r:'🅁', s:'🅂', t:'🅃', u:'🅄', v:'🅅',
w:'🅆', x:'🅇', y:'🅈', z:'🅉'
},
{
a:'ａ', b:'ｂ', c:'ｃ', d:'ｄ', e:'ｅ', f:'ｆ', g:'ｇ', h:'ｈ',
i:'ｉ', j:'ｊ', k:'ｋ', l:'ｌ', m:'ｍ', n:'ｎ', o:'ｏ',
p:'ｐ', q:'ｑ', r:'ｒ', s:'ｓ', t:'ｔ', u:'ｕ', v:'ｖ',
w:'ｗ', x:'ｘ', y:'ｙ', z:'ｚ'
}
];

const simbolos = ['꧁','꧂','『','』','★','✦','⚡','☠','♛','々','ツ'];
const random = arr => arr[Math.floor(Math.random() * arr.length)];
const fonte = random(fontes);
const nome = args.join("").toLowerCase();
const base = nome.split('').map(l => {
return fonte[l] || l;
}).join('');
const nick = `${random(simbolos)}${base}${random(simbolos)}`;
await sock.sendMessage(info.key.remoteJid, {
text: `🎮 Nick gerado:\n👉 ${nick}`
}, { quoted: loc }); }
break;

case 'amador':
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { amador } = require("./PN_18/AmadorVideo/Amador.js")
var PN_18 = amador[Math.floor(Math.random()*amador.length)]
sock.sendMessage(sender, {video: {url: PN_18}, caption: `*🔞Vídeo Amador🔞*\n*Bot: ${nomeBot}*\n*Dono ${NickDono}*`}, {quoted: loc})
break

case 'f': {
const enviar = (texto) => sock.sendMessage(from, { text: texto }, { quoted: loc });
const isQuotedImageOrVideo =
info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage ||
info.message?.imageMessage ||
info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage ||
info.message?.videoMessage;
if (!isQuotedImageOrVideo) {
return enviar('Marque uma imagem ou um video de 10 segundos!'); }
enviar('Aguarde Convertendo figurinha');
(async function () {
var legenda = q? q?.split("/")[0] : `💌 Sᴛɪᴄᴋᴇʀs ᴅᴇ Wʜᴀᴛsᴀᴘᴘ 💌 `;
var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `
🐙• sᴏʟɪᴄɪᴛᴀᴅᴏ: ${pushname}
🏰• ᴄʀɪᴀᴅᴀ ᴘᴏʀ: ${nomeBot}
👥• ɢʀᴜᴘᴏ: ${groupName}`;
const RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
const boij =
RSM?.imageMessage ||
info.message?.imageMessage ||
RSM?.viewOnceMessageV2?.message?.imageMessage ||
info.message?.viewOnceMessageV2?.message?.imageMessage ||
info.message?.viewOnceMessage?.message?.imageMessage ||
RSM?.viewOnceMessage?.message?.imageMessage;
const boij2 =
RSM?.videoMessage ||
info.message?.videoMessage ||
RSM?.viewOnceMessageV2?.message?.videoMessage ||
info.message?.viewOnceMessageV2?.message?.videoMessage ||
info.message?.viewOnceMessage?.message?.videoMessage ||
RSM?.viewOnceMessage?.message?.videoMessage;
if (boij || (boij2 && boij2?.seconds < 11)) {
const mediaType = boij ? 'image' : 'video';
const mediaObj = boij || boij2;
const rane = getRandom('.' + await getExtension(mediaObj.mimetype));
const buff = await getFileBuffer(mediaObj, mediaType);
fs.writeFileSync(rane, buff);
const rano = getRandom('.webp');
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(rane);
if (err) {
console.error(err);
return enviar('Erro ao converter a figurinha.'); }
let json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
};
let exifAttr = Buffer.from([
0x49,0x49,0x2A,0x00,0x08,0x00,0x00,0x00,
0x01,0x00,0x41,0x57,0x07,0x00,0x00,0x00,
0x00,0x00,0x16,0x00,0x00,0x00
]);
let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
let exif = Buffer.concat([exifAttr, jsonBuff]);
exif.writeUIntLE(jsonBuff.length, 14, 4);
let nomemeta = "temp.exif";
fs.writeFileSync(`./${nomemeta}`, exif);
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
sock.sendMessage(from, {
sticker: fs.readFileSync(rano),
contextInfo: {
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: setting.channelnk,
newsletterName: nomeBot }}
}, { quoted: loc });
fs.unlinkSync(nomemeta);
fs.unlinkSync(rano); }); });
} else {
enviar('Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos'); }
})().catch(e => {
console.log(e);
enviar("Hmm deu erro");
try {
if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
if (fs.existsSync(rano)) fs.unlinkSync(rano);
if (fs.existsSync(media)) fs.unlinkSync(media);
} catch {} });
} break;

case 'antireagir'://ʙᴏʟᴀᴅɪɴʜᴏ 
if(!isGroup) return enviar(mess.respondGroup())
if (!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
if(Number(args[0]) === 1){
if(isAntireacão) return enviar('🤺 A função de ANTI-REAÇÃO já está ativado');
dataGp[0].reacão = true
setGp(dataGp)
enviar('⚡Ativou com sucesso a função de ANTI-REAÇÃO no grupo')
} else if(Number(args[0]) === 0){
if(!isAntireacão) return enviar('🌀 A função de ANTI-REAÇÃO já está desativada')
dataGp[0].reação = false
setGp(dataGp)
enviar('🗝️ Desativou com sucesso neste grupo a função de antireacão')
} else {
enviar('🕌 1 para ativar 0 para desativar')
}
break

case 'reg':
case 'registrarme':
case 'registrame':
case 'rg':
if (isReg) return enviar(respuesta.yaregistro)
const nombre = pushname || 'Usuário'
await AddReg(sender, nombre)
sock.sendMessage(from, {
image: { url: jpgBot },
caption: `★━━━━★★━━━━★★━━━━★
         *༻  𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎  ༺*
🎉 Registro concluído *${nombre}* 🥳
🪙 Você recebeu *₹50 rúpias* 🪙 como presente de boas-vindas.
◆━━━━━━━▣✦▣━━━━━━━━◆`,
contextInfo: {
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: `${setting.channelnk}`,
newsletterName: `${nomeBot}` }}
}, { quoted: loc })
break
    
case 'anotar': {
if (!isGroup) return;
if (!isReg) return enviar(respuesta.registro);
  if (!q) return enviar('Digite algo para anotar.')
const fs = require('fs')
let db = fs.existsSync(path) ? JSON.parse(fs.readFileSync(path)) : []
if (!Array.isArray(db)) db = []
db.push({
nome: pushname || 'Usuário',
anotacao: q,
data: new Date().toLocaleString('pt-BR') })
fs.writeFileSync(path, JSON.stringify(db, null, 2))
enviar('✍️ Anotado com sucesso!')}
break

case 'apagarnotas': {
const fs = require('fs')
fs.writeFileSync(path, JSON.stringify([], null, 2))
enviar('🗑️ Todas as notas foram apagadas!') }
break

case 'ticket': {
if (!isGroup) return reply('❗ Este comando só pode ser usado em grupos.')
reagir(from, "📩")
const metadataTicket = await sock.groupMetadata(from)
const adminsTicket = metadataTicket.participants
.filter(v => v.admin !== null)
.map(v => v.id)
if (!q) {
return reply(`❕ Digite o motivo do ticket.\nEx: ${prefix}ticket Preciso de ajuda com comandos`) }
if (q.length > 100) {
return reply('❗ O texto é longo demais. Use até 100 caracteres.') }
const nomeGrupoTicket = metadataTicket.subject
const nomeUserTicket = pushname || 'Usuário'
let cargo = `${isCargo}`
let msg = `🎫 *NOVO TICKET RECEBIDO*\n\n`
msg += `👤 *Usuário:* ${nomeUserTicket}\n`
msg += `👥 *Grupo:* ${nomeGrupoTicket}\n`
msg += `🔗 *Cargo:* ${cargo}\n`
msg += `💬 *Mensagem:* ${q}`
for (let adm of adminsTicket) {
if (adm === numberBot) continue
await sock.sendMessage(adm, { text: msg }) }
reply(`✅ Ticket enviado com sucesso para os administradores, ${pushname}!`) }
break

case 'menu':
await reagir(from, "💾");
if(!isAudioMenu) { 
await sendAudioMenu(from); }
const getFotos = await getBuffer(`${jpgBot}`);
await sock.sendMessage(from, {image: getFotos, caption: menu(prefix, isCargo, nomeBot, hora, sender, pushname),
contextInfo: {forwardingScore: 1,
isForwarded: true, 
forwardedNewsletterMessageInfo: {newsletterJid: `${setting.channelnk}`, newsletterName: `${nomeBot}` }, },
}, { quoted: loc });
break

case 'menudono': {
await reagir(from, "💾");
if(!isAudioMenu) { 
await sendAudioMenu(from); }
const getFotos = await getBuffer(`${jpgBot}`);
await sock.sendMessage(from, {image: getFotos, caption: menudono(prefix, isCargo, nomeBot, hora, sender, pushname),
contextInfo: {forwardingScore: 1,
isForwarded: true, 
forwardedNewsletterMessageInfo: {newsletterJid: `${setting.channelnk}`, newsletterName: `${nomeBot}` }, },
}, { quoted: loc });
 }
break

case 'menuadm': {
await reagir(from, "💾");
if(!isAudioMenu) { 
await sendAudioMenu(from); }
const getFotos = await getBuffer(`${jpgBot}`);
await sock.sendMessage(from, {image: getFotos, caption: menuadm(prefix, isCargo, nomeBot, hora, sender, pushname),
contextInfo: {forwardingScore: 1,
isForwarded: true, 
forwardedNewsletterMessageInfo: {newsletterJid: `${setting.channelnk}`, newsletterName: `${nomeBot}` }, },
}, { quoted: loc });
 }
break

case 'brincadeiras': {
await reagir(from, "💾");
if(!isAudioMenu) { 
await sendAudioMenu(from); }
const getFotos = await getBuffer(`${jpgBot}`);
await sock.sendMessage(from, {image: getFotos, caption: brincadeiras(prefix, isCargo, nomeBot, hora, sender, pushname),
contextInfo: {forwardingScore: 1,
isForwarded: true, 
forwardedNewsletterMessageInfo: {newsletterJid: `${setting.channelnk}`, newsletterName: `${nomeBot}` }, },
}, { quoted: loc });
 }
break

case 'abraço':
if (!isGroup) return enviar(mess.respondGroup())
if (!isBotGroupAdmins) return enviar(mess.respondBot())
if (!isModobn) return reply(mess.respondBrinc(prefix))
let pess = obterMencionar(info);
if(!pess) return reply('Marque o alvo que você quer dar um abraço, a mensagem ou o @.')
await sock.sendMessage(from, {video: {url:`https://files.catbox.moe/ecw188.mp4`}, gifPlayback: true, caption: `Você acabou de dar um abraço fofo no(a) *@${pess.split('@')[0]}*`, mentions: [pess]}, {quoted: loc})
break

case 'gostoso':
if (!isGroup) return enviar(mess.respondGroup())
if (!isBotGroupAdmins) return enviar(mess.respondBot())
if (!isModobn) return reply(mess.respondBrinc(prefix))
let pes = obterMencionar(info) || sender;
await sock.sendMessage(from, {text:`Pesquisando a sua ficha de gostoso @${pes.split("@")[0]} aguarde...`, mentions: [pes]}, {quoted: loc})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await sock.sendMessage(from, {image: {url: `https://files.catbox.moe/xkw2bd.jpg`}, caption: `O quanto *@${pes.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`, gifPlayback: true, mentions: [pes]}, {quoted: loc})
}, 7000)
break 

case 'gostosa':
if (!isGroup) return enviar(mess.respondGroup())
if (!isBotGroupAdmins) return enviar(mess.respondBot())
if (!isModobn) return reply(mess.respondBrinc(prefix))
let fox = obterMencionar(info) || sender;
await sock.sendMessage(from, {text:`Pesquisando a sua ficha de gostosa @${fox.split("@")[0]} aguarde...`, mentions: [fox]}, {quoted: loc})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await sock.sendMessage(from, {image: {url: imggostosa}, caption: `O quanto *@${fox.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`, gifPlayback: true, mentions: [fox]}, {quoted: loc})
}, 7000)
break

case 'bebado':
if (!isGroup) return enviar(mess.respondGroup())
if (!isBotGroupAdmins) return enviar(mess.respondBot())
if (!isModobn) return reply(mess.respondBrinc(prefix))
let just = obterMencionar(info) || sender;
await sock.sendMessage(from, {text:`Pesquisando a ficha de bebado(a) @${just.split("@")[0]}, aguarde...`, mentions: [just]}, {quoted: loc})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await sock.sendMessage(from, {image: {url: imgbebado}, caption: `O quanto *@${just.split("@")[0]}* pode ser uma pessoa bêbada?\n• A porcentagem de chance é *${random}%*`, mentions: [just]}, {quoted: loc})
}, 7000)
break

case 'lindo':
if (!isGroup) return enviar(mess.respondGroup())
if (!isBotGroupAdmins) return enviar(mess.respondBot())
if (!isModobn) return reply(mess.respondBrinc(prefix))
let mx = obterMencionar(info) || sender;
await sock.sendMessage(from, {text:`Pesquisando a ficha de lindo @${mx.split("@")[0]}, aguarde...`, mentions: [mx]}, {quoted: loc})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await sock.sendMessage(from, {image: {url: `https://files.catbox.moe/2r420g.jpg`}, caption: `O quanto *@${mx.split("@")[0]}* pode ser lindo?\n• A porcentagem de chance é *${random}%*`, mentions: [mx]}, {quoted: loc})
}, 7000)
break

case 'linda':
if (!isGroup) return enviar(mess.respondGroup())
if (!isBotGroupAdmins) return enviar(mess.respondBot())
if (!isModobn) return reply(mess.respondBrinc(prefix))
let seul = obterMencionar(info) || sender;
await sock.sendMessage(from, {text:`Pesquisando a ficha de linda @${seul.split("@")[0]}, aguarde...`, mentions: [seul]}, {quoted: loc})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await sock.sendMessage(from, {image: {url: `https://files.catbox.moe/yb6hpe.jpg`}, caption: `O quanto *@${seul.split("@")[0]}* pode ser linda?\n• A porcentagem de chance é *${random}%*`, mentions: [seul]}, {quoted: loc})
}, 7000)
break

case 'cagar':
if (!isGroup) return enviar(mess.respondGroup())
if (!isBotGroupAdmins) return enviar(mess.respondBot())
if (!isModobn) return reply(mess.respondBrinc(prefix))
let osanu = obterMencionar(info);
if(!osanu) return reply('Marque a pessoa que você quer botar pra cagar, a mensagem ou o @');
await sock.sendMessage(from, {image: {url: `https://files.catbox.moe/qer0fi.jpg`}, 
caption: `CARALHOOOOO *@${osanu.split('@')[0]}* FAMOSO CAGA TRONCO KAKAKAKAK??? 🤯😳` , mentions: [osanu]}, {quoted: loc})
break

case 'cu':
if (!isGroup) return enviar(mess.respondGroup())
if (!isBotGroupAdmins) return enviar(mess.respondBot())
if (!isModobn) return reply(mess.respondBrinc(prefix))
let ofsc = obterMencionar(info);
if(!ofsc) return reply('Marque a pessoa que você quer botar pra cagar, a mensagem ou o @');
await sock.sendMessage(from, {text:`Pesquisando quantos cm de profundidade tem seu bozo @${ofsc.split("@")[0]}, aguarde...`, mentions: [ofsc]}, {quoted: loc})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await sock.sendMessage(from, {image: {url: `https://files.catbox.moe/x8k6en.jpg`}, caption: `Quantos cm o(a) *@${ofsc.split("@")[0]}* 
tem no bozo ?\n• A chance é de *${random}cm* 😳`, mentions: [ofsc]}, {quoted: loc})
}, 7000)
break

case 'shippo': {
if (!isGroup) return enviar(mess.respondGroup())
if (!isBotGroupAdmins) return enviar(mess.respondBot())
if (!isModobn) return reply(mess.respondBrinc(prefix))
let ofc = obterMencionar(info) || sender;
if (!ofc) return reply('💖 *Marque alguém para descobrir se formam um casal perfeito!*')
const user1 = sender.split('@')[0]
const user2 = ofc.split('@')[0]
const porcentagem = Math.floor(Math.random() * 101)
const frases = [
'💔 Não rola, melhor só amizade...',
'🤝 Combinação ok, mas ainda falta química!',
'🔥 Alta tensão no ar! Pode dar namoro!',
'💍 Perfeitos! Já pode casar hoje!',
'💘 Um amor escrito nas estrelas!',
'🌹 O cupido acertou em cheio!'
]
let frase
if (porcentagem < 30) frase = frases[0]
else if (porcentagem < 50) frase = frases[1]
else if (porcentagem < 70) frase = frases[2]
else if (porcentagem < 85) frase = frases[3]
else if (porcentagem < 100) frase = frases[4]
else frase = frases[5]
const mensagem = `
╭━💞 *SHIPÔMETRO DO AMOR* 💞━╮
┃ 👤 @${user1}
┃ 💘 @${user2}
┃ 
┃ 💌 Compatibilidade: *${porcentagem}%*
┃ 💭 ${frase}
╰━━━━━━━━━━━━━━━━━━━━━━━╯`.trim()
mentions(mensagem, [sender, ofc], true)
break
}

case 'morder':
if (!isGroup) return enviar(mess.respondGroup())
if (!isBotGroupAdmins) return enviar(mess.respondBot())
if (!isModobn) return reply(mess.respondBrinc(prefix))
let sexus = obterMencionar(info)
if(!sexus) return reply('Marque o alvo que você quer dar uma mordida, a mensagem ou o @.')
await sock.sendMessage(from, {video: {url:`https://telegra.ph/file/75e4c0273be625a2363ce.mp4`}, gifPlayback: true, caption: `Você acabou de dar uma mordida no(a) *@${sexus.split('@')[0]}*`, mentions: [sexus]}, {quoted: loc})
break

case 'sentar':
if (!isGroup) return enviar(mess.respondGroup())
if (!isBotGroupAdmins) return enviar(mess.respondBot())
if (!isModobn) return reply(mess.respondBrinc(prefix))
let sexco = obterMencionar(info)
if(!sexco) return reply('Marque o alvo que você quer dar uma sentadinha, a mensagem ou o @.')
await sock.sendMessage(from, {video: {url:`https://telegra.ph/file/d695e05443043ff9a254d.mp4`}, gifPlayback: true, caption: `Você acabou de dar uma sentadinha no(a) *@${sexco.split('@')[0]}*`, mentions: [sexco]}, {quoted: loc})
break

case 'pgbunda':
if (!isGroup) return enviar(mess.respondGroup())
if (!isBotGroupAdmins) return enviar(mess.respondBot())
if (!isModobn) return reply(mess.respondBrinc(prefix))
let anus = obterMencionar(info)
if(!anus) return reply('❕ Marque o alvo que deseja ser acariciado, a mensagem ou o @.');
if (JSON.stringify(phoneNumber).indexOf(anus) >= 0) 
return reply(`🚫 No meu dono não! Mas posso fuder você 😈`);
await sock.sendMessage(from, {
video: { url: "https://telegra.ph/file/e62de1e6863c59d284b2e.mp4" },
gifPlayback: true,
caption: `Você acabou de pegar na bunda do(a) *@${anus.split('@')[0]}*`,
mentions: [anus]
}, { quoted: loc });
break;

case 'pgpeito':
if (!isGroup) return enviar(mess.respondGroup())
if (!isBotGroupAdmins) return enviar(mess.respondBot())
if (!isModobn) return reply(mess.respondBrinc(prefix))
let oco = obterMencionar(info)
if(!oco) return reply('❕ Marque o alvo que você quer pegar nos peitinhos, a mensagem ou o @.');
let peitosVideos = [
"https://files.catbox.moe/90177x.mp4", 
"https://files.catbox.moe/odcgp4.mp4"
];
let videoPeito = peitosVideos[Math.floor(Math.random() * peitosVideos.length)];
await sock.sendMessage(from, {
video: { url: videoPeito },
gifPlayback: true,
caption: `Você acabou de pegar nos peitos do(a) *@${oco.split('@')[0]}*`,
mentions: [oco]
}, { quoted: loc });
break;

case 'pgpau': {
if (!isGroup) return enviar(mess.respondGroup())
if (!isBotGroupAdmins) return enviar(mess.respondBot())
if (!isModobn) return reply(mess.respondBrinc(prefix))
let ocu = obterMencionar(info)
if (!ocu) return reply('❕ Marque o alvo que você quer pegar no pau dele(a), a mensagem ou @.')
await sock.sendMessage(from, {
video: { url: "https://telegra.ph/file/5073ba8be6b099ed812a7.mp4" },
gifPlayback: true,
ptv: false,
caption: `*👉 Você acabou de pegar no pau do*(a) @${ocu.split('@')[0]}`,
mentions: [ocu]
  }, { quoted: loc })
  break
}

case 'vesgo':
if (!isGroup) return enviar(mess.respondGroup())
if(!isBotGroupAdmins) return enviar(mess.respondBot())
if(!isModobn) return reply(mess.respondBrinc(prefix));
let cargar = obterMencionar(info) || sender;
await sock.sendMessage(from, {
text: `Pesquisando a ficha de vesgo @${cargar.split("@")[0]}, aguarde...`,
 mentions: [cargar]
}, { quoted: loc });
setTimeout(async () => {
let random = Math.floor(Math.random() * 110);
await sock.sendMessage(from, {
image: { url: imgvesgo},
caption: `O quanto *@${cargar.split("@")[0]}* pode ser uma pessoa vesga?\n• A porcentagem de chance é *${random}%*`,
mentions: [cargar]
}, { quoted: loc });
 }, 7000);
break;

case 'rankgostosas': {
if (!isGroup) return enviar(mess.respondGroup())
if(!isBotGroupAdmins) return enviar(mess.respondBot())
if(!isModobn) return reply(mess.respondBrinc(prefix));
let membros = participants
.filter(v => v.id !== numberBot)
.sort(() => Math.random() - 0.5)
.slice(0, 5);
let emojis = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣'];
let frases = [
    '_As mais gostosas do grupo hoje 😈_',
    '_Só as que tão deixando geral sem reação 😏_',
    '_Hoje o nível de beleza tá absurdo 🔥_',
    '_Essas aqui tão impossível hoje 👀_',
    '_Elite das mais brabas do grupo 💋_'
  ];
let fraseFinal = frases[Math.floor(Math.random() * frases.length)];
let texto = `*🤤 RANK DAS GOSTOSAS 🤤*\n\n`;
for (let i = 0; i < membros.length; i++) {
let m = membros[i];
let porcentagem = Math.floor(Math.random() * 30) + 70;
texto += `${emojis[i]} @${m.id.split('@')[0]} — *${porcentagem}%*\n`;
  }
texto += `\n${fraseFinal}`;
let mentions = membros.map(m => m.id);
let foto = 'https://files.catbox.moe/0fhaet.jpg'; 
await sock.sendMessage(from, {
image: { url: foto },
caption: texto,
mentions: mentions
  }, { quoted: info }); }
break;

case 'atropelar': {
if (!isGroup) return enviar(mess.respondGroup())
if(!isBotGroupAdmins) return enviar(mess.respondBot())
if(!isModobn) return reply(mess.respondBrinc(prefix));
let marcado = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || []
if (!marcado[0]) return enviar('🏎️ Marque alguém para atropelar!')
let autor = sender.split('@')[0]
let alvo = marcado[0].split('@')[0]
let frases = [
    `🏎️ @${autor} passou por cima de @${alvo}! VRUM VRUM! 💨`,
    `🏎️ @${autor} atropelou @${alvo} sem freio! 💥💨`,
    `🏎️ @${autor} veio a milhão e derrubou @${alvo}! 🏁💥`,
    `🏎️ @${autor} não viu @${alvo} e ATROPELOU! 💢`,
    `🏎️ @${autor} acelerou tudo e deixou @${alvo} no chão! 😵💨`
  ]
let frase = frases[Math.floor(Math.random() * frases.length)]
let gif = 'https://files.catbox.moe/wljomm.mp4'
await sock.sendMessage(from, {
video: { url: gif },
caption: frase,
gifPlayback: true,
mentions: [sender, marcado[0]]
 }, { quoted: info }) }
break

case 'afogar': {
if (!isGroup) return enviar(mess.respondGroup())
if(!isBotGroupAdmins) return enviar(mess.respondBot())
if(!isModobn) return reply(mess.respondBrinc(prefix));
let marcado = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || []
if (!marcado[0]) return enviar('🫧 Marque alguém para afogar!')
let autor = sender
let alvo = marcado[0]
let frases = [
    `🫧 @${autor.split('@')[0]} está afogando @${alvo.split('@')[0]}! *GLUB GLUB!* 🫧`,
    `🌊 @${autor.split('@')[0]} empurrou @${alvo.split('@')[0]} no mar 😈`,
    `💦 @${alvo.split('@')[0]} foi puxado pro fundo por @${autor.split('@')[0]} 🫧`
  ]
let texto = frases[Math.floor(Math.random() * frases.length)]
let video = 'https://files.catbox.moe/t8ziql.mp4'
await sock.sendMessage(from, {
video: { url: video },
gifPlayback: true,
caption: texto,
mentions: [autor, alvo]
 }, { quoted: info }) }
break

case 'rankjob': {
if (!isGroup) return enviar(mess.respondGroup())
if(!isBotGroupAdmins) return enviar(mess.respondBot())
if(!isModobn) return reply(mess.respondBrinc(prefix));
let membros = participants
.filter(v => v.id !== numberBot)
.sort(() => Math.random() - 0.5)
.slice(0, 5)
let emojis = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣']
let texto = `*💸 RANK JOB 💸*\n\n`
membros.forEach((m, i) => {
let porcentagem = Math.floor(Math.random() * 25) + (70 - i * 3)
texto += `${emojis[i]} @${m.id.split('@')[0]} — *${porcentagem}%*\n`
  })
texto += `\n_O faturamento desses 5 tá alto hoje!_`
let img = 'https://files.catbox.moe/cs8kgs.jpg' 
await sock.sendMessage(from, {
image: { url: img },
caption: texto,
mentions: membros.map(v => v.id)
  }, { quoted: info }) }
break

case 'puta': {
if (!isGroup) return enviar(mess.respondGroup())
if(!isBotGroupAdmins) return enviar(mess.respondBot())
if(!isModobn) return reply(mess.respondBrinc(prefix));
let membros = participants
.filter(v => v.id !== numberBot)
.sort(() => Math.random() - 0.5)
.slice(0, 5)
let emojis = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣']
let texto = `*👠 RANK PUTA 👠*\n\n`
membros.forEach((m, i) => {
let porcentagem = Math.floor(Math.random() * 30) + (70 - i * 5)
texto += `${emojis[i]} @${m.id.split('@')[0]} — *${porcentagem}%*\n`
  })
texto += `\n_As mais perigosas do grupo hoje 😈_`
await sock.sendMessage(from, {
image: { url: 'https://files.catbox.moe/dda1fl.jpg' }, 
caption: texto,
mentions: membros.map(v => v.id)
  }, { quoted: info }) }
break

case 'ser_az':
await reagir(from, "🇦🇱")
try {
const ser_azThumbnail = await getBuffer(`https://files.catbox.moe/co0l85.mp4`)
if (!ser_azThumbnail) throw new Error("Thumbnail não carregado");
await sock.sendMessage(from, {
video: ser_azThumbnail,
caption: `🕌`,
gifPlayback: true,
contextInfo: {
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: `${setting.channelnk}`, 
newsletterName: `${nomeBot}` 
}
}
}, { quoted: loc });
} catch (e) {
console.error("Erro ao executar o comando:", e);
await sock.sendMessage(from, { text: "Desculpe, ocorreu um erro ao tentar carregar o vídeo." }, { quoted: loc });
}
break;

case 'chute':
case 'chutar':
if (!isGroup) return enviar(mess.respondGroup())
if(!isBotGroupAdmins) return enviar(mess.respondBot())
if(!isModobn) return reply(mess.respondBrinc(prefix));
let lascar = obterMencionar(info);
if(!lascar) return reply('Marque o alvo que você quer da um chute, a mensagem ou o @')
await sock.sendMessage(from, {video: {url: chutecmd}, gifPlayback: true, caption: `Você acabou de dar um chute em *@${lascar.split('@')[0]}*.`, mentions: [lascar]}, {quoted: loc})
break


case 'mamar':
if (!isGroup) return enviar(mess.respondGroup())
if(!isBotGroupAdmins) return enviar(mess.respondBot())
if(!isModobn) return reply(mess.respondBrinc(prefix));
let pegar = obterMencionar(info);
reagir(from, "🍼"); 
if (!pegar) return reply('*Qual foi do bagulho? CADE O @ pra eu botar pra mamar 😈*');
await sock.sendMessage(from, {
video: { url: "https://files.catbox.moe/yc3ds5.mp4" },
gifPlayback: true,
caption: `*_O(a) ${pushname} 🍼 MAMOU NOS PEITOS DE:_* @${pegar.split('@')[0]} 🍼`,
mentions: [pegar]
}, { quoted: info }); 
break;

case 'gozar': case 'goza':
if (!isGroup) return enviar(mess.respondGroup())
if(!isBotGroupAdmins) return enviar(mess.respondBot())
if(!isModobn) return reply(mess.respondBrinc(prefix));
let mascar = obterMencionar(info);
reagir(from, "😈")
const gozars = ['Você acabou de gozar na boca do(a)','Você acabou de gozar no cuzinho do(a)','Você acabou de gozar na bucetinha do(a)', 'Você acabou de gozar no pé do(a)', 'Você acabou de gozar na cabeça do(a)', 'Você acabou de gozar na cara do(a)', 'Você acabou de gozar na barriga do(a)', 'Você acabou de gozar no olho do(a)', 'Você acabou de gozar na útero do(a)', 'Você acabou de gozar no cabelo do(a)', 'Você acabou de gozar na boca do(a)', 'Você acabou de gozar no umbigo do(a)', 'Você acabou de gozar nas costas do(a)', 'Você acabou de gozar nos braços do(a)', 'Você acabou de gozar na mão do(a)',] 
const gozacao = gozars[Math.floor(Math.random() * gozars.length)];
if(!isGroup) return reply('*𝚂𝙾𝙼𝙴𝙽𝚃𝙴 𝙴𝙼 𝙶𝚁𝚄𝙿𝙾 🙇🏻‍♂️*')
if(!mascar) return reply('*𝙼𝙰𝚁𝚀𝚄𝙴 𝙰 𝙿𝙴𝚂𝚂𝙾𝙰 𝚀𝚄𝙴 𝚅𝙾𝙲𝙴 𝚀𝚄𝙴𝚁 𝙶𝙾𝚉𝙰𝚁 🙈*')
sock.sendMessage(from, {video: {url: `https://telegra.ph/file/8a82de1e9da332773f52c.mp4`}, gifPlayback: true, caption: `${gozacao} @${mascar.split('@')[0]} 🥵
`, mentions: [mascar]}, {quoted: loc})
break

case 'fundosair': {
if (!isGroup) return enviar(mess.respondGroup());
if (!isCreator) return enviar(mess.respondDono());
const msg = info.message?.extendedTextMessage?.contextInfo?.quotedMessage || info.message || {};
const v = msg.videoMessage || msg.viewOnceMessage?.message?.videoMessage || msg.viewOnceMessageV2?.message?.videoMessage;
const i = msg.imageMessage || msg.viewOnceMessage?.message?.imageMessage || msg.viewOnceMessageV2?.message?.imageMessage;
const pastaFoto = './INFON/LOGOS';
  if (!fs.existsSync(pastaLogos)) fs.mkdirSync(pastaFoto, { recursive: true });
  const caminhoImagem = `${pastaFoto}/fotosair.png`;
  const caminhoVideo = `${pastaFoto}/fotomenu.mp4`;
  if (v) {
reagir(from, "⏳");
const buffer = await getFileBuffer(v, 'video');
if (fs.existsSync(caminhoImagem)) fs.unlinkSync(caminhoImagem);
fs.writeFileSync(caminhoVideo, buffer);
reagir(from, "✅");
return enviar('*🎬 Vídeo do menu atualizado com sucesso!*'); }
 if (i) {
reagir(from, "⏳");
const buffer = await getFileBuffer(i, 'image');
if (fs.existsSync(caminhoVideo)) fs.unlinkSync(caminhoVideo);
fs.writeFileSync(caminhoImagem, buffer);
reagir(from, "✅");
return enviar('*🖼️ Imagem do menu atualizada com sucesso!*'); }
enviar('*❌ Ei mestre, responda com uma imagem ou vídeo para atualizar o menu!*'); }
break;

case 'gerarlink':
case 'uploadapi':
case 'gerarlink2':
case 'upload': { 
if (!isGroup) return reply(mess.respondGroup());
if (!isGroupAdmins) return reply(mess.respondAdm());
if (!isBotGroupAdmins) return reply(mess.respondBot());
await sock.sendMessage(from, { react: { text: '🩵', key: info.key } });

async function uploadCatbox(fileBuffer, fileType) {
const FormData = require('form-data')
const axios = require('axios')

const form = new FormData()
form.append('reqtype', 'fileupload')
form.append('fileToUpload', fileBuffer, {
filename: `file.${fileType}`,
contentType: 'application/octet-stream'
})

const response = await axios.post(
'https://catbox.moe/user/api.php',
form,
{
headers: form.getHeaders(),
timeout: 60000
}
)

// axios retorna direto em .data
const text = String(response.data).trim()

if (text.startsWith('http')) {
return text
}

throw new Error('Resposta inválida da Catbox API: ' + text)
}

try {
let fileBuffer;
let fileType;

if (isQuotedImage) {
const boij = JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage;
fileBuffer = await getFileBuffer(boij, 'image');
fileType = 'jpg';

} else if (isQuotedSticker) {
const boij = JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.stickerMessage;
fileBuffer = await getFileBuffer(boij, 'sticker');
fileType = 'webp';

} else if (isQuotedDocument) {
const boij = info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage || info.message.documentMessage;
fileBuffer = await getFileBuffer(boij, 'document');
fileType = 'doc';

} else if (isQuotedVideo) {
const boij = info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage || info.message.videoMessage;
fileBuffer = await getFileBuffer(boij, 'video');
fileType = 'mp4';

} else if (isQuotedAudio) {
const boij = JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.audioMessage;
fileBuffer = await getFileBuffer(boij, 'audio');
fileType = 'mp3';

} else {
enviar('Você deve marcar uma mídia para gerar o link 💭');
return;
}

await reagir(from, '🔗');
enviar('Enviando sua mídia para o Catbox...');

const linkFinal = await uploadCatbox(fileBuffer, fileType);

await sock.sendMessage(from, {
text: `✅ *Upload concluído com sucesso!*\n🔗 ${linkFinal}`,
linkPreview: false
}, { quoted: info });

await reagir(from, '✅');

} catch (e) {
console.error('Erro no comando gerarlink:', e);
enviar('Erro ao gerar link via Catbox. Verifique o console.');
}
}
break;

case 'modobrincadeira': 
if(!isGroup) return enviar(mess.respondGroup())
if(!isGroupAdmins) return enviar(mess.respondAdm())
if(!isBotGroupAdmins) return enviar(mess.respondBot())
if(dataGp[0].jogos) {
dataGp[0].jogos = false
setGp(dataGp)
sock.sendMessage(from, {image: {url: 'https://i.ibb.co/Y4HYxHTp/6a5c9604edbe.jpg'},
caption: '*🚫 O recurso modo brincadeira foi desativado com sucesso*'})
} else {
dataGp[0].jogos = true
setGp(dataGp)
sock.sendMessage(from, {image: {url: 'https://i.ibb.co/Y4HYxHTp/6a5c9604edbe.jpg'},
caption: '*✅ O recurso modo brincadeira foi ativado com sucesso*'})
}
break

case 'bruxo': 
if (!isGroup) return enviar(mess.respondGroup())
if(!isBotGroupAdmins) return enviar(mess.respondBot())
if(!isModobn) return reply(mess.respondBrinc(prefix));
reagir(from, "🧙‍♂️");
let maldito = obterMencionar(info); 
if(!maldito) return enviar('Marque alguém para lançar uma maldição 🔮');

// maldições
let maldicoes = [
`*_🕯️ @${pushname} sussurrou palavras proibidas... @${maldito.split('@')[0]} foi marcado pelo selo da perdição eterna 🩸_*`,

`*_🌑 As sombras atenderam o chamado... @${maldito.split('@')[0]} agora carrega uma presença que nunca o abandona 👁️_*`,

`*_🔮 Um pacto antigo foi selado... @${maldito.split('@')[0]} teve sua sorte drenada para o vazio ☠️_*`,

`*_👻 Espíritos ancestrais despertaram... @${maldito.split('@')[0]} será perseguido até enlouquecer 😵‍💫_*`,

`*_⚰️ O destino de @${maldito.split('@')[0]} foi corrompido... apenas desgraça o aguarda 🪦_*`,

`*_🐸 Um feitiço grotesco foi lançado... @${maldito.split('@')[0]} perdeu sua forma e dignidade 🧪_*`,

`*_🔥 Chamas do submundo tocaram @${maldito.split('@')[0]}... tudo que era sorte virou cinzas 🔥_*`,

`*_👁️ Algo antigo abriu os olhos... @${maldito.split('@')[0]} está sendo observado sem descanso 👁️‍🗨️_*`,

`*_🕸️ Preso nas teias do oculto... @${maldito.split('@')[0]} não encontrará saída 😈_*`,

`*_💀 A energia vital de @${maldito.split('@')[0]} começou a se desfazer lentamente 🩻_*`,

`*_💔 Um feitiço sombrio foi lançado... @${maldito.split('@')[0]} está condenado ao vazio emocional eterno 🖤_*`,

`*_🤡 Uma maldição de humilhação caiu... @${maldito.split('@')[0]} será motivo de caos e vergonha 🤡_*`,

`*_🧟 A alma de @${maldito.split('@')[0]} foi parcialmente consumida... resta apenas um corpo vazio 🧠❌_*`,

`*_🎭 A realidade se quebrou... @${maldito.split('@')[0]} vive agora em uma ilusão sem fim 🤯_*`,

`*_🪦 O nome de @${maldito.split('@')[0]} foi escrito entre os condenados 📜_*`,

`*_🐍 A serpente do destino mordeu... @${maldito.split('@')[0]} carrega agora veneno eterno ☠️_*`,

`*_📵 As forças ocultas interferiram... @${maldito.split('@')[0]} perdeu toda conexão com o mundo 😶‍🌫️_*`,

`*_🌀 @${maldito.split('@')[0]} foi jogado em um ciclo infinito de desgraça e repetição 🔁_*`,

`*_🌪️ Uma tempestade maldita envolve @${maldito.split('@')[0]}... caos absoluto ⚠️_*`,

`*_🧛 A noite escolheu @${maldito.split('@')[0]}... sua essência agora pertence às trevas 🩸_*`
];
let escolha = maldicoes[Math.floor(Math.random() * maldicoes.length)];
await sock.sendMessage(from, {
image: { url: bruxo },
caption: escolha,
mentions: [maldito]
}, { quoted: info });
break;

case 'puto':
if (!isGroup) return enviar(mess.respondGroup())
if(!isBotGroupAdmins) return enviar(mess.respondBot())
if(!isModobn) return reply(mess.respondBrinc(prefix));
const groupMetadata = await sock.groupMetadata(from);
let membros = groupMetadata.participants.map(p => p.id);
membros = membros.filter(jid => jid !== sender && jid !== sock.user.id);
let user1 = membros[Math.floor(Math.random() * membros.length)];
let user2 = membros.filter(u => u !== user1)[Math.floor(Math.random() * (membros.length - 1))];
await sock.sendMessage(from, {
video: { url: puto },
gifPlayback: true,
caption: `*_@${user1.split('@')[0]} e @${user2.split('@')[0]} SÃO GAYS 😈_*`,
mentions: [user1, user2]
}, { quoted: info });
break;

case 'leite':
if (!isGroup) return enviar(mess.respondGroup())
if(!isBotGroupAdmins) return enviar(mess.respondBot())
if(!isModobn) return reply(mess.respondBrinc(prefix));
let conection = obterMencionar(info); 
if (!conection || conection.length === 0) return enviar('Marque alguém para tomar leite. 🍼');
    let desejos = {
        image: { url: 'https://telegra.ph/file/2e327e7eb1415ebe056b1.jpg' },
        caption: `
╭❈֟━❄️━֟━✧❆⊰❖⊱❆✧━֟━❄️━֟❈╮
┃Olá, ${pushname}
┃LHE CONVIDA PRA TOMAR
┃UM CAFÉ COM LEITE com @${conection.split('@')[0]} 🥛💧
╰❈֟━❄️━֟━✧❆⊰❖⊱❆✧━֟━❄️━֟❈╯`,
mentions: [conection],
quoted: info};
sock.sendMessage(from, desejos);
break;

case 'comer':
if (!isGroup) return enviar(mess.respondGroup())
if(!isBotGroupAdmins) return enviar(mess.respondBot())
if(!isModobn) return reply(mess.respondBrinc(prefix));
let conect = obterMencionar(info);
if(!conect) return enviar('marca alguém que você quer fuder')
await sock.sendMessage(from, {
video: { url: gifgay },
gifPlayback: true,
caption: `*_O(a) @${pushname} acabou de fuder gostosinho com o(a) @${conect.split('@')[0]}😈_*`,
mentions: [conect]
}, { quoted: info }); 
break;

case 'tabela':
sock.sendMessage(from, { text: tabela(prefix, nomeBot) }, { quoted: selopagbank });
break;

case 'wame':
case 'wa': {
if (!q) return replys('❌ Digite um número.\nEx: .wame 559999999999')

let numero = q.replace(/\D/g, '') 

if (numero.length < 10) {
return replys('❌ Número inválido.')
}

let link = `https://wa.me/${numero}`

reply(`📲 Link do WhatsApp:\n${link}`)
}
break

case 'encurtalink':
case 'shortlink': {
if(!isGroup) return enviar(mess.respondGroup())
if(!isGroupAdmins) return enviar(mess.respondAdm())
if(!isBotGroupAdmins) return enviar(mess.respondBot())
const axios = require('axios');
let url = q ? q.trim() : ''; 
if (!url) return reply('❌ Por favor, envie o link que deseja encurtar.');
  try {
let apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`;
let { data } = await axios.get(apiUrl);
return reply(`🔗 Link encurtado:\n${data}`);
 } catch (err) {
console.log(err);
return reply('❌ Ocorreu um erro ao encurtar o link.'); }}
break;

case 'ip':
if (!isGroup) return reply(mess.respondGroup());
if(!isCreator) return enviar(mess.respondDono());
case 'IP': {
const axios = require('axios');
const fs = require('fs');

function formatarData(data) {
const d = new Date(data);
const dia = String(d.getDate()).padStart(2, '0');
const mes = String(d.getMonth() + 1).padStart(2, '0'); 
const ano = d.getFullYear();
const hora = String(d.getHours()).padStart(2, '0');
const min = String(d.getMinutes()).padStart(2, '0');
const seg = String(d.getSeconds()).padStart(2, '0');

        return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
    }

try {
let ip = q ? q.trim() : '';
let url = ip
            ? `http://ip-api.com/json/${ip}`
            : `http://ip-api.com/json/`;

let res = await axios.get(url);
let data = res.data;
if (data.status !== 'success') {
return reply('❌ IP inválido ou não encontrado.');
  }
let resultado = `🔎 Consulta de IP\n\n`;
resultado += `🌐 IP: ${data.query}\n`;
resultado += `📍 País: ${data.country}\n`;
resultado += `🏙️ Cidade: ${data.city}\n`;
resultado += `📡 ISP: ${data.isp}\n`;
resultado += `🗺️ Região: ${data.regionName}\n`;
resultado += `🕒 Fuso horário: ${data.timezone}`;
reply(resultado);
const ipData = {
ip: data.query,
pais: data.country,
cidade: data.city,
isp: data.isp,
regiao: data.regionName,
fuso: data.timezone,
dataConsulta: formatarData(new Date()) };
let jsonArray = [];
if (fs.existsSync('ips.json')) {
const existingData = fs.readFileSync('ips.json', 'utf-8');
jsonArray = JSON.parse(existingData); }
const ipExists = jsonArray.some(item => item.ip === ipData.ip);
if (!ipExists) {
jsonArray.push(ipData);
fs.writeFileSync('ips.json', JSON.stringify(jsonArray, null, 2), 'utf-8');
 } else {
console.log(`IP ${ipData.ip} já está salvo no JSON.`); }
 } catch (err) {
reply('❌ Erro ao consultar o IP.');
console.log(err); }}
break;

case 'imgaleatoria': {
    try {
const largura = 400;
const altura = 300;
const url = `https://picsum.photos/${largura}/${altura}?random=${Math.floor(Math.random() * 1000)}`;
await sock.sendMessage(from, {
image: { url: url },
caption: "🖼️ Aqui está sua imagem aleatória!"});
    } catch (err) {
console.log(err);
await sock.sendMessage(from, { text: "❌ Ocorreu um erro ao gerar a imagem." }); }
break;
}

case 'avalia': {
try {
if (!isGroup) return reply(mess.respondGroup());
    if (!isGroupAdmins) return reply(mess.respondAdm());
    if (!isBotGroupAdmins) return reply(mess.respondBot());
const groupMetadata = await sock.groupMetadata(from);
const members = groupMetadata.participants;
// Seleciona um membro aleatório
const randomMember = members[Math.floor(Math.random() * members.length)];
// Obtém a foto de perfil do membro
const profilePictureUrl = await sock.profilePictureUrl(randomMember.id, 'image');
// Avaliação personalizada
const evaluations = [
"Uma ótima escolha de foto de perfil!",
"Essa foto mostra sua personalidade!",
"Adorei a vibe dessa imagem!",
"Você parece estar se divertindo nessa foto!",
"Essa foto reflete bem quem você é!",
"que lindo essa foto, ameiii!!"
];
const randomEvaluation = evaluations[Math.floor(Math.random() * evaluations.length)];
// Monta o objeto para enviar a mensagem
const messageContent = {
image: { url: profilePictureUrl }, 
caption: `𝐔𝐒𝐔𝐀𝐑𝐈𝐎 🎶:『@${randomMember.id.split("@")[0]}』\n*𝐆𝐑𝐔𝐏𝐎 🧸*: ${groupName}\n*𝐂𝐄𝐋𝐔𝐋𝐀𝐑 💁‍♂️*: ${info.key.id.length > 21 ? 'ᴀɴᴅʀᴏɪᴅ 🤓' : info.key.id.substring(0, 2) == '3A' ? 'ɪᴏs 🙆‍♂️' : 'ᴢᴀᴘ ᴢᴀᴘ ᴡᴇʙ 🧏‍♂️'}\n*𝐂𝐎𝐍𝐓𝐄𝐌 𝐕𝐈𝐏 👻*: ${vip}\n\n*${randomEvaluation}*`, 
mentions: [randomMember.id]
};
// Envia a mensagem no grupo
sock.sendMessage(from, messageContent);
} catch (e) {
console.error(e); // Log do erro para depuração
return reply("Erro ao tentar avaliar a foto de perfil.");
}
break;
}

case 'recrutar':
    if (!isGroup) return reply(mess.respondGroup());
    if (!isGroupAdmins) return reply(mess.respondAdm());
    if (!isBotGroupAdmins) return reply(mess.respondBot());
    if (!q) return reply("Cadê o número do usuário que você deseja convidar?");

    // Limpar o número e formatar para o padrão do WhatsApp
    let rcrt = q.replace(/\D/g, "") + "@s.whatsapp.net"; 

    try {
        // Pegar o link do grupo
        let linkgc = await sock.groupInviteCode(from);

        // Enviar o link direto no privado do usuário
        await sock.sendMessage(rcrt, {
            text: `Você foi convidado(a) para o grupo!\nClique aqui para entrar: https://chat.whatsapp.com/${linkgc}`
        });

        reply("Convite enviado com sucesso para o usuário!");
    } catch (err) {
        console.log(err);
        reply("Ocorreu um erro ao tentar enviar o convite.");
    }
break;

case 'divmsg':
case 'div': {
if(!isGroup) return reply(mess.respondGroup());
if(!isCreator) return reply(mess.respondDono());
if (!q) return reply(`Está faltando o texto e quantidade que deseja enviar.\nExemplo: ${prefix + command} OIIIII | 10`);
const [texto, quantidade] = q.split(' | '); 
const quantidadeEnvios = parseInt(quantidade);
if (isNaN(quantidadeEnvios) || quantidadeEnvios <= 0) {
return reply(`Número inválido`);
}
const mentionedJidList = groupMembers.map(member => member.id);
const paymentDetails = {
requestPaymentMessage: {
currencyCodeIso4217: "BRL",
amount1000: "1000",
noteMessage: {
extendedTextMessage: {
text: texto,
	contextInfo: {
					mentionedJid: mentionedJidList,
forwardingScore: 999,
isForwarded: true
}
}
},
expiryTimestamp: "0",
amount: {
value: "1000",
offset: 1000,
currencyCode: "BRL"
}
}
};
const relayMessage = {
key: {
fromMe: false,
remoteJid: from
},
message: paymentDetails
};
for (let i = 0; i < quantidadeEnvios; i++) {
await sock.relayMessage(from, relayMessage.message, { messageId: relayMessage.key.id });
}
break;
}

case 'antipv3':
if(!isGroup) return enviar(mess.respondGroup())
if(!isGroupAdmins) return enviar(mess.respondAdm())
if(!isBotGroupAdmins) return enviar(mess.respondBot())
if(!isAntiPv3) {
nescessario.antipv3 = true
setNes(nescessario)
reply("*𝙾 𝚁𝙴𝙲𝚄𝚁𝚂𝙾 𝙰𝙽𝚃𝙸𝙿𝚅3 𝙵𝙾𝙸 𝙰𝚃𝙸𝚅𝙾 𝙲𝙾𝙼 𝚂𝚄𝙲𝙴𝚂𝚂𝙾 🙇🏻‍♂️*")
} else if(isAntiPv3) {
nescessario.antipv3 = false
setNes(nescessario)
reply('*𝙾 𝚁𝙴𝙲𝚄𝚁𝚂𝙾 𝙵𝙾𝙸 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾 𝙲𝙾𝙼 𝚂𝚄𝙲𝙴𝚂𝚂𝙾 🙇🏻‍♂️*');
}
break

case 'ativar-grupo':
 try {
if(!isGroup) return enviar(mess.respondGroup());
if(!isCreator) return reply(mess.respondDono())
const grupoAtivo = dataGp[0].autofigu && dataGp[0].antilink && dataGp[0].jogos && dataGp[0].menu_audio && dataGp[0].antiimg && dataGp[0].antisticker && dataGp[0].antipalavrao.active && dataGp[0].delimg;
if(grupoAtivo) {
dataGp[0].autofigu = false;
dataGp[0].antilink = false;
dataGp[0].jogos = false;
dataGp[0].menu_audio = false;
dataGp[0].antiimg = false;
dataGp[0].antisticker = false;
dataGp[0].antipalavrao.active = false;
dataGp[0].delimg = false;
setGp(dataGp);
reply('*𝚃𝙾𝙳𝙾𝚂 𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙽𝙴𝙲𝙴𝚂𝚂Á𝚁𝙸𝙾 𝙵𝙾𝚁𝙰𝙼 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾𝚂 🙇🏻‍♂️*');
} else {
dataGp[0].autofigu = true,
dataGp[0].antilink = true,
dataGp[0].jogos = true,
dataGp[0].menu_audio = true,
dataGp[0].antiimg = true,
dataGp[0].antisticker = true,
dataGp[0].antipalavrao.active = true,
dataGp[0].delimg = true,
setGp(dataGp);
reply('*𝚃𝙾𝙳𝙾𝚂 𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙽𝙴𝙲𝙴𝚂𝚂Á𝚁𝙸𝙾𝚂 𝙵𝙾𝚁𝙰𝙼 𝙰𝚃𝙸𝚅𝙰𝙳𝙾𝚂 🙇🏻‍♂️*');
}
} catch (error) {
console.error(error);
reply('*𝙾𝙲𝙾𝚁𝚁𝙴𝚄 𝚄𝙼 𝙴𝚁𝚁𝙾 𝙰𝙾 𝙴𝙵𝙴𝚃𝚄𝙰𝚁 𝙾 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ⚠*');
}
break;


case 'extrair': 
try {
if (!isGroup) return reply('Only in Groups!');
if (!isCreator && !isBotGroupAdmins) return reply(`Somente donos.`);
if (groupMembers.length > 2) {
function createVCF() {
let comerDiBoseta = "";
groupMembers.forEach(contacts => {
comerDiBoseta += "BEGIN:VCARD\n";
comerDiBoseta += "VERSION:3.0\n";
comerDiBoseta += "FN:𝑮𝑳-𝑩𝑶𝑻\n";
comerDiBoseta += `TEL;TYPE=CELL:${contacts.id.split("@")[0]}\n`;
comerDiBoseta += "END:VCARD\n\n";
});
return comerDiBoseta;
}
const getVCF = createVCF();
const directory = `./sla-${Date.now()}.vcf`;
fs.writeFileSync(directory, getVCF);
sock.sendMessage(sender, {
document: fs.readFileSync(directory),
mimetype: "text/vcard",
fileName: "𝑮𝑳-𝑩𝑶𝑻.vcf",
});
DLT_FL(directory);
}
else {
reply('O grupo naum tem mais gente!');
}
} catch (e) {
console.error(e);
reply("Não foi possível executar o comando!!");
}
break;

case 'aluguel':
case 'preço': {
if (!isGroup) return reply(mess.respondGroup())
const texto = `❄️🤖 *SAKURA-MD V1 – Seu bot completo no WhatsApp!* ❄️
🚀 Automático, rápido e cheio de comandos exclusivos!
💬 Ideal para grupos, diversão e utilidades!
💰 *Planos de Aluguel*:
⧽ ❄️ R$ 5,00 → 5 dias
⧽ ❄️ R$ 10,00 → 9 dias
⧽ ❄️ R$ 18,00 → 20 dias
⧽ ❄️ R$ 25,00 → 40 dias
📲 Chame agora e leve o SAKURA-MD pro seu grupo! ❄️
📌 Contato: wa.me/5511953265144`;
await sock.sendMessage(from, {
image: { url: "https://i.ibb.co/j956q5Dw/img-1774618079295.jpg" },
caption: texto
}, { quoted: loc });
}
break;

case 'channel': case 'setchannel':
if (!isGroup) return reply(mess.respondGroup());
    if (!isGroupAdmins) return reply(mess.respondAdm());
    if (!isBotGroupAdmins) return reply(mess.respondBot());
if (args.length < 1) {
return reply(`*𝙴𝚂𝚃𝙰 𝙵𝙰𝙻𝚃𝙰𝙽𝙳𝙾 𝙾 𝙸𝙳 𝙳𝙾 𝙲𝙰𝙽𝙰𝙻.. 🤷🏻‍♂️*\n\n- *𝙴𝚇𝙴𝙼𝙿𝙻𝙾*: ${prefix + command} 120363307065691411@newsletter`);
}
if (!isCreator && !info.key.fromMe) return reply(mess.respondDono());
setting.channelnk = q.trim(); 
fs.writeFileSync('./arquivo/settings/setting.json', JSON.stringify(setting, null, 2));
reply(`*𝙾𝙺𝙰𝚈 𝙼𝙴𝚂𝚃𝚁𝙴, 𝙰𝙶𝙾𝚁𝙰 𝙼𝙴𝚄 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 𝙴『 ${setting.channelnk} 』🙇🏻‍♂️*`);
break;

case 'bangp':
case 'unbangp':
if(!isGroup) return reply(mess.respondGroup())
if(!isCreator) return reply(mess.respondDono())
if(command == 'bangp'){
if(isBanchat) return reply(`*𝙾 𝙶𝚁𝚄𝙿𝙾 𝙹𝙰 𝙴𝚂𝚃𝙰́ 𝙱𝙰𝙽𝙸𝙳𝙾 𝚂𝙴𝙽𝙷𝙾𝚁(𝙰) 🙇🏻‍♂️*`)
dataGp[0].bangp = true
setGp(dataGp)
reply(`*𝙾 𝙶𝚁𝚄𝙿𝙾 𝙵𝙾𝙸 𝙱𝙰𝙽𝙸𝙳𝙾 𝙲𝙾𝙼 𝚂𝚄𝙲𝙴𝚂𝚂𝙾, 𝙰𝙶𝙾𝚁𝙰 𝙽𝙸𝙽𝙶𝚄𝙴𝙼 𝙿𝙾𝙳𝙴𝚁𝙰́ 𝚄𝚂𝙰𝚁 𝙼𝙴𝚄𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 🙇🏻‍♂️*`)
} else {
if(!isBanchat) return reply(`*𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙹Á 𝙴𝚂𝚃Á 𝙳𝙴𝚂𝙱𝙰𝙽𝙸𝙳𝙾 𝚂𝙴𝙽𝙷𝙾𝚁(𝙰) 🙇🏻‍♂️*`)
dataGp[0].bangp = false
setGp(dataGp)
reply(`*𝙾 𝙶𝚁𝚄𝙿𝙾 𝙵𝙾𝙸 𝙳𝙴𝚂𝙱𝙰𝙽𝙸𝙳𝙾 𝙲𝙾𝙼 𝚂𝚄𝙲𝙴𝚂𝚂𝙾 𝚂𝙴𝙽𝙷𝙾𝚁(𝙰), 𝙰𝙶𝙾𝚁𝙰 𝚃𝙾𝙳𝙾𝚂 𝙳𝙴𝚂𝚂𝙴 𝙶𝚁𝚄𝙿𝙾 𝙿𝙾𝙳𝙴 𝚄𝚂𝙰𝚁 𝙼𝙴𝚄𝚂 𝙲𝙾𝙼𝙰𝙽𝙾𝚂 🙇🏻‍♂️*`)
}
break

case 'gppv':
if(!isGroup) return reply(mess.respondGroup())
if(!isGroupAdmins) return reply(mess.respondAdmins())
if(!isBotGroupAdmins) return reply(mess.respondBot())
reply(`*𝙹𝙰 𝙴𝚂𝚃𝙾𝚄 𝙴𝙽𝚅𝙸𝙰𝙽𝙳𝙾 𝙾 𝙻𝙸𝙽𝙺 𝙽𝙾 𝚂𝙴𝚄 𝙿𝚅 ${isCargo} 🙇🏻‍♂️*`)
 linkgc = await sock.groupInviteCode(from)
sock.sendMessage(sender, { text: 'https://chat.whatsapp.com/' + linkgc}, {quoted: loc})
 break

case 'so_adm':
if(!isGroup) return enviar(mess.respondGroup())
if(!isGroupAdmins) return enviar(mess.respondAdm())
if(!isBotGroupAdmins) return enviar(mess.respondBot())
if(args.length < 1) return enviar(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(So_Adm) return enviar('O modo para somente adminstradores usarem o bot, já se encontra ativo no grupo senhor(a)!')
dataGp[0].soadm = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de só adm utilizar comandos neste grupo.')
} else if(Number(args[0]) === 0) {
if(!So_Adm) return enviar('O modo para somente adminstradores usarem o bot atualmente já está desativado no grupo.')
dataGp[0].soadm = false
setGp(dataGp)
enviar('Desativou o recurso de só adm utilizar comandos neste grupo.️')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'bemvindo2':  
if(!isGroup) return enviar(mess.respondGroup())
if(!isGroupAdmins) return enviar(mess.respondAdm());
if (!isBotGroupAdmins) return enviar(mess.respondBot());
if(args.length < 1) return enviar(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
if(Number(args[0]) === 1) {
if(isWelkom2) return enviar('O recurso já está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = true
setGp(dataGp)
enviar('✅ O recurso foi ativado com sucesso')
} else if(Number(args[0]) === 0) {
if(!isWelkom2) return enviar('O recurso não está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = false
setGp(dataGp)
enviar('✅ O recurso foi desativado com sucesso')
} else {
enviar(`Digite da forma correta, ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

case 'delpalavra':
if(!isGroup) return enviar(mess.respondGroup())
if(!isGroupAdmins) return enviar(mess.respondAdm())
if (!isBotGroupAdmins) return enviar(mess.respondBot())
if(!isPalavrao) return enviar('*𝙰𝙽𝚃𝙸-𝙿𝙰𝙻𝙰𝚅𝚁𝙰̃𝙾 𝚂𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾 🤷🏻‍♂️*')
if(args.length < 1) return enviar(`*🌟 𝚄𝚂𝙴 𝙳𝙰 𝙵𝙾𝚁𝙼𝙰 𝙲𝙴𝚁𝚃𝙰, 𝙴𝚇𝙴𝙼𝙿𝙻𝙾:${prefix}𝚍𝚎𝚕𝚙𝚊𝚕𝚊𝚟𝚛𝚊 𝚌𝚊𝚛𝚊𝚕𝚑𝚘*`)
textos = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(!isPalavras.includes(textos)) return enviar('*𝙰 𝙿𝙰𝙻𝙰𝚅𝚁𝙰 𝙹𝙰 𝙵𝙾𝙸 𝚁𝙴𝙼𝙾𝚅𝙸𝙳𝙰 𝙾𝚄 𝙽Ã𝙾 𝙴𝚂𝚃Á 𝙸𝙽𝙲𝙻𝚄𝚂𝙰.. 🤷🏻‍♂️*')
var i = dataGp[0].antipalavrao.palavras.indexOf(textos)
dataGp[0].antipalavrao.palavras.splice(i, 1)
setGp(dataGp)
enviar(`*𝙿𝙰𝙻𝙰𝚅𝚁𝙰̃𝙾 𝚁𝙴𝙼𝙾𝚅𝙸𝙳𝙾 𝙲𝙾𝙼 𝚂𝚄𝙲𝙴𝚂𝚂𝙾 ✅*`)
break

case 'convite':
if(!budy.includes("chat.whatsapp.com")) return enviar("Cadê o link do grupo que você deseja que eu entre?")  
cnvt = args.join(" ")
enviar(`O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`)
await sock.sendMessage(nmrdn, {text: mess.groupInvitation(sender, pushname, cnvt, prefix)}, {quoted: loc})
break

case 'join':
case 'entrar':
const string = args.join(' ');
if (!string) return enviar('❌ Insira um link de convite ao lado do comando.');
if (!string.includes('chat.whatsapp.com/')) return enviar('❌ Ops, verifique o link que você inseriu.');
const linkCodeMatch = string.match(/chat\.whatsapp\.com\/([0-9A-Za-z]{20,})/);
    if (!linkCodeMatch) return enviar('❌ Link inválido ou mal formatado.');
const linkCode = linkCodeMatch[1];
 try {
await sock.groupAcceptInvite(linkCode);
enviar('✅ Entrei no grupo com sucesso!');
    } catch (erro) {
const msgErro = String(erro);
if (msgErro.includes('resource-limit')) {
enviar('❌ O grupo já atingiu o limite de 257 membros.');
 } else if (msgErro.includes('not-authorized')) {
enviar('❌ Não foi possível entrar no grupo.\nMotivo: Banimento ou link inválido.');
 } else if (msgErro.includes('bad-request')) {
enviar('❌ Não foi possível entrar: link expirado ou inválido.');
  } else {
enviar(`❌ Erro desconhecido: ${msgErro}`); }}
break;

case 'profissao':
reagir(from, "🤭");
 try {
const profissoes = [
"Padeiro 🍞👨‍🍳",
"Motoboy 🏍️📦",
"Engenheiro 🏗️📐",
"Youtuber 🎥💻",
"Programador 💻👨‍💻",
"Pedreiro 🧱🔨",
"Cantor 🎤🎶",
"Dublador 🎙️🗣️",
"Astronauta 🚀🌌",
"Detetive 🕵️‍♂️🔍",
"Palhaço 🤡🎭",
"Piloto de avião ✈️👨‍✈️",
"Garçom 🍽️🧑‍🍳",
"Streamer 🎮📡",
"Advogado ⚖️👨‍⚖️",
"Mágico 🎩✨",
"Motorista de ônibus 🚌🛣️",
"Tatuador 🖋️🖤",
"Coveiro ⚰️💀",
"DJ 🎧🎛️"
        ];
const profissaoEscolhida = profissoes[Math.floor(Math.random() * profissoes.length)];
const mensagem = `
🔥 *DESCUBRA SUA PROFISSÃO DE MERDA!* 🔥
━━━━━━━━━━━━━━━━━━━━━━
👨‍💼 Sua profissão de bosta será:  
➡️ *${profissaoEscolhida}*  
━━━━━━━━━━━━━━━━━━━━━━
😂 *Aceita ou vai chorar?* 😜
        `;
enviar(mensagem);
 } catch (error) {
console.error(error);
enviar("❌ *Erro ao determinar sua profissão, fi!* ❌"); }
break;

case 'arquivargp': {
if (!isGroup) return enviar(mess.respondGroup());
if (!isCreator) return enviar(mess.respondDono());
 try {
const groupMetadata = await sock.groupMetadata(from);
const participantes = groupMetadata.participants;
const ownerId = groupMetadata.owner;
const remover = participantes  
.filter(p => p.id !== ownerId && !p.isCreator && p.id !== sender && !p.admin) .map(p => p.id);  
if (remover.length === 0) {  
return enviar('⚡ Não há membros para remover'); }  
for (let i = 0; i < remover.length; i++) {  
await sock.groupParticipantsUpdate(from, [remover[i]], "remove");  
await new Promise(r => setTimeout(r, 1000)); }  
const novoNome = `⛔ 𝗔𝗥𝗤𝗨𝗜𝗩𝗔𝗡𝗗𝗢 ⛔`; 
await sock.groupUpdateSubject(from, novoNome);
let groupPic;  
  try {  
groupPic = await sock.profilePictureUrl(from, 'image');  
 } catch {  
groupPic = null; }  
const mensagem = `✅ ${remover.length} membros removidos com sucesso 🕌 Criador e admins protegidos\n✅ Nome do grupo alterado para:\n"${novoNome}"`;  
 if (groupPic) {  
await sock.sendMessage(from, { image: { url: groupPic }, caption: mensagem });  
  } else {  
enviar(mensagem); }
  } catch (e) {
console.log(e);
enviar('❓ Erro ao limpar o grupo'); }}
break;

case 'cep': {
if (!isGroup) return enviar(mess.respondGroup());
if (!isCreator) return enviar(mess.respondDono());
const cep = args[0];
const numero = args[1];
if (!cep || !numero) 
return enviar(`🔎 Informe o CEP e o número da casa.\n👉 Exemplo  ${prefix}Cep 88505126 123`);
const axios = require('axios');
(async () => {
try {
const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
if (response.data.erro) 
return enviar('⚠️ CEP não encontrado.');
const { logradouro, bairro, localidade, uf } = response.data;
if (!logradouro) 
return enviar('🗼 Não foi possível localizar a rua desse CEP.');
const enderecoCompleto = `${logradouro}, ${numero}, ${bairro}, ${localidade}, ${uf}`;
const enderecoEnc = encodeURIComponent(enderecoCompleto);
const linkGoogle = `https://www.google.com/maps/search/?api=1&query=${enderecoEnc}`;
const imagem = 'https://i.ibb.co/KxmY1pW2/img-1774525112679.jpg';
await sock.sendMessage(from, {
  image: { url: imagem },
  caption: `
📡 𝚂𝚄𝙰 𝙻𝙾𝙲𝙰𝙻𝙸𝚉𝙰𝙲̧𝙰̃𝙾 𝚁𝙴𝙰𝙻

📌 Endereço: ${enderecoCompleto}
🌍 ${linkGoogle}

🔍 𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰́ 𝚂𝚄𝙰 𝙻𝙾𝙲𝙰𝙻𝙸𝚉𝙰𝙲̧𝙰̃𝙾 𝙰𝚃𝚄𝙰𝙻
`
}, { quoted: loc });
} catch (error) {
console.error(error);
enviar('❓ Ocorreu um erro ao consultar o CEP.');
}
})();
break;
}

case 'ativacoes': {//ʙᴏʟᴀᴅɪɴʜᴏ 
await reagir(from, "🕌");
if(!isGroup) return enviar(mess.respondGroup())
if(!isGroupAdmins) return enviar(mess.respondAdm())
if (!isBotGroupAdmins) return enviar(mess.respondBot())
 try {
if (!jpgBot) throw new Error("jpgBot não definido");
const statusImage = await getBuffer(jpgBot);
if (!statusImage) throw new Error("Imagem não carregada");
const caption = `
╭❈֟━❄️━֟━✧❆⊰❖⊱❆✧━֟━❄️━֟❈╮
╞➮ ⚙️ *STATUS DO GRUPO*
╠━━━ׁ۫━፝֟━̷━𑁁━❄️━̷━𑁁━━፝֟━ׁ۫━━━╮
╞➮ 📷 Antiimg: ${isAntiImg ? '✅' : '❌'}
╞➮ 🎥 Antivideo  : ${isAntiVid ? '✅' : '❌'}
╞➮ 🎵 Antiaudio  : ${isAntiAudio ? '✅' : '❌'}
╞➮ 🖼️ Antisticker: ${isAntiSticker ? '✅' : '❌'}
╞➮ 👥 Ativarsair: ${isWelkom3 ? '✅' : '❌'}
╞➮ 🧑‍💻 Deletimg: ${isDeLimg ? '✅' : '❌'}
╞➮ 🤓 Antipalavrao: ${isPalavrao ? '✅' : '❌'}
╞➮ 👋 Bemvindo1: ${isWelkom ? '✅' : '❌'}
╞➮ 🎤 Audio-menu: ${isAudioMenu ?  '✅' : '❌'}
╞➮ 🤡 Modobn: ${isModobn ?  '✅' : '❌'}
╞➮ 🥶 Autofigu: ${isAutofigu ? '✅' : '❌'}
╞➮ 🛠️ Antisalvargp: ${isAntiSalvargp ? '✅' : '❌'}
╞➮ 🔗 Antilink: ${isAntiLink ? '✅' : '❌'}
╞➮ 💳 Antinotas: ${isAntiNotas ? '✅' : '❌'}
╞➮ 👿 Antiemoji: ${isAntiemoji ? '✅' : '❌'}
╞➮ ⚡ Autorepo: ${isAutorepo ? '✅' : '❌'}
╞➮ 🗑️ Odelete: ${IS_DELETE ? '✅' : '❌'}
╞➮ 🗼 Console: ${isConsole ? '✅' : '❌'}
╞➮ 📞 Antictt: ${isAntiCtt ? '✅' : '❌'}
╞➮ 📝 Antidoc: ${isAntidoc ? '✅' : '❌'}
╞➮ 📢 Anticatalog: ${isAntiCatalog ? '✅' : '❌'}
╞➮ 🔎 Antiloc: ${isAntiLoc ? '✅' : '❌'}
╞➮ 😋 So_adm: ${So_Adm ? '✅' : '❌'}
╠━━━ׁ۫━፝֟━̷━𑁁━❄️━̷━𑁁━━፝֟━ׁ۫━━━╯
╰❈֟━❄️━֟━✧❆⊰❖⊱❆✧━֟━❄️━֟❈╯`
 await sock.sendMessage(from, { image: statusImage, caption: caption,
contextInfo: { forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: setting.channelnk || "0@newsletter",
newsletterName: nomeBot || "Bot" }}
  }, { quoted: loc });
 } catch (e) {
console.error("Erro no status:", e);
await sock.sendMessage(from, {
text: "❌ Erro ao carregar o status do grupo."
  }, { quoted: loc }); }
break;
}

case 'comandos': {
if(!isGroup) return enviar(mess.respondGroup())
if(!isGroupAdmins) return enviar(mess.respondAdm())
if (!isBotGroupAdmins) return enviar(mess.respondBot())
try {
if (!fs.existsSync('./index.js')) {
return enviar('⚡ Arquivo index.js não encontrado.'); }
const code = fs.readFileSync('./index.js','utf-8');
const regex = /case\s+['"`]?([^'"`:\n]+)['"`]?\s*:/gi;
const nomes = [];
let match;
while ((match = regex.exec(code)) !== null) {
nomes.push(match[1].trim()); }
const total = nomes.length;
let lista = nomes.map((cmd, i) => {
const num = String(i + 1).padStart(2, '0');
return `┃ ├➤ ${num} © ${prefix}${cmd}`;
}).join('\n');
if (lista.length > 60000) {
lista = lista.slice(0, 60000) + '\n┃ ⚠️ Lista muito grande, cortada...'; }
const quadro = `
╭❈֟━❄️━֟━✧❆⊰❖⊱❆✧━֟━❄️━֟❈╮
╠━━━ׁ۫━፝֟━̷━𑁁━❄️━̷━𑁁━━፝֟━ׁ۫━━━╮
┃〔 *LISTA DE CASES* 〕
┃
┃❆𝆺𝅥˚ —̳͟͞͞ 📦 Total: ${total}
┃❆𝆺𝅥˚ —̳͟͞͞ 📄 Lista completa
╠━━━ׁ۫━፝֟━̷━𑁁━❄️━̷━𑁁━━፝֟━ׁ۫━━━╯
╰❈֟━❄️━֟━✧❆⊰❖⊱❆✧━֟━❄️━֟❈╯
┃
${lista}
┃ 
╰❈֟━❄️━֟━✧❆⊰❖⊱❆✧━֟━❄️━֟❈╯
`;

await sock.sendMessage(from, {
image: { url: jpgBot },
caption: quadro,
contextInfo: {
mentionedJid: [sender],
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: setting.channelnk,
newsletterName: nomeBot
}
}
}, { quoted: loc });
} catch(e){
console.log(e);
enviar('❓ Erro ao listar os comandos.');
}
}
break;

case 'pinterest':
if(!isGroup) return enviar(mess.respondGroup())
if(!isCreator) return enviar(mess.respondDono())
case 'pin': {
if (!q) return enviar('🛠️ Envie o link do Pinterest.\nEx: /pin https://pin.it/xxxx');
const axios = require('axios');
const cheerio = require('cheerio');
 try {
const res = await axios.get(q, {
maxRedirects: 5,
headers: { 'User-Agent': 'Mozilla/5.0' }});
const html = res.data;
const $ = cheerio.load(html);
let img = $('meta[property="og:image"]').attr('content');
if (!img) { img = $('img').first().attr('src'); }
if (!img) {
return enviar('❌ Não consegui encontrar a imagem.'); }
await sock.sendMessage(from, {
image: { url: img },
caption: '🕌 𝙸𝙼𝙰𝙶𝙴𝙼 𝙳𝙾 𝙿𝙸𝙽𝚃𝙴𝚁𝙴𝚂𝚃'
  }, { quoted: loc });
  } catch (e) {
console.log(e);
enviar('❌ Erro ao baixar imagem.'); }}
break;

case 'pinterestvid': {
if(!isGroup) return enviar(mess.respondGroup())
if(!isCreator) return enviar(mess.respondDono())
  if (!args[0]) return enviar('❌ Envie o link do Pinterest.');

  const axios = require('axios');
  const url = args[0];
  let video = null;

  try {

    // 🔁 MÉTODO 1 (API mais estável)
    try {
      const api = `https://api.pinterestvideodownloader.com/?url=${encodeURIComponent(url)}`;
      const res = await axios.get(api);

      if (res.data?.data?.videos) {
        video = res.data.data.videos[0]?.url;
      }
    } catch {}

    // 🔁 MÉTODO 2 (Scraping direto da página)
    if (!video) {
      try {
        const res = await axios.get(url, {
          headers: {
            'User-Agent': 'Mozilla/5.0',
          }
        });

        const html = res.data;

        const match = html.match(/"contentUrl":"(https:\/\/v[^"]+\.mp4[^"]*)"/);

        if (match) {
          video = match[1].replace(/\\u002F/g, '/');
        }

      } catch {}
    }

    // 🔁 MÉTODO 3 (OpenGraph fallback)
    if (!video) {
      try {
        const res = await axios.get(url);
        const match = res.data.match(/property="og:video" content="([^"]+)"/);

        if (match) video = match[1];
      } catch {}
    }

    // ❌ Se não achou
    if (!video) {
      return enviar('❌ Não consegui baixar esse vídeo do Pinterest.');
    }

    // ✅ Enviar vídeo
    await sock.sendMessage(from, {
      video: { url: video },
      caption: '🎯 Vídeo baixado com sucesso!'
    }, { quoted: info });

  } catch (e) {
    console.log(e);
    enviar('❌ Erro ao processar o vídeo.');
  }
}
break;

case 'prefixatv':{
if(!isGroup) return enviar(mess.respondGroup())
if(!isCreator) return enviar(mess.respondDono());
const Ativado = ".";
const Desativado = "⠀";
if(setting.prefix === Ativado){
setting.prefix = Desativado;
enviar('*𝖯𝗋𝖾𝖿𝗂𝗑𝗈 𝖽𝖾𝗌𝖺𝗍𝗂𝗏𝖺𝖽𝗈 ✅🛠️*');
} else {
setting.prefix = Ativado;
enviar('*𝖯𝗋𝖾𝖿𝗂𝗑𝗈 𝖺𝗍𝗂𝗏𝖺𝖽𝗈 ✅🛠️*');
}
fs.writeFileSync('./arquivo/settings/setting.json',JSON.stringify(setting, null, 2));
}
break

case 'ativicch': {
if(!isGroup) return enviar(mess.respondGroup())
if(!isCreator) return enviar(mess.respondDono());
const NkAtivado = "120363407528864978@newsletter";
const NkDesativado = "@newsletter";
if (setting.channelnk === NkAtivado) {
setting.channelnk = NkDesativado;
enviar(`*ᴄʜᴀɴɴᴇʟ ᴅᴇꜱᴀᴛɪᴠᴀᴅᴏ ✅🙇‍♂️*`);
} else {
setting.channelnk = NkAtivado;
enviar(`*ᴄʜᴀɴɴᴇʟ ᴀᴛɪᴠᴀᴅᴏ ✅🙇‍♂️*`);
}
fs.writeFileSync('./arquivo/settings/setting.json', JSON.stringify(setting, null, 2));
}
break

case 'endereço': {
if(!isGroup) return enviar(mess.respondGroup())
if(!isCreator) return enviar(mess.respondDono());
const cep = args[0];    
const numero = args[1];  
if (!cep || !numero) return enviar('❌ Informe o CEP e o número da casa.\nEx: /endereço 88505126 123');
const axios = require('axios');
 (async () => {
 try {
const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
if (response.data.erro) return enviar('❌ CEP não encontrado.');
const { logradouro, bairro, localidade, uf } = response.data;
if (!logradouro) return enviar('❌ Não foi possível localizar a rua desse CEP.');
const enderecoCompleto = `${logradouro}, ${numero}, ${bairro}, ${localidade}, ${uf}`;
const enderecoEnc = encodeURIComponent(enderecoCompleto);
const linkGoogle = `https://www.google.com/maps/search/?api=1&query=${enderecoEnc}`;
const mensagem = `
📡 *𝚂𝚄𝙰 𝙻𝙾𝙲𝙰𝙻𝙸𝚉𝙰𝙲̧𝙰̃𝙾 𝚁𝙴𝙰𝙻*

📌 *Endereço:* ${enderecoCompleto}
🌍 *Google Maps:* [Abrir no Maps](${linkGoogle})

🔍 𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰́ 𝚂𝚄𝙰 𝙻𝙾𝙲𝙰𝙻𝙸𝚉𝙰𝙲̧𝙰̃𝙾 𝙰𝚃𝚄𝙰𝙻 
`;
enviar(mensagem);
 } catch (error) {
console.error(error);
enviar('❌ Ocorreu um erro ao consultar o CEP.');}
})();
break;
}

case 'clima': 
if(!isGroup) return enviar(mess.respondGroup())
 try {
if (!args[0]) {
return enviar('🪄 Por favor, informe o nome da cidade. Exemplo: /clima sp'); }
const cidade = args.join(' ');
const url = `https://wttr.in/${encodeURIComponent(cidade)}?format=j1`;
const response = await axios.get(url);
const weather = response.data;
if (!weather || !weather.current_condition || !weather.current_condition[0]) {
return enviar('🛠️ Cidade não encontrada! Tente novamente com o nome correto.'); }
const condition = weather.current_condition[0];
const descricao = condition.weatherDesc[0].value;
const temperatura = condition.temp_C + '°C';
const umidade = condition.humidity + '%';
const vento = condition.windspeedKmph + ' km/h';
const mensagem = `
🌤 *Clima Atual em ${cidade.toUpperCase()}:* 🌤

🔹 *Descrição:* ${descricao}
🔹 *Temperatura:* ${temperatura}
🔹 *Umidade:* ${umidade}
🔹 *Vento:* ${vento}
        `;

await sock.sendMessage(from, { text: mensagem }, { quoted: info });
 } catch (error) {
console.log('Erro ao buscar o clima:', error);
enviar('🗝️ Ocorreu um erro ao buscar o clima. Tente novamente mais tarde.'); }
break;

case 'report':
case 'bug':
if(!isGroup) return enviar(mess.respondGroup())
if (!q) return enviar('Ex: bug no menu..')
enviar(`Obrigada pela colaboração, o bug foi reportado ao meu criador...
<♨️>bugs falsos nao serão respondidos`)
let templateMesssage = {
image: {url: jpgBot,
quoted: loc},
caption: `♨️𝗨𝗺 𝗕𝘂𝗴♨️\nEnviado por: @${pushname.split('@')[0]},\nReportou:\n${q}`,
footer: 'Noelle_md'
}
sock.sendMessage("5511953265144@s.whatsapp.net",templateMesssage)
break

case 'novocmd':
if(!isGroup) return enviar(mess.respondGroup())
if (!q) return enviar('Ex: novocmd coloca antilink')
enviar(`Obrigada pela colaboração, a sua idea foi reportada ao meu criador 😊`)
const qp = args.join(" ")
let templateMessage = {
image: {url: jpgBot,
quoted: loc},
caption: `♨️IDEIA DE CMD♨️\nEnviado por: @${pushname.split('@')[0]},\nA Ideia É:\n ${q}`,
footer: 'Noelle_md'
}
sock.sendMessage("5511953265144@s.whatsapp.net",templateMessage)
break

case 'autorizar':
case 'aceitar':
case '✅': {
if(!isGroup) return enviar(mess.respondGroup())
if (!isGroupAdmins) return enviar(respondAdm())
if (!isBotGroupAdmins) return enviar(respondBot())
const req = await sock.groupRequestParticipantsList(from)
if (req.length === 0) {
return enviar(`*𝙽𝙰̃𝙾 𝚃𝙴𝙼 𝙽𝙴𝙽𝙷𝚄𝙼𝙰 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝙰𝙲𝙰̃𝙾 𝙽𝙾 𝙶𝚁𝚄𝙿𝙾 🙇🏻‍♂️*`) }
for (let i of req) {
await sock.groupRequestParticipantsUpdate(from, [i.jid], "approve")}
enviar('*𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝙰𝙲𝙾𝙴𝚂 𝙰𝙲𝙴𝙸𝚃𝙰𝚂!! 🙇🏻‍♂️*') }
break;

case 'recusar': case '❌': {
if(!isGroup) return enviar(mess.respondGroup())
if (!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
const req = await sock.groupRequestParticipantsList(from) 
let totalRequest = req.length
if (totalRequest == 0) return enviar(`*𝙽𝙰̃𝙾 𝚃𝙴𝙼 𝙽𝙴𝙽𝙷𝚄𝙼𝙰 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝙰𝙲𝙰̃𝙾 𝙽𝙾 𝙶𝚁𝚄𝙿𝙾 🙇🏻‍♂️*`)
for (let i of req) {
let userJid = i.jid 
await sock.groupRequestParticipantsUpdate(from, [userJid], "reject") 
}
enviar('*𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝙰𝙲𝙾𝙴𝚂 𝚁𝙴𝙲𝚄𝚂𝙰𝙳𝙰𝚂!!🙇🏻‍♂️*')
}
break

case 'rajarlink':
case 'oikk':
try {
if (!isGroup) return enviar('Este comando só funciona em grupos.')
if (!isCreator) return reply(mess.respondDono())
const qtd = args[0] ? parseInt(args[0]) : null
if (!qtd || isNaN(qtd) || qtd < 1 || qtd > 30) return enviar('Defina uma quantidade de envios entre 1 e 30. Ex: ;kkk 5')
const metadata = await sock.groupMetadata(from)
const participantes = metadata.participants.map(p => p.id).filter(v => v !== undefined)
const texto = `🚨 *🚨 ATENÇÃO, GALERA! 🚨*
 *NOVO GRUPO ON!!!*💜💜
🔔 *GRUPO NOVO NO AR!*
👥 *Participe agora mesmo:*
👉 https://chat.whatsapp.com/DhBQSXDr4WPFbebY5MrvYe
⚠️ *IMPORTANTE:*
⛔ *Este grupo será desativado em breve!*
⚡ *Não perca tempo e garanta sua vaga no novo grupo!*
 apaga a msg aí admkkkkj
`
for (let i = 0; i < qtd; i++) {
await sleep(100)
await sock.relayMessage(from, {
requestPaymentMessage: {
currencyCodeIso4217: 'LOL',
amount1000: 0,
requestFrom: sender,
noteMessage: {
extendedTextMessage: {
                            text: `${texto}\n\n` + '𓆩'.repeat(50),
                            contextInfo: {
mentionedJid: participantes
                            }
},
},
}
}, {})
}
} catch (e) {
console.error(e)
enviar('Erro ao enviar trava pix.')
}
break

case 'ativarsair'://ʙᴏʟᴀᴅɪɴʜᴏ 
if (!isGroup) return enviar(mess.respondGroup());
if (!isGroupAdmins && !isCreator) return enviar(mess.espondAdm());
if (!isBotGroupAdmins) return enviar(mess.respondBot());
if (isWelkom3) {
dataGp[0].wellcome[0].legendasaiu1 = false;
setGp(dataGp);
enviar('*🕌𝙾 𝚁𝙴𝙲𝚄𝚁𝚂𝙾 𝚂𝙰𝙸𝚁 𝙳𝙾 𝙶𝚁𝚄𝙿𝙾 𝙵𝙾𝙸 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾 𝙲𝙾𝙼 𝚂𝚄𝙲𝙴𝚂𝚂𝙾*');
} else {
dataGp[0].wellcome[0].legendasaiu1 = true;
setGp(dataGp);
enviar('*🕌𝙾 𝚁𝙴𝙲𝚄𝚁𝚂𝙾 𝚂𝙰𝙸𝚁 𝙳𝙾 𝙶𝚁𝚄𝙿𝙾 𝙵𝙾𝙸 𝙰𝚃𝙸𝚅𝙰𝙳𝙾 𝙲𝙾𝙼 𝚂𝚄𝙲𝙴𝚂𝚂𝙾*');
}
break;

case 'audio-google': {
if (!isGroup) return enviar(mess.respondGroup());
if (!q) return enviar('Digite o texto pra virar áudio');
 try {
const axios = require('axios');
const fs = require('fs');
const texto = encodeURIComponent(q);
const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${texto}&tl=pt-BR&client=tw-ob`;
const response = await axios({
 url, method: 'GET',
responseType: 'stream'});
const caminho = './audio.mp3';
const writer = fs.createWriteStream(caminho);
response.data.pipe(writer);
writer.on('finish', async () => {
await sock.sendMessage(from, {
audio: fs.readFileSync(caminho),
mimetype: 'audio/mp4',
ptt: true
 }, { quoted: info });
fs.unlinkSync(caminho); });
  } catch (e) {
console.log(e);
enviar('Erro ao gerar áudio'); }}
break;

case 'piada': {
if (!isGroup) return enviar(mess.respondGroup());
try {
const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./SRC/piadas.json'))
const lista = data.piadas
const random = lista[Math.floor(Math.random() * lista.length)]
await sock.sendMessage(from, {
text: `😂 *PIADA DO DIA*\n\n${random}`
}, { quoted: info })
} catch (e) {
console.log(e) }}
break

case 'deletimg'://ʙᴏʟᴀᴅɪɴʜᴏ 
if(!isGroup) return enviar(mess.respondGroup())
if (!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
if(Number(args[0]) === 1){
if(isDeLimg) return enviar('🤺 A função de apagar imagens já está ativado');
dataGp[0].delimg = true
setGp(dataGp)
enviar('⚡Ativou com sucesso a função de apagar imagens no grupo')
} else if(Number(args[0]) === 0){
if(!isDeLimg) return enviar('🌀 A função de apagar imagens já está desativada')
dataGp[0].delimg = false
setGp(dataGp)
enviar('🗝️ Desativou com sucesso neste grupo a função de apagar imagens')
} else {
enviar('🕌 1 para ativar 0 para desativar')
}
break

case 'demote':{
if(!isGroup) return enviar(mess.respondGroup())
if (!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
let marq = obterMencionar(info);
if(!marq) return enviar('Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...')
if(!JSON.stringify(groupMembers).includes(marq)) return enviar('Este usuário foi removido do grupo ou saiu, não será possível promover..');
sock.sendMessage(from, {text: `@${marq.split("@")[0]} Foi rebaixado para [ MEMBRO COMUM ] com sucesso.`, mentions: [marq]})
sock.groupParticipantsUpdate(from, [marq], "demote") 
} 
break

case 'promote':
if(!isGroup) return enviar(mess.respondGroup())
if (!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
let marq = obterMencionar(info);
if(!marq) return enviar('Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...')
if(!JSON.stringify(groupMembers).includes(marq)) return enviar('Este usuário foi removido do grupo ou saiu, não será possível promover..');
sock.sendMessage(from, {text: `@${marq.split("@")[0]} Foi promovido(a) para adm com sucesso.`, mentions: [marq]})
sock.groupParticipantsUpdate(from, [marq], "promote")  
break

case 'owner': case 'criador': case 'dono': case 'info':
await reagir(from, "👨🏻‍💻");
numerodn = phoneNumber
await sock.sendMessage(from, {image: {url: jpgBot}, caption: mess.infoOwner(prefix, NickDono, numerodn, nomeBot, sender), mentions: [sender]}, {quoted: loc})
break

case 'infobot':
case 'ping': {
if(!isGroup) return enviar(mess.respondGroup())
const dataa = moment.tz("America/Sao_Paulo").format("DD/MM/YY");
let timestamp = speed();
let latensi = speed() - timestamp;
let uptime = process.uptime();
let botinfo = `
❄️|┈━═☆ 𝐈𝐍𝐅𝐎 𝐃𝐎 𝐁𝐎𝐓 ☆═━┈|❄️
  
╭❈֟━❄️━֟✧⊰❖⊱❆✧━֟━❄️━֟❈╮
┃❆𝆺𝅥⏰ 𝐇𝐎𝐑𝐀  »  ${hora}
┃❆𝆺𝅥📅 𝐃𝐀𝐓𝐀 »  ${dataa}
┃❆𝆺𝅥🤖 𝐍𝐎𝐌𝐄 »  ${nomeBot}
┃❆𝆺𝅥🔰 𝐏𝐑𝐄𝐅𝐈𝐗𝐎 » 𝓼𝓮𝓶 𝓹𝓻𝓮𝓯𝓲𝔁𝓸
┃❆𝆺𝅥⚡ 𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃𝐄 »  ${latensi.toFixed(4)} seg
┃❆𝆺𝅥📲 𝐃𝐈𝐒𝐏𝐎𝐒𝐈𝐓𝐈𝐕𝐎 »  ${deviceType}
┃❆𝆺𝅥⏳ 𝐎𝐍𝐋𝐈𝐍𝐄 »  ${runtime(uptime)}
┃❆𝆺𝅥💾 𝐌𝐄𝐌𝐎𝐑𝐈𝐀 »  ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┃❆𝆺𝅥👤 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 »  ${pushname}
╰❈֟━❄️━֟✧⊰❖⊱❆✧━֟━❄️━֟❈╯`
sock.sendMessage(
from,
{image: { url: jpgBot },
caption: botinfo,
contextInfo: {
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: `${setting.channelnk}`,
newsletterName: `${nomeBot}` }}},
{ quoted: loc } ); }
break;

case 'rvisu': case 'revelarvisu': case 'open':
if(!isGroup) return enviar(mess.respondGroup())
if (!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
  try{    
if(JSON.stringify(info).includes("videoMessage")) {
var vio = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var viewImage = vio?.imageMessage || info.message?.imageMessage || vio?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || vio?.viewOnceMessage?.message?.imageMessage
var viewVideo = vio?.videoMessage || info.message?.videoMessage || vio?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || vio?.viewOnceMessage?.message?.videoMessage
viewVideo.viewOnce = false
viewVideo.video = {url: viewVideo.url}
viewVideo.caption += "El vídeo fue *Revelado*"
sock.sendMessage(from, viewVideo)
  } else {
var vio = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var viewImage = vio?.imageMessage || info.message?.imageMessage || vio?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || vio?.viewOnceMessage?.message?.imageMessage
var viewVideo = vio?.videoMessage || info.message?.videoMessage || vio?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || vio?.viewOnceMessage?.message?.videoMessage
viewImage.viewOnce = false
viewImage.image = {url: `${viewImage.url}`}
viewImage.caption += "😼"
sock.sendMessage(from, viewImage) }
  } catch(e){
console.log(e)
enviar(e) }
break

case 'wprivacygp': {
if(!isGroup) return enviar(mess.respondGroup())
if (!isCreator) return enviar('❌ Apenas o dono pode usar este comando.')
const opcao = args[0]
if (!opcao) {
return enviar(
`Use assim:
${prefix + command} all
${prefix + command} contacts
${prefix + command} none`
)}
if (!['all','contacts','none'].includes(opcao)) {
return enviar('❌ Opção inválida.\nUse: all, contacts ou none') }
try {
await sock.updateGroupsAddPrivacy(opcao)
let msg = {
all: '✅ Agora qualquer pessoa pode adicionar o bot em grupos.',
contacts: '📱 Apenas contatos podem adicionar o bot em grupos.',
none: '🔒 Ninguém pode adicionar o bot em grupos. Apenas por link.' }
enviar(msg[opcao])
} catch (err) {
console.log(err)
enviar('❌ Erro ao alterar a privacidade.')
}}
break

case 'casepv': {
try {
if (!isGroup) return enviar(mess.respondGroup());
if (!isCreator) return enviar('❌ Só o dono pode usar.')

    if (!q) return enviar('Ex: casepv menu/@usuario ou casepv menu/558899999999')

    await reagir(from, "🙌")

    let [nomeCase, destino] = q.split('/')
    if (!nomeCase || !destino) return enviar('❌ Use: casepv nomecase/@usuario ou casepv nomecase/numero')

    const file = fs.readFileSync('./index.js', 'utf-8')
    const regex = new RegExp(`case ['"\`]${nomeCase}['"\`][\\s\\S]*?break`, 'i')
    const match = file.match(regex)
    if (!match) return enviar('❌ Case não encontrada.')

    const caseText = `${match[0]}\n\n//《• by: Boladinho-Domina •》`

    let alvo

    // Pega menção de info (ou vazio)
    const mention = info?.message?.extendedTextMessage?.contextInfo?.mentionedJid || []

    if (destino.startsWith("@")) {
        if (!mention.length) return enviar("❌ Marque o usuário corretamente.")
        alvo = mention[0]
    } else {
        let numero = destino.replace(/\D/g, '')
        if (!numero) return enviar("❌ Número inválido.")
        alvo = numero + "@s.whatsapp.net"
    }

    await sock.sendMessage(alvo, { text: caseText })
    enviar(`✅ Case *${nomeCase}* enviada no privado com sucesso!`)

} catch (err) {
    console.error(err)
    enviar('❌ Erro ao puxar ou enviar a case!')
}
break
}

case 'numero-dono':
if(!isCreator && !info.key.fromMe) return enviar(mess.respondDono())
if(q.match(/[a-z]/i)) return enviar("É apenas números..")
setting.numerodono = q.trim().replace(new RegExp("[()+-/ +/]", "gi"), "");
fs.writeFileSync('./arquivo/settings/setting.json', JSON.stringify(setting, null, 2))
enviar(`*𝙲𝙴𝚁𝚃𝙾 𝙼𝙴𝚂𝚃𝚁𝙴, 𝙰𝙶𝙾𝚁𝙰 𝚂𝙴𝚄 𝙽Ú𝙼𝙴𝚁𝙾 É 𝙴𝚂𝚂𝙴 ${q} 🙆🏻‍♂️*`)
break

case 'chuiolm': case 'pmders': {
if (!isGroup) return
const dataa = moment.tz("America/Sao_Paulo").format("DD/MM/YY");
let timestamp = speed()
let latensi = speed() - timestamp
uptime = process.uptime()
botinfo = `
       🌸 INFO DO BOT 🌙
╭❈֟━❄️━֟✧⊰❖⊱❆✧━֟━❄️━֟❈╮
   ⏰ 𝐇𝐎𝐑𝐀  »  ${hora}
   📅 𝐅𝐄𝐂𝐇𝐀 »  ${dataa}
   🤖 𝐍𝐎𝐌𝐁𝐑𝐄 »  ${nomeBot}
   🔰 𝐏𝐑𝐄𝐅𝐈𝐉𝐎 »  𝓜𝓾𝓵𝓽𝓲𝓹𝓻𝓮𝓯𝓲𝓳𝓸
   ⚡ 𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃 »  ${latensi.toFixed(4)} seg
   📲 𝐃𝐈𝐒𝐏𝐎𝐒𝐈𝐓𝐈𝐕𝐎 »  ${deviceType}
   ⏳ 𝐄𝐍 𝐋𝐈𝐍𝐄𝐀 »  ${runtime(uptime)}
   💾 𝐌𝐄𝐌𝐎𝐑𝐈𝐀 »  ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
   👤 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 »  ${pushname}
╰❈֟━❄️━֟✧⊰❖⊱❆✧━֟━❄️━֟❈╯
`
sock.sendMessage(from, { image: { url: jpgBot }, caption: botinfo }, { quoted: info })
}
break

case 'ping2':
await reagir(from, "⚡");
const speedConverted = ((Date.now() / 1000) - info.messageTimestamp).toFixed(3);
const hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const data1 = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
const ramLivre = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
const tempoOnline = TimeCount(process.uptime());
// Barra de qualidade
let quality = speedConverted < 1 ? "▓▓▓▓▓▓▓▓▓▓ (100%)" :
speedConverted < 2 ? "▓▓▓▓▓▓░░░░ (60%)" :
"▓▓▓░░░░░░ (30%)";
let statusPing = speedConverted < 1 ? "🟢 Excelente" : speedConverted < 2 ? "🟡 Moderado" : "🔴 Lento";
enviar(`👤 *𝚄𝚂𝚄𝙰́𝚁𝙸𝙾:* ${pushname}
⚡ *𝚅𝙴𝙻𝙾𝙲𝙸𝙳𝙰𝙳𝙴:* ${speedConverted} *s*
📶 *𝚀𝚄𝙰𝙻𝙸𝙳𝙰𝙳𝙴:* ${quality}
✅ *𝚂𝚃𝙰𝚃𝚄𝚂:* ${statusPing}
📆 *𝙳𝙰𝚃𝙰:* ${data1}
⏰ *𝙷𝙾𝚁𝙰:* ${hora1}
📉 *𝚁𝙰𝙼 𝙻𝙸𝚅𝚁𝙴:* ${ramLivre} *GB*
🔋 *𝚃𝙴𝙼𝙿𝙾 𝙾𝙽𝙻𝙸𝙽𝙴:* ${tempoOnline}
🤖 *𝙱𝙾𝚃:* ${nomeBot}`)
break

case 'so_dono':
case 'bot':
if(!isGroup) return enviar('kk')
if(!isBotoff) {
nescessario.botoff = true
setNes(nescessario)
enviar('*𝙾 𝙱𝙾𝚃 𝙵𝙾𝙸 𝙳𝙴𝚂𝙻𝙸𝙶𝙰𝙳𝙾 𝙲𝙾𝙼 𝚂𝚄𝙲𝙴𝚂𝚂𝙾 𝙿𝚁𝙰 𝚄𝚂𝙾 𝙳𝙴 𝙼𝙴𝙼𝙱𝚁𝙾𝚂 𝙴 𝙰𝙳𝙼𝚂 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂 🙇🏻‍♂️*');
} else if(isBotoff) {
nescessario.botoff = false
setNes(nescessario)
enviar(`*𝙰𝚃𝙸𝚅𝙰𝙽𝙳𝙾 𝚃𝙾𝙳𝙾𝚂 𝙾𝚂 𝙵𝚄𝙽𝙲𝙸𝙾𝙽𝙰𝙼𝙴𝙽𝚃𝙾𝚂 𝙳𝙾 𝙱𝙾𝚃 𝙽𝙾𝚅𝙰𝙼𝙴𝙽𝚃𝙴 🙇🏻‍♂️*`)
}
break

case 'perfil2': { 
try {
const mentionMessage = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || info.message?.extendedTextMessage?.contextInfo?.participant || null;
if (mentionMessage) {
await enviar("*Gerando um personalidadealeatória dessa pessoa, aguarde um momento... 🤗*");
/** Função para pegar palavras aleatoriamente */
const randomFromArray = (array) => array[Math.floor(Math.random() * array.length)];
/** Pega a imagem */
const getProfileUrl = await sock.profilePictureUrl(mentionMessage, 'image').catch(() => "https://telegra.ph/file/b5427ea4b8701bc47e751.jpg");
/** Pode add mais... */
const types = {
genders: ["Gay 🏳️‍🌈", "Masculino 💪", "Feminino 🦋", "Trans 🏳️‍⚧️", "Lésbica 👩‍❤️‍👩"],
hobbies: ["Cozinhar 🍜", "Ler livros 📚", "Estudar 🎒", "Praticar esportes ⛹️", "Correr 🏃", "Ouvir música 🎧", "Dançar 💃", "Cantar 🎤", "Viajar 🛫", "Jogar video-gamer 🎮"],
professions: ["Médico", "Engenheiro", "Professor", "Artista", "Designer", "Programador", "Músico", "Escritor", "Puta"],
favoriteTimesOfDay: ["Manhã 🌤", "Tarde 🌅", "Noite 🌌", "Madrugada 🌃"],
favoriteMusicGenres: ["Rock", "Pop", "Jazz", "Sertanejo", "Funk", "Clássica", "Eletrônica"],
favoriteTemperatura: ["Frio 🥶", "Quente 🥵", "Morno 🙂‍↕"]
};
/** Função para criar um resultado da personalidade */
function getResults() {
return {
genero: randomFromArray(types.genders),
hobbie: randomFromArray(types.hobbies),
job: randomFromArray(types.professions),
clima: randomFromArray(types.favoriteTimesOfDay),
estilo_musical: randomFromArray(types.favoriteMusicGenres),
temperatura: randomFromArray(types.favoriteTemperatura)
}
}
/** Retonarndo resultado akkaka */
const b = getResults();
await sock.sendMessage(from, {
image: {
url: getProfileUrl,
}, 
caption: `• 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 𝐃𝐀 𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐋𝐈𝐃𝐀𝐃𝐄 𝐃𝐄@${mentionMessage.split("@")[0]} ✨ ↴\n-\n ░⃟⃛ ➮𝐄𝐒𝐓𝐀 𝐏𝐄𝐒𝐒𝐎𝐀 𝐏𝐄𝐒𝐒𝐎𝐀𝐋𝐌𝐄𝐍𝐓𝐄 𝐄: *${b.genero}*\n ░⃟⃛ ➮𝐆𝐎𝐒𝐓𝐄 𝐃𝐄: *${b.hobbie}*\n ░⃟⃛ ➮𝐒𝐔𝐀 𝐏𝐑𝐎𝐅𝐈𝐒𝐒𝐀𝐎: *${b.job}*\n ░⃟⃛ ➮𝐀 𝐇𝐎𝐑𝐀 𝐅𝐀𝐕𝐎𝐑𝐈𝐓𝐀 𝐃𝐎 𝐃𝐈𝐀 𝐄:́ *${b.clima}*\n ░⃟⃛ ➮𝐒𝐄𝐔 𝐄𝐒𝐓𝐈𝐋𝐎 𝐃𝐄 𝐌𝐔𝐒𝐈𝐂𝐀 𝐄:́ *${b.estilo_musical}*\n ░⃟⃛ ➮𝐓𝐄𝐌𝐏𝐄𝐑𝐀𝐓𝐔𝐑𝐀 𝐅𝐀𝐕 𝐄:́ *${b.temperatura}*\n-\n\n• 𝐄𝐒𝐏𝐄𝐑𝐎 𝐓𝐄𝐑 𝐀𝐂𝐄𝐑𝐓𝐀𝐃𝐎 𝐏𝐄𝐋𝐎 𝐌𝐄𝐍𝐎𝐒 𝐔𝐌𝐀 𝐇𝐄𝐈𝐍 @${mentionMessage.split("@")[0]} 👀`,
mentions: [mentionMessage, sender]
}, {
quoted: loc
});
}
else {
enviar("Mencione o '@' ou a mensagem de alguém...");
}
} catch (err) {
console.error(err);
enviad("*Ops! Algo inesperado aconteceu. ❌*");
}
break;
}

case 'audio-menu'://ʙᴏʟᴀᴅɪɴʜᴏ
if(!isGroup) return enviar(mess.respondGroup())
if(!isGroupAdmins) return enviar(mess.respondAdm())
if(!isBotGroupAdmins) return enviar(mess.respondBot())
if(!isAudioMenu) {
dataGp[0].menu_audio = true
setGp(dataGp)
enviar(`*𝙾 𝚁𝙴𝙲𝚄𝚁𝚂𝙾 𝙵𝙾𝙸 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾 𝙲𝙾𝙼 𝚂𝚄𝙲𝙴𝚂𝚂𝙾 🙇🏻‍♂️ 🙇🏻‍♂️*`)
} else if(isAudioMenu) {
dataGp[0].menu_audio = false
setGp(dataGp)
enviar('*𝐂𝐄𝐑𝐓𝐎 𝐌𝐄𝐒𝐓𝐑𝐄 𝐀𝐂𝐀𝐁𝐄𝐈 𝐃𝐄 𝐀𝐓𝐈𝐕𝐀𝐑 𝐎 𝐀𝐔𝐃𝐈𝐎-𝐌𝐄𝐍𝐔 🙇🏻‍♂️ 🙇🏻‍♂️*');
}
break

case 'figuanime':
if (isAudioMenu) {
await sendAudioMenu(from); }
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return enviar("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamunjsjsjw() {
sock.sendMessage(from, { sticker: { url: `https://zero-two-apis.com.br/sticker/figanime?apikey=${apizero}`} })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamunjsjsjw()
}
break

case 'figucoreana':
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return enviar("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamunjs() {
sock.sendMessage(from, { sticker: { url: `https://zero-two-apis.com.br/sticker/figcoreana?apikey=${apizero}`} })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamunjs()
}
break

case 'tagme':
const tagme = `@${sender.split("@")[0]} ✔️`
await mentions(tagme, [sender], true)
break

case'take':{
const s=info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage;
if(!s)return enviar(`Marque uma figurinha.\nUse:${prefix}take`,{reagir:"😿"});
try{
const r=JSON.parse(fs.readFileSync('./SRC/take.json')),u=r.find(i=>i.usuario===sender);
if(!u)return enviar(`Use ${prefix}rgtake sylpha|bot para registrar.`,{reagir:"😿"});
const i=getRandom('.webp'),o=getRandom('.webp'),e=getRandom('.exif');
fs.writeFileSync(i,await getFileBuffer(s,'sticker'));
const m={"sticker-pack-name":u.mcdagua1.trim(),"sticker-pack-publisher":u.mcdagua2.trim()};
const h=Buffer.from([73,73,42,0,8,0,0,0,1,0,65,87,7,0,0,0,0,0,22,0,0,0]);
const jb=Buffer.from(JSON.stringify(m));
const ex=Buffer.concat([h,jb]);
ex.writeUIntLE(jb.length,14,4);
fs.writeFileSync(e,ex);
exec(`webpmux -set exif ${e} ${i} -o ${o}`,async er=>{
if(er)enviar("Erro ao aplicar metadados.",{reagir:"⚠️"});
else await sock.sendMessage(from,{sticker:fs.readFileSync(o)},{quoted:info}),await reagir(from,"✅");
[i,o,e].forEach(f=>fs.existsSync(f)&&fs.unlinkSync(f));
});
}catch{return enviar("Erro ao processar figurinha.",{reagir:"😿"})}
break;
}

case 'rgtake' :{
const [TP, TP2] = q.split("|");
let rgtake = [];
try { rgtake = JSON.parse(fs.readFileSync('./SRC/take.json')); } catch {}
if (!TP || !TP2) return enviar(`Use assim: *${prefix + command} sylpha|bot*`);
if (rgtake.find(i => i.usuario === sender)) return enviar("Você já registrou sua marca d'água.");
rgtake.push({ usuario: sender, mcdagua1: TP, mcdagua2: TP2 });
fs.writeFileSync('./SRC/take.json', JSON.stringify(rgtake, null, 2));
enviar(`✅ Registro feito! Use: *${prefix}take*`);
break;
}

case 'estrupar':
if (!isGroup) return enviar('❌ Só em Grupo');
if(!isModobn && !isCreator) 
return enviar(`⚠️ Ative o modo de brincadeira antes, ex: ${prefix}modobrincadeira 1`);
reagir(from, "🍆");
let mencione = obterMencionar(info);
if(!mencione) return enviar('mencione alguém');
if(mencione === owner) return enviar('🚫 No meu dono não, sua puta. Mas eu posso fuder você 😏');
await sock.sendMessage(from, {
video: { url: `https://files.catbox.moe/tw5gza.mp4` },
gifPlayback: true,
caption: `*_O(a) ${pushname} 🍆 ACABOU DE ESTUPRAR:_*\n👉 @${mencione.split('@')[0]} 🍑`,
mentions: [mencione]
}, { quoted: info });
break;

case 'nome-bot':
if(!isCreator && !info.key.fromMe) return enviar (mess.respondDono())
setting.nomeBot = q.trim()
fs.writeFileSync('./arquivo/settings/setting.json', JSON.stringify(setting, null, 2))
enviar(`*𝙿𝚁𝙾𝙽𝚃𝙾 𝙼𝙴𝚂𝚃𝚁𝙴, 𝙰𝙶𝙾𝚁𝙰 𝙼𝙴𝚄 𝙽𝙾𝙼𝙴 𝙴𝚂𝚃Á 𝙲𝙾𝙼𝙾 ${setting.nomeBot} 🙇🏻‍♂️*`)
break

case 'nick-dono':
if(!isCreator && !info.key.fromMe) return enviar(mess.respondDono()) 
setting.NickDono = q.trim()
fs.writeFileSync('./arquivo/settings/setting.json', JSON.stringify(setting, null, 2))
enviar(`*𝙲𝙴𝚁𝚃𝙾 𝚂𝙴𝙽𝙷𝙾𝚁, 𝙰𝙶𝙾𝚁𝙰 𝙾 𝚂𝙴𝚄 𝙽𝙸𝙲𝙺 𝙴́  ${setting.NickDono} 🙅🏻‍♂️*`)
break

case 'figurinha': {
if(!q) return enviar(`Por favor, *digite a qtd de figurinhas,* exemplo ${prefix}figurinha 4`)
const figurinhas = fs.readdirSync('./arquivo/figuras')
let qtd = parseInt(args[0]) || 1
if(qtd > 10) return enviar('⚠️ Máximo de 10 figurinhas por vez')
if(qtd > figurinhas.length) qtd = figurinhas.length
let lista = figurinhas.sort(() => 0.5 - Math.random()).slice(0, qtd)
for (let f of lista) {
await sock.sendMessage(from, {
sticker: fs.readFileSync(`./arquivo/figuras/${f}`)
})
}

}
break;

case 'cobrar': { 
if (!isGroup) return enviar("❌ Apenas o dono do bot pode usar este comando.");
  try {
if (!q) return enviar("❌ Uso correto: ?cobrar <número> | <mensagem>\nExemplo: ?cobrar 5511999999999 | Seu período acabou!");
const [devedorNumeroRaw, ...mensagemArr] = q.split("|");
const devedorNumero = devedorNumeroRaw.trim();
const mensagemPersonalizada = mensagemArr.join("|").trim();
if (!devedorNumero) return enviar("❌ Insira o número do devedor. Exemplo: ?cobrar 5511999999999 | Mensagem");
if (!mensagemPersonalizada) return enviar("❌ Insira a mensagem que deseja enviar.");
const mensagemCobranca = `⚠️ Cobrança de: ${pushname}\n\n${mensagemPersonalizada}\n\n📌 Contato: https://wa.me/5511922342959`;
await sock.sendMessage(
`${devedorNumero}@s.whatsapp.net`,
{ text: mensagemCobranca });
enviar(`✅ Mensagem de cobrança enviada para ${devedorNumero}`);
  } catch (err) {
console.log(err);
enviar("❌ Ocorreu um erro ao tentar enviar a mensagem de cobrança."); }}
break;

case 'fundomenu': {
if (!isGroup) return enviar('kkkk');
const msg = info.message?.extendedTextMessage?.contextInfo?.quotedMessage || info.message || {};
const v = msg.videoMessage || msg.viewOnceMessage?.message?.videoMessage || msg.viewOnceMessageV2?.message?.videoMessage;
const i = msg.imageMessage || msg.viewOnceMessage?.message?.imageMessage || msg.viewOnceMessageV2?.message?.imageMessage;
const pastaLogos = './INFON/LOGOS';
  if (!fs.existsSync(pastaLogos)) fs.mkdirSync(pastaLogos, { recursive: true });
  const caminhoImagem = `${pastaLogos}/fotomenu.png`;
  const caminhoVideo = `${pastaLogos}/fotomenu.mp4`;
  if (v) {
reagir(from, "⏳");
const buffer = await getFileBuffer(v, 'video');
if (fs.existsSync(caminhoImagem)) fs.unlinkSync(caminhoImagem);
fs.writeFileSync(caminhoVideo, buffer);
reagir(from, "✅");
return enviar('*🎬 Vídeo do menu atualizado com sucesso!*'); }
 if (i) {
reagir(from, "⏳");
const buffer = await getFileBuffer(i, 'image');
if (fs.existsSync(caminhoVideo)) fs.unlinkSync(caminhoVideo);
fs.writeFileSync(caminhoImagem, buffer);
reagir(from, "✅");
return enviar('*🖼️ Imagem do menu atualizada com sucesso!*'); }
enviar('*❌ Ei mestre, responda com uma imagem ou vídeo para atualizar o menu!*'); }
break;

case 'figuemoji':
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return enviar("Digite a quantidade de figurinhas que deseja que eu envie.. máximo 10..")
for (let i = 0; i < q; i++) {
await sleep(680)
sock.sendMessage(from, { sticker: { url: `https://zero-two-apis.com.br/sticker/figemoji?apikey=${apizero}` } })
}
break

case 'gerar_codigo':
const codigo = generarCodigo();
sock.sendMessage(from, { text: `🧑‍💻 Seu código é: ${codigo}` });
break;

case 'fotoperfil': {
    try {
        let ppimg;
        try {
            ppimg = await sock.profilePictureUrl(sender, 'image'); 
        } catch {
            ppimg = 'https://img2.pixhost.to/images/5695/694332625_13a80e044aaef1ff8b42.jpg';
        }

        const pegarimg = await getBuffer(ppimg);

        // Envia apenas a imagem com legenda
        await sock.sendMessage(sender, { 
            image: pegarimg, 
            caption: '*Olá humano... Aqui está sua foto de perfil!*'
        }, { quoted: info });

    } catch (err) {
        console.log('Erro ao enviar foto de perfil:', err);
        await sock.sendMessage(sender, { text: 'Ocorreu um erro ao tentar enviar sua foto de perfil.' }, { quoted: info });
    }
}
break;

case 'getquoted':
case 'getinfo':
case 'get':
case 'mek': {
const teks = JSON.stringify(info, null, 2)
await enviar(`\`\`\`json\n${teks}\n\`\`\``) }
break

case 'console':
if (!isGroup) return enviar(mess.respondGroup())
if(!isCreator) return enviar(mess.respondDono());
if(Number(args[0]) === 1){
if(isConsole) return enviar('*Já está ativo')
dataGp[0].console = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de console ✔')
} else if(Number(args[0]) == 0){
if(!isConsole) return enviar('Já está desativado')
dataGp[0].console = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de console ✔')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'autorepo':
if (!isGroup) return enviar(mess.respondGroup())
if(!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
if(Number(args[0]) === 1){
if(isAutorepo) return enviar('*Já está ativo')
dataGp[0].autorepo = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de auto resposta neste grupo ✔')
} else if(Number(args[0]) == 0){
if(!isAutorepo) return enviar('Já está desativado')
dataGp[0].autorepo = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de auto resposta neste grupo ✔')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'odelete':
if (!isGroup) return enviar(mess.respondGroup())
if(!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
if(Number(args[0]) === 1){
if(IS_DELETE) return enviar('*Já está ativo')
dataGp[0].Odelete = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de deletar msg neste grupo ✔')
} else if(Number(args[0]) == 0){
if(!IS_DELETE) return enviar('Já está desativado')
dataGp[0].Odelete = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de deletar msg neste grupo ✔')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'catalogo': {
if (!isGroup) return enviar('kkk')
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins)
return sock.sendMessage(from, { text: 'somente dono ou adm' })
let media = await prepareWAMessageMedia({
image: { url: 'https://i.ibb.co/tp9crmQc/img-1773441546804.jpg' } 
}, { upload: sock.waUploadToServer })
let catalogo = generateWAMessageFromContent(from, proto.Message.fromObject({
productMessage: {
product: {
productImage: media.imageMessage,
thumbnail: null,
productId: "bot",
title: "𝙽𝙴𝚄𝚁𝙰-𝚇 💾",
description: "👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯👨‍🦯",
currencyCode: "BRL",
priceAmount1000: "1000",
retailerId: "Boladin",
url: "https://wa.me/5511953265144"
},
businessOwnerJid: "5511953265144@s.whatsapp.net"
}
}), { userJid: from, quoted: info })

await sock.relayMessage(from, catalogo.message, { messageId: catalogo.key.id })

}
break

case 'anticatalog':
if (!isGroup) return enviar(mess.respondGroup())
if(!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
if(Number(args[0]) === 1){
if(isAntiCatalog) return enviar('*Já está ativo')
dataGp[0].anticatalog = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de Anticatalogo neste grupo ✔')
} else if(Number(args[0]) == 0){
if(!isAntiCatalog) return enviar('Já está desativado')
dataGp[0].anticatalog = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de Anticatalogo neste grupo ✔')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'antiloc':
if (!isGroup) return enviar(mess.respondGroup())
if(!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
if(Number(args[0]) === 1){
if(isAntiLoc) return enviar('*Já está ativo')
dataGp[0].antiloc = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de Antilocalizacão neste grupo ✔')
} else if(Number(args[0]) == 0){
if(!isAntiLoc) return enviar('Já está desativado')
dataGp[0].antiloc = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de Antilocalizacão neste grupo ✔')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'antiaudio':
if (!isGroup) return enviar(mess.respondGroup())
if(!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
if(Number(args[0]) === 1){
if(isAntiAudio) return enviar('*Já está ativo')
dataGp[0].antiaudio = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de Antiaudio neste grupo ✔')
} else if(Number(args[0]) == 0){
if(!isAntiAudio) return enviar('Já está desativado')
dataGp[0].antiaudio = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de Antiaudio neste grupo ✔')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'antisticker':
if (!isGroup) return enviar(mess.respondGroup())
if(!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
if(Number(args[0]) === 1){
if(isAntiSticker) return enviar('*Já está ativo')
dataGp[0].antisticker = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de Antisticker neste grupo ✔')
} else if(Number(args[0]) == 0){
if(!isAntiSticker) return enviar('Já está desativado')
dataGp[0].antisticker = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de Antisticker neste grupo ✔')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'antictt':
if (!isGroup) return enviar(mess.respondGroup())
if(!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
if(Number(args[0]) === 1){
if(isAntiCtt) return enviar('*Já está ativo')
dataGp[0].antictt = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de antictt neste grupo ✔')
} else if(Number(args[0]) == 0){
if(!isAntiCtt) return enviar('Já está desativado')
dataGp[0].antictt = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de antictt neste grupo ✔')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'antidoc':
if (!isGroup) return enviar(mess.respondGroup())
if(!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
if(Number(args[0]) === 1){
if(isAntidoc) return enviar('*Já está ativo')
dataGp[0].antidoc = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de antidoc neste grupo ✔')
} else if(Number(args[0]) == 0){
if(!isAntidoc) return enviar('Já está desativado')
dataGp[0].antidoc = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de antidoc neste grupo ✔')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'criargp':
if (!args[0]) return enviar('Use: ' + prefix + 'criargp <nome do grupo>');
let nomeGrupos = args.join(' ');
    try {
const response = await sock.groupCreate(nomeGrupos, []); 
const groupId = response.gid || response.id;
await sock.sendMessage(from, {image: { url: 'https://files.catbox.moe/u4owqu.jpg' }, 
caption: `✅ Grupo "${nomeGrupos}" criado com sucesso!\nID: ${groupId}` });
  } catch (err) {
console.log(err);
await sock.sendMessage(from, {image: { url: './path/para/erro.jpg' }, 
caption: '_🥶Ocorreu um erro ao criar o grupo._'}); }
 break;

case 'ademoji': {
if (!isGroup) return enviar(mess.respondGroup())
if(!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
const caminhoArquivo = './arquivo/saveF/emojisBanidos.json'
let ademoji = q || (
info.message?.conversation ||
info.message?.extendedTextMessage?.text ||
info.message?.imageMessage?.caption ||
  '')
ademoji = ademoji.replace(/^\.?ademoji\s*/i, '').trim()
if (!ademoji) return enviar(`Ⓜ️ Envie algum emoji exemplo\n${budy} 🤑`)
let ademojiData = []
if (fs.existsSync(caminhoArquivo)) {
  try {
const json = fs.readFileSync(caminhoArquivo, 'utf8')
ademojiData = JSON.parse(json)
if (!Array.isArray(ademojiData)) ademojiData = []
  } catch (err) {
console.error('Erro ao ler emojisBanidos.json:', err)
ademojiData = [] }}
if (ademojiData.includes(ademoji)) {
return enviar(`⚠️ O emoji ${ademoji} já está na lista`) }
ademojiData.push(ademoji)
try {
fs.writeFileSync(caminhoArquivo, JSON.stringify(ademojiData, null, 2))
enviar(`✅ Emoji ${ademoji} adicionado com sucesso`)
} catch (err) {
console.error('Erro ao salvar emojisBanidos.json:', err)
enviar('❌ Ocorreu um erro ao salvar o emoji') }}
break

case 'antiemoji'://ʙᴏʟᴀᴅɪɴʜᴏ 
if (!isGroup) return enviar(mess.respondGroup())
if(!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
if(Number(args[0]) === 1){
if(isAntiemoji) return enviar('*Já está ativo')
dataGp[0].antiemoji = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de antiemoji neste grupo ✔')
} else if(Number(args[0]) == 0){
if(!isAntiemoji) return enviar('Já está desativado')
dataGp[0].antiemoji = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de antiemoji neste grupo ✔')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'antinotas'://ʙᴏʟᴀᴅɪɴʜᴏ
if (!isGroup) return enviar(mess.respondGroup())
if(!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
if(Number(args[0]) === 1){
if(isAntiNotas) return enviar('*Já está ativo')
dataGp[0].antinotas = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de antinotas neste grupo ✔')
} else if(Number(args[0]) == 0){
if(!isAntiNotas) return enviar('Já está desativado')
dataGp[0].antinotas = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de antinotas neste grupo ✔')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'linkgp':
case 'linkgroup':
if(!isGroup) return enviar(mess.respondGroup());
if(!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
linkgc = await sock.groupInviteCode(from)
enviar('https://chat.whatsapp.com/'+linkgc)
break


case 'foto': {
if(!isGroup) return enviar(mess.respondGroup());
const userJid = sender.includes('@g.us')
 ? `${sender.split('@')[0]}@c.us`
: sender;
let IMG;
 try {
IMG = await sock.profilePictureUrl(userJid, 'image');
    } catch {
IMG = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'; }
let pushgrupo = "Mensagem privada";
if (isGroup) {
 try {
const groupMetadata = await sock.groupMetadata(from);
pushgrupo = groupMetadata.subject || "Nome do grupo indisponível";
 } catch {
pushgrupo = "Nome do grupo indisponível"; }}
const Perfil = `
🌟✨ *PERFIL DO USUÁRIO* ✨🌟

📸 *Foto de Perfil*: 
${IMG}

👾 *Nome*: @${sender.split('@')[0]}
💌 *Grupo:* ${pushgrupo}
🏆 *Cargo:* ${isCargo || "Nenhum"}
📞 *Telefone:* ${adivinha  || "Indisponível"}

👑 *By: ☭あ┊Sᴀᴋᴜʀᴀ </>☂︎*`;
await sock.sendMessage(from, {image: { url: IMG }, 
caption: Perfil, mentions: [userJid] }); }
break;

case 'compartilharcase': 
if (!isCreator) return enviar('😡Apenas meu dono pode usar este comando.');
if (!q) return enviar('😅 Você precisa fornecer o nome da case.');
  const caseName = q.trim();
  try {
  const fileData = fs.readFileSync('index.js', 'utf8'); 
  const regex = new RegExp(`case ['"\`]${caseName}['"\`]:([\\s\\S]*?)break;`, 'i');
const match = fileData.match(regex);
if (match) {
let caseCode = match[0]; // Captura todo o código da case
if (caseCode.length > 4000) {
return enviar('⚠️ O código da case é muito grande para ser enviado aqui.');
  }
sock.sendMessage(from, { text: `⿴⃟💙❨👻❩ Código da case
  "${caseName}": feito por Boladinho\n\n\`\`\`${caseCode}\`\`\`` });
        } else {
enviar('🤖 O bot não tem um comando para compartilhar essa case.');
}
 } catch (error) {
   enviar('❌ Erro ao acessar o arquivo das cases.');
console.error(error);
}
break;

case 'grupoinfo': {
if (!isGroup) return enviar('‼️ Este comando só funciona em grupos!');
 try {
const metadata = await sock.groupMetadata(from);
const nome = metadata.subject;
const criador = metadata.owner || 'Desconhecido';
const membros = metadata.participants.length;
const admins = metadata.participants.filter(p => p.admin !== null).length;
const dataCriacao = new Date(metadata.creation * 1000).toLocaleString('pt-BR');
let foto;
 try {
foto = await sock.profilePictureUrl(from, 'image');
  } catch {
foto = 'https://i.ibb.co/mFr8mg64/img-1772631829692.jpg'; 
        }

        let texto = `
💾✨💾✨💾✨💾✨💾
┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 📌 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂̧𝐎̃𝐄𝐒 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎 📌
┣━━━━━━━━━━━━━━━━━━━━━━━┫
┃ 👥 𝐍𝐨𝐦𝐞: ${nome}
┃ 👑 𝐂𝐫𝐢𝐚𝐝𝐨𝐫: @${criador.split('@')[0]}
┃ 📅 𝐂𝐫𝐢𝐚𝐝𝐨 𝐞𝐦: ${dataCriacao}
┃ 👤 𝐌𝐞𝐦𝐛𝐫𝐨𝐬: ${membros}
┃ 🛡️ 𝐀𝐝𝐦𝐢𝐧𝐬: ${admins}
┗━━━━━━━━━━━━━━━━━━━━━━━┛
💾✨💾✨💾✨💾✨💾
`;

await sock.sendMessage(from, {image: { url: foto },
caption: texto, mentions: criador !== 'Desconhecido' ? [criador] : []
 }, { quoted: info });
  } catch (e) {
console.log(e);
enviar('❌ Erro ao obter informações do grupo.'); }}
break;

case 'marcar': {
if (!isGroup) return enviar(mess.respondGroup());
if(!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
  try {
let ppUrl;
  try {
ppUrl = await sock.profilePictureUrl(from, 'image');
  } catch {
ppUrl = 'https://i.ibb.co/mFr8mg64/img-1772631829692.jpg'; }
let membros = participants.map(p => p.id);

        let banner = `
💾✨💾✨💾✨💾✨💾
┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 🚨 𝐀𝐓𝐄𝐍𝐂̧𝐀̃𝐎 𝐆𝐄𝐑𝐀𝐋 🚨
┣━━━━━━━━━━━━━━━━━━━━━━━┫
┃ 📢 Convocação obrigatória!
┃ ⏰ Compareçam imediatamente!
┗━━━━━━━━━━━━━━━━━━━━━━━┛
💾✨💾✨💾✨💾✨💾

`;
membros.forEach(mem => {
banner += `➥ @${mem.split('@')[0]}\n`; });
banner += `\n💫 Total: ${membros.length} membros`;
await sock.sendMessage(from, {image: { url: ppUrl },
caption: banner, mentions: membros
 }, { quoted: info });
    } catch (err) {
console.log(err);
enviar('‼️ Erro ao executar o comando.'); }}
break;

case 'correio':
if(!q.trim().includes("/")) return enviar(`Exemplo: ${prefix}correio 5591.../Oi Amor, sdds`)
var [ tx1, tx2 ] = q.trim().split("/")
bla = 
`*⸙. ͎۪۫✨ 𝚅𝙾𝙲𝙴 𝙰𝙲𝙰𝙱𝙰 𝙳𝙴 𝚁𝙴𝙲𝙴𝙱𝙴𝚁 𝚄𝙼𝙰 𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼 𝙰𝙽𝙾𝙽𝙸𝙼𝙰 💗 ː͡₊ꞋꞌꞋꞌ*\n\n*🌟 𝙰 𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼:*\n\n- ${tx2}\n\n*⸙. ͎۪۫𝙰𝚂𝚂: 𝙰𝙽𝙾𝙽𝙸𝙼𝙾 💗 ː͡₊ꞋꞌꞋꞌ*\n\n\n${nomeBot}`
sock.sendMessage(`${tx1}@s.whatsapp.net`, {text: bla})
enviar(`✰ 𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐄𝐍𝐕𝐈𝐀𝐃𝐀 𝐏𝐀𝐑𝐀 ${tx1} ★`)
break

case 'nomebot':
if (!isGroup) return enviar(mess.respondGroup());
if (!isCreator) return enviar(mess.respondDono());
if (!args.length) return await sock.sendMessage(from, { text: '🚡 Digite o novo nome do bot.' }, { quoted: info });
const novoNome = args.join(' ');
await sock.updateProfileName(novoNome);
await sock.sendMessage(from, { text: `✅ Nome do bot alterado para: ${novoNome}` }, { quoted: info });
break;

case 'descgp':
if (!isGroup) return enviar(mess.respondGroup());
if(!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
let d = args.join(" ");
if(!d) return await sock.sendMessage(from,{text:'🌊 Envie a nova descrição'});
await sock.groupUpdateDescription(from,d);
await sock.sendMessage(from,{text:`✅ Descrição atualizada:\n${d}`});
break;

case 'nomegp': {
if (!isGroup) return enviar(mess.respondGroup());
if(!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
let novo = args.join(' ');
if (!novo) return sock.sendMessage(from, { text: '🩷 Digite o novo nome!' }, { quoted: info });
await sock.groupUpdateSubject(from, novo);
await sock.sendMessage(from, { text: `✅ Nome alterado: *${novo}*` }, { quoted: info });
break;
}

case 'resetarlink':
if (!isGroup) return enviar(mess.respondGroup());
if(!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
  try {
const link = await sock.groupRevokeInvite(from);
sock.sendMessage(from, { text: `✅ Novo link:\nhttps://chat.whatsapp.com/${link}` }, { quoted: info });
  } catch {
sock.sendMessage(from, { text: '‼️ Erro ao resetar o link.' }, { quoted: info }); }
 break;

case 'seradm': {
if (!isGroup) return enviar(mess.respondGroup());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
if (!isCreator) return enviar(mess.respondDono());
await sock.groupParticipantsUpdate(from, [sender], 'promote');
enviar('✅ Promovido a admin!');
}
break;

case 'sermembro': {
if (!isGroup) return enviar(mess.respondGroup());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
if (!isCreator) return enviar(mess.respondDono());
await sock.groupParticipantsUpdate(from, [sender], 'demote');
enviar('✅ Agora é membro!');
}
break;

case 'toimg':
if (!isGroup) return enviar('so em grupo')
if(!isQuotedSticker) return enviar('Por favor, *mencione um sticker* para executar o comando.')
try {
enviar("enviando.....")
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
sock.sendMessage(from, {image: buff}, {quoted: info}).catch(e => {
console.log(e);
enviar('Ocorreu um erro ao converter o *sticker para imagem.*')
})
} catch {
enviar(mess.error())
}
break

case 'antivideo':
if (!isGroup) return enviar('kkkkk');
if(!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
if(Number(args[0]) === 1){
if(isAntiVid) return enviar('*Já está ativo')
dataGp[0].antivideo = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de antivideo neste grupo ✔')
} else if(Number(args[0]) == 0){
if(!isAntiVid) return enviar('Já está desativado')
dataGp[0].antivideo = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de antivideo neste grupo ✔')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'antilink'://ʙᴏʟᴀᴅɪɴʜᴏ
if (!isGroup) return enviar(mess.respondGroup());
if(!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
if(Number(args[0]) === 1) {
if(isAntiLink) return enviar('Já está ativo')
dataGp[0].antilink = true
setGp(dataGp)
enviar('🌊 Ativou com sucesso o recurso de antilink neste grupo')
} else if(Number(args[0]) === 0) {
if(!isAntiLink) return enviar('Já está desativado')
dataGp[0].antilink = false 
setGp(dataGp)
enviar('Desativou com sucesso o recurso de antilink neste grupo ✔')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'antiimg':
if (!isGroup) return enviar(mess.respondGroup());
if(!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
if(Number(args[0]) === 1){
if(isAntiImg) return enviar('já está ativo')
dataGp[0].antiimg = true
setGp(dataGp)
enviar('✔️Ativou com sucesso o recurso de Antiimg neste grupo')
} else if(Number(args[0]) === 0){
if(!isAntiImg) return enviar('Já está ativo')
dataGp[0].antiimg = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de Antiimg neste grupo')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'listagp': {
if (!isGroup) return enviar(mess.respondGroup());
if(!isCreator) return enviar(mess.respondDono());
const fs = require('fs');
const caminho = './SRC/SAVE/links_salvos.json';

if (!fs.existsSync(caminho)) {
return enviar('‼️ Nenhum link salvo ainda.');
}

const dados = JSON.parse(fs.readFileSync(caminho));
if (dados.length === 0) {
return enviar('📭 Nenhum link salvo.');
}

let texto = `
━━━━━━━〔 LINKS SALVOS 〕━━━━━━━\n\n`;

dados.forEach((l, i) => {
texto += `╭─❑ *${i + 1}*\n`;
texto += `│ 🔗 Link: ${l.link}\n`;
texto += `│ 🏷 Grupo: ${l.Nome_grupo}\n`;
texto += `│ 👤 Enviado por: ${l.Enviado_por}\n`;  
texto += `│ 📅 Data: ${l.data}\n`;
texto += `╰────────────────\n\n`;
});

await sock.sendMessage(from, {
image: { url: 'https://i.ibb.co/YB31BxWw/img-1773334600300.jpg' }, 
caption: texto
}, { quoted: info });

}
break;

case 'apagartodosgps': {
if (!isGroup) return enviar(mess.respondGroup());
if(!isCreator) return enviar(mess.respondDono());
const fs = require('fs');
const caminho = './SRC/SAVE/links_salvos.json';

if (!fs.existsSync(caminho)) {
return enviar('‼️ Nenhum grupo salvo.');
}

// limpa todos os grupos
fs.writeFileSync(caminho, JSON.stringify([], null, 2));

enviar('🗑️ Todos os grupos salvos foram apagados com sucesso!');
}
break;

case 'antisalvargp'://ʙᴏʟᴀᴅɪɴʜᴏ 
if (!isGroup) return enviar(mess.respondGroup());
if(!isCreator) return enviar(mess.respondDono());
if(Number(args[0]) === 1) {
if(isAntiSalvargp) return enviar('Já está ativo')
dataGp[0].antisalvargp = true
setGp(dataGp)
enviar('🌊 Ativou com sucesso o recurso de salvargp')
} else if(Number(args[0]) === 0) {
if(!isAntiSalvargp) return enviar('Já está desativado')
dataGp[0].antisalvargp = false 
setGp(dataGp)
enviar('Desativou com sucesso o recurso de salvargp ✔')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'apagargpsalvo': {
const fs = require('fs');
const caminho = './SRC/SAVE/links_salvos.json';
if (!fs.existsSync(caminho)) {
return enviar('‼️ Nenhum link salvo.'); }
if (!args.length) {
return enviar('🌟 Informe o nome do grupo para apagar.\nEx: !apagargpsalvo grupo bots'); }
const Nome_grupo = args.join(' ').toLowerCase();
let dados = JSON.parse(fs.readFileSync(caminho));
const antes = dados.length;
dados = dados.filter(l => l.Nome_grupo.toLowerCase() !== Nome_grupo);
const depois = dados.length;
if (antes === depois) {
return enviar('‼️ Nenhum grupo encontrado com esse nome.'); }
fs.writeFileSync(caminho, JSON.stringify(dados, null, 2));
enviar(`✅ Grupo "${Nome_grupo}" apagado com sucesso!`); }
break;

case 'lista': {
if (!isGroup) return enviar(mess.respondGroup());
if(!isCreator) return enviar(mess.respondDono());
try {
const getGroups = await sock.groupFetchAllParticipating();
const groups = Object.values(getGroups);

let texto = `
╭────────────────────
│ 🌐 𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐆𝐑𝐔𝐏𝐎𝐒
│ 🎩 Estou em ${groups.length} grupos 
╰────────────────────
`;

let mentions = [];

for (let i of groups) {

const nome = i.subject;
const membros = i.participants.length;
const criador = i.owner || 'Desconhecido';

let link = 'Link indisponível';

try {
const codigo = await sock.groupInviteCode(i.id);
link = `https://chat.whatsapp.com/${codigo}`;
} catch {}

texto += `
────────────────────
👥 𝐍𝐨𝐦𝐞: ${nome}
👑 𝐂𝐫𝐢𝐚𝐝𝐨𝐫: ${criador !== 'Desconhecido' ? '@' + criador.split('@')[0] : 'Desconhecido'}
👤 𝐌𝐞𝐦𝐛𝐫𝐨𝐬: ${membros}
🔗 𝐋𝐢𝐧𝐤: ${link}
────────────────────
`;

if (criador !== 'Desconhecido') mentions.push(criador);

}

await sock.sendMessage(from, {
text: texto,
mentions: mentions
}, { quoted: info });

} catch (e) {
console.log(e);
enviar('❌ Erro ao listar os grupos.');
}
}
break;

case 'autofigu'://ʙᴏʟᴀᴅɪɴʜᴏ 
if (!isGroup) return enviar(mess.respondGroup());
if(!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
if(Number(args[0]) === 1) {
if(isAutofigu) return enviar('Já está ativo')
dataGp[0].autofigu = true
setGp(dataGp)
enviar('🌊 Ativou com sucesso o recurso de autofigu neste grupo')
} else if(Number(args[0]) === 0) {
if(!isAutofigu) return enviar('Já está desativado')
dataGp[0].autofigu = false 
setGp(dataGp)
enviar('Desativou com sucesso o recurso de autofigu neste grupo ✔')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'sairgp':
if (!isGroup) return enviar('kkkk')
if(Number(args[0]) === 1){
if(isAsairGp) return enviar('Mano deixa de ser burro Já está ativo')
dataGp[0].sairGp = true
setGp(dataGp)
enviar('✔️ Ativou com sucesso o recurso de sair neste grupo')
} else if(Number(args[0]) === 0){
if(!isAsairGp) return enviar('Já está desativado')
dataGp[0].sairGp = false 
setGp(dataGp)
enviar('✔️ Desativou com sucesso o recurso de sair neste grupo')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'ban':
case 'kick': {
if (!isGroup) return enviar(mess.respondGroup());
if(!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
let mentioned = obterMencionar(info);
if (!mentioned) return enviar('✨ Menciona alguém para banir!');
if (mentioned === owner) return enviar('Não pode remover o criador! 😡');
if (mentioned === numberBot) return enviar('Não posso me remover! 😈');
  try {
await sock.groupParticipantsUpdate(from, [mentioned], 'remove');
await sleep(5000);

const audioUrl = "./arquivo/save/audios/banido.mp3";
await sock.sendMessage(from, { audio: { url: audioUrl }, mimetype: 'audio/mpeg' });

await sock.sendMessage(from, { image: { url: `https://i.ibb.co/1tbM98jk/img-1773322814926.jpg` }, caption: `🔨 TOMA O MARTELO DO BAN! FDP 🔨\n 🚫 Usuário removido com sucesso. 🚫`});
    } catch (err) {
console.error(err);
enviar('❌ Não foi possível remover o usuário.'); }}
break;

case 'apagarfig': 
const pasta = path.join(__dirname, 'arquivo/figuras'); 
try {
if (!fs.existsSync(pasta)) return enviar('⚡ Pasta de figurinhas não encontrada.');
fs.readdirSync(pasta).forEach(file => {
fs.unlinkSync(path.join(pasta, file)); });
enviar('🗑️ Todas as figurinhas foram apagadas!');
    } catch (err) {
console.error(err);
enviar('⚠️ Erro ao apagar as figurinhas.'); }
break;

case 'salvarfig': 
await salvarSticker(info, enviar);
break;

case 'image.zip': {
if (!isQuotedImage) return enviar('📌 Marque uma imagem!')
const fs = require('fs')
const archiver = require('archiver')
if (!fs.existsSync('./arquivo/save')) {
fs.mkdirSync('./arquivo/save') }
let media = await downloadContentFromMessage(
info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage,
'image')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk]) }
let zipPath = `./arquivo/save/${Date.now()}.zip`
let output = fs.createWriteStream(zipPath)
let archive = archiver('zip')
archive.pipe(output)
archive.append(buffer, { name: 'image.jpg' })
archive.finalize()
output.on('close', async () => {
await sock.sendMessage(from, {
document: fs.readFileSync(zipPath),
mimetype: 'application/zip',
fileName: 'image.zip'
}, { quoted: info }) })
}
break

case 'audio': {
if (!info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.audioMessage)
return enviar('🎧 Marque um áudio!')
const quoted = info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
const stream = await downloadContentFromMessage(quoted, 'audio')
let buffer = Buffer.from([])
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
const zipPath = './arquivo/audios/audios.zip'
const output = fs.createWriteStream(zipPath)
const archive = archiver('zip', { zlib: { level: 9 } })
archive.pipe(output)
archive.append(buffer, { name: `audio_${Date.now()}.mp3` })
archive.finalize()
output.on('close', () => {
enviar('✅ Áudio salvo no ZIP!')}) }
break

case 'apagarvideo': {
const fs = require('fs')
let nome = args[0]
if (!nome) return enviar('📌 Use:\n/apagarvideo video1.mp4')
let caminho = './arquivo/save/' + nome
if (!fs.existsSync(caminho)) {
return enviar('❌ Vídeo não encontrado!')
}
fs.unlinkSync(caminho)
enviar(`🗑️ Vídeo apagado: ${nome}`)
}
break

case 'apagartodos': {
const fs = require('fs');
let pasta = './arquivo/save';
if (!fs.existsSync(pasta)) return enviar('❌ Pasta de vídeos não encontrada!');
let arquivos = fs.readdirSync(pasta);
let videos = arquivos.filter(file => file.endsWith('.mp4'));
if (videos.length === 0) return enviar('❌ Nenhum vídeo encontrado para apagar!');
videos.forEach(video => {
fs.unlinkSync(`${pasta}/${video}`); });
enviar(`🗑️ Todos os vídeos foram apagados! (${videos.length} vídeos)`); }
break;

case 'puxarvideo': {
const fs = require('fs')
const path = require('path')
if (!q) return enviar('📌 Exemplo: /puxarvideo video2.mp4')
let caminho = `./arquivo/save/${q}`
if (!fs.existsSync(caminho)) {
return enviar('❌ Vídeo não encontrado!') }
await sock.sendMessage(from, {
video: fs.readFileSync(caminho),
caption: `🎬 Vídeo carregado: ${q}`
}, { quoted: info }) }
break

case 'video': {
if (!isQuotedVideo) return enviar('📌 Marque um vídeo!')
const fs = require('fs')
if (!fs.existsSync('./arquivo/save')) {
fs.mkdirSync('./arquivo/save') }
let arquivos = fs.readdirSync('./arquivo/save').filter(a => a.endsWith('.mp4'))
let numero = arquivos.length + 1
let nome = `video${numero}.mp4`
let media = await downloadContentFromMessage(
info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage,
'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk]) }
fs.writeFileSync(`./arquivo/save/${nome}`, buffer)
enviar(`✅ Vídeo salvo como: ${nome}`) }
break

case 'puxarfoto': {
const fs = require('fs')
let nome = body.split(" ")[1]
if (!nome) return enviar('📌 Informe o nome da foto!\nExemplo: /puxarfoto foto2.jpg')
let caminho = `./arquivo/save/${nome}`
if (!fs.existsSync(caminho)) {
return enviar('❌ Foto não encontrada!') }
await sock.sendMessage(from, {
image: fs.readFileSync(caminho),
caption: `🖼️ Foto carregada: ${nome}`
}, { quoted: info }) }
break

case 'apagartodas': {
const fs = require('fs');
let pasta = './arquivo/save';
if (!fs.existsSync(pasta)) return enviar('❌ Pasta de fotos não encontrada!');
let fotos = fs.readdirSync(pasta).filter(file => file.endsWith('.jpg'));
if (fotos.length === 0) return enviar('❌ Nenhuma foto .jpg encontrada para apagar!');
fotos.forEach(foto => {
fs.unlinkSync(`${pasta}/${foto}`); });
enviar(`🗑️ Todas as fotos .jpg foram apagadas! (${fotos.length} fotos)`); }
break;

case 'apagarfoto': {
let nome = args[0]
if (!nome) return enviar('📌 Use:\n/apagarfoto foto2.jpg')
let caminho = './arquivo/save/' + nome
if (!fs.existsSync(caminho)) {
return enviar('❌ Foto não encontrada!') }
fs.unlinkSync(caminho)
enviar(`🗑️ Foto apagada com sucesso: ${nome}`)
}
break

case 'roubarfoto': {
const fs = require('fs');
const mencao = obterMencionar(info);
if (!mencao) return enviar('🥷 Marque alguém para roubar a foto');
try {
let ppimg;
try {
ppimg = await sock.profilePictureUrl(mencao, 'image');
} catch {
ppimg = 'https://img2.pixhost.to/images/5695/694332625_13a80e044aaef1ff8b42.jpg'; }
const pegarimg = await getBuffer(ppimg);
let numero = 1;
while (fs.existsSync(`./arquivo/save/foto${numero}.jpg`)) {
numero++;
}
const nomeArquivo = `./arquivo/save/foto${numero}.jpg`;
fs.writeFileSync(nomeArquivo, pegarimg);
await sock.sendMessage(from, {
image: pegarimg,
caption: `📸 Foto roubada e salva como foto${numero}.jpg`,
mentions: [mencao]
}, { quoted: info });
} catch (err) {
console.log(err);
enviar('Erro ao salvar.'); }}
break;

case 'lid':{
if (!isGroup) return enviar(mess.respondGroup());
if (!isCreator) return enviar(mess.respondDono());
const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid 
if(!mentioned || mentioned.length === 0) return enviar('🎠 ᴍᴀʀϙᴜᴇ ᴀʟɢᴜᴇ́ᴍ ᴘᴀʀᴀ ᴘᴜxᴀʀ ᴀ ʟɪᴅ')
const alvo = mentioned[0]
enviar(`⚡sᴜᴀ ʟɪᴅ ᴇ́ ${alvo.split('@')[0]}`, {mentions: [alvo] })
}
break

case 'namorar': {
if (!isGroup) return enviar(mess.respondGroup())
if (!isBotGroupAdmins) return enviar(mess.respondBot())
if (!isModobn) return reply(mess.respondBrinc(prefix))
try {
await reagir(from, "💑")

if (!isGroup) return sock.sendMessage(from, {
text: "❌ Esse comando só funciona em grupos."
}, { quoted: info })

let participantes = groupMetadata.participants
let membros = participantes
.filter(v => v.id !== sock.user.id) 
.map(v => v.id)

// escolher 2 pessoas diferentes
let macho = membros[Math.floor(Math.random() * membros.length)]
let femea = membros[Math.floor(Math.random() * membros.length)]

while (femea === macho) {
femea = membros[Math.floor(Math.random() * membros.length)]
}

let amor = Math.floor(Math.random() * 101)

let ppMacho
let ppFemea

try {
ppMacho = await sock.profilePictureUrl(macho, 'image')
} catch {
ppMacho = 'https://i.imgur.com/BoN9kdC.png'
}

try {
ppFemea = await sock.profilePictureUrl(femea, 'image')
} catch {
ppFemea = 'https://i.imgur.com/BoN9kdC.png'
}

await sock.sendMessage(from, {
image: { url: ppMacho },
caption: `💘 *CASAL FORMADO*\n\n👦 @${macho.split("@")[0]}\n❤️\n👩 @${femea.split("@")[0]}\n\n💞 Compatibilidade: *${amor}%*`,
mentions: [macho, femea]
}, { quoted: info })

} catch (e) {
console.log(e)
sock.sendMessage(from, {
text: "❌ Erro ao gerar casal."
}, { quoted: info })
}
}
break

case 'metadinha':
if (!isGroup) return enviar(mess.respondGroup())
if (!isBotGroupAdmins) return enviar(mess.respondBot())
if (!isModobn) return reply(mess.respondBrinc(prefix))
try {
await reagir(from, "💑️")
const anuData = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let selectRandom = anuData[Math.floor(Math.random() * anuData.length)]

// Enviar perfil masculino
await sock.sendMessage(from, { 
image: { url: selectRandom.male }, 
caption: "👦 • Perfil Masculino 🕊️" 
}, { quoted: info })

// Enviar perfil feminino
await sock.sendMessage(from, { 
image: { url: selectRandom.female }, 
caption: "👩 • Perfil Feminino 🌸" 
}, { quoted: info })

} catch (e) {
console.log(e)
await sock.sendMessage(from, { text: "❌ Ocorreu um erro, tente novamente." }, { quoted: info })
}
break

case 'resetqr': {
if (!isGroup) return enviar(mess.respondGroup());
if (!isCreator) return enviar(mess.respondDono());
const fs = require('fs');
const path = './conexão'; 
if (fs.existsSync(path)) {
fs.rmSync(path, { recursive: true, force: true });
enviar('✅ Pasta de QR code apagada com sucesso!');
    } else {
enviar('⚠️ Pasta não encontrada.'); }
 break; 
}

case 'resetbackup': {
if (!isGroup) return enviar(mess.respondGroup());
if (!isCreator) return enviar(mess.respondDono());
const fs = require('fs');
const path = './🔒backup'; 
if (fs.existsSync(path)) {
fs.rmSync(path, { recursive: true, force: true });
enviar('✅ Pasta de backup apagada com sucesso!');
  } else {
enviar('⚠️ Pasta de backup não encontrada.'); }
break; 
}

case 'nano': {
if (!isGroup) return enviar(mess.respondGroup());
if (!isCreator) return enviar(mess.respondDono());
if (!q.includes('|')) return enviar("Uso:\n.nano nome | conteúdo da case");
let [nome, ...textoArr] = q.split('|');
let codigo = textoArr.join('|').trim();
if (!fs.existsSync('./arquivo/👑cases')) fs.mkdirSync('./arquivo/👑cases');
fs.appendFileSync(`./arquivo/👑cases/${nome.trim()}.js`, codigo + '\n\n');
enviar(`✅ Case salva em ${nome.trim()}.js`);
}
break;

case 'senhalogin':
if (!isGroup) return enviar(mess.respondGroup());
if (!isCreator) return enviar(mess.respondDono());
if (!q) return enviar('⚠️ Digite a nova senha.\nExemplo: .trocasenha MinhaNovaSenha123');
trocarSenha(q); 
enviar(`✅ Senha alterada com sucesso!\n🔑 Minha senha é: ${q}`);
  break;

case 'biblia': {
const fs = require('fs')
const dados = JSON.parse(fs.readFileSync('./arquivo/biblia/mandamentos.json'))
const aleatorio = dados.textos[Math.floor(Math.random() * dados.textos.length)]
let texto = aleatorio.titulo + "\n\n" + aleatorio.mandamentos.join("\n\n")
enviar(texto) }
break

case 'meses1':
if (!isGroup) return enviar(mess.respondGroup());
case 'data': {
const agora = new Date()
const dias = [
    'Domingo', 'Segunda-feira', 'Terça-feira',
    'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
  ]
const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ]
const diaSemana = dias[agora.getDay()]
const dia = agora.getDate()
const mes = meses[agora.getMonth()]
const ano = agora.getFullYear()
const hora = agora.getHours().toString().padStart(2, '0')
const minuto = agora.getMinutes().toString().padStart(2, '0')
const texto = `📆 *Calendário*
🗓️ ${diaSemana}, ${dia} de ${mes} de ${ano}
⏰ Agora são ${hora}:${minuto}`
const imageLink = 'https://img1.pixhost.to/images/11893/688486179_37500258c07d6bd85a2a.jpg'
await sock.sendMessage(from, {image: { url: imageLink },
caption: texto
  }, { quoted: info }) }
break

case 'calculadora':
case 'calcular': {
if (!isGroup) return enviar(mess.respondGroup());
if (!args.length)
return enviar(`Use: ${prefix}calcular 5+1 ou 5-1 ou 5×6`)
const conta = args.join('').replace(/\s+/g, '')
if (!/^\d+[\+\-×÷]\d+$/.test(conta))
return enviar('❌ Use apenas neste formato: 5+1, 5-1, 5×6 ou 10÷2')
const operador = conta.includes('+') ? '+' 
               : conta.includes('-') ? '-' 
               : conta.includes('×') ? '×' 
               : '÷';
const [a, b] = conta.split(operador).map(Number)
let resultado;
if (operador === '+') resultado = a + b;
if (operador === '-') resultado = a - b;
if (operador === '×') resultado = a * b;
if (operador === '÷') resultado = a / b;
const imagemFixa = 'https://img2.pixhost.to/images/5347/689254175_4102fb6d3754b8824c47.jpg'
await sock.sendMessage(from, {image: { url: imagemFixa },
caption: 
`🧮 *Resultado*
0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣
0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣
${a} ${operador} ${b} = ${resultado} 🔢#️⃣*️⃣🔠` },
{ quoted: info }) }
break

case 'imgmenu':
if (!isGroup) return enviar(mess.respondGroup());
if (!isCreator) return enviar(mess.respondDono());
if (!isQuotedImage) return enviar("✨ Selecione uma imagem para ser o novo menu! 📸");
if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
const post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
const imagem = await
downloadContentFromMessage(post, 'image');
let base64 = Buffer.from([]);
for await (const send of imagem) {
base64 = Buffer.concat([base64, send]); }
const filePath = './arquivo/photo/menu.jpg'
fs.writeFileSync(filePath, base64);
enviar('*🔥📸 ALTERAÇÃO CONCLUÍDA! 📸🔥*\nA foto do menu foi trocada com sucesso!\n💎 Agora o menu está com um novo visual!');
{ quoted: info } }
break

case 'r':
if (!isGroup) return enviar(mess.respondGroup());
if (!isCreator) return enviar(mess.respondDono());
  const etapas = [
  'ʀᴇɪɴɪᴄɪᴀɴᴅᴏ 🟩⬜⬜⬜⬜ 20%',
  'ʀᴇɪɴɪᴄɪᴀɴᴅᴏ 🟩🟩⬜⬜⬜ 40%',
  'ʀᴇɪɴɪᴄɪᴀɴᴅᴏ 🟩🟩🟩⬜⬜ 60%',
  'ʀᴇɪɴɪᴄɪᴀɴᴅᴏ 🟩🟩🟩🟩⬜ 80%',
  'ʀᴇɪɴɪᴄɪᴀɴᴅᴏ 🟩🟩🟩🟩🟩 100%',
   `👑 Aguarde um momento bot reiniciando..`
    ];
const sentMsg = await sock.sendMessage(from, {
text: '♻️ Reiniciando o bot... Aguarde alguns segundos...',
mentions: [sender]
 }, { quoted: info });
for (let i = 0; i < etapas.length; i++) {
await new Promise(resolve => setTimeout(resolve, 800)); 
await sock.sendMessage(from, {
text: etapas[i],
mentions: [sender],
edit: sentMsg.key }); }
setTimeout(() => process.exit(0), 1000);
break;

case 'foto':
await sock.sendMessage(from, { image: { url: jpgBot } });
break;

case 'fotomenu':
if (!isGroup) return enviar(mess.respondGroup());
if (!isCreator) return enviar(mess.respondDono());
let RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
let boij =
RSM?.imageMessage ||
info.message?.imageMessage ||
RSM?.viewOnceMessageV2?.message?.imageMessage ||
info.message?.viewOnceMessageV2?.message?.imageMessage;
if (!boij) return enviar("📌 Marque ou envie uma imagem!");
let uploadResult = await upload(boij);
if (!uploadResult.success) return enviar(`❌ Erro: ${uploadResult.error}`);
const data = JSON.parse(fs.readFileSync('./arquivo/settings/setting.json', 'utf8'));
data.jpgBot = uploadResult.url;  
fs.writeFileSync('./arquivo/settings/setting.json', JSON.stringify(data, null, 2));
enviar(`✅ Foto do menu alterada com sucesso!\n🔗 Link da imagem:\n${uploadResult.url}`);
break;

case 'upload': {
  try {
const q = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
if (!q || !q.imageMessage) {
return enviar('📌 Marque uma imagem para gerar o link.'); }
const result = await upload(q.imageMessage);
if (result.success) {
await enviar(`✅ Link da imagem:\n${result.url}`);
   } else {
await enviar(`⚡ Erro: ${result.error}`); }
  } catch (err) {
console.error('Erro no comando imglink:', err);
await enviar('‼️ Ocorreu um erro ao gerar o link da imagem.'); }}
break;

case 's': {
const enviar = (texto) => sock.sendMessage(from, { text: texto }, { quoted: info });
const isQuotedImageOrVideo = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage ||
info.message?.imageMessage ||
info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage ||
info.message?.videoMessage;
if (!isQuotedImageOrVideo) {
return enviar('Marque uma imagem ou um video de 10 segundos!'); }
enviar('Aguarde Convertendo figurinha');
(async function () {
var legenda = q? q?.split("/")[0] : `💌 Sᴛɪᴄᴋᴇʀs ᴅᴇ Wʜᴀᴛsᴀᴘᴘ 💌 `;
var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `
🌐• sᴏʟɪᴄɪᴛᴀᴅᴏ: ${pushname}
🛸• ᴄʀɪᴀᴅᴀ ᴘᴏʀ: ${nomeBot}
👥• ɢʀᴜᴘᴏ: ${groupName}`;
const RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
const boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage;
const boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage;
if (boij || (boij2 && boij2?.seconds < 11)) {
const mediaType = boij ? 'image' : 'video'; 
const mediaObj = boij || boij2;
const rane = getRandom('.' + await getExtension(mediaObj.mimetype));
const buff = await getFileBuffer(mediaObj, mediaType);
fs.writeFileSync(rane, buff);
const rano = getRandom('.webp');
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(rane);
if(err) {
console.error(err);
return enviar('Erro ao converter a figurinha.'); }
let json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor };
let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
let exif = Buffer.concat([exifAttr, jsonBuff]);
exif.writeUIntLE(jsonBuff.length, 14, 4);
let nomemeta = "temp.exif";
fs.writeFileSync(`./${nomemeta}`, exif);
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
sock.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: info });
fs.unlinkSync(nomemeta);
fs.unlinkSync(rano);
});
});
} else {
enviar(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`);
}
})().catch(e => {
console.log(e);
enviar("Hmm deu erro");
try {
if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
if (fs.existsSync(rano)) fs.unlinkSync(rano);
if (fs.existsSync(media)) fs.unlinkSync(media);
} catch {}
});
}
break;

case 'grupo': {
if (!isGroup) return enviar(mess.respondGroup());
if (!isCreator) return enviar(mess.respondDono());
const { announce } = await sock.groupMetadata(from)
await sock.groupSettingUpdate(from,
announce? 'not_announcement' : 'announcement')
await sock.sendMessage(from, {text: announce? '*🔓 Grupo aberto com sucesso!*' : '*🔒 Grupo fechado com sucesso!*'
}, { quoted: info }) }
break

case 'limpar':
await reagir(from, "🗑️")
if (!isGroup) return enviar(mess.respondGroup());
if(!isGroupAdmins) return enviar(mess.respondAdm());
if(!isBotGroupAdmins) return enviar(mess.respondBot());
clear = `ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
️`
clear2 = `ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *𝙻𝙸𝙼𝙿𝙴𝙵𝙰 𝙳𝙴 𝙲𝙷𝙰𝚃 𝙲𝙾𝙽𝙲𝙻𝚄́𝙸𝙳𝙰 ✅*`
enviar(`*𝙶𝚁𝚄𝙿𝙾 𝙵𝙴𝙲𝙷𝙰𝙳𝙾 𝙿𝙰𝚁𝙰 𝙻𝙸𝙼𝙿𝙴𝚉𝙰 🙅‍♂️*`)
sock.groupSettingUpdate(from, 'announcement')
setTimeout(async() => {
sock.sendMessage(from, {text: clear})
}, 1000)//msg 1
setTimeout(async() => {
sock.sendMessage(from, {text: clear})
}, 4000)//msg 2
setTimeout(async() => {
sock.sendMessage(from, {text: clear})
}, 7000)//msg 3
setTimeout(async() => {
sock.sendMessage(from, {text: clear})
}, 10000)// msg 4
setTimeout(async() => {
sock.sendMessage(from, {text: clear})
}, 13000)//msg 5
setTimeout(async() => {
sock.sendMessage(from, {text: clear})
}, 16000)//msg 6
setTimeout(async() => {
sock.sendMessage(from, {text: clear})
}, 19000)//msg 7
setTimeout(async() => {
sock.sendMessage(from, {text: clear})
}, 22000)//msg 8
setTimeout(async() => {
sock.sendMessage(from, {text: clear})
}, 25000)//msg 9
setTimeout(async() => {
sock.sendMessage(from, {text: clear2})
}, 28000)//msg 10
setTimeout(async() => {
sock.sendMessage(from, {text: `*𝙿𝚁𝙾𝙽𝚃𝙾 𝚂𝙴𝙽𝙷𝙾𝚁, 𝙰𝙲𝙰𝙱𝙴𝙸 𝙳𝙴 𝙻𝙸𝙼𝙿𝙰𝚁 𝙾 𝙲𝙷𝙰𝚃 🙇‍♂️*`})
sock.groupSettingUpdate(from, 'not_announcement')
}, 30000)
break

//｡☆✼★ Fim dos comandos com prefixo ★✼☆｡


/*

                       .----.
                    _.'__    `.
                .--(#)(##)---/#\
              .' @          /###\
              :         ,   #####
               `-..__.-' _.-\###/
                     `;_:    `"'
                   .'"""""`.
                  /,  BOT  ,\
                 //  SAKURA  \\
                 `-._______.-'
                 ___`. | .'___
                (______|______)

*/


//｡☆✼★ Início comandos sem  prefixo ★✼☆｡

 //————| ⚙️ BODY && BUDY ⚙️ |————//
default:

if ((info.message?.conversation || info.message?.extendedTextMessage?.text || "").toLowerCase().includes("lixo")) {
let respostasPesadas = [
"Vai se fuder, seu merda!",
"Vai tomar no cu, idiota!",
"Seu lixo, aprende a usar direito!",
"Vai se catar, seu imbecil!",
"Seu retardado, volta pro útero da sua mãe!",
"Vai tomar no cu, mano!",
"Filho da puta, se toca!",
"Vai se foder, otário!",
"Seu burro, vai estudar!",
"Vai se lascar, animal!",
"Seu inútil, vai trabalhar!",
"Vai se arrebentar, babaca!",
"Seu palhaço, some daqui!",
"Vai tomar no cu, seu desgraçado!",
"Seu idiota do caralho!",
"Vai se foder, escroto!",
"Seu merdinha, aprende a falar!",
"Vai se lascar, seu otário!",
"Seu babaca, vai tomar banho!",
"Vai pro inferno, seu filho da puta!",
"Seu lixo humano, some!",
"Vai tomar no cú, seu vagabundo!",
"Seu imbecil, vai se catar!",
"Vai se foder, seu merda velho!",
"Filho da puta, vai estudar!",
"Vai se arrebentar, retardado!",
"Seu animal, se toca!",
"Vai se lascar, seu escroto!",
"Seu palhaço, vai aprender!",
"Vai tomar no cu, seu desgraçado!",
"Seu inútil, vai trabalhar!",
"Vai pro inferno, idiota!",
"Seu merda, some daqui!",
"Vai se foder, seu babaca!",
"Seu retardado, aprende a viver!",
"Vai tomar no cu, imbecil!",
"Seu estúpido, some!",
"Vai se arrebentar, idiota do caralho!",
"Seu lixo, vai catar coquinho!",
"Vai se foder, seu desgraçado!",
"Seu babaca inútil, some!",
"Vai tomar no cu, retardado!",
"Filho da puta, vai trabalhar!",
"Vai se lascar, seu animal!",
"Seu idiota, vai aprender!",
"Vai se foder, escroto do caralho!",
"Seu merdinha inútil, some!",
"Vai se arrebentar, babaca!",
"Seu lixo humano, aprende a viver!",
"Vai tomar no cu, imbecil!",
"Seu retardado do caralho, some!",
"Vai se foder, seu palhaço!"
];
sock.sendMessage(from, { 
text: respostasPesadas[Math.floor(Math.random() * respostasPesadas.length)]
}, { quoted: loc });
}

//=[ ANTI PALAVRAS - (🤖) - GRUPOS ]=\\
if(isGroup && isPalavrao && isBotGroupAdmins && !isCreator && !isGroupAdmins) {
if(dataGp[0].antipalavrao.palavras.some(i => budy2.includes(i.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
setTimeout(() => {
if(!JSON.stringify(groupMembers).includes(sender)) return 
sock.groupParticipantsUpdate(from, [sender], 'remove');
setTimeout(() => {sock.sendMessage(from, {delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})}, 500)
}, 2000);
sock.sendMessage(from, {text: mess.permissionDenied_rUser()}, {quoted: loc});
}
}

if (budy.toLowerCase() === "boa tarde") {
await sock.sendMessage(from, {
audio: { url: 'https://files.catbox.moe/m1yvox.mp3' },
mimetype: 'audio/mpeg',
contextInfo: {
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: `${setting.channelnk}`,
newsletterName: `${nomeBot}`
}}
}, { quoted: loc })
}

if (budy.toLowerCase() === "bom dia") {
await sock.sendMessage(from, {
audio: { url: 'https://files.catbox.moe/jt9wyh.mp3' },
mimetype: 'audio/mpeg',
contextInfo: {
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: `${setting.channelnk}`,
newsletterName: `${nomeBot}`
}}
}, { quoted: loc })
}

if (budy.toLowerCase() === "boa noite") {
await sock.sendMessage(from, {
audio: { url: 'https://files.catbox.moe/4xxe9h.mp3' },
mimetype: 'audio/mpeg',
contextInfo: {
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: `${setting.channelnk}`,
newsletterName: `${nomeBot}`
}}
}, { quoted: loc })
}

if (budy.toLowerCase() === "sexo") {
await sock.sendMessage(from, {
audio: { url: 'https://tmpfiles.org/dl/31523863/file.mp3' },
mimetype: 'audio/mpeg',
contextInfo: {
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: `${setting.channelnk}`,
newsletterName: `${nomeBot}`
}}
}, { quoted: loc })
}

if(budy.toLowerCase() === "corno"){
tujuh = await fetch(corno).then(v => v.buffer())
await sock.sendMessage(from, {audio: tujuh, mimetype: "audio/mpeg", contextInfo: { forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: `${setting.channelnk}`, newsletterName: `${nomeBot}` }}}, 
{ quoted: loc });
}

if(isAutorepo) {
if(body.toLowerCase() === "baiano") {
await sock.sendMessage(from, {
audio: { url: 'https://files.catbox.moe/els6g8.mp3' },
mimetype: 'audio/mpeg',
contextInfo: {
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: `${setting.channelnk}`,
newsletterName: `${nomeBot}`
}}
}, { quoted: loc })
}
}

if (budy.toLowerCase() === "d") {
if (!isGroup) return enviar(mess.respondGroup());
 try {
const ctx = info.message?.extendedTextMessage?.contextInfo;
if (!ctx?.stanzaId) return enviar('☂️ Marque a mensagem que deseja apagar!');  
await sock.sendMessage(info.key.remoteJid, {
delete: {
 remoteJid: info.key.remoteJid,
 fromMe: false,
 id: ctx.stanzaId,
participant: ctx.participant }});
  } catch {
enviar('⚠️ Erro ao apagar a mensagem!'); }}

if (isGroup && isAntiLink && isBotGroupAdmins) {
let text =
info.message?.conversation ||
info.message?.extendedTextMessage?.text ||
''
const linkRegex = /https?:\/\/\S+/gi
const groupLink = /chat\.whatsapp\.com\/[A-Za-z0-9]/i
if (linkRegex.test(text)) {
const isGroupLink = groupLink.test(text)
if (!isGroupLink) {
if (isGroupAdmins || isCreator) return
 try {
await sock.sendMessage(from, { delete: info.key })
await sock.sendMessage(from, {
text: '🚫 Apenas links de grupos do WhatsApp são permitidos.'})
await sock.groupParticipantsUpdate(from, [sender], 'remove')
} catch (err) {
console.log(err) }}}}

// 📌 AUTO SALVAR LINKS DE GRUPOS
if (isAntiSalvargp && isGroup && body) {
const regex = /https?:\/\/chat\.whatsapp\.com\/([A-Za-z0-9]+)/gi;
const encontrados = [...body.matchAll(regex)];
if (encontrados.length > 0) {
const fs = require('fs');
const caminho = './SRC/SAVE/links_salvos.json';
if (!fs.existsSync(caminho)) {
fs.writeFileSync(caminho, JSON.stringify([])); }
let dados = JSON.parse(fs.readFileSync(caminho));
const metadata = await sock.groupMetadata(from);
for (let match of encontrados) {
const linkCompleto = match[0];
const codigo = match[1];
let Nome_grupo = "Não identificado";
 try {
const info = await sock.groupGetInviteInfo(codigo);
Nome_grupo = info.subject;
   } catch (e) {
console.log("Erro ao pegar nome do grupo do link"); }
const jaExiste = dados.find(l => l.link === linkCompleto);
if (!jaExiste) {
dados.push({
link: linkCompleto,
Nome_grupo: Nome_grupo,
Enviado_por: pushname || "Sem Nome",
data: new Date().toLocaleString("pt-BR") }); }}
fs.writeFileSync(caminho, JSON.stringify(dados, null, 2)); }}

if(body.toLowerCase() === "bot"){
enviar(`Oi eu sou a ${nomeBot}\n\n“A inteligência que transcende limites. Conectando neurônios e algoritmos, dominando informações em velocidade máxima. Futuro, mistério e poder, tudo em uma única força digital.”`)}

if(budy.toLowerCase() === "prefix") {
enviar(`🦇 ➪『 ${prefix} 』\n 𝙴𝚂𝚂𝙴 𝙴́ 𝙼𝙴𝚄 𝙿𝚁𝙴𝙵𝙸𝚇𝙾 𝙰𝚃𝚄𝙰𝙻`)
}

const privateCmd = (id, pc, cmd, porcentagem) => {
const totalSeconds = process.uptime();
const hours = Math.floor(totalSeconds / 3600);
const minutes = Math.floor((totalSeconds % 3600) / 60);
const seconds = Math.floor(totalSeconds % 60);
const notcmd = `
»»»»»»»»»»»»»»»»»
➡️  COMANDO INVÁLIDO  ⬅️
- - - - - - - - - - -
🍭 Sugestão: ${cmd || "nenhum"}
👤 Usuário: @${pushname}
📌 Comando: "${prefix+command}" errado‼️
💡 Use: ${prefix}menu
🥶 Olá: ${tempo}
😸 Similaridade: ${porcentagem || 0}%
⏱️ Uptime: ${hours}h ${minutes}m ${seconds}s
»»»»»»»»»»»»»»»»»
`;
return notcmd }
if(isCmd) {
setTimeout(() => {reagir(from, "❌")}, 1000)
const AB = similarityCmd(command) || []
const sugestao = AB[0] || {}
const notcmd = privateCmd(sender, prefix+command, sugestao.comando, sugestao.porcentagem)
sock.sendMessage(from, {
image: { url: jpgBot }, 
caption: notcmd,
mentions: [sender], 
contextInfo: {
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: `${setting.channelnk}`,
newsletterName: `${nomeBot}`
}}
}, { quoted: selo })
}}
});

} catch (err) {
console.error(chalk.red("❌ Error al iniciar bot:"), err);
}
}

// 🔧 Reinício automático se index.js mudar
fs.watch('./index.js', (eventType) => {
if (eventType === 'change') {
console.log(chalk.yellow('index.js foi modificada, reiniciando...'));
process.exit(0);
}
});

startBot();