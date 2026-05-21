const fsExtra = require('fs-extra');
const colors = require('colors');
const cfonts = require('cfonts');
const apizero = "dbamaprincesa";
const { upload } = require('./arquivo/libraries/upload.js'); 
const photo = "./arquivo/photo/menu.jpg";
const mess = require('./arquivo/resposta/message.js');
const { menu } = require('./SRC/menus/menu.js');
const { menuadm } = require('./SRC/menus/menu.js');
const { menudono } = require('./SRC/menus/menu.js');
const { brincadeiras } = require('./SRC/menus/menu.js');
const nescessario = JSON.parse(fsExtra.readFileSync('./SRC/settings/nescessario.json'));
const { sendVideoAsSticker2, sendImageAsSticker2 } = require('./fuction/sticker/rename2.js');
const { sendVideoAsSticker, sendImageAsSticker } = require('./fuction/sticker/rename.js');
const { version } = require('./package.json');
const setting = JSON.parse(fsExtra.readFileSync('./arquivo/settings/setting.json', 'utf8'));
const { tabela } = require('./SRC/tabela/tabela.js');
const pastaLogos = './INFON/LOGOS/fotomenu.png';
const pastaFoto = './INFON/LOGOS/fotosair.png';

var corzinhas = ["red","green","yellow","blue","magenta","cyan","white","gray","redBright","greenBright","yellowBright","blueBright","magentaBright","cyanBright","whiteBright"]
const cor1 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
const cor2 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
const cor3 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
const cor4 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
const cor5 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]
 
const colors1 = ["magenta", "red", "green", "blue", "yellow", "magenta"]
const colors2 = ["cyan", "yellow", "blue", "green", "red", "cyan"]
const randomColors1 = colors1[Math.floor(Math.random() * (colors1.length))]
const randomColors2 = colors2[Math.floor(Math.random() * (colors2.length))]

const banner = cfonts.render((`SAKURA|BOT-VIP`), {
font: 'block',             
align: 'center',           
color: 'candy',
background: 'transparent',  
letterSpacing: 1,           
lineHeight: 1,            
space: true,               
maxLength: '0',            
gradient: [randomColors1, randomColors2],
independentGradient: false, 
transitionGradient: false, 
env: 'node'
});

const selopagbank = {"key": {"participant": "551140031775@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "PAGBANK", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;PAGBANK;;;\nFN:PAGBANK\nitem1.TEL;waid=551140031775:551140031775\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};

const seloMpg = {"key": {"participant": "5511988032872@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "MERCADO PAGO", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;MERCADO PAGO;;;\nFN:MERCADO PAGO\nitem1.TEL;waid=5511988032872:5511988032872\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};

const selonubank = {"key": {"participant": "551150390444@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "NUBANK", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;NUBANK;;;\nFN: NUBANK\nitem1.TEL;waid=551150390444:551150390444\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};

const selobBrasil = {"key": {"participant": "556140040001@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "BANCO DO BRASIL", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;BANCO DO BRASIL;;;\nFN:BANCO DO BRASIL\nitem1.TEL;waid=556140040001:556140040001\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};

const seloPicpay = {"key": {"participant": "5511991700674@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "PICPAY", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;PCPAY;;;\nFN:PCPAY\nitem1.TEL;waid=5511991700674:5511991700674\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};

module.exports = { pastaLogos, pastaFoto, seloPicpay, tabela, version, selopagbank, seloMpg, selonubank, selobBrasil, banner, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, photo, mess, menu, menuadm, menudono, brincadeiras, upload, apizero, nescessario, setting }


