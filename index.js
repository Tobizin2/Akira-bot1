//baileirys
const {
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
DisconectReason,
MessageTypeProto,
WAConnection,
WALocationMessage,
ReconnectMode,
WAContextInfo,
proto,
ProxyAgent,
waChatKey,
MimetypeMap,
MediaPathMap,
WAContactMessage,
WAContactsArrayMessage,
WAGroupInviteMessage,
WATextMessage,
WAMessageContent, 
WAMessage, 
BaileysError, 
WA_MESSAGE_STATUS_TYPE, 
MediaConnInfo, 
URL_REGEX, 
WAUrlInfo, 
WA_DEFAULT_EPHEMERAL, 
WAMediaUpload,
mentionedJid,
processTime,
Browser,
MessageType,
Presence,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
GroupSettingChange
} = require('@adiwajshing/baileys')
const speed = require('performance-now');
const fs = require('fs')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./base de dados/lib/functions')
const { color, bgcolor } = require('./base de dados/lib/color')
const moment = require('moment-timezone')
//configs
const config = JSON.parse(fs.readFileSync('./configs.json'))
//este prefix e pra caso queira um unico mais a base e multiprefix
//prefix = config.prefix
verificado = config.verificado

/********** CONST, (N MEXA AQUI) **********/
const blocked = []; 
cdd = "480000" 
ll = "\`\`\`"
crtt = "Jogo da velha" 
baterai = 'não detectado'
charging = 'não detectado'
emoji_bot = ";-;"
//_NUMERO DO DONO DO BOT

//você pode colocar funções adicionais aqui↓

//by Skiller↑

/*[-> register <-]*/
const {
	getRegisteredRandomId,
	addRegisteredUser,
	createSerial,
	checkRegisteredUser
} = require('./base de dados/lib/register.js')
/***** CONEXÃO *****/
async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color('escaneie o código qr'))
	})

	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Conectando base...')
	})
	client.on('open', () => {
		success('2', 'Base conectada')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
//local pra add bem vindo etc..
        

/*** FUNÇÕES ***/
/*const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, banner2, start, info, success, close, log } = require('./base de dados/src/functions');

/********** FUCTION BATERIA **********/
client.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
})
global.p
global.batrei = global.batrei ? global.batrei : []
client.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt(batteryLevelStr)
global.batrei.push(batterylevel)
})

/************* LINGUAGEM ************
client.on('chat-update', async (mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
m = simple.smsg(tobi, mek)
if (mek.key.fromMe) return 
global.p
global.blocked
{
/********** FUCTION BATERIA **********/
client.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
})
global.p
global.batrei = global.batrei ? global.batrei : []
client.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt(batteryLevelStr)
global.batrei.push(batterylevel)
})

/********** FUCTION BATERIA **********/
client.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
var baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
console.log(color('🔋Carga da bateria: ' + batterylevel+'%', "yellow"))
})

/********** FUCTION TEMPORIZADO **********/ 
function temporizado(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas ${pad(minutes)} minutos ${pad(seconds)} Segundos`
}

function horaOn(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas`
}
/********** FUCTION CASH **********/
const isLimit = (sender) =>{
if (isOwner) {return false;}
let position = false
for (let i of _cashB) {
if (i.id === sender) {
let limits = i.cash
if (limits >= limitawal) {
position = true
return true
} else {
_cashB
position = true
return false
}
}
}
if (position === false) {
const obj = {id: sender, cash: 1}
_cashB.push(obj)
fs.writeFileSync('./base de dados/srch/cash_.json', JSON.stringify(_cashB))
return false
}
}
/*** CONTS ***/
const { linguagem } = require('./base de dados/datauser/mess')
client.on('chat-update', async (mek) => {
try {
if (!mek.hasNewMessage) return

//_VISUALIZA AS MENSAGENS 
/*client.chatRead(from)

			*/
/************** HORAS ************/
const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const speedB = moment.tz('America/Sao_Paulo').format('ss')
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const data = moment.tz('Asia/Jakarta').format('DD/MM')
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
const waktu = moment.tz('Asia/Jakarta').format('HHmmss')
const time3 = moment().tz('America/Sao_Paulo').format('HH:mm')

/****** ANTIS *****/
const { isFiltered, addFilter } = require('./base de dados/txt/antispam')
const { isFiltered2, addFilter2 } = require('./base de dados/txt/antispam2');
const antilink = JSON.parse(fs.readFileSync('./base de dados/src/antilink.json'))

/******** OUTROS ********
const fs = require('fs')
const moment = require('moment-timezone')

/****** APIS ******/
const { y2mateA, y2mateV } = require('./base de dados/apis/y2mate.js')

/********* BASE DE DADOS**********/
const _registered = JSON.parse(fs.readFileSync('./base de dados/bot/registered.json'))
let welcome = JSON.parse(fs.readFileSync('./base de dados/src/welcome.json'));
const { color, bgcolor } = require('./base de dados/lib/color')
/****** MENUS ******/
const { menudono} = require('./base de dados/txt/menudono')
const { menuadm } = require('./base de dados/txt/menuadm')
const { jogos } = require('./base de dados/txt/jogos')
const { menudown } = require('./base de dados/txt/menudown')
const { menuplay } = require('./base de dados/txt/menuplay')

/****** IFS ******/
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if (mek.key.fromMe) return
const content = JSON.stringify(mek.message)
const type = Object.keys(mek.message)[0]
const from = mek.key.remoteJid
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

/****** BODY AUTO RESPONDE ******/
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '.'
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const isCmd = body.startsWith(prefix)
global.prefix
            
/*** STRING ***/
 var totalchat = await client.chats.all() 
 
 
 
 
 
 
const mathFoto = Math.floor(Math.random() * 31) + 1
             
             
             
/****** BOTÕES ******/
selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (mek.message.listResponseMessage && mek.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && mek.message.listResponseMessage.singleSelectReply.selectedRowId) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (mek.message.buttonsResponseMessage && mek.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'buttonsMessage') && mek.message.buttonsMessage.text ? mek.message.buttonsMessage.text : ''
           
const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
say = require('./base de dados/txt/say.js')
/****** LINGUAGEM DO GRUPO ******/
const botNumber = client.user.jid
const isGroup = from.endsWith('@g.us')
const sender = isGroup ? mek.participant : mek.key.remoteJid
const ownerNumber = [`${config.dono}`]
const isOwner = ownerNumber.includes(sender) 
const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false;
const isAntiLink = isGroup ? antilink.includes(from) : false
pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined									            
const isRegistered = checkRegisteredUser(sender)
/* const isNsfw = isGroup ? nsfw.includes(from) : false	*/
pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
const args = body.trim().split(/ +/).slice(1)
const q = args.join(" ")
        

/****** OUTROS ******/
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
const enviar = (teks) => {
client.sendMessage(from, teks, text, {quoted:mek})
}
const reply = (teks) => {
client.sendMessage(from, teks, text, {quoted:mek})
}
const sendMess = (hehe, teks) => {
client.sendMessage(hehe, teks, text)
}
/****** IF BOTÕES ******/
if (selectedButton == `1`) {
reply("1 funcionando")
}
if (selectedButton == `2`) {
reply("2 funcionando")
}
if (selectedButton == `3`) {
reply("3 funcionando")
}
//botão 2/lista
bselect = (type === 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

if (bselect == 'lista 1') {
reply("lista 1 funcionando")
}
if (bselect == 'lista 2') {
reply("lista 2 funcionando")
}
if (bselect == 'lista 3') {
reply("lista 3 funcionando")
}

/********** FUCTION BATERIA **********/
var porcentagem = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'  
const bateria = (`${baterai}`)
if (bateria <= 10) {
porcentagem = `*[█▒▒▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 20) {
porcentagem = `*[██▒▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 30) {
porcentagem = `*[███▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 40) {
porcentagem = `*[████▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 50) {
porcentagem = `*[█████▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 60) {
porcentagem = `*[██████▒▒▒▒] ${bateria}%*`
} else if (bateria <= 70) {
porcentagem = `*[███████▒▒▒] ${bateria}%*`
} else if (bateria <= 80) {
porcentagem = `*[████████▒▒] ${bateria}%*`
} else if (bateria <= 90) {
porcentagem = `*[█████████▒] ${bateria}%*`
} else if (bateria <= 100) {
porcentagem = `*[██████████] ${bateria}%*`
} 			
/******BOTÃO DE REGISTRO******/
const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
client.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};
const register1 = `Olá ${pushname}! \n\nRegistre-se antes de continuar usando o bot`
const register2 = 'Clique no botão abaixo para se registrar'
const register3 = [{buttonId: `${prefix}rg`,buttonText: {displayText: `🔖REGISTRAR`,},type: 1,},]
const pporigi = fs.readFileSync('./base de dados/menu/denz.jpg')
			
const sticRegister = (hehe) => {
ano = fs.readFileSync('./base de dados/menu/anime/Register.webp')
client.sendMessage(hehe, ano, sticker, { quoted: mek})}
if (selectedButton == `antilink on`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (isAntiLink) return reply('*📌 Já estava ativo antes*')
antilink.push(from)
fs.writeFileSync('./docs/interruptor/antilink.json', JSON.stringify(antilink))
reply('*ANTILINK ativado* com sucesso')
} catch(e) {
reply('erro inesperado')
}
};

if (selectedButton == `antilink off`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (!isAntiLink) return reply('*📌 Já estava desativado antes*')
antilink.splice(from)
fs.writeFileSync('./docs/interruptor/antilink.json', JSON.stringify(antilink))
reply('*ANTILINK desativado* com sucesso')
} catch(e) {
reply('erro inesperado')
}
};
//TROLI
						const ftrol = {
						key : {
                        participant : '0@s.whatsapp.net'
                        },
      					message: {
        	            orderMessage: {
                        itemCount : 9999999999,
                        status: 1,
                        surface : 1,
                        message: ``, 
                        orderTitle: ``,
                        thumbnail: `dfrply`, 
                        sellerJid: '0@s.whatsapp.net' 
                        }
                       	}
                     	}
                      	const vral = {contextInfo: { externalAdReply: {
                        title: "Dono",
                        mediaType: 1,
                        body: "Zeus-Bot",
                        thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvvYy0UIWgIx1d0GB3XXmsZi1XJgw6gwIsw&usqp=CAU',
						sourceUrl: 'https://api.whatsapp.com/send?phone=556993899391&text=Oi'}}}

						client.on('group-participants-update', async (anu) => {
							const mdata = await client.groupMetadata(anu.jid)
							if(antifake.includes(anu.jid)) {
								if (anu.action == 'add'){
									num = anu.participants[0]
									if(!num.split('@')[0].startsWith(55)) {
										
										setTimeout(async function () {
											client.groupRemove(mdata.id, [num])
										}, 1000)
									}
								}
							}
						})			
	
/****** TIPOS DE MÍDIA ******/
colors = ['red','white','black','blue','yellow','green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
//COMANDOS
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(comando), 'de', color(pushname), color(sender.split('@')[0]),'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(comando), 'de', color(pushname), color(sender.split('@')[0]), 'grupo', color(groupName), 'args :', color(args.length))
//MENSAGENS
if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color('Mensagem'), 'de', color(pushname), color(sender.split('@')[0]), 'args :', color(args.length))
if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color('Mensagem'), 'de', color(pushname), color(sender.split('@')[0]), 'grupo', color(groupName), 'args :', color(args.length))
//
/*const { menuhentai, allmenu, menufigu, menuadms, menudono, menuutils, galeria } = require('./base de dados/txt/menus.js');*/
const { help } = require('./base de dados/txt/help.js');
            
/*const nsfw = JSON.parse(fs.readFileSync('./base de dados/mob/nsfw.json'))*/
switch(comando) {	
/*** TODOS OS CMD APARTIR DAQUI ***/			
//menu para escolher
 
case 'teste30': //BY SR_LIGHT-DOMINA-CARAIO!!
case 'menu':
if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})              
buttons = [{buttonId: `${prefix}men`,buttonText:{displayText: '🔰MENULISTA🔰'},type:1},{buttonId:`${prefix}regras`,buttonText:{displayText:'🔰REGRAS🔰'},type:1},{buttonId:`${prefix}dono`,buttonText:{displayText:'🔰CRIADOR🔰'},type:1}]
/*client.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: help(p, hr, pushname, prema, checATM, useLevel, useXp, requireXp, patt, bateria, chatss, antilink_by_tobi, welcome_by_tobi, levelingon_by_tobi, antifaker_by_tobi, selfchat_by_tobi)})
*/
imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./base de dados/menu/baner2.png`), 'imageMessage', {thumbnail: fs.readFileSync(`./base de dados/menu/baner2.png`)})).imageMessage
const chatss = `${totalchat.length}`
buttonsMessage = {
contentText: ` 
	
╭═══════════════⊷
╰╮き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
╭┤⋟ Prefixo:『${prefix}』
┃│⋟ Hora: ${hr}
┃│⋟ Total chat: ${chatss}
┃│⋟ Bateria: ${bateria}
┃╰════════════⊷
╰╦═════「★」════⊷
╭┤き⃟ ɪɴғᴏʀᴍᴀᴄ̧ᴏ̃ᴇs ᴘᴇʀғɪʟ⃟ き
┃╰━━━━── • ──━━━━
┃┌━━━━── • ──━━━━
┃│⋟ Nome: ${pushname}                     
┃╰━━━━── • ──━━━━
╰╦═════「★」════⊷
╭┤       
┃╞════════════⊷
┃│⚠︎ ⟨⟩ ᴛᴏᴅᴏs ᴏs ᴍᴇɴᴜ ⟨⟩
┃╰━━━━── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤${prefix}Plays
┃╰━━━─── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤${prefix}Grupo
┃╰━━━─── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤${prefix}Jogos
┃╰━━━─── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤${prefix}Nuvem
┃╰━━━─── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤${prefix}dono
┃╰━━━─── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤${prefix}Infobot
┃╰━━━─── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤${prefix}otako
┃╰━━━─── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤${prefix}Bankloja
┃╰━━━─── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}Premium
┃╰━━━─── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤${prefix}Figurinhas
┃╰━━━─── • ──━━━━
╰━━━━━── • ──━━━━`,

footerText: 'kkkkk', imageMessage: imageMsg,
buttons: buttons,
headerType: 4
}

prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
client.relayWAMessage(prep)
break

case 'menufig':
case 'menufigu':
if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})              
buttons = [{buttonId: `${prefix}men`,buttonText:{displayText: '🔰MENULISTA🔰'},type:1},{buttonId:`${prefix}regras`,buttonText:{displayText:'🔰REGRAS🔰'},type:1},{buttonId:`${prefix}dono`,buttonText:{displayText:'🔰CRIADOR🔰'},type:1}]
/*client.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: help(p, hr, pushname, prema, checATM, useLevel, useXp, requireXp, patt, bateria, chatss, antilink_by_tobi, welcome_by_tobi, levelingon_by_tobi, antifaker_by_tobi, selfchat_by_tobi)})
*/
imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./base de dados/menu/baner2.png`), 'imageMessage', {thumbnail: fs.readFileSync(`./base de dados/menu/baner2.png`)})).imageMessage
buttonsMessage = {
contentText: ` 
	
┌═══════════════⊷
╰╮き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
┌┤${ll}▢ Prefix:『${prefix}』${ll}
┃│${ll}▢ Hora: ${hr}${ll}
┃│${ll}▢ Bateria: ${bateria}${ll}
┃│${ll}▢ ${prefix}Report『Erros?』${ll}
┃╰━━━━── • ──━━━━
└╦═════════════⊷
┌┤き⃟🎯ғᴏᴛᴏ/sᴛɪᴄᴋᴇʀ🎯⃟ き
┃╞═════════════⊷
┃│⚠︎ Tudo com : *<gif/foto>*
┃╰━━━━── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤${ll}${prefix}F 『Foto/Gif』${ll}
┃╰━━━━── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤${ll}${prefix}St 『Foto/Gif』${ll}
┃╰━━━━── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤ ${ll}${prefix}Stk『Foto/Gif』${ll}
┃╰━━━━── • ──━━━━
└╦══════════════⊷
┌┤き⃟🎯sᴛɪᴄᴋᴇʀ/ᴀɴɪᴍᴀᴅᴏ🎯⃟ き
┃╞═════════════⊷
┃│⚠︎ Faça figurinhas animadas
┃│⚠︎ Tudo com : *<texto/>*
┃╰━━━━── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤ ${ll}${prefix}Attp『Texto』${ll}
┃╰━━━━── • ──━━━━
└╦══════════════⊷
┌┤き⃟📁 ᴄᴏɴᴠᴇʀᴛᴇʀ 📁⃟ き
┃╞═════════════⊷
┃│⚠︎ Converta sticker Img/Vid.
┃╰━━━━── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤${ll}${prefix}Togif『Sticker』${ll}
┃╰━━━━── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤ ${ll}${prefix}Toimg『Sticker』${ll}
┃╰━━━━── • ──━━━━
└╦══════════════⊷
┌┤き⃟📁sᴛɪᴄᴋᴇʀ/ғᴏᴛᴏs📁⃟ き
┃╞═════════════⊷
┃│⚠︎ Edite fotos em sticker...
┃│⚠︎ Tudo com : *</foto>*
┃╰━━━━── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤ ${ll}${prefix}Figupet『Foto』${ll}
┃╰━━━━── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤ ${ll}${prefix}Figuger『Foto』${ll}
┃╰━━━━── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤${ll}${prefix}Figulgbt『Foto』${ll}
┃╰━━━━── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤${ll}${prefix}Figuarma『Foto』${ll}
┃╰━━━━── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤${ll}${prefix}Figuinvert『Foto』${ll}
┃╰━━━━── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤${ll}${prefix}Figupreso『Foto』${ll}
┃╰━━━━── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤${ll}${prefix}Figuwasted『Sticker』${ll}
┃╰━━━━── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤${ll}${prefix}Figuborrada『Sticker』${ll}
┃╰━━━━── • ──━━━━
┃♡ۣۜۜ፝͜͜͡͡✿➤${ll}${prefix}Figuprocurado『Sticker』${ll}
┃╰━━━━── • ──━━━━
└══════════════⊷`,

footerText: 'kkkkk', imageMessage: imageMsg,
buttons: buttons,
headerType: 4
}

prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
client.relayWAMessage(prep)
break


//MENU JOGOS
case 'menudown':
if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol}) //PEDI O REGISTRO
client.sendMessage(from, menudown(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Sticker Maker", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
break

//MENU DONO
case 'menuadm':
if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol}) // PEDIR REGISTRO
client.sendMessage(from, menuadm(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Sticker Maker", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
break

case 'jogos':
if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})//PEDI O REGISTRO
sayo = fs.readFileSync('./base de dados/menu/akira.mp4') //LOCAL DO /VÍDEO
client.sendMessage(from, sayo, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./base de dados/menu/botlogo.webp')} } }, caption: jogos(prefix) })
break



/*
case 'criador':
addFilter(from) 
const total_gp7 = `${totalchat.length}`
totalChat = await client.chats.all()
charge = charging ? 'sim' : 'não'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await client.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const criadorMenu = await getBuffer(ppimg)
var mediaByTobi = await client.prepareMessage(from, criadorMenu, MessageType.image, {thumbnail: null})
var qweriioaByTobi = mediaByTobi.message["ephemeralMessage"] ? mediaByTobi.message.ephemeralMessage : mediaByTobi
var button4s = [{buttonId: `${prefix}Infobot`, buttonText: {displayText: '🌙 MENU INFOBOT 🌳️'}, type: 1}]
var button4s = {contentText: `${(linguagem.dono(pushname, hr, total_gp7, bateria, ll))}`, footerText: `\`\`\`▢ Total Chats : *${totalChat.length}*\`\`\`\n\`\`\`▢ Carregando : *${charge}*\`\`\`\n\`\`\`▢ Bateria : *${baterai}*\`\`\`\n\`\`\`▢ Velocidade : *${latensi.toFixed(4)} segundos*\`\`\`\n\`\`\`▢ Tempo de atividade : *{horaOn(uptime())}*\`\`\``, buttons: button4s, headerType: 4, imageMessage: qweriioaByTobi.message.imageMessage}
client.sendMessage(from, button4s, MessageType.buttonsMessage, {quoted: mek})
break
*/
case 'criador':
addFilter(from) 
const total_gp7 = `${totalchat.length}`
totalChat = await client.chats.all()
charge = charging ? 'sim' : 'não'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await client.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const criadorMenu = await getBuffer(ppimg)
var mediaByTobi = await client.prepareMessage(from, criadorMenu, MessageType.image, {thumbnail: null})
var qweriioaByTobi = mediaByTobi.message["ephemeralMessage"] ? mediaByTobi.message.ephemeralMessage : mediaByTobi
var button4s = [{buttonId: `${prefix}Infobot`, buttonText: {displayText: '🌙 MENU INFOBOT 🌳️'}, type: 1}]
var button4s = {contentText: `${(linguagem.dono(pushname, hr, total_gp7, bateria, ll))}`, footerText: `\`\`\`▢ Total Chats : *${totalChat.length}*\`\`\`\n\`\`\`▢ Carregando : *${charge}*\`\`\`\n\`\`\`▢ Bateria : *${baterai}*\`\`\`\n\`\`\`▢ Velocidade : *${latensi.toFixed(4)} segundos*\`\`\`\n\`\`\`▢ Tempo de atividade : *{horaOn(os.uptime())}*\`\`\``, buttons: button4s, headerType: 4, imageMessage: qweriioaByTobi.message.imageMessage}
client.sendMessage(from, button4s, MessageType.buttonsMessage, {quoted: mek})
break

/*case 'menu':
buttons = [{buttonId: `${prefix}help2`,buttonText:{displayText: 'MENU'},type:1},{buttonId:`${prefix}kk`,buttonText:{displayText:'CRIADOR'},type:1},{buttonId:`${prefix}botao`,buttonText:{displayText:'MENUHENTAI'},type:1}]

imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./base de dados/menu/tunb.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./base de dados/menu/tunb.jpg`)})).imageMessage

eotiobb = "BEM VINDO AO MENU DO OBSCURE BOT"

buttonsMessage = {
contentText: eotiobb,
footerText: "clike em ums dos bot?es abaixo e seja feliz", imageMessage: imageMsg,
buttons: buttons,
headerType: 4
}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
client.relayWAMessage(prep)
reply('#tio300subs')
reply('peita')
break
*/
case 'welcome':
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
if (args.length < 1) return enviar(`[❗]On/Off, Exemplo ${p + comando} On`)
if (args[0] === 'on') {
if (isWelcome) return enviar('*[❗] ja esta ativado amigo...*')
welcome.push(from)
fs.writeFileSync('./base de dados/database/arquivos/welcome.json', JSON.stringify(welcome))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
let position = welcome.indexOf(welcome.find((x) => x === from))
if (position === -1) return enviar(`${comando} não estava ativo antes`)
welcome.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/welcome.json', JSON.stringify(welcome))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]ativar/desativar, Exemplo ${p + comando} On`)
}
break
case 'play':		  
if (!isOwner) if (isFiltered(sender)) return reply(`📍 *sistema de Anti_Spam!*\n _aguarde 15 segundos..._`);
addFilter(sender);

try {
if (args.length < 1) return reply('Coloca um nome depois do play')
await sleep(10000);
playi = body.slice(6)
  
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${playi}&apikey=oCHDwj8ggZGBGjU5WIaK5Rctu6c`)
if (anu.error) return reply(anu.error)
infomp3 = `𝗠𝗨𝗦𝗜𝗖𝗔 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗔𝗗𝗔

⏯️ *Nome* : ${anu.result.title}
🗳️ *Vídeo* : ${anu.result.source}
📚 *Tamanho* : ${anu.result.size}
ℹ️ *Download* : ${anu.result.url_audio}

_${nomeBot}_
`
buffer = await getBuffer(anu.result.thumbnail)
lagu = await getBuffer(anu.result.url_audio)
client.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3 })
client.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: selocont})
} catch(e) {
try {
if (!isOwner) if (isFiltered(sender)) return reply(`📍 *sistema de Anti_Spam!*\n _aguarde 15 segundos..._`);

addFilter(sender);
try {
if (args.length < 1) return reply('O que você deseja procurar?')
teks = args.join(' ')
 
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] O erro de consulta inserido não existe_')
})
let thumbInfo = await `❒「  *Youtube Search*  」
├ *Título :* ${res.all[0].title}
├ *ID de vídeo :* ${res.all[0].videoId}
├ *Carregado em :* ${res.all[0].ago}
├ *Visualizações :* ${res.all[0].views}
├ *Duração :* ${res.all[0].timestamp}
├ *Canal :* ${res.all[0].author.name}
└ *Link do canal :* ${res.all[0].author.url}

*_Aguarde o processo de upload....._*
`
try {
await sendFileFromUrl(res.all[0].image, image, {quoted: selocont, caption: thumbInfo})
} catch(e) {
reply (`Erro!`)
}
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Erro ao entrar no Y2mate Web * Tente repetir*_')
})
try {
await sendFileFromUrl(res[0].link, audio, {quoted: selocont, mimetype: 'audio/mp4', filename: res[0].output})
} catch(e) {
reply(`Erro!`)
}
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] O erro de consulta inserido não existe_')
})
let thumbInfo = await `❒「  *${botname}*  」
├ *Título :* ${res.all[0].title}
├ *Visualizações :* ${res.all[0].views}
├ *Duração :* ${res.all[0].timestamp}
├ *Canal :* ${res.all[0].author.name}
└ *Link do canal :* ${res.all[0].author.url}

*_Aguarde o processo de upload....._*
`
try {
await sendFileFromUrl(res.all[0].image, image, {quoted: selocont, caption: thumbInfo})
} catch(e) {
reply(`Erro!`)
}
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Erro ao entrar no Y2mate Web * Tente repetir*_')
})
try {
await sendFileFromUrl(res[0].link, document, {quoted: selocont, mimetype: 'audio/mp3', filename: res[0].output})
} catch(e) {
reply(`Erro ao enviar arquivo `)
}
}
} catch(e) {
reply(`Algo deu errado, tente novamente`)
}
} catch(e) {
console.log(e)
}
}
break

case 'rg':
if (isRegistered) return sticRegister(from)
const serialUser = createSerial(18)
veri = sender
_registered.push(sender)
fs.writeFileSync('./base de dados/lib/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
const jancok = `╭─❒ 「 Registrado 」 ❒
├ *🔖 Nome :* ${pushname}
├ *🔖 Número :* @${sender.split('@')[0]}
├ *🔖 Serial:* ${serialUser}
├ *🔖 Usuários:* ${_registered.length}
└❏
`
gbutsan = [
{buttonId:`${prefix}menu`,buttonText:{displayText:'🔰Menu'},type:1},
{buttonId:`${prefix}dono`,buttonText:{displayText:'🔰Criador'},type:1}
]
ppimg = await client.prepareMessage(from, pporigi, image, {thumbnail: pporigi})
const sendBtnVeryy = {
imageMessage: ppimg.message.imageMessage,
contentText:`${jancok}`,
footerText: `Obrigado por se registrar no bot`, 
buttons: gbutsan,
headerType: 4
}
client.sendMessage(from, sendBtnVeryy, MessageType.buttonsMessage, {quoted:ftrol, contextInfo: { mentionedJid: [sender]}})
console.log(color('[REGISTRO]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
break
			   
			   case 'figu':
				case 'fig':
				case 'f':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Falhou, no momento da conversão ${tipe} para o adesivo`)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Envie fotos com legendas *.f* ou marque uma imagem que já foi enviada`)
					}
					break
				
case 'kk':// ver comandos da base
teks = `
BASE FEITA POR SKILLER DEIXE OS CR?DITOS
https://youtube.com/SkillerOfc

.texto
-exibir texto com e sem verificado
.foto
-exibir foto com legenda
.lista
-exibir lista de comandos
.botao	
-exibir botão clicável
`
client.sendMessage(from, teks, text,{quoted: selo})
break	
case 'botao': // botão clicavel
const botao3 = [
{buttonId: '1', buttonText: {displayText: 'botao 1'}, type: 1},
{buttonId: '2', buttonText: {displayText: 'botao 2'}, type: 1},
{buttonId: '3', buttonText: {displayText: 'botao 3'}, type: 1},
]
const botao3Mensagem = {
contentText: `Botão clique!`,
footerText: 'Deixe os créditos ao canal ao menos o link',
buttons: botao3,
headerType: 1
}
client.sendMessage(from, botao3Mensagem, MessageType.buttonsMessage, {quoted: mek})
reply("tudo sobre os botões aqui https://botdewhatsapp.weebly.com/como-colocar-botatildeo-no-bot.html")
break
break
case 'lista': // botão de lista
temporalc = client.prepareMessageFromContent(from,{
"listMessage": {
"title": "Botão de lista",
"description": "Clique nos botões baixo e envie",
"buttonText": "clique aqui",
"listType": "SINGLE_SELECT",
"sections": [
{
"rows": [
{
"title": 'lista 1',
"rowId": ''
},
{
"title": 'lista 2',
"rowId": ''
},
{
"title": 'lista 3',
"rowId": ''
}
]
}
]                    
}
}, {quoted:selo})
client.relayWAMessage(temporalc)
break
case 'foto': // enviar foto com legenda
foto = fs.readFileSync('./assets/foto.jpg') 
client.sendMessage(from, foto, image,{quoted: mek, caption: 'funcionando', thumbnail: null})
break
case 'texto':// texto com verificado e sem
client.sendMessage(from, 'oi com verificado', text,{quoted: selo})
reply("oi sem verificado")
break

case 'bateria':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner) return  enviar(linguagem.ownerB())
client.sendMessage(from, linguagem.bateria(baterai, porcentagem), text, {contextInfo: fotothumb, quoted: mek})
await requestCash(sender)
break

case 'link': 
await reply(`

🔰esse e o Link do meu grupo
=:https://chat.whatsapp.com/EbFKJOqdOCZFhIepPsrY3t

`)
await sleep(2000)
sendDono('');
break
case 'linkyt': 
await reply(`

🔰esse e o Link do meu canal
=:https://youtube.com/channel/UCidhnB0Tf3i6q1i5t3gdVqg

`)
await sleep(2000)
sendDono('');
break

case 'dono':
if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})              
buttons = [{buttonId: `${prefix}link`,buttonText:{displayText: '🔰GRUPO DO BOT🔰'},type:1},{buttonId:`${prefix}linkyt`,buttonText:{displayText:'🔰BOT YT🔰'},type:1},{buttonId:`${prefix}menu`,buttonText:{displayText:'🔰MENU🔰'},type:1}]
/*client.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: help(p, hr, pushname, prema, checATM, useLevel, useXp, requireXp, patt, bateria, chatss, antilink_by_tobi, welcome_by_tobi, levelingon_by_tobi, antifaker_by_tobi, selfchat_by_tobi)})
*/
imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./base de dados/menu/dono.png`), 'imageMessage', {thumbnail: fs.readFileSync(`./base de dados/menu/dono.png`)})).imageMessage
buttonsMessage = {
contentText: ` 
	
╭═══════════════⊷
╰╮き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
╭┤⋟ Prefixo:『${prefix}』
┃╰════════════⊷
╰╦═════「★」════⊷
╭┤き⃟👤 ɪɴғᴏʀᴍᴀᴄ̧ᴏ̃ᴇs👤⃟ き
┃╞════════════⊷
┃│⚠︎ Informações do dono
┃╰━━━━── • ──━━━━
┃┌━━━━── • ──━━━━
┃│criador : wa.me//5574991202109    
┃│nome dono: 𝑻𝑶𝑩𝑰
┃╰━━━━── • ──━━━━
╰══════「★」════⊷`,

footerText: 'INFORMACOES DO MEU DONO', imageMessage: imageMsg,
buttons: buttons,
headerType: 4
}

prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
client.relayWAMessage(prep)
break

case 'perfil':
case 'infome':
case 'eu':


var pt = await client.getStatus(`${sender}`, MessageType.text)


// if (!isUser) return reply (mess.user)
try {
         var ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
               var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
var palavras = ["*Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos. – James Cameron, Cineastra*", "*O sucesso normalmente vem para quem está ocupado demais para procurar por ele – Henry David Thoreau, filósofo*", "*A vida é melhor para aqueles que fazem o possível para ter o melhor – John Wooden, jogador e treinador de basquete*", "*Os empreendedores falham, em média, 3,8 vezes antes do sucesso final. O que separa os bem-sucedidos dos outros é a persistência – Lisa M. Amos, executiva*", "*Se você não está disposto a arriscar, esteja disposto a uma vida comum – Jim Rohn, empreendedor*", "*Escolha uma ideia. Faça dessa ideia a sua vida. Pense nela, sonhe com ela, viva pensando nela. Deixe cérebro, músculos, nervos, todas as partes do seu corpo serem preenchidas com essa ideia. Esse é o caminho para o sucesso – Swami Vivekananda, pensador hindu*", "*Para de perseguir o dinheiro e comece a perseguir o sucesso – Tony Hsieh, empreendedor*", "*Todos os seus sonhos podem se tornar realidade se você tem coragem para persegui-los – Walt Disney, desenhista e empreendedor", "*Ter sucesso é falhar repetidamente, mas sem perder o entusiasmo – Winston Churchill, político*", "*Sempre que você vir uma pessoa de sucesso, você sempre verá as glórias, nunca os sacrifícios que os levaram até ali – Vaibhav Shah, pensador*", "*Sucesso? Eu não sei o que isso significa. Eu sou feliz. A definição de sucesso varia de pessoa para pessoa Para mim, sucesso é paz anterior – Denzel Washington, ator*", "*Oportunidades não surgem. É você que as cria – Chris Grosser, fotógrafo*", "*Não tente ser uma pessoa de sucesso. Em vez disso, seja uma pessoa de valor – Albert Einstein, físico*", "*Não é o mais forte que sobrevive, nem o mais inteligente. Quem sobrevive é o mais disposto à mudança – Charles Darwin, biólogo*", "*A melhor vingança é um sucesso estrondoso – Frank Sinatra, cantor*", "*Eu não falhei. Só descobri 10 mil caminhos que não eram o certo – Thomas Edison, inventor*", "*Um homem de sucesso é aquele que cria uma parede com os tijolos que jogaram nele – David Brinkley, jornalista*", "*Ninguém pode fazer você se sentir inferior sem o seu consentimento – Eleanor Roosevelt, primeira-dama dos EUA", "*O grande segredo de uma boa vida é encontrar qual é o seu destino. E realizá-lo – Henry Ford, empreendedor*", "*Se você está atravessando um inferno, continue atravessando – Churchill*", "*O que nos parece uma provação amarga pode ser uma bênção disfarçada – Oscar Wilde, escritor*", "A distância entre a insanidade e a genialidade é medida pelo sucesso – Bruce Feirstein, roteirista", "*Não tenha medo de desistir do bom para perseguir o ótimo – John D. Rockefeller, empreendedor*", "*Não tenha medo de desistir do bom para perseguir o ótimo – John D. Rockefeller, empreendedor*", "*A felicidade é uma borboleta que, sempre que perseguida, parecerá inatingível; no entanto, se você for paciente, ela pode pousar no seu ombro – Nathaniel Hawthorne, escritor*", "*Se você não pode explicar algo de forma simples, então você não entendeu muito bem o que tem a dizer – Einstein*", "*Há dois tipos de pessoa que vão te dizer que você não pode fazer a diferença neste mundo: as que têm medo de tentar e as que têm medo de que você se dê bem – Ray Goforth, executivo*", "*Comece de onde você está. Use o que você tiver. Faça o que você puder – Arthur Ashe, tenista*","*As pessoas me perguntam qual é o papel que mais gostei de interpretar. Eu sempre respondo: o próximo – Kevin Kline, ator*","*Descobri que, quanto mais eu trabalho, mais sorte eu pareço ter – Thomas Jefferson, político*","*O ponto de partida de qualquer conquista é o desejo – Napoleon Hill, assessor político*"]
var conselho = palavras[Math.floor(Math.random() * palavras.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)

buffer = await getBuffer(ppimg)
hisil = `
     「 🔥 ~_*PERFIL*_~ 🌈 」
🗒 *Nome* : *${pushname}*
🪀 *Número* : wa.me/${sender.split('@')[0]}

🐂 *Nível gado* : *${nivelgador}${nivelgado2r}%*
😈 *Nível puta* : *${putar}${putar2}%*
😋 *Nível de gostosura* : *${gostosurar}${gostosurar2}%*
🍼 *Valor do programa* : *R$${programa}*

*recado:* _${pt.status}_

➻ *~_CONSELHO_~* :
${conselho}
`
client.sendMessage(from, buffer, image, {caption: hisil})

break
case 'infobot':
addFilter(from)
var totalchat = `${totalchat.length}`
totalChat = await client.chats.all()
charge = charging ? 'sim' : 'não'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await client.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const infobotMenu = await getBuffer(ppimg)
var mediaByTobi = await client.prepareMessage(from, infobotMenu, MessageType.image, {thumbnail: null})
var qweriioaByTobi = mediaByTobi.message["ephemeralMessage"] ? mediaByTobi.message.ephemeralMessage : mediaByTobi
var button5s = [{buttonId: `${prefix}animes`, buttonText: {displayText: '☔ MENU ANIMES 🌸'}, type: 1}]
var button5s = {contentText: `${(linguagem.info(pushname, hr, totalchat, bateria, ll))}`, footerText: `\`\`\`▢ Total Chats : *${totalChat.length}*\`\`\`\n\`\`\`▢ Carregando : *${charge}*\`\`\`\n\`\`\`▢ Bateria : *${baterai}*\`\`\`\n\`\`\`▢ Velocidade : *${latensi.toFixed(4)} segundos*\`\`\`\n\`\`\`▢ Tempo de atividade : *${horaOn(os.uptime())}*\`\`\``, buttons: button5s, headerType: 4, imageMessage: qweriioaByTobi.message.imageMessage}
client.sendMessage(from, button5s, MessageType.buttonsMessage, {quoted: mek})
break

case 'antilink':	
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`);
try {
if (isAntiLink) {
			sendButMessage(from, seloOn, '☘️ *antilink* está ativado', `com o antilink ativado, todos os participantes (exceto adms) que enviarem links serão banidos imediatamente.`, [
            {              
              buttonId: `antilink off`,
              buttonText: {
                displayText:  `🔴 [DESATIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
if (!isAntiLink) {
			sendButMessage(from, seloOff, '🍎️ *antilink* está desativado', `ative o antilink para proteger seu grupo contra divulgação, quem mandar link é banido (exceto adms)`, [
            {              
              buttonId: `antilink on`,
              buttonText: {
                displayText:  `🟢 [ATIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
                } catch(e) {
                reply(`Erro inesperado, tente novamente`)
                }
            break			


if (isAntiPalavrão) if (budY.includes("piroca") ||(budY.includes("filho da puta") || (budY.includes("toma no cu") || (budY.includes("no seu cu") || (budY.includes("toma no seu cú") || (budY.includes("teu cú") ||  (budY.includes("teu cu") || (budY.includes("no seu cú") || (budY.includes("tmnc") || (budY.includes("arrombado") || (budY.includes("fudid") || (budY.includes(" gore") || (budY.includes("bosta") || (budY.includes("fdp") || (budY.includes("merda") || (budY.includes("buceta") || (budY.includes("do seu cu") || (budY.includes("do seu cú") || (budY.includes("puta")))))))))))))))))))){
if (isOwner) if (isGroupAdmins) {
return reply (`n vou banir você pelo palavrão :3`)
}
reply (`🛑 *palavra ofensiva detectada* 🛑`)
await sleep(5000);
await zero.groupRemove(from, [sender]);
}

if (isAntiLink) if (budy.includes("https://") || (budy.includes("http://") || (budy.includes("//youtube") || (budy.includes("TED ou PIX") || (budy.includes("🤑🤑🤑") || (budy.includes(".com") || (budy.includes("s.kwai") || (budy.includes("www.") || (budy.includes("wa.me") )))))))))  {
if (isWhiteList) return
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (isOwner) return reply (`Vc é meu dono, não posso te banir :3`);
if (isGroupAdmins) return reply (`Vc é admin, não vai levar ban`);
try {
await reply(`se fudeu kkkkk`)
await sleep(500)
await zero.groupRemove(from, [sender]);
reply(`vai tarde, baka`)
} catch {
reply(`Erro ao remover membro`)
}
} catch(e) {
reply('erro inesperado')
}
} else if (isImage && imageCaption) {
if (imageCaption.includes('https://') || (imageCaption.includes('http://') || (imageCaption.includes('TED ou PIX') || (imageCaption.includes('wa.me') || (imageCaption.includes('www.') || (imageCaption.includes('s.kwai') || (imageCaption.includes('.com')))))))) {
if (isWhiteList) return
if (isOwner) return reply (`Vc é meu dono, não posso te banir :3`);
if (isGroupAdmins) return reply (`Vc é admin, não vai levar ban`);
try {
await reply(`se fudeu kkkkk`)
await sleep(500)
await zero.groupRemove(from, [sender]);
reply(`vai tarde, baka`)
} catch {
reply(`Erro ao remover membro`)
}
}
}
if (isVideo && videoCaption) {
if (videoCaption.includes('https://') || (videoCaption.includes('http://') || (videoCaption.includes('TED ou PIX') || (videoCaption.includes('wa.me') || (videoCaption.includes('www.') || (videoCaption.includes('s.kwai') || (videoCaption.includes('.com')))))))) {
if (isWhiteList) return
if (isOwner) return reply (`Vc é meu dono, não posso te banir :3`);
if (isGroupAdmins) return reply (`Vc é admin, não vai levar ban`);
try {
await reply(`se fudeu kkkkk`)
await sleep(500)
await zero.groupRemove(from, [sender]);
reply(`vai tarde, baka`)
} catch {
reply(`Erro ao remover membro`)
}
}
}

	
/*case 'antilink':
        
        txtt =`*Olá* ${pushname}\n*Escolha umas das opções abaixo*`

               buttons = [{buttonId: `${prefix}antilinks on`,buttonText:{displayText: 'Ativar'},type:1},{buttonId:`${prefix}antilinks off`,buttonText:{displayText:'Desativar'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: '*Selecione Ativar: Para Ativar o modo*\n*Selecione Desativar: Para desativar o modo*',
               buttons: buttons,
               headerType: 1
}

          prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
               client.relayWAMessage(prep)
               break*/
case 'fechargp':
case 'fgp':
case 'sendadm':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `*[❗] Grupo fechado pelo administrador* @${nomor.split("@s.whatsapp.net")[0]}\n*Ksksk apenas administradores* *quem podem enviar mensagens*`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
case 'group':
        
        txtt =`*Olá* ${pushname}\nEscolha umas das opções abaixo`

               buttons = [{buttonId: `${prefix}opengp`,buttonText:{displayText: 'Abrir'},type:1},{buttonId:`${prefix}closegp`,buttonText:{displayText:'Fechar'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: '*Selecione Abrir: Para Abrir o GP*\n*Selecione Fechar: Para Fechar o GP*',
               buttons: buttons,
               headerType: 1
}

          prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
               client.relayWAMessage(prep)
               break

default: 

if (body == `${prefix}${comando}`) {
hsl = `*?��? *CMD N?O ENCONTRADO* ?��? *\n\n?? Olá @${sender.split("@")[0]}!!\n?? O comando: *${prefix}${comando}*\n?? Não existe ou digitou errado\n?? Verifique usando ${prefix}menu ^^`
client.sendMessage(from, hsl, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
}
}
} catch (err) {
e = String(err)
if (!e.includes("this.isZero" || !e.match("jid is not defined"))){
const time_error = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
console.log(color(time_error, "yellow"), color("[ ERRO ]", "aqua"), color(e, 'red'))
}
}
})
}
starts()