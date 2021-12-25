/*

olá tudo bão?

Esse bot foi criado por Tio Momonga ®
Whatsapp:
https://chat.whatsapp.com/G6ScVKu1MDBDKytBa1HRaf

YouTube:
https://youtube.com/channel/UCEXnX1CqgbV5xVabZG71aUw

Esse bot é um trabalho que eu estou fazendo sem ganhar nada, esse bot é grátis e sempre será.
Apoie-me! Eu estou aberto a parcerias, mas tenha em mente que não ganhará nada com esse bot!

para ter acesso antecipado as atualizações da Albedo®, entre no grupo e seja um dos primeiros a testar!



Créditos/ Agradecimentos especiais aos seguintes bots, que me ajudaram a formar a Albedo como é hoje:
_ Akame
_ Aleatory bot
_ Darling bot
_ Megumin bot

Se eu esquecer alguém não leve a mal! kkk, me informe.
Algumas cases e outras coisas que estão aki foram fruto desses bots, que foram pegues em vídeos no YT.
(Aleatory peguei com o próprio criador).





Tio Momonga não apoia de forma alguma a venda de bots, e sim que o conhecimento precisa ser compartilhado com todos!
Se vc comprou esse bot ou qualquer coisa dentro dele, saiba que vc foi enganado

*/


// não vai cair o cu da bunda se deixar os créditos né

// mensagem especial para os kibadores: kibem a vontade

// a dubladora desse bot pode ser encontrada no site "vintepila.com", você precisa pagar R$20,00 para ter acesso a duzentas palavras a seu gosto. A dublagem é muito boa, você não irá se arrepender!





// Overlord é o melhor anime de todos os tempos :3

// Overlord/Albedo/Momonga/ são propriedades intelectuais de Kugane Marayuma/ Studio MadHouse. Tio Momonga não se responsabiliza pelo mal uso desse bot







const {
    WAConnection,
    MessageType,
    Presence,
ChatModification,
    Mimetype,
    ReconnectMode,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const os = require('os');
const { ptbr } = require('./base de dados/mess')
const { banner2, banner3 } = require('./lib/functions2');
const { color, bgcolor } = require('./lib/color')
const googleImage = require('g-i-s')
const { isFiltered, addFilter } = require('./lib/antispam')
const { isFiltered2, addFilter2 } = require('./lib/antispam2')
const { help } = require('./json/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { addLimit, getLimit } = require('./json/limit.js')
const { fetchJson, fetchText, createExif } = require('./lib/fetcher')
const { menu } = require('./textos/menu')
const { jrb } = require('./others/ltk')
const { menuhentai } = require('./textos/menuhentai')
const { menudono } = require('./textos/menudono')
const { menuadms } = require('./textos/menuadms')
const { allmenu } = require('./textos/allmenu')
const { galeria } = require('./textos/galeria')
const { menu2 } = require('./textos/menu2')
const { menudive } = require('./textos/menudive')
const { menufigu } = require('./textos/menufigu')
const { menudown } = require('./textos/menudown')
const { yag } = require('./others/asu')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const uang = JSON.parse(fs.readFileSync('./json/uang.json'))
const { addBanned, unBanned, cekBannedUser } = require("./json/banned.js")
const { addBanned2, unBanned2, cekBannedUser2 } = require("./json/banned2.js")
const cfonts = require('cfonts')
const { yta, ytv, igdl, upload, uploadImages } = require('./lib/ytdl')
const _limit = JSON.parse(fs.readFileSync('./json/limit.json'))
setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const _registered = JSON.parse(fs.readFileSync('./json/registered.json'))
const imageToBase64 = require('image-to-base64')
//const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const chalk = require('chalk')
const request = require('request')
const axios = require('axios')
const encodeUrl = require('encodeurl')
const premium = JSON.parse(fs.readFileSync('./json/user/premium.json'));
const lolis = require('lolis.life')
const { validmove, setGame } = require('./others/src/tictactoe');
const crypto = require('crypto')
const speed = require('performance-now')
const yts = require( 'yt-search')
const { y2mateV, y2mateA, wikiSearch, jagoKata } = require('./lib/y2mate')
const loli = new lolis()
const welkom = JSON.parse(fs.readFileSync('./json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./json/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./json/simi.json'))
const setting = JSON.parse(fs.readFileSync('./json/settings.json'))
const antifake = JSON.parse(fs.readFileSync('./json/antifake.json'))
prefix = setting.prefix
p = prefix

baterai = 'não detectado'
charging = 'não detectado'

const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')

 if(time2 > "00:00:00"){
var tempo = 'Boa madrugada'
                                        }                       
if(time2 > "05:30:00"){
var tempo = 'Bom dia'
                                        }
if(time2 > "12:00:00"){
var tempo = 'Boa tarde'
                                        }
if(time2 > "19:00:00"){
var tempo = 'Boa noite'
                                        }

                                        
      

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

const starts = async (albedo = new WAConnection()) => {
client = albedo
client._maxListeners = 200;
client.browserDescription = ["ALBEDO_bot", "by: Gabriel", "1.0"];
client.browserDescription.push('ALBEDO_bot','Baileys','Opera');
client.autoReconnect = ReconnectMode.onConnectionLost || 2
client.logger.level = 'warn'
console.log(banner2.string)
console.log(banner3.string)

client.connectOptions.maxRetries = 99999
client.on('qr', () => {
console.log(color(''), color(' Escaneie o QR CODE para iniciar o bot'))
})
fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
client.on('connecting', () => {
 start('2', 'Acordando a Albedo...')
})
client.on('open', () => {
success('2', 'ALBEDO está conectada!!!\n')
console.log(chalk.magenta(""), chalk.keyword("blue")("WA: " + client.user.phone.wa_version))
console.log(chalk.magenta(""), chalk.keyword("blue")("ANDROID: " + client.user.phone.os_version))
console.log(chalk.magenta(""), chalk.keyword("blue")("APARELHO: " + client.user.phone.device_manufacturer + ", " + client.user.phone.device_model))
console.log(chalk.magenta(""), chalk.keyword("blue")(`\n`))

}) 

await client.connect({
        timeoutMs: 30 * 1000
    })
fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
client.on('close', () => {
rc = 'A conexao caiu...'
console.log(color(rc,'red'))
})



const {
wa_version,
mcc,
mnc,
os_version,
device_manufacturer,
device_model
} = albedo.user.phone
const botNumber = albedo.user.jid
	albedo.on('group-participants-update', async (anu) => {
if(antifake.includes(anu.jid)) {
	const mdata = await albedo.groupMetadata(anu.jid)
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
				albedo.sendMessage(mdata.id, '👮🏻‍♀️Números fake aqui não "amigo" 👮🏻‍♀️️', MessageType.text)							
				setTimeout(async function () {
							console.log(color('[','white'), color('!','red'), color(']','white'), color('BANINDO O NÚMERO FAKE...','red'))
				if (!botNumber) albedo.groupRemove(mdata.id, [num])
					}, )
				}
			}
		}		
if (!welkom.includes(anu.jid)) return
      try {
         const mdata = await albedo.groupMetadata(anu.jid)
         num = anu.participants[0]
         console.log(anu)
         ini_user = albedo.contacts[num]
         namaewa = ini_user.notify
         member = mdata.participants.length

         try {
               var ppimg = await albedo.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
            } catch {
               var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
        try {
               var ppgc = await albedo.getProfilePicture(anu.jid)
            } catch {
               var ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
        shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
        shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgc}`)
             const wel ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "554991579631-1625944593@g.us"  }, "message": {orderMessage: {itemCount: 999999,status: 200,surface: 200, message: `⊳ GRUPO : ${mdata.subject}`, orderTitle: 'Gabriel', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
//        const wel = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${mdata.subject}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;albedo,;;;\nFN:albedo,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`src/logo.jpeg`), thumbnail:fs.readFileSync(`src/logo.jpeg`),sendEphemeral: true}}}
//        const wel = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption":`${mdata.subject}`} } } 
                  if (anu.action == 'add') {
                  
             img = await getBuffer(`  https://api-gdr2.herokuapp.com/api/canvas/menu?titulo=BEM VINDO(A)&nome=${encodeUrl(namaewa)}&perfil=${shortpc.data}&fundo=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU&grupo=SEJA BEM VINDO AO GRUPO ${encodeUrl(mdata.subject)}&numero=2021&membroConta=${mdata.participants.length}`)
//         	img = await getBuffer(`https://servant-of-evil.herokuapp.com/api/swiftlite/welkom?nama=${sender}&gc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&pp=${shortpc.data}&bg=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU'&member=${mdata.participants.length}&apikey=GFL`)
            teks = `[❗] Olá @${num.split('@')[0]} \𝑺𝑬𝑱𝑨 𝑩𝑬𝑴 𝑽𝑰𝑵𝑫𝑶 𝑨 𝑶 𝑮𝑹𝑼𝑷𝑶 𝑳𝑬𝑰𝑨 𝑨𝑺 𝑹𝑬𝑮𝑹𝑨𝑺 𝑷𝑨𝑹𝑨 𝑵𝑨𝑶 𝑺𝑬𝑹 𝑩𝑨𝑵𝑰𝑫𝑶 𝑫𝑰𝑮𝑰𝑻𝑬 .𝑴𝑬𝑵𝑼 𝑷𝑨𝑹𝑨 𝑼𝑺𝑨𝑹 𝑶𝑺 𝑪𝑶𝑴𝑨𝑵𝑫𝑶𝑺♪`
            albedo.sendMessage(mdata.id, img, MessageType.image, {caption: teks, quoted: wel, contextInfo: {'mentionedJid': [num]} })
            
         } else if (anu.action == 'remove') {
         img = await getBuffer(`  https://api-gdr2.herokuapp.com/api/canvas/menu?titulo=ADEUS&nome=${encodeUrl(namaewa)}&perfil=${shortpc.data}&fundo=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU&grupo=SAIU DE ${encodeUrl(mdata.subject)}&numero=2021&membroConta=${mdata.participants.length}`)
//         	img = await getBuffer(`https://servant-of-evil.herokuapp.com/api/swiftlite/goodbye?nama=${num.split('@')[0]}&gc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&pp=${shortpc.data}&bg=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU'&member=${mdata.participants.length}&apikey=GFL`)
            teks = `[❗] Tchau @${num.split('@')[0]} 👋\n◪Ja vai tarde baka kkkk~~`
            albedo.sendMessage(mdata.id, img, MessageType.image, {caption: teks,quoted: wel, contextInfo: {'mentionedJid': [num]}})
          } else if (anu.action == 'promote') {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/promote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=Parabéns por se tornar um adm do grupo!&pp=${shortpc.data}&bg=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU'`)
            teks = `◪ PROMOVER DETECTADO\n\n├─ Número: ${num.replace('@s.whatsapp.net', '')}\n├─ @${num.split('@')[0]} se tornou um administrador do grupo, parabéns`
          //  albedo.sendMessage(mdata.id, img, MessageType.image, {caption: teks, quoted: wel, contextInfo: {'mentionedJid': [num]}})
         } else if (anu.action == 'demote') {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/demote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=${namaewa} virou membro comum&pp=${shortpc.data}&bg=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU'`)
            teks = `◪ DESPROMOVER DETECTADO\n\n\n├─ Número: ${num.replace('@s.whatsapp.net', '')}\n├─  @${num.split('@')[0]} Não e mais um administrador do grupo`
         //   albedo.sendMessage(mdata.id, img, MessageType.image, {caption: teks, quoted: wel, contextInfo: {'mentionedJid': [num]}})
         }
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})


	//call auto block
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
albedo.on('CB:action,,call', async json => {
const callerId = json[2][0][1].from;
console.log('bloqueando o '+ callerId)
albedo.sendMessage(callerId, '「 ❗ 」Sistema de bloqueio automático, não gosto que me lighe 🐤', MessageType.text)
await sleep(4000)
await albedo.blockUser(callerId, 'add')
})

	albedo.on('group-update', async (anu) => {
falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "albedo", "caption": `albedo-BOT️`, 'jpegThumbnail': fs.readFileSync(`./midia/fotos/2.jpg`)}}}
  metdata = await albedo.groupMetadata(anu.jid)
    if(anu.announce == 'false'){
    teks = `「 *[❗] GRUPO ABERTO* 」\n\n_O grupo foi aberto pelo administrador_\n_Agora todos os membros podem enviar mensagens_`
    albedo.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(anu)
  }
  else if(anu.announce == 'true'){
    teks = `「 *[❗] GRUPO FECHADO* 」\n\n_O grupo foi fechado pelo administrador_\n_Agora, mess administradores podem enviar mensagens_`
    albedo.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(anu)
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `「 *[❗] DESCRIÇÃO DO GRUPO ALTERADA* 」\n\nA descrição do grupo foi alterada pelo administrador wa.me/${anu.descOwner.split('@')[0]}\n• Nova Descrição : \n${anu.desc}`
    albedo.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: falfa})
    console.log(anu)
  }
  else if(anu.restrict == 'false'){
    teks = `「 *As configuração do grupo foi alterada* 」\nAgora todos os membros podem editar as informações deste grupo`
    albedo.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(anu)
  }
  else if(anu.restrict == 'true'){
    teks = `「 *As configuração do grupo foi alterada* 」\n\nos Membros comum não pode mais editar o grupo\nSomente admins`
    albedo.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(anu)
  }
})

	albedo.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			/*global.blocked*/
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey // contact me on whatsapp wa.me/6285892766102
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
			
			

// botões			
			/*
			
body = (type === 'conversation' && mek.message.conversation.startsWith(p)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(p) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(p) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(p) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage')&& mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''		
        
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
        		
			*/
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && ((mek.message[type].fileSha256.toString('base64')) !== null && (mek.message[type].fileSha256.toString('base64')) !== undefined) ? (mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		
		
		
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
		
		/* dados da msg
albedo.on('chat-update', chatUpdate => {
if (chatUpdate.messages && chatUpdate.count){
const dadosmsg = chatUpdate.messages.all()[0];
console.log(dadosmsg)
}
})
			*/

mess = {
spam: '[ ❗ ] SPAM\n\n_Esse comando foi usado recentemente... aguarde 30 segundos antes de usar novamente..._',
				wait: '⌛ Em processo ⌛',
				success: '✔️ Pronto ✔️',
				error: {
					stick: '❌ Falha, ocorreu um erro ao converter a imagem em um adesivo ❌',
					Iv: '❌ Link não é valido ❌'
				},
				only: {
					group: '❌ Este comando só pode ser usado em grupos! ❌',
					ownerG: '❌ Este comando só pode ser usado pelo dono do grupo! ❌',
					ownerB: '❌ Este comando só pode ser usado pelo dono do bot! ❌',
					admin: '❌ Este comando só pode ser usado por admins! ❌',
					Badmin: '❌ Este comando só pode ser usado quando o bot é um administrador! ❌',
					user: ' *📍VC NÃO ESTÁ REGISTRADO!*\n\npara se registrar digite:\n*.rg*'
	
				}
			}


			
		// consts is
					
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const isAntiFake = isGroup ? antifake.includes(from) : false
			pushname = albedo.contacts[sender] != undefined ? albedo.contacts[sender].vname || albedo.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await albedo.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			numberOwner = ownerNumber
			numeroDono = ownerNumber
			
			
const nsfw = JSON.parse(fs.readFileSync('./json/nsfw.json'))

const isNsfw = isGroup ? nsfw.includes(from) : false	
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				albedo.sendMessage(from, teks, text, {quoted:mek})
			}
			
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const enviar = (teks) => {
				albedo.sendMessage(from, teks, text, {quoted:mek})
			}
		const mensagem = (teks) => {
				albedo.sendMessage(from, teks, text, {quoted:mek})
			}
		const reply2 = (q, q2) => {
albedo.sendMessage(from, q2, text, {contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: q})
}
			
			const sendMess = (hehe, teks) => {
				albedo.sendMessage(hehe, teks, text)
			}
			const selo = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": 'Albedo'} } }
			const mathSelo = Math.floor(Math.random() * 13) + 1


//

			
		
			
			
                                  
                     
			
			const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Hora, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minuto, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " segundos" : " Segundos") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}




const selo22 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": '*[ Quer o bot no seu grupo também? ]*\nProcure por "Tio Momonga" no YouTube'} } }
			const say1 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283136505591-1614953337@g.us" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "application/octet-stream", "title": `「 Tempo de atividade: 」\n${runtime(process.uptime())}\n\n`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`./midia/selos/${mathSelo}.jpg`)}}}
			
			const say2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "554991579631@s.whatsapp.net" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "application/octet-stream", "title": `*「 Quer ter o bot no seu grupo também? 」*\nProcure por "Tio Momonga" no You Tube\n\n`, "jpegThumbnail": fs.readFileSync(`./midia/selos/${mathSelo}.jpg`)}}}
			
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? albedo.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : albedo.sendMessage(from, teks.trim(), extendedText, {quoted: selo, contextInfo: {"mentionedJid": memberr}})
			}
	const textoAds = (teks) => {
            albedo.sendMessage(from, teks, text,  {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
                "title": `Clique aki para mais informações`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg",
        "thumbnail":  fs.readFileSync(`./midia/selos/5.jpg`),
                "sourceUrl": `https://api.whatsapp.com/send?phone=554991202109&text=${tempo}%20 tobi! Eu estou entrando em contato com vc através do seu bot,a Albedo 🙃 `
},mentionedJid:[sender]}, quoted : selo22})
        }
        const enviarAds = textoAds
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			let authorname = albedo.contacts[from] != undefined ? albedo.contacts[from].vname || albedo.contacts[from].notify : undefined	
			if (authorname != 'Gabriel') { } else { authorname = '554991579631' }	
			
			//_VISUALIZA AS MENSAGENS 
albedo.chatRead(from)
			

// console

const isSticker = type === 'stickerMessage'

/*
const isVideo = content.includes('videoMessage')
*/

const isVideo = type === 'videoMessage'

const isImage = type === 'imageMessage'

const isAudio = type === 'audioMessage'

budyn = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''

if (isSticker) budyn = ' sticker '
if (isVideo) budyn = ' vídeo '
if (isImage) budyn = 'image'
if (isAudio) budyn = 'audio'


if (isCmd) if (isGroup) console.log(color('[ COMANDO ]\n╭──────────╮\n', 'blue'), color(`\n"${cmd}"\nde ${pushname}/${sender.split("@")[0]}\nno grupo ${groupName}\nàs ${time}\n`, 'gray'), color('\n╰──────────╯\n\n', 'blue'))

if (!isCmd) if (isGroup) console.log(color('[ MENSAGEM ]\n╭──────────╮\n', 'orange'), color(`\nde ${pushname}/${sender.split("@")[0]}\nno grupo ${groupName}\nàs ${time}\n\nconteúdo: "${budyn}"\n`, 'gray'), color('\n╰──────────╯\n\n', 'orange'))

if (isCmd) if (!isGroup) console.log(color('[ COMANDO PRIVADO ]\n╭──────────╮\n', 'blue'), color(`\n"${cmd}"\nde ${pushname}/${sender.split("@")[0]}\nàs ${time}\n`, 'gray'), color('\n╰──────────╯\n\n', 'blue'))

if (!isCmd) if (!isGroup) console.log(color('[ MENSAGEM PRIVADA ]\n╭──────────╮\n', 'orange'), color(`\nde ${pushname}/${sender.split("@")[0]}\nàs ${time}\n\nconteúdo: "${budyn}"\n`, 'gray'), color('\n╰──────────╯\n\n', 'orange'))


			
			
			function addMetadata(packname, author) {	
				 packname = 'tobi sexo'; 
				 author = '5574991202109';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./json/stickers/${name}.exif`)) return `./json/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				

				fs.writeFile(`./json/stickers/${name}.exif`, buffer, (err) => {	
					return `./json/stickers/${name}.exif`	
				})	

			}












// OTIMIZAÇÃO DE CÓDIGO


const enviarCard = (teks) => {
            albedo.sendMessage(from, teks, text,  {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
                "title": `Albedo_bot`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg",
                "thumbnail": fs.readFileSync(`./midia/menu/10.jpg`),
                "sourceUrl": `https://api.whatsapp.com/send?phone=554991579631&text=Eay%20gay`
},mentionedJid:[sender]}, quoted : say1})
        }
        
        const menuComFotoAleatoria = (q, q2) => {

random = Math.floor(Math.random() * 30) + 1

         menuFoto2 = fs.readFileSync(`./midia/menu/${random}.jpg`)
         
         albedo.sendMessage(from, menuFoto2, image, {quoted:q, caption: q2})

}


	
	//// albedo BOT
	// créditos: albedo-bot/Sayo
const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
const isUser = checkRegisteredUser(sender)
	
	
q = args.join(' ')
q2 = args.join(' ')
q3 = args.join(' ')
q4 = args.join(' ')
q5 = args.join(' ')
const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./json/registered.json', JSON.stringify(_registered))
        }
        
const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./json/uang.json', JSON.stringify(uang))
        }
        
const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        
        







const countMessage = JSON.parse(fs.readFileSync('./others/src/json/countmsg.json'))
const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.jid)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./others/src/json/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
jid: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./others/src/json/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
}
else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
jid: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./others/src/json/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}			



			
	
			
			
			
					

                                        


const mathFoto = Math.floor(Math.random() * 31) + 1
		
// q= midia q2=local q3= quoted q4 = texto

///
///
///

const mathnsfw = Math.floor(Math.random() * 44) + 1		
// q= midia q2=local q3= quoted q4 = texto

///
///
///
const sendnsfw = (q, q2, q3, q4) => {
if (q == 'foto' || q == 'photo' || q == 'image' || q == 'imagem' || q == 'jpg') {
if (!q3) q3 = mek
if (!q4) q4 = '© Albedo'
if (!q2) return reply(`[error]\narquivo não encontrado, verifique se colocou o nome certo`)
if (!q) return reply (`[error]\no formato de arquivo é inválido!\escolha entre: audio,foto,gif ou vídeo`)


fotor = fs.readFileSync(`./midia/nsfw/${q2}.jpeg`) 
albedo.sendMessage(from, fotor, image, {caption: q4, quoted: q3})
 
} }

const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
client.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
client.sendMessage(from, hasil, type, options).catch(e => {
client.sendMessage(from, { url : link }, type, options).catch(e => {
console.log(e)
})
})
})
})
}
/*
//comandos adicionados
if ((budy === `pq`)){                   
console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
const F3 = fs.readFileSync('menu/pq.webp')
albedo.sendMessage(from, F3, sticker, {quoted: say3})
}
if ((budy === `Pq`)){                   
console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
const F3 = fs.readFileSync('menu/pq.webp')
albedo.sendMessage(from, F3, sticker, {quoted: say3})
                    }
                    */
//áudios

const sendMedia = (q, q2, q3, q4) => {

if (q == 'audio' || q == 'áudio' || q == 'aud' || q == 'mp3') {
if (!q3) q3 = mek
if (!q4) q4 = '© Albedo'
if (!q2) return reply(`[error]\narquivo não encontrado, verifique se colocou o nome certo`)
if (!q) return reply (`[error]\no formato de arquivo é inválido!\escolha entre: audio,foto,gif ou vídeo`)

audior = fs.readFileSync(`./midia/audios/${q2}.mp3`)

albedo.sendMessage(from, audior, MessageType.audio, {quoted: q3, mimetype: 'audio/mp4', ptt:true})
}

if (q == 'foto' || q == 'photo' || q == 'image' || q == 'imagem' || q == 'jpg') {
if (!q3) q3 = mek
if (!q4) q4 = '© Albedo'
if (!q2) return reply(`[error]\narquivo não encontrado, verifique se colocou o nome certo`)
if (!q) return reply (`[error]\no formato de arquivo é inválido!\escolha entre: audio,foto,gif ou vídeo`)


fotor = fs.readFileSync(`./midia/fotos/${q2}.jpg`) 
albedo.sendMessage(from, fotor, image, {caption: q4, quoted: q3})

}

if (q == 'video' || q == 'vídeo' || q == 'vid' || q == 'mp4') {
if (!q3) q3 = mek
if (!q4) q4 = '© Albedo'
if (!q2) return reply(`[error]\narquivo não encontrado, verifique se colocou o nome certo`)
if (!q) return reply (`[error]\no formato de arquivo é inválido!\escolha entre: audio,foto,gif ou vídeo`)

videor = fs.readFileSync(`./midia/videos/${q2}.mp4`)

albedo.sendMessage(from, videor,  MessageType.video, {caption: q4, quoted: q3})
}

if (q == 'gif' || q == 'giphy') {
if (!q3) q3 = mek
if (!q4) q4 = '© Albedo'
if (!q2) return reply(`[error]\narquivo não encontrado, verifique se colocou o nome certo`)
if (!q) return reply (`[error]\no formato de arquivo é inválido!\escolha entre: audio,foto,gif ou vídeo`)

videor = fs.readFileSync(`./midia/gifs/${q2}.mp4`)

albedo.sendMessage(from, videor,  MessageType.video, {mimetype: 'video/gif', caption: q4, quoted: q3})
}

}
const sendMidia = sendMedia

///

const sendTexto = (q, q2, q3) => {


if (q3) if (q3 == 'forwarded' || q3 == 'encaminhada') {
albedo.sendMessage(from, q, text, {sendEphemeral: false, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: q2})
}

if (!q3) return albedo.sendMessage(from, q, text, {quoted: q2})


}
const sendText = sendTexto
const enviarTexto = sendTexto

function aguarde() {
sendTexto('*📌 Aguarde*', say1, 'encaminhada')
}		
	function espere() {
sendTexto('*📌 Aguarde*', say1, 'encaminhada')
}		
        

////
////
////
// VERIFICADOS
//
//
//


const seloview = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "viewOnceMessage": {  "jpegThumbnail": fs.readFileSync(`./midia/fotos/2.jpg`)} } } 



const selostt = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${tempo} ${pushname}!`, 'jpegThumbnail': fs.readFileSync(`./midia/selos/${mathSelo}.jpg`)}}}
selostatus = selostt
selostat = selostt

const selofoto = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Albedo_bot", 'jpegThumbnail': fs.readFileSync(`./midia/selos/${mathSelo}.jpg`)}}}
seloimage = selofoto
seloimg = selofoto


//
//selo catálogo
const selocat ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: 999999,status: 200, thumbnail: fs.readFileSync(`./midia/selos/${mathSelo}.jpg`), surface: 200, message: `⊳ Comando : ⊳ Usuario ${pushname}`, orderTitle: '©Albedo', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

//


//selo contato
const selocont = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./midia/fotos/2.jpg')
        }}}
        const selocontato = selocont
       

//selo grupo
const selogp = { key: {fromMe: false,participant: "0@s.whatsapp.net",remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "VERIFICADO","groupName": "©Albedo", "caption": `${tempo} ${pushname}`, 'jpegThumbnail': fs.readFileSync(`./midia/selos/${mathSelo}.jpg`)}}}

//


//

//selo vídeo
const selovid = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "6289643739077-1613049930@g.us" } : {})
},
message: {
"videoMessage": {
"title": `Usuario: ${pushname}`,
"h": `Usuario: ${pushname}`,
'duration': '99999',
'caption': `Usuario: ${pushname}`,
'jpegThumbnail': fs.readFileSync(`./midia/selos/${mathSelo}.jpg`),
}
}
}

//
// selo documento
const selodoc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `Usuario: ${pushname}`,
jpegThumbnail: fs.readFileSync(`./midia/selos/${mathSelo}.jpg`)
}
}
}

//
// selo áudio
const seloaud = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "556181496039-1613049930@g.us" } : {})
},
message: {
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "9999",
"ptt": "true"
}
}
}

//
// selo loja
const seloloja = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync(`./midia/selos/${mathSelo}.jpg`)
},
"title": `Usuario: ${pushname}`,
"description": "ngab",
"currencyCode": "IDR",
"priceAmount1000": "50.000",
"retailerId": "Self Bot",
"productImageCount": 0
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}



//
// selo localização
const seloloc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
liveLocationMessage: {
caption: `Usuario: ${pushname}`,
jpegThumbnail: fs.readFileSync(`./midia/selos/${mathSelo}.jpg`)
}
}
}

//
// selo gif
const selogif = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "6289643739077-1613049930@g.us" } : {})
},
message: {
"videoMessage": {
"title": `Usuario: ${pushname}`,
"h": `Usuario: ${pushname}`,
'duration': '99',
'gifPlayback': 'true',
'caption': `Usuario: ${pushname}`,
'jpegThumbnail': fs.readFileSync(`./midia/selos/${mathSelo}.jpg`)
}
}
}

if (isGroup) if (isCmd) if (!isOwner) {
if (isFiltered2(sender)) return reply(`📍 *SPAM!*`)
addFilter2(sender)
}

/// FIM DOS VERIFICADOS
//
//
//

// budys

// comandos com budy:


function errot () {
reply(`...`)
}
	
	
if (budy.includes("/dono") || (budy.includes(".dono") || (budy.includes("/criador") || (budy.includes("/git") || (budy.includes("/Dono") || (budy.includes(".Dono") || (budy.includes(".git") || (budy.includes(".criador") )))))))){
return sendMedia('foto', mathFoto, selogp, 'criador desse bot:\nGabriel(wa.me//554991579631)\n\ncanal no YouTube:\nhttps://youtube.com/channel/UCEXnX1CqgbV5xVabZG71aUw')
}

///

if (budy.includes(".rg") || (budy.includes(".registrar"))){
pq = args.join(' ')
if (isUser) return mensagem(`ja está registrado`)

                const serialUser = createSerial(20)
                
	
		  try {
         var ppimg = await albedo.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
               var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
					buff = await getBuffer(ppimg)
				const kentod = 
`
╭─「 REGISTRO DO ÚSUARIO 」
│Registro bem-sucedido com
│ID: ${serialUser}
│horário ${time}
│Nome: ${pushname}
│Número: wa.me/${sender.split('@')[0]}
│Obrigada por se registrar
│Para usar o bot digite ${prefix}menu
│Total de usuários registrados: ${_registered.length}
╰─────────────────────────
`            
    veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, pushname, time, serialUser)
                    await albedo.sendMessage(from, buff, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: selo, caption: `${kentod}`})
                    enviar(`registrado com sucesso ✓`)
                    addATM(sender)
                                    
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Age:', color('99', 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                   } else {
                    addRegisteredUser(sender, pushname, time, serialUser)
                    await albedo.sendMessage(sender, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: selo, caption: `${kentod}`})
                    enviar(`registro enviado no seu pv`)
                    
                                     
                   return console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Age:', color('99', 'cyan'), 'Serial:', color(serialUser, 'cyan'))                   }              
}

if ((budy === `.gp abrir`) || ((budy === `.abrir gp`) || ((budy === `.abrir grupo`) )))  {  
// if (!isUser) return mensagem(mess.user)
if (!isGroup) return reply(`SÓ EM GRUPO`)
if (!isOwner) if (!isGroupAdmins) reply (`comando mess para admins`)
if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMININASTROR BAKA`)
reply(`*GRUPO ABERTO COM SUCESSO*`)
return albedo.groupSettingChange(from, GroupSettingChange.messageSend, false)
}
if ((budy === `.fechar gp`) || ((budy === `.fechar grupo`) || ((budy === `.grupo f`) )))  {  
reply(`*GRUPO FECHADO COM SUCESSO*`)
return albedo.groupSettingChange(from, GroupSettingChange.messageSend, true)
}

if ((budy === `.info do gp`) || ((budy === `.info do grupo`) || ((budy === `.grupo info`) )))  {  
// if (!isUser) return mensagem(mess.user)

ppUrl = await albedo.getProfilePicture(from)
buffer = await getBuffer(ppUrl)
return albedo.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `*NOME* : ${groupName}\n*MEMBROS* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* :\n\n ${groupDesc}`})
}

if (budy.includes("/menu") || (budy.includes("!menu") || (budy.includes("*menu") ))) {
return sendTexto('*O comando certo é .menu*', selocont, 'encaminhada')
}

if ((budy === `.marcar adms`) || ((budy === `.marcar admins`) || ((budy === `.admins`) )))  {  
// if (!isUser) return mensagem(mess.user)
if (!isGroup) return reply(mess.only.group)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
return mentions(ytb, groupAdmins, true)
}


if ((budy === `.link do grupo`)){  
// if (!isUser) return mensagem(mess.user)


if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await albedo.groupInviteCode(from)
return mensagem('https://chat.whatsapp.com/'+linkgc)
}

//
//
//


if (budy.includes("a") || (budy.includes(" ") || (budy.includes("e") || (budy.includes("i") || (budy.includes("o") || (budy.includes("u"))))))) {
 ram = Math.floor(Math.random() * 300000000) + 15000
 
setTimeout( () => {
 reply(`TESTE ✓`)
 }, ram)
 }
 



const antilink = JSON.parse(fs.readFileSync('./json/antilink.json'))
const isAntiLink = isGroup ? antilink.includes(from) : false

if (!isOwner) if (!isGroupAdmins) if (budy.includes("s.kwai") || (budy.includes("//vm.tiktok") || (budy.includes(".com") || (budy.includes("🤑🤑🤑") || (budy.includes("wa.me") || (budy.includes("http") || (budy.includes("://youtube") || (budy.includes(".com.br") || (budy.includes("instagram.com") || (budy.includes("://t.me/") || (budy.includes("https://")))))))))))){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*Vc é admin do gp,fica tranquilo que não irei te banir.*`)
if (isOwner) return reply(`*Eu nunca te puniria mestre! ｡◕‿◕｡*`)

var Kic = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
reply('tchau👋')
}, 1100)
setTimeout( () => {
albedo.groupRemove(from, [Kic]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
}, 1000)
}	
const antitravatxt = JSON.parse(fs.readFileSync('./json/antitravatxt.json'))
const isAntiTravatxt = isGroup ? antitravatxt.includes(from) : false
const ban = JSON.parse(fs.readFileSync('./json/banned.json'))
const ban2 = JSON.parse(fs.readFileSync('./json/banned2.json'))
const isPremium = premium.includes(sender)
const isBanned = ban.includes(sender)
banido = isBanned

const isBlack = ban2.includes(sender)
isBlackList = isBlack

if (budy.length > 3500) {

   

    if (!isAntiTravatxt) return

  

    enviar('📌DESTRAVA📌\n'.repeat(300))

    enviar(`「 *TRAVA DA MACABRA DETECTADA* 」~`)

    console.log(color('[KICK]', 'red'), color('TRava de txt detectada', 'yellow'))

    albedo.groupRemove(from, [sender])

    }


const math = (teks) => {
				return Math.floor(teks)
			} 
			const sendTextWithMentions = (teks, member, id) => {
          (id == null || id == undefined || id == false) ? albedo.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": member } }) : albedo.sendMessage(from, teks.trim(), extendedText, { quoted: say1, contextInfo: {"mentionedJid": [sender], forwardingScore: 1000, isForwarded: true }})
           } 
const akame = albedo
const client = albedo


selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = albedo.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Escolha aqui","footerText": "lista","listType": "SINGLE_SELECT","sections": list}}, {})
            return albedo.relayWAMessage(po, {waitForAck: true})
        }
        
        



// CREDITOS TIRINGA-BOT| ASS: { -JR }
/*if (!isOwner) if (isCmd) if (isFiltered(sender)){
console.log('SPAM')
return reply(`*🚨SPAM🚨*\n\naguarde 3 minutos antes de usar esse comando novamente idiota`)
}
*/
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
client.sendMessage(to, media, type, {sendEphemeral: true, quoted: selovid, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}   

const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './sticker' + names + '.png'
                    let asw = './sticker' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vf "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=60, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        albedo.sendMessage(to, media, MessageType.sticker,{ quoted: selostt})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            } 

const sendMediaURL2 = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}

albedo.sendMessage(to, media, type, {quoted: seloaud, mimetype: mime, ptt:true})


fs.unlinkSync(filename)
});
}   
qtt = args.join('')
if (!qtt == 'rg') if (isCmd) // if (!isUser) return reply(` *📌⏳ Vc não está registrado!*\n\ndigite:\n*.rg*  para se registrar!`)




if (!isGroup) {

if (isSticker) budy = ' 💟 sticker '

if (isAudio) budy = ' 🎧 áudio '

if (isImage) budy = ' 🖼️ imagem '

if (isVideo) budy = ' ▶️ video '

kj = `*[ MENSAGEM NO PV ]*

de: ${sender.split('@')[0]} ( _${pushname}_ )
às: ${time}

conteúdo: " _${budy}_ "`

ku = `${ownerNumber}`

albedo.sendMessage(ku, kj, text, {sendEphemeral: false, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek})
}

/*
if (!isGroup) if (!isPremium) if (!isOwner) if (!isCmd) return

if (!isGroup) if (!isPremium) if (!isOwner) if (isCmd) return reply(` *📌 BOT SÓ FUNCIONA EM GRUPOS!*\n\nGrupo oficial do bot:\nhttps://chat.whatsapp.com/G6ScVKu1MDBDKytBa1HRaf`)

if (isCmd) if (isBanned) return

if (isBlack) if (isGroup){
sendMedia('audio', 'banido', mek)
reply(`sua ameba irritante`)
setTimeout( () => {
             
return albedo.groupRemove(from, [sender])
 
               }, 5000)
               }
*/
const getpc = async function(totalchat){
pc = []
a = []
b = []
for (c of totalchat){
a.push(c.jid)
}
for (d of a){
if (d && !d.includes('g.us')){
b.push(d)
}
}
return b
}
const getGroup = async function(totalchat){
let grup = []
let a = []
let b = []
for (c of totalchat){
a.push(c.jid)
}
for (d of a){
if (d && d.includes('g.us')){
b.push(d)
}
}
for (e of b){
let ingfo = await client.groupMetadata(e)
grup.push(ingfo)
}
return grup
}  


function albedoero() {
( async () => {
site = await fetchJson (`https:/` + `/www.luc4rio-rest-api.tk/api/anime/megumin`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:seloimg})
try {
teks = 'hentai albedo Overlord'
res = await googleImage(teks, google)
function google(error, result){
if (error) reply(`Erro`)
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: seloimg})
}
}
} catch {
return reply(`Erro`)
}

})
}


let palavrasANA = [
{
original: 'PARADOXO',
embaralhada: 'XOPARODA',
dica: 'CANAL'
},
{
original: 'ESCADA',
embaralhada: 'CAESDA',
dica: 'OBJETO'
},
{
original: 'AKAME',
embaralhada: 'MEAKA',
dica: 'PERSONAGEM'
},
{
original: 'ALBEDO',
embaralhada: 'EBDOLA',
dica: 'OVERLORD'
},
{
original: 'SHALLTEAR',
embaralhada: 'ALLSHTEAR',
dica: 'OVERLORD'
},
{
original: 'AINZ-SAMA',
embaralhada: 'NZAI-MASA',
dica: 'OVERLORD'
},
{
original: 'ELFEN LIED',
embaralhada: 'DELI FENEL',
dica: 'ANIME'
},
{
original: 'STEINS GATE',
embaralhada: 'TEGA EINSTS',
dica: 'ANIME'
},
{
original: 'ÁGUIA',
embaralhada: 'IAUGÁ',
dica: 'ANIMAL'
},
{
original: 'LAGARTO',
embaralhada: 'GARLATO',
dica: 'ANIMAL'
},
{
original: 'MINHOCA',
embaralhada: 'CAOHNMI',
dica: 'ANIMAL'
},
{
original: 'CHIMPANZÉ',
embaralhada: 'ZÉPANMIHC',
dica: 'ANIMAL'
},
{
original: 'TATU',
embaralhada: 'UTTA',
dica: 'ANIMAL'
},
{
original: 'GUAXINIM',
embaralhada: 'XIMINGAU',
dica: 'ANIMAL'
},
{
original: 'URSO',
embaralhada: 'SOUR',
dica: 'ANIMAL'
},
{
original: 'PINGUIM',
embaralhada: 'MIGUPIN',
dica: 'ANIMAL'
},
{
original: 'ORNITORRINCO',
embaralhada: 'ROCIRORNITON',
dica: 'ANIMAL'
},
{
original: 'DARLING IN THE FRANXX',
embaralhada: 'RINGDAL NI HTE XANXFR',
dica: 'ANIME'
},
{
original: 'NEON GENESIS EVANGELION',
embaralhada: 'NOEN SEISNEG GELIONEVAN',
dica: 'ANIME'
},
{
original: 'CORPSE PARTY',
embaralhada: 'PSECOR TYPAR',
dica: 'ANIME'
},
{
original: 'OVERLORD',
embaralhada: 'ROLDOVER',
dica: 'ANIME'
},
{
original: 'ASTOLFO',
embaralhada: 'TOLFOAS',
dica: 'PERSONAGEM ANIME'
},
{
original: 'ZERO TWO',
embaralhada: 'EROZ OWT',
dica: 'PERSONAGEM ANIME'
},
{
original: 'E=M.C²',
embaralhada: 'M=C.E²',
dica: 'EQUIVALÊNCIA MASSA-ENERGIA'
},
{
original: 'ALBERT EINSTEIN',
embaralhada: 'BERTAL TEINSEIN',
dica: 'FISICO-TEÓRICO'
},
{
original: 'STEPHEN KING',
embaralhada: 'PHENSTE GINK',
dica: 'ESCRITOR'
},
{
original: 'KONOSUBA',
embaralhada: 'BASUNOKO',
dica: 'ANIME'
},
{
original: 'MEGUMIN',
embaralhada: 'MINGUME',
dica: 'PERSONAGEM ANIME'
},
{
original: 'AQUA',
embaralhada: 'QUAA',
dica: 'PERSONAGEM ANIME'
},
{
original: 'DARKNESS',
embaralhada: 'KNESDARS',
dica: 'PERSONAGEM ANIME'
},
{
original: 'HINATA',
embaralhada: 'TANAHI',
dica: 'PERSONAGEM ANIME'
},
{
original: 'SWORD ART ONLINE',
embaralhada: 'WORDS RAT NELION',
dica: 'ANIME'
},
{
original: 'MIRAI NIKKI',
embaralhada: 'RAIMI KINIK',
dica: 'ANIME'
},
{
original: 'BORUTO',
embaralhada: 'TORUBO',
dica: 'PERSONAGEM ANIME'
},
{
original: 'CORNO',
embaralhada: 'ONROC',
dica: 'VOCÊ'
},
{
original: 'KRATOS',
embaralhada: 'TOSKRA',
dica: 'BOM DE GUERRA'
},
{
original: 'ESCANOR',
embaralhada: 'NORESCA',
dica: 'PERSONAGEM ANIME'
},
{
original: 'STAR WARS',
embaralhada: 'RATS RASW',
dica: 'FILME'
},
{
original: 'STAN LEE',
embaralhada: 'TANS ELE',
dica: 'CRIADOR DO HOMEM ARANHA'
},
{
original: 'ZEROTWO',
embaralhada: 'TOWROZE',
dica: 'PERSONAGEM ANIME'
},
{
original: 'BUNDA',
embaralhada: 'DABUN',
dica: 'VOCÊ JÁ DEU'
},
{
original: 'FÊMUR',
embaralhada: 'MURFÊ',
dica: 'PARTE DO CORPO'
},
{
original: 'DARLING IN THE FRANXX',
embaralhada: 'RINGDAL NI HTE XANXFR',
dica: 'ANIME'
},
{
original: 'SIMBA',
embaralhada: 'BASIM',
dica: 'REI LEÃO'
},
{
original: 'CUPHEAD',
embaralhada: 'DAHEPUC',
dica: 'JOGO'
},
{
original: 'FREE FIRE',
embaralhada: 'EFRE REFI',
dica: 'JOGO DE CORNO'
},
{
original: 'GRAND THEFT AUTO',
embaralhada: 'GANDR HEFTT TOAU',
dica: 'GTA'
},
{
original: 'TREVOR',
embaralhada: 'VORRET',
dica: 'GTA V'
},
{
original: 'SEBASTIÃO',
embaralhada: 'ÃOTISEBAS',
dica: 'NOME'
},
{
original: 'LEON E NILCE',
embaralhada: 'NOLE E CELNI',
dica: 'COISA DE NERD'
},
{
original: 'COISA DE NERD',
embaralhada: 'SAICO ED REND',
dica: 'CANAL YOUTUBE'
},
{
original: 'VOICE MAKERS',
embaralhada: 'ECIOV KERSMA',
dica: 'CANAL YOUTUBE'
},
{
original: 'MIA KHALIFA',
embaralhada: 'MAI LIFAHAK',
dica: 'ATRIZ PORNO'
},
{
original: 'SASHA GREY',
embaralhada: 'SHASA REYG',
dica: 'ATRIZ PORNO'
},
{
original: 'STOYA',
embaralhada: 'YATOS',
dica: 'ATRIZ PORNO'
},
{
original: 'ECCHI',
embaralhada: 'HICCE',
dica: 'GENÊRO ANIME'
},
{
original: 'SIRIUS',
embaralhada: 'RIUSSI',
dica: 'ESTRELA'
},
{
original: 'EVA',
embaralhada: 'VEA',
dica: 'NOME'
},
{
original: 'CORRA',
embaralhada: 'RACOR',
dica: 'FILME'
},
{
original: 'DARK',
embaralhada: 'KARD',
dica: 'SÉRIE NETFLIX'
},
{
original: 'SOBERANO',
embaralhada: 'RANOBESO',
dica: 'REI'
},
{
original: 'RATO',
embaralhada: 'TORA',
dica: 'MOUSE'
},
{
original: 'MOUSE',
embaralhada: 'SMOUE',
dica: 'RATO'
},
{
original: 'PUBG',
embaralhada: 'GUBP',
dica: 'JOGO'
},
{
original: 'FINAL FANTASY',
embaralhada: 'LANFI TASYFAN',
dica: 'JOGO'
},
{
original: 'GOD OF WAR',
embaralhada: 'DOG FO RAW',
dica: 'JOGO'
},
{
original: 'CRASH BANDICOOT',
embaralhada: 'SAHCR COTOBANDI',
dica: 'JOGO'
},
{
original: 'CU',
embaralhada: 'CU',
dica: 'CU'
},
{
original: 'GADO',
embaralhada: 'DOGA',
dica: 'VOCÊ'
},
{
original: 'MÉXICO',
embaralhada: 'XICOMÉ',
dica: 'PAÍS'
},
{
original: 'MÉXICO',
embaralhada: 'XICOMÉ',
dica: 'PAÍS'
},
{
original: 'CANADÁ',
embaralhada: 'DÁCANA',
dica: 'PAÍS'
},
{
original: 'INGLATERRA',
embaralhada: 'GLAINRATER',
dica: 'PAÍS'
},
{
original: 'BRASIL',
embaralhada: 'LISBAR',
dica: 'PAÍS'
},
{
original: 'EQUADOR',
embaralhada: 'QUADORE',
dica: 'PAÍS'
},
{
original: 'PARIS',
embaralhada: 'RISPA',
dica: 'CIDADE'
},
{
original: 'BOQUETE',
embaralhada: 'QUETEBO',
dica: 'ATO LIBIDINOSO'
},
{
original: '',
embaralhada: 'XICOMÉ',
dica: 'PAÍS'
},
{
original: 'GOSTOSO',
embaralhada: 'TOSOGOS',
dica: 'CRIADOR DO BOT'
},
{
original: 'IMAGINE DRAGONS',
embaralhada: 'GINEIMA GONSDRA',
dica: 'BANDA'
},
{
original: 'BRKSEDU',
embaralhada: 'DUEKSBR',
dica: 'YOUTUBER'
},
{
original: 'VIBRADOR',
embaralhada: 'DORBRIVA',
dica: 'OBJETO LIBIDINOSO'
},
{
original: 'SEXO',
embaralhada: 'XOSE',
dica: 'VOCÊ NUNCA FEZ'
},
{
original: 'BUNDA',
embaralhada: 'DANBU',
dica: 'VOCÊ JÁ DEU'
},
{
original: 'ALBEDO',
embaralhada: 'DOBEAL',
dica: 'BOT'
},
{
original: 'ANOTHER',
embaralhada: 'THERANO',
dica: 'ANIME'
},
{
original: 'PETER PARKER',
embaralhada: 'KERRAP TERPE',
dica: 'MARVEL'
},
{
original: 'TONY STARK',
embaralhada: 'TARKS NYTO',
dica: 'MARVEL'
},
{
original: 'HULK',
embaralhada: 'KHLU',
dica: 'MARVEL'
},
{
original: 'SCORPION',
embaralhada: 'ONPICORS',
dica: 'MORTAL KOMBAT'
},
{
original: 'MORTAL KOMBAT',
embaralhada: 'BATMOK LAMORT',
dica: 'MORTAL KOMBAT'
},
{
original: 'CETRION',
embaralhada: 'TRIONCE',
dica: 'MORTAL KOMBAT'
},
{
original: 'MISAKI MEI',
embaralhada: 'MIE KISAMI',
dica: 'ANIME'
},
{
original: 'NAGATORO',
embaralhada: 'GATONARO',
dica: 'PERSONAGEM'
},
{
original: 'SASUKE',
embaralhada: 'KESUSA',
dica: 'PERSONAGEM'
},
{
original: 'GAY',
embaralhada: 'YAG',
dica: 'VOCÊ'
},
{
original: 'GABRIEL',
embaralhada: 'LEIBAGR',
dica: 'DONO DO BOT'
},
{
original: 'BANANA',
embaralhada: 'NABANA',
dica: 'COMIDA'
},
{
original: 'NETFLIX',
embaralhada: 'TFLIXNE',
dica: 'APLICATIVO'
},
{
original: 'YOUTUBE',
embaralhada: 'TUBEYOU',
dica: 'APLICATIVO'
},
{
original: 'PORTUGAL',
embaralhada: 'TUGALPOR',
dica: 'PAÍS'
},
{
original: 'PISTOLA',
embaralhada: 'TOPISLA',
dica: 'OBJETO'
},
		
{
original: 'CAMARÃO',
embaralhada: 'MARÃOCA',
dica: 'COMIDA'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'FOGUETE',
embaralhada: 'TEFOGUE',
dica: 'OBJETO'
},
{
original: 'SKATE',
embaralhada: 'TEASK',
dica: 'OBJETO'
},
{
original: 'MACACO',
embaralhada: 'CACOMA',
dica: 'ANIMAL'
},
{
original: 'LASANHA',
embaralhada: 'NHASALA',
dica: 'COMIDA'
},
{
original: 'PASTEL',
embaralhada: 'PATELS',
dica: 'COMIDA'
},
{
original: 'COXINHA',
embaralhada: 'XICONHA',
dica: 'COMIDA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'SASUKE',
embaralhada: 'ESASUK',
dica: 'PERSONAGEM'
},
{
original: 'CAVALO',
embaralhada: 'LACAVO',
dica: 'ANIMAL'
},
{
original: 'LEVI',
embaralhada: 'EVIL',
dica: 'PERSONAGEM'
},
{
original: 'KAMAITACHI',
embaralhada: 'TAICAMAKHI',
dica: 'CANTOR'
},
{
original: 'LUBA',
embaralhada: 'UBAL',
dica: 'YOUTUBER'
},
{
original: 'GRÊMIO',
embaralhada: 'OMÊGRI',
dica: 'TIME'
},
{
original: 'SATURNO',
embaralhada: 'UTARSON',
dica: 'PLANETA'
},
{
original: 'MIKASA',
embaralhada: 'KAMISA',
dica: 'PERSONAGEM'
},
{
original: 'LEÃO',
embaralhada: 'OLEÃ',
dica: 'ANIMAL'
},
{
original: 'SAKURA',
embaralhada: 'SUKARA',
dica: 'PERSONAGEM'
},
{
original: 'HADES',
embaralhada: 'SEDAH',
dica: 'MITOLOGIA'
},
{
original: 'CORRIDA',
embaralhada: 'ARROCID',
dica: 'ESPORTE'
},
{
original: 'ODIN',
embaralhada: 'NODI',
dica: 'MITOLOGIA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'GUATEMALA',
embaralhada: 'LATEMAGUA',
dica: 'PAÍS'
},
{
original: 'CEREJA',
embaralhada: 'ECREJA',
dica: 'FRUTA'
},
{
original: 'VENEZUELA',
embaralhada: 'ZUNEEVELA',
dica: 'PAÍS'
},
{
original: 'HISTÓRIA',
embaralhada: 'TÓRISIAH',
dica: 'MATÉRIA'
},
{
original: 'INSTAGRAM',
embaralhada: 'TAGRAMINS',
dica: 'APLICATIVO'
},
{
original: 'WHATSAPP',
embaralhada: 'TSWHAAPP',
dica: 'APLICATIVO'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'CELULAR',
embaralhada: 'CELARLU',
dica: 'OBJETO'
},
{
original: 'NOTEBOOK',
embaralhada: 'TENOBOOK',
dica: 'OBJETO'
},
{
original: 'COMPUTADOR',
embaralhada: 'PUCOMDORTA',
dica: 'OBJETO'
},
{
original: 'LANTERNA',
embaralhada: 'TERLANNA',
dica: 'OBJETO'
},
{
original: 'CACHORRO',
embaralhada: 'CAORROCHO',
dica: 'ANIMAL'
},
{
original: 'DESENTUPIDOR',
embaralhada: 'SENDETUDORPI',
dica: 'OBJETO'
},
{
original: 'TOMATE',
embaralhada: 'ATEMOT',
dica: 'ALIMENTO'
},
{
original: 'SAXOFONE',
embaralhada: 'ASXOEOFN',
dica: 'INSTRUMENTO MUSICAL'
},
{
original: 'CAZAQUISTÃO',
embaralhada: 'ZAACQIUSÃOT',
dica: 'PAÍS'
},
{
original: 'CROÁCIA',
embaralhada: 'CRCÁOAI',
dica: 'PAÍS'
},
{
original: 'HUNGRIA',
embaralhada: 'UHGINRA',
dica: 'PAÍS'
},
{
original: 'MEGAFONE',
embaralhada: 'MOEFGNEA',
dica: 'OBJETO'
},
{
original: 'CINTURA',
embaralhada: 'RCIANUT',
dica: 'CORPO HUMANO'
},
{
original: 'ABDÔMEN',
embaralhada: 'MBÔDENA',
dica: 'CORPO HUMANO'
},
{
original: 'VAGNER',
embaralhada: 'GNEVAR',
dica: 'NOME'
},
{
  original: 'GEOVANA',
embaralhada: 'OAENVAG',
dica: 'NOME'
},
{
  original: 'MAÇA',
embaralhada: 'Mçaa',
dica: 'FRUTA'
},
{
  original: 'GARFO',
embaralhada: 'FGROA',
dica: 'OBJETO'
},
{
  original: 'CADEIRA',
embaralhada: 'CIAEDRA',
dica: 'Objeto'
},
{
  
original: 'TANGERINA',
embaralhada: 'RITAANGNE',
dica: 'ALIMENTO'
}
]	
		//JOGO DO ANAGRAM
if(isGroup && fs.existsSync(`./others/src/anagrama-${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./others/src/anagrama-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUppertá() != dataAnagrama.original) return reply('está perto')
xp = Math.floor(Math.random() * 34567) + 56720
dinhero = Math.floor(Math.random() * 35) + 250
if(budy.toUpperCase() == dataAnagrama.original) { client.sendMessage(from, `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`, MessageType.text, {"mentionedJid": [sender]}), fs.unlinkSync(`./others/src/anagrama-${from}.json`)		
  
   
recompensa = `🎉🎉 PARABÉNS 🎉🎉*`
reply(recompensa)
		setTimeout(async() => {
fs.writeFileSync(`./others/src/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./others/src/anagrama-${from}.json`))
client.sendMessage(from, `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${dataAnagrama2.embaralhada}
│➽ DICA: ${dataAnagrama2.dica}
╰────────────────────────
`, MessageType.text) 
}, 5000)
}}




if (budy === prefix + 'menu hentai' || budy === prefix + 'hentai menu' || budy === prefix + 'menuhentai'){
if (!isNsfw) return reply (`Modo *nsfw* desativado`)
espere ();
return sendnsfw('foto', mathnsfw, selostt, menuhentai(prefix))
}

if (budy === prefix + 'menu adm' || budy === prefix + 'Menu adm' || budy === prefix + 'menuadm'){
return sendMedia('foto', mathFoto, say1, menuadms(prefix))
}

if (budy === prefix + 'menu figu' || budy === prefix + 'Menu figu' || budy === prefix + 'menufigu'){
return sendMedia('foto', mathFoto, selogp, menufigu(prefix))
}

if (budy === prefix + 'menu down' || budy === prefix + 'Menu down' || budy === prefix + 'menudown'){
return sendMedia('foto', mathFoto, selogp, menudown(prefix))
}

if (budy === prefix + 'menu dive' || budy === prefix + 'Menu dive' || budy === prefix + 'menudive'){
return sendMedia('foto', mathFoto, selogp, menudive(prefix))
}

if (budy === prefix + 'menu don' || budy === prefix + 'Menu don' || budy === prefix + 'menudon'){
return sendMedia ('foto', mathFoto, selostt, menudon(prefix))
}





gravando = Presence.recording;
escrevendo = Presence.composing;
digitando = Presence.composing;
online = Presence.available;
pausar = Presence.paused;


//// FALAS DO BOT
// CONVERSAÇÃO



if (budy.includes("amo albedo") || (budy.includes("Amo albedo") || (budy.includes("amo Albedo") || (budy.includes("Amo Albedo"))))) {
if (isFiltered2(sender)) return
addFilter2(sender)

albedo.updatePresence(from, gravando)

mathA = Math.floor(Math.random() * 2) + 1
mathB = Math.floor(Math.random() * 5) + 1
audA = fs.readFileSync(`./midia/audios/fofo/${mathA}.mp3`)
audAbb = fs.readFileSync(`./midia/audios/me beija.mp3`)
stikA = fs.readFileSync(`./midia/stickers/fofo/${mathB}.webp`)

setTimeout( () => {
if (!isOwner) albedo.sendMessage(from, audA, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (isOwner) albedo.sendMessage(from, audAbb, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

albedo.sendMessage(from, stikA, MessageType.sticker, {quoted: mek})
return albedo.updatePresence(from, pausar)
              }, 2500)

}

if (budy.includes("canta albedo") || (budy.includes("Canta albedo") || (budy.includes("canta Albedo") || (budy.includes("Canta Albedo"))))) {
if (isFiltered2(sender)) return
addFilter2(sender)

albedo.updatePresence(from, gravando)
mathAb = Math.floor(Math.random() * 3) + 1
audAb = fs.readFileSync(`./midia/audios/lalala/${mathAb}.mp3`)

setTimeout( () => {
albedo.sendMessage(from, audAb, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

return albedo.updatePresence(from, pausar)
              }, 2500)

}

if (budy.includes("dono do bot") || (budy.includes("criador do bot") || (budy.includes("dono bot") || (budy.includes("Dono do bot"))))) {
if (isFiltered2(sender)) return
addFilter2(sender)

albedo.updatePresence(from, gravando)
let audgg = fs.readFileSync(`./midia/audios/barra dono.mp3`)

setTimeout( () => {
albedo.sendMessage(from, audgg, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
return albedo.updatePresence(from, pausar)
              }, 2500)

}

if (budy.includes("vtmnc") || (budy.includes("tmnc") )) {
if (isFiltered2(sender)) return
addFilter2(sender)

if (budy.includes("tomar no ku") || (budy.includes("Tmnc") ||  (budy.includes("fds") || (budy.includes("foda-se"))))) return

albedo.updatePresence(from, gravando)

amathA = Math.floor(Math.random() * 3) + 1

audAa = fs.readFileSync(`./midia/audios/vtmnc/${amathA}.mp3`)


setTimeout( () => {
albedo.sendMessage(from, audAa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

return albedo.updatePresence(from, pausar)
              }, 2500)

}

if (budy.includes("fd") || (budy.includes("Foda") )) {
if (isFiltered2(sender)) return
addFilter2(sender)

if (budy.includes("foda se") || (budy.includes("Foda se") ||  (budy.includes("foda-se") || (budy.includes("Foda-se"))))) return

albedo.updatePresence(from, gravando)

amathA = Math.floor(Math.random() * 3) + 1

audAa = fs.readFileSync(`./midia/audios/foda/${amathA}.mp3`)


setTimeout( () => {
albedo.sendMessage(from, audAa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

return albedo.updatePresence(from, pausar)
              }, 2500)

}

if (budy.includes("bom dia") || (budy.includes("Bom dia") )) {
if (isFiltered2(sender)) return
addFilter2(sender)

if (budy.includes("bom dia grupo") || (budy.includes("bom dia povo") ||  (budy.includes("toba") || (budy.includes("kkk-kk"))))) return

albedo.updatePresence(from, gravando)

amathA = Math.floor(Math.random() * 3) + 1

audAa = fs.readFileSync(`./midia/audios/bomdia/${amathA}.mp3`)


setTimeout( () => {
albedo.sendMessage(from, audAa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

return albedo.updatePresence(from, pausar)
              }, 2500)

}
if (budy.includes("boa noite") || (budy.includes("Boa noite") )) {
if (isFiltered2(sender)) return
addFilter2(sender)

if (budy.includes("Boa noite grupo") || (budy.includes("boa noite grupo") ||  (budy.includes("toba") || (budy.includes("kkk-kk"))))) return

albedo.updatePresence(from, gravando)

amathA = Math.floor(Math.random() * 3) + 1

audAa = fs.readFileSync(`./midia/audios/boanoite/${amathA}.mp3`)


setTimeout( () => {
albedo.sendMessage(from, audAa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

return albedo.updatePresence(from, pausar)
              }, 2500)

}

if (budy.includes("Carai") || (budy.includes("carai") )) {
if (isFiltered2(sender)) return
addFilter2(sender)

if (budy.includes("Karai") || (budy.includes("Caraí") ||  (budy.includes("carai") || (budy.includes("cu"))))) return

albedo.updatePresence(from, gravando)

amathA = Math.floor(Math.random() * 3) + 1

audAa = fs.readFileSync(`./midia/audios/carai/${amathA}.mp3`)


setTimeout( () => {
albedo.sendMessage(from, audAa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

return albedo.updatePresence(from, pausar)
              }, 2500)

}

if (budy.includes("boa tarde") || (budy.includes("Boa tarde") )) {
if (isFiltered2(sender)) return
addFilter2(sender)

if (budy.includes("Boa Tarde") || (budy.includes("BOA TARDE") ||  (budy.includes("Boa tarde gente") || (budy.includes("boa tarde"))))) return

albedo.updatePresence(from, gravando)

amathA = Math.floor(Math.random() * 3) + 1

audAa = fs.readFileSync(`./midia/audios/boatarde/${amathA}.mp3`)


setTimeout( () => {
albedo.sendMessage(from, audAa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

return albedo.updatePresence(from, pausar)
              }, 2500)

}

if (budy.includes("Fds") || (budy.includes("fds") || (budy.includes("ksksks") || (budy.includes("kakaka"))))) {
if (isFiltered2(sender)) return
addFilter2(sender)

albedo.updatePresence(from, gravando)
let audgg = fs.readFileSync(`./midia/audios/barra kk.mp3`)

setTimeout( () => {
albedo.sendMessage(from, audgg, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
return albedo.updatePresence(from, pausar)
              }, 2500)

}

if (budy.includes("tenso") || (budy.includes("Tenso") )) {
if (isFiltered2(sender)) return
addFilter2(sender)

if (budy.includes("sim") || (budy.includes("concordo") ||  (budy.includes("aham") || (budy.includes("Concordo"))))) return

albedo.updatePresence(from, gravando)

amathA = Math.floor(Math.random() * 3) + 1

audAa = fs.readFileSync(`./midia/audios/tenso/${amathA}.mp3`)


setTimeout( () => {
albedo.sendMessage(from, audAa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

return albedo.updatePresence(from, pausar)
              }, 2500)

}

if (budy.includes("Link") || (budy.includes("link") )) {
if (isFiltered2(sender)) return
addFilter2(sender)

if (budy.includes("hentai") || (budy.includes("Hentai") ||  (budy.includes("não") || (budy.includes("passa"))))) return

albedo.updatePresence(from, gravando)

amathA = Math.floor(Math.random() * 3) + 1

audAa = fs.readFileSync(`./midia/audios/link/${amathA}.mp3`)


setTimeout( () => {
albedo.sendMessage(from, audAa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

return albedo.updatePresence(from, pausar)
              }, 2500)

}

if (budy.includes("Hentai") || (budy.includes("hentai") )) {
if (isFiltered2(sender)) return
addFilter2(sender)

if (budy.includes("hentai") || (budy.includes("link") ||  (budy.includes("hentai?") || (budy.includes("videos"))))) return

albedo.updatePresence(from, gravando)

amathA = Math.floor(Math.random() * 3) + 1

audAa = fs.readFileSync(`./midia/audios/hentai/${amathA}.mp3`)


setTimeout( () => {
albedo.sendMessage(from, audAa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

return albedo.updatePresence(from, pausar)
              }, 2500)

}

if (budy.includes("Ola") || (budy.includes("oii") || (budy.includes("Olá") || (budy.includes("oi"))))) {
if (isFiltered2(sender)) return
addFilter2(sender)

albedo.updatePresence(from, gravando)
let audgg = fs.readFileSync(`./midia/audios/barra ola.mp3`)

setTimeout( () => {
albedo.sendMessage(from, audgg, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
return albedo.updatePresence(from, pausar)
              }, 2500)

}

if (budy.includes("gay") || (budy.includes("mano tue") || (budy.includes("lgbt") || (budy.includes("Gay"))))) {
if (isFiltered2(sender)) return
addFilter2(sender)

albedo.updatePresence(from, gravando)
let audgg = fs.readFileSync(`./midia/audios/barra gay.mp3`)

setTimeout( () => {
albedo.sendMessage(from, audgg, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
return albedo.updatePresence(from, pausar)
              }, 2500)

}

if (budy.includes("triste") || (budy.includes("to triste") || (budy.includes("tristinho") || (budy.includes("Triste"))))) {
if (isFiltered2(sender)) return
addFilter2(sender)

albedo.updatePresence(from, gravando)
let audgg = fs.readFileSync(`./midia/audios/barra triste.mp3`)

setTimeout( () => {
albedo.sendMessage(from, audgg, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
return albedo.updatePresence(from, pausar)
              }, 2500)

}

if (budy.includes("ae") || (budy.includes("aee") || (budy.includes("vector") || (budy.includes("Aee"))))) {
if (isFiltered2(sender)) return
addFilter2(sender)

albedo.updatePresence(from, gravando)
let audgg = fs.readFileSync(`./midia/audios/barra ae.mp3`)

setTimeout( () => {
albedo.sendMessage(from, audgg, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
return albedo.updatePresence(from, pausar)
              }, 2500)

}

if (budy.includes("tobi") || (budy.includes("dono do bot") || (budy.includes("Victor") || (budy.includes("Tobi"))))) {
if (isFiltered2(sender)) return
addFilter2(sender)

albedo.updatePresence(from, gravando)
let audgg = fs.readFileSync(`./midia/audios/barra tobi.mp3`)

setTimeout( () => {
albedo.sendMessage(from, audgg, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
return albedo.updatePresence(from, pausar)
              }, 2500)

//AUTO RESPONDER FIGURINHA

}
if (budy.includes("f") || (budy.includes("F") || (budy.includes("amo Albedo") || (budy.includes("Amo Albedo"))))) {
if (isFiltered2(sender)) return
addFilter2(sender)

albedo.updatePresence(from, pausar)

/*mathA = Math.floor(Math.random() * 2) + 1*/
mathB = Math.floor(Math.random() * 5) + 1
/*audA = fs.readFileSync(`./midia/audios/fofo/${mathA}.mp3`)*/
/*audAbb = fs.readFileSync(`./midia/audios/me beija.mp3`)*/
stikA = fs.readFileSync(`./midia/stickers/f/${mathB}.webp`)

setTimeout( () => {
/*if (!isOwner) albedo.sendMessage(from, audA, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})*/
/*if (isOwner) albedo.sendMessage(from, audAbb, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})*/

albedo.sendMessage(from, stikA, MessageType.sticker, {quoted: mek})
return albedo.updatePresence(from, pausar)
              }, 2500)

}

if (budy.includes("sexo") || (budy.includes("Sexo") || (budy.includes("secxo") || (budy.includes("bo sexo"))))) {
if (isFiltered2(sender)) return
addFilter2(sender)

albedo.updatePresence(from, pausar)

mathB = Math.floor(Math.random() * 5) + 1
stikA = fs.readFileSync(`./midia/stickers/sexo/${mathB}.webp`)

setTimeout( () => {

albedo.sendMessage(from, stikA, MessageType.sticker, {quoted: mek})
return albedo.updatePresence(from, pausar)
              }, 2500)

}


isSticker ? isSha = mek.message.stickerMessage.fileSha256.toString('base64'):'';

isSticker ? console.log (mek.message.stickerMessage.fileSha256.toString('base64')):'';


// COMANDOS COM STICKER                             
                        
// all cmd
if (isSticker){

 if (isSha === 'gw4eVaeaDdFzEfjNw8FvVShQ536DsfbhFYuf/1/TmGs='){
 sendMedia('foto', mathFoto, mek, allmenu(prefix))
}}
//menu
if (isSticker){

 if (isSha === 'SddYEq3aIwFVrNZrRR4JRXgWITtPCLnps6cyTtX6JsY='){
 sendMedia('foto', mathFoto, mek, menu(prefix))
 }}

//abrir grupo
if (isSticker){

 if (isSha === 'qPtSrAhGoUfrD0y+Oj/BZkvD5JSMeDXmqYfEbtLVmrE='){
if (!isGroupAdmins) return reply(`só adm`)

albedo.groupSettingChange(from, GroupSettingChange.messageSend, true)
}}

// fechar grupo
if (isSticker){

if (isSha === 'kSlqiXYPxpDA0x3ZB5QZqs9tKlZdpfchiWG5xE888tk='){
if (!isGroupAdmins) return reply(`só adm`)

albedo.groupSettingChange(from, GroupSettingChange.messageSend, false)
}}

// banir
if (isSticker){

if (isSha === 'peqBBKgAZV+cy6bQuEWV5zaigf9YNmqKxCbLinQqaAQ='){
if (!isGroupAdmins) return reply(`só adm`)

if (mek.message.extendedTextMessage.contextInfo.participant) {
albedo.groupRemove(from, [mek.message.extendedTextMessage.contextInfo.participant])
} else if (!mek.message.extendedTextMessage.contextInfo.participant){
return reply (`erro`)
}

}}








const momonga = new WAConnection ()
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
botões: mas,
headerType: 1
}
momonga.sendMessage (id, buttonMessage, MessageType.buttonsMessage, options)
}





			switch(command) { // cases / comandos
 case 'fotogrupo':
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await albedo.downloadMediaMessage(encmedia)
              albedo.updateProfilePicture(from, media)
             
              } else {
              reply(`Envie ou marque uma imagem com uma legenda${prefix}${cmd}`)
}
              break			
			
			
case 'hacker': case 'hackear':
              if (!isGroup) return reply(mess.only.group)
                  if (!isGroupAdmins) return reply(mess.only.admin)
                  if (!isBotGroupAdmins) return reply(mess.only.Badmin)

                       reply('Hackeando...')
                       albedo.groupSettingChange(from, GroupSettingChange.messageSend, true)
                         tessgc = fs.readFileSync(`./midia/fotos/hack.jpg`)
                            albedo.updateProfilePicture (from, tessgc)
                            await sleep(1000)
                         albedo.groupUpdateSubject(from, `Hacked by Albedo :3`)
                         await sleep(1000)
                         albedo.groupUpdateDescription(from, `_grupo hackeado_\n01001000 01100001 01100011 01101011 01100101 01100001 01100100 01101111 00100000 01110000 01101111 01110010 00100000 01000001 01101100 01100010 01100101 01100100 01101111 00100000 01101011 01101011 01101011 01101011`)                                      
                        
                       return albedo.sendMessage(from, '01100001 01100011 01101011 01100101 01100001 01100100 01101111 00100000 01110000 01101111 01110010 00100000 01000001 01101100 01100010 01100101 01100100 01101111 00100000 01101011 01101011 01101011 0110101101100001 01100011 01101011 01100101 01100001 01100100 01101111 00100000 01110000 01101111 01110010 00100000 01000001 01101100 01100010 01100101 01100100 01101111 00100000 01101011 01101011 01101011 0110101101100001 01100011 01101011 01100101 01100001 01100100 01101111 00100000 01110000 01101111 01110010 00100000 01000001 01101100 01100010 01100101 01100100 01101111 00100000 01101011 01101011 01101011 0110101101100001 01100011 01101011 01100101 01100001 01100100 01101111 00100000 01110000 01101111 01110010 00100000 01000001 01101100 01100010 01100101 01100100 01101111 00100000 01101011 01101011 01101011 0110101101100001 01100011 01101011 01100101 01100001 01100100 01101111 00100000 01110000 01101111 01110010 00100000 01000001 01101100 01100010 01100101 01100100 01101111 00100000 01101011 01101011 01100001 01100011 01101011 01100101 01100001 01100100 01101111 00100000 01110000 01101111 01110010 00100000 01000001 01101100 01100010 01100101 01100100 01101111 00100000 01101011 01101011 01101011 0110101101100001 01100011 01101011 01100101 01100001 01100100 01101111 00100000 01110000 01101111 01110010 00100000 01000001 01101100 01100010 01100101 01100100 01101111 00100000 01101011 01101011 01101011 0110101101100001 01100011 01101011 01100101 01100001 01100100 01101111 00100000 01110000 01101111 01110010 00100000 01000001 01101100 01100010 01100101 01100100 01101111 00100000 01101011 01101011 01101011 0110101101100001 01100011 01101011 01100101 01100001 01100100 01101111 00100000 01110000 01101111 01110010 00100000 01000001 01101100 01100010 01100101 01100100 01101111 00100000 01101011 01101011 01101011 0110101101100001 01100011 01101011 01100101 01100001 01100100 01101111 00100000 01110000 01101111 01110010 00100000 01000001 01101100 01100010 01100101 01100100 01101111 00100000 01101011 01101011 01101011 01101011 01101011', text)
                         
                        
                        
                        break		
			
			
			
			
case 'bug':
yep = body.slice(5)
if (!yep) return reply (`Descreva o bug\nexemplo:\n\n${prefix}bug comando play não funciona`)
sendMedia('audio', 'bugada', seloaud);   

setTimeout( () => {
donoo = '554991579631@s.whatsapp.net';

texxt = !isGroup ? `Bug do ${pushname}/${sender.split('@')[0]}\n\n${yep}`:`Bug do ${pushname}/${sender.split('@')[0]}\nno Grupo ${groupName}\n\n${yep}`;

albedo.sendMessage(donoo, texxt, text,{quoted: mek})
reply(`✓ bug enviado, aguarde uma resposta do desenvolvedor`)
 }, 6000)    
 break


case 'batepapo': case 'bate-papo':
reply(`
comandos de áudio no bot:

_ Te amo Albedo

_ Canta albedo

_ Foda

_ (banir membro)

_ (promover membro)

_ (errar comandos)

_ bom dia

_boa tarde

_boa noite

_vtmnc

_carai

_dono do bot

_


`)
break	

//diversão brincadeiras

case 'caracoroa':
case 'caraoucoroa': case 'cc':
case 'moeda':
reply(' ❰ Jogando a moeda ....❱')

random = Math.floor(Math.random() * 2) + 1
console.log(color('[Math.random]','blue'), `>>> ${random} <<<`);
ram = random
if (ram == 1 ) {random = './midia/stickers/moeda.webp'} else if (ram == 2 ) {random = './midia/stickers/moeda2.webp'}

moeda = fs.readFileSync(random)

client.sendMessage(from, moeda, sticker, {quoted: selo})
break


case 'resetavelha':
case 'resetarvelha':  case 'resetttt': case 'tttreset': case 'resetarttt': case 'tttresetar':
if (!isGroupAdmins) return 
if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
} else {
reply(`Não a nenhuma sessão em andamento...`);
}

break


case 'anagrama':

if(!isGroup) return reply('comando apenas para grupos')
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(!isGroupAdmins) return reply('comando apenas para admins')
if(args.length == 0) return reply('use 1 para ativar o jogo do anagrama\npara desativar use anagrama 0')
qp = args.join('');
if (qp == 'ativo' || qp == 'ativar' || qp == 'ligar' || qp == 'ativado' || qp == '1'){
if(fs.existsSync(`./others/src/anagrama-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./others/src/anagrama-${from}.json`))
reply(`o jogo já foi iniciado neste grupo:
palavra: ${dataAnagrama2.embaralhada}
dica: ${dataAnagrama2.dica}
`)} else {
fs.writeFileSync(`./others/src/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
client.sendMessage(from, `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${palavrasANA[anaaleatorio].embaralhada}
│➽ DICA: ${palavrasANA[anaaleatorio].dica}
╰────────────────────────
`,MessageType.text)
}
}
if (qp == 'desativo' || qp == 'desativar' || qp == 'desligar' || qp == 'desligado' || qp == '0') {
if(!fs.existsSync(`./others/src/anagrama-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
fs.unlinkSync(`./others/src/anagrama-${from}.json`)
reply("desativado com sucesso")
}

break 

		case "ppt":

if (args.length < 1) return reply(jrb.tterro())
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
pph = `🥳🎉 Parabéns`
if ((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(jrb.tterro())
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota") {
var tes = "A vitória é do BOT"
}
if (vit == "empate") {
var tes = "O jogo terminou em empate"
}
reply(`Albedo jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}

break
			
			
			
case 'jogodavelha': case 'ttt':
if(!isGroup) return reply('comando apenas para grupos')
if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
[❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
     
 Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
client.sendMessage(from, chatMove, MessageType.text, {quoted: selostt,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
return;
}
argss = args.join('')
if (argss.length === 1)
return reply(`*⟅❗⟆ Jogue com Alguem!!!!*
*para inicar a partida : ${prefix + command} @membro do gp*`);
const boardnow = setGame(`${from}`);
console.log(`Start Tictactore ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
fs.writeFileSync(`./lib/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
@${sender.replace("@s.whatsapp.net",
"")} _está te desafiando para uma partida de jogo da velha..._
_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._
     `;
client.sendMessage(from, strChat, MessageType.text, {quoted: selostt,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
},
});

break		
			
			
			// OTHERS
			
case 'tts': case 'dizer':
espere();
if (args.length < 1) return client.sendMessage(from, `Qual é o código da linguagem?\nExemplo: ${prefix}dizer pt Oi tudo bem?`, text, {quoted: mek})
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return client.sendMessage(from, 'Cadê o texto tio?', text, {quoted: mek})
dtt = body.slice(9)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 600
? reply('A maior parte do texto é merda')
: gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply('falha:(')
client.sendMessage(from, buff, audio, {quoted: seloaud, ptt:true})
fs.unlinkSync(rano)
})
})

break								
			
			
// COMANDOS EM FASE DE TESTE
// TEST CDM
// TESTES
//
//
//
//


case 'flood':
if (!isGroupAdmins) if (!isOwner) return reply(`só adm burro`)
reply (`floodando o ${body.slice(8)} kkkkk`)
qtt = body.slice(8) + '@s.whatsapp.net';
for (var i = 0; i < 100; i++) {
randos = Math.floor(Math.random() * 27) + 1
medias = fs.readFileSync(`./midia/stickers/${randos}.webp`)
albedo.sendMessage(qtt, medias, MessageType.sticker,{ quoted: mek})
}
break

case 'alb':
mathAlb = Math.floor(Math.random() * 57) + 1
fotor = fs.readFileSync(`./midia/fotos/${mathAlb}.jpg`) 
albedo.sendMessage(from, fotor, image, {caption: '®Albedo'})
break


case 'teste':
espere ();
verdad = await getBuffer(`https://www.luc4rio-rest-api.tk/api/imagens/animais/gatos`)

gett = verdad.Resultado

reply (`${gett}`)
break






///
///
///
///
///
///
///
///


// HENTAI E SEXO
   case 'neko':
await reply(ind.wait())
tapa = await fetchJson('https://nekos.life/api/v2/img/kemonomimi')
buffer = await getBuffer(tapa.url) 
buttons = [
{buttonId: `${prefix}neko`, buttonText: {displayText: ' gozei '}, type: 1}
]
buttonMessage = Object.assign({
contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
footerText: `Usuario: ${pushname}`,
buttons: buttons,
headerType: 4
}, await client.prepareMessageMedia(
buffer,
MessageType.image, { thumbnail: buffer})
);			
client.sendMessage(
from,
buttonMessage,
MessageType.buttonsMessage
);
break	


				   case 'solo':
				   if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
				   espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
   
res = axios.get(`https://nekos.life/api/v2/img/solo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break
case 'nsfwmegumin':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
  
res = axios.get(`https://waifu.pics/api/sfw/megumin`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break

case 'ero':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*

res = axios.get(`https://nekos.life/api/v2/img/ero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}


break

case 'erofeet':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
   
res = axios.get(`https://nekos.life/api/v2/img/erofeet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break

case 'spank':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
   
res = axios.get(`https://nekos.life/api/v2/img/spank`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break

case 'feet':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*

res = axios.get(`https://nekos.life/api/v2/img/feet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break

case 'xvideos':
try {
if (args.length < 1) return enviar("Pesquise títulos de videos 😡")
anu = await fetchJson(`https://lolizit-api.herokuapp.com/api/xvideos?link=https://www.xvideos.com/video66657003/teens_go_to_the_beach_to_fuck_2_hentai&apikey=Tobi`);
teks = `「🍛 𝗫𝗩𝗜𝗗𝗘𝗢𝗦 𝗟𝗜𝗦𝗧𝗔 🍛」\n\nUse: ${p}xvideoplay (link)\nPara baixar o video porno\n\n`
res = anu.resultado
for(let i of res){
teks += `‣ *☂️ Nome* : ${i.nome}\n‣ *🌸 Duração* : ${i.tempo}\n‣ *🌙 Link* : ${i.link}\n\n「🍛 𝗫𝗩𝗜𝗗𝗘𝗢𝗦 𝗟𝗜𝗦𝗧𝗔 🍛」\n\n`
}
buff = await getBuffer("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6wf6YQlGq1OXQEqaE-igtLPCDb_SUng2Khw&usqp=CAU")
tobi.sendMessage(from, buff, image, {quoted: mek, thumbnail: null, caption: teks})
} catch {
enviar("Deu erro :/")
}
break

case 'xvideosplay':
try {
if (args.length < 1) return enviar(`Macaco! Use ${p}xvideos sweetie fox, e pegue algum link 😡`)
if (isUrl(args[0]) && !args[0].includes('xvideos')) return enviar("Link que não seja do xvideos, não é permitido!!! Macaco 😡")
anu = await fetchJson(`https://lolizit-api.herokuapp.com/api/xvideoslista?nome=sweetie%20fox&apikey=Tobi`)
buffer = await getBuffer(anu.resultado.link)
tobi.sendMessage(from, buffer, video, {quoted: mek, thumbnail: null})
} catch (err) {
enviar("Deu erro :/")
}
break

case 'classic':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
   
res = axios.get(`https://nekos.life/api/v2/img/classic`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marcador não foi encontrado")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break

case 'cup':
   //*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
   if (!isUser) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: say3})
  if (isBanned) return reply(yag.ban())
if (!q) return reply('onde está o texto?')
pCoffeCup(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break

case 'holoero':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
   
res = axios.get(`https://nekos.life/api/v2/img/holoero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break

case 'cum':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*

res = axios.get(`https://nekos.life/api/v2/img/cum_jpg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break

case 'eroyuri':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*

res = axios.get(`https://nekos.life/api/v2/img/eroyuri`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break

case 'eron':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
   
res = axios.get(`https://nekos.life/api/v2/img/eron`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break

case 'pwankg':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
   
res = axios.get(`https://nekos.life/api/v2/img/pwankg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break

case 'anal':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
   
res = axios.get(`https://nekos.life/api/v2/img/anal`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break

case 'lewd':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
   
res = axios.get(`https://nekos.life/api/v2/img/lewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break

case 'lewdkemo':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
   
res = axios.get(`https://nekos.life/api/v2/img/lewdkemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break

case 'solog':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
   
res = axios.get(`https://nekos.life/api/v2/img/solog`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break

case 'lewdk':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
   
res = axios.get(`https://nekos.life/api/v2/img/lewdk`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break


case 'blowjob':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
   
res = axios.get(`https://nekos.life/api/v2/img/blowjob`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break



case 'hololewd':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*

res = axios.get(`https://nekos.life/api/v2/img/hololewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break

case 'trap':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
   
res = axios.get(`https://nekos.life/api/v2/img/trap`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break

case 'les':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
   
res = axios.get(`https://nekos.life/api/v2/img/les`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break

case 'smallboobs':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*

res = axios.get(`https://nekos.life/api/v2/img/smallboobs`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break

case 'futanari':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
   
res = axios.get(`https://nekos.life/api/v2/img/futanari`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break

case 'femdom':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*

res = axios.get(`https://nekos.life/api/v2/img/femdom`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break

case 'feed':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
   
res = axios.get(`https://nekos.life/api/v2/img/feed`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break

case'erok':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*

res = axios.get(`https://nekos.life/api/v2/img/erok`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break

case'feetg':

if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*

res = axios.get(`https://nekos.life/api/v2/img/feetg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break

case'erokemo':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*

res = axios.get(`https://nekos.life/api/v2/img/erokemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break
case'boobs':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
   
res = axios.get(`https://nekos.life/api/v2/img/boobs`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}

break
case 'pussy':
if (!isNsfw) return reply(`Nsfw desativado, peça ao adm para ativar`)
espere();
try {
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
   
axios.get('https://nekos.life/api/v2/img/pussy_jpg').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
albedo.sendMessage(from, buf, MessageType.image, {quoted: seloimg})
})
})
} catch (e) {
e = String(e)
if (!e.includes("marker was not found")) {
reply('[❌] deu error ao enviar o hentai 😞')
} 
}

break
///




case 'plaq':
if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(' *❲❗❳ Aguarde* ') //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/fotobundatop.jpg?text.0.text=${teks}&text.0.position.x=-61%25&text.0.position.y=-8%25&text.0.size=18&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700`) //api
client.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: seloimg, caption: ' *Plaquinha feita ✓* '})

break
case 'plaq6':
if (args.length < 1) return reply(`${prefix}plaq6 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(' *❲❗❳ Aguarde* ') //mensagem
buffer = await getBuffer(`https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=12&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`) //api
client.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: seloimg, caption: ' *Plaquinha feita ✓* '})
break
case 'plaq2':
if (args.length < 1) return reply(`${prefix}plaq2 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(' *❲❗❳ Aguarde* ') //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/BUNDA1.jpg?text.0.text=${teks}&text.0.position.x=-20%25&text.0.position.y=-20%25&text.0.size=18&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.background.opacity=65`) //api
client.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: seloimg, caption: ' *Plaquinha feita ✓* '})

break
case 'plaq3':
if (args.length < 1) return reply(`${prefix}plaq3 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(' *❲❗❳ Aguarde* ') //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/bunda3.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=-25%25&text.0.position.y=-17%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.font.style=italic`)
client.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: seloimg, caption: ' *Plaquinha feita ✓* '})

break
case 'plaq4':
if (args.length < 1) return reply(`${prefix}plaq4 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(' *❲❗❳ Aguarde* ') //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${teks}&text.0.position.x=-48%25&text.0.position.y=-68%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
client.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: seloimg, caption: ' *Plaquinha feita ✓* '})
break
case 'plaq5':
if (args.length < 1) return reply(`${prefix}plaq5 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(' *❲❗❳ Aguarde* ') //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/9152e7a9-7d49-48ef-b8ac-2e6149fda0b2.jpg?text.0.text=${teks}&text.0.position.x=-70%25&text.0.position.y=-23%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=300`)
plaq = ` *Plaquinha feita ✓* `
client.sendMessage(from, buffer, image, {caption: plaq, quoted: seloimg, sendEphemeral:true, contextInfo : {forwardingScore: 500, isForwarded:true}})
break
case 'plaq7':
teks1 = body.slice(5) 
if (teks1.length < 1) return reply('Use no mínimo 1 Letras!')
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres') //maximo de caracteres
reply(' *❲❗❳ Aguarde* ') //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${teks}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`) //api
plaq = ` *Plaquinha feita ✓* `
client.sendMessage(from, buffer, image, {caption: plaq, quoted: seloimg, sendEphemeral:true})

break




/*
case 'cum': case 'gozada':
aguarde();
qq = ('https://h4ck3rs404-api.herokuapp.com/api/nsfw/cum?apikey=404Api')
albedo.sendMessage(from, 'Enviando no seu PV!...', text)
msgfoto = await getBuffer(qq)
albedo.sendMessage(sender, msgfoto, image, {quoted: mek, thumbnail:null})
break
*/

////




////

case 'blacklist': case 'listanegra':
if (!isOwner) if (!isGroupAdmins) return

jrc = 'LISTA NEGRA :\n'
for (let benn of ban2) {
jrc += `~> @${benn.split('@')[0]}\n`
}
jrc += `Total : ${ban2.length}`
client.sendMessage(from, jrc.trim(), extendedText, {quoted: mek, thumbnail:null, contextInfo: {"mentionedJid": ban2}})

break

case 'addblack': case 'blackadd':
if (!isOwner) if (!isGroupAdmins) return
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban2.push(`${mentioned}`)
fs.writeFileSync('./json/banned2.json', JSON.stringify(ban2))
susp = `🚫 ${mentioned[0].split('@')[0]} foi adicionado a lista negra,a partir de agora esse usuário sempre será banido dos grupos do bot`

ku = fs.readFileSync('./midia/fotos/death.jpg')

albedo.sendMessage(from, ku, image, {caption: susp})


break

case 'unblack': case 'delblack': case 'desblack':
if (!isOwner) if (!isGroupAdmins) return
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban2.splice(`${mentioned}`)
fs.writeFileSync('./json/banned2.json', JSON.stringify(ban2))
susp = `❎@${mentioned[0].split('@')[0]} foi removido da lista negra❎`
mentions(`${susp}`, mentioned, true)   

break			

			
case 'block': case 'bloquear':
if (!isOwner) return
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./json/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`
mentions(`${susp}`, mentioned, true)   

break

case 'blocklist':
if (!isOwner) if (!isGroupAdmins) return

jrc = 'ESTA É A LISTA DE NÚMEROS BLOQUEADOS :\n'
for (let benn of ban) {
jrc += `~> @${benn.split('@')[0]}\n`
}
jrc += `Total : ${ban.length}`
client.sendMessage(from, jrc.trim(), extendedText, {quoted: mek, thumbnail:null, contextInfo: {"mentionedJid": ban}})

break

case 'unblock': case 'desblock': case 'desbloquear':
if (!isOwner) return
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./json/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`
mentions(`${susp}`, mentioned, true)   

break			
			
case 'resp':

					
if (!isOwner) return 
if (args.length < 1) return
txt = body.slice(6)
jrr = txt.split("|")[0];
jrr1 = txt.split("|")[1];

ku = `${jrr}@s.whatsapp.net`
client.sendMessage(ku, `_${jrr1}_`,text, {quoted: selostt})
reply(`✓ a resposta foi enviada para ${jrr}`)

break
			
			case 'online': case 'on': case 'ligar':

		if (!isOwner) return
var group = await albedo.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: '*🟢 ONLINE*',
contextInfo: { mentionedJid: mem },
quoted: mek
}

dfg = await albedo.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await albedo.downloadMediaMessage(encmedia)
for (let _ of dfg) {
albedo.sendMessage(_.jid, buff, image, options, {caption: ``})
}

albedo.updatePresence(from, gravando)


mathBo = Math.floor(Math.random() * 3) + 1
audAo = fs.readFileSync(`./midia/audios/bip bip/${mathBo}.mp3`)
albedo.sendMessage(from, audAo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})


//reply('Transmissão enviada com sucesso')
} else {
for (let _ of dfg) {
sendMess(_.jid, options, ``)
}
mathBo = Math.floor(Math.random() * 3) + 1
audAo = fs.readFileSync(`./midia/audios/bip bip/${mathBo}.mp3`)
albedo.sendMessage(from, audAo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}


break		

case 'offline': case 'desligar': case 'off':

		if (!isOwner) return
var group = await albedo.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: '*🔴 OFFLINE*',
contextInfo: { mentionedJid: mem },
quoted: mek
}

dfg = await albedo.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await albedo.downloadMediaMessage(encmedia)
for (let _ of dfg) {
albedo.sendMessage(_.jid, buff, image, options, {caption: ``})
}
reply('Transmissão enviada com sucesso')
} else {
for (let _ of dfg) {
sendMess(_.jid, options, ``)
}
reply('Transmissão enviada com sucesso')
}


break		
			
case 'addpremium':
if (!isOwner) return
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.push(`${mentioned}`)
fs.writeFileSync('./json/user/premium.json', JSON.stringify(premium))
susp = `👑@${mentioned[0].split('@')[0]} foi adicionado à lista de usuários premium com sucesso👑`
mentions(`${susp}`, mentioned, true)   

break 			

case 'delpremium':
if (!isOwner) return
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.splice(`${mentioned}`)
fs.writeFileSync('./json/user/premium.json', JSON.stringify(premium))
susp = `✖@${mentioned[0].split('@')[0]} foi removido da lista de usuários premium✖`
mentions(`${susp}`, mentioned, true)   

break 

case 'premiumlist':
if (!isOwner) if (!isGroupAdmins) return
tkks = '╭────*「 *PREMIUM USER👑* 」\n'
for (let V of premium) {
tkks += `│+  @${V.split('@')[0]}\n`
}
tkks += `│+ Total : ${premium.length}\n╰──────*「 *${setting.NamaBot}* 」*────`
client.sendMessage(from, tkks.trim(), extendedText, {quoted: mek, thumbnail:null, contextInfo: {"mentionedJid": premium}})

break
			
case 'ausente':

qtt = body.slice(9)
if (args.length < 1) {texti = '*🟡 AUSENTE*'} else {texti = `*🟡 AUSENTE*\n\n*recado:* _${qtt}_\n\n©Albedo`}

		if (!isOwner) return
var group = await albedo.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: `${texti}`,
contextInfo: { mentionedJid: mem },
quoted: mek
}

dfg = await albedo.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await albedo.downloadMediaMessage(encmedia)
for (let _ of dfg) {
albedo.sendMessage(_.jid, buff, image, options, {caption: ``})
}
reply('Transmissão enviada com sucesso')
} else {
for (let _ of dfg) {
sendMess(_.jid, options, ``)
}
reply('Transmissão enviada com sucesso')
}


break					


case 'listapv'://case by: Bielzinho-Bot
case 'pvlist': case 'listpv': case 'listapv': case 'listapv':
if (!isOwner) return 
tdtpt = await client.chats.all()
dpy = await getpc(tdtpt)
sdpt = `*L I S T A  D E  B A T E - P A P O S*\n*Total de Chats* : ${dpy.length}\n\n`
for(let i=0; i<dpy.length; i++){
conts = mek.key.fromMe ? mek.user.jid : client.contacts[dpy[i]] || {notify: jid.replace(/@.+/, '')}
nomes = client.contacts[dpy[i]] != undefined ? client.contacts[dpy[i]].vname || client.contacts[dpy[i]].notify : undefined
sdpt += `• *Nome* : ${nomes}\n• *Tag* : @${dpy[i].split("@")[0]}\n• *Wame* : wa.me//${dpy[i].split("@")[0]}\n\n----------------------------------\n\n`
}
mentions( sdpt, dpy, true)
break 
case 'listagp': //case by: Bielzinho-Bot
case 'gplista': case 'grouplist': case 'listgp':

if (!isOwner) return 

tdufg = await client.chats.all()
ingfoo = await getGroup(tdufg)
teks1 = `*L I S T A  D E  G R U P O S*\n*Total de Grupos* : ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){

linkgc = await albedo.groupInviteCode(`${ingfoo[i].id}`)
teks1 += `• *Nome do Grupo* : ${ingfoo[i].subject}\n• *Id do Grupo* : ${ingfoo[i].id}\n• *Link:* https://chat.whatsapp.com/${linkgc}\n• *Criado* : ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n• *Total de Membros* : ${ingfoo[i].participants.length}\n\n`
}
reply(teks1)

break


case 'searchmsg':
case 'srcmensagem':
qb = args.join
if (!isOwner) return
if (!qb) return reply(mess.wrongFormat)
reply(mess.wait)
xtext = args.join(' ')
cond = xtext.split(" ")
a = await client.searchMessages(xtext, from, 10, 1)// count 10 
fox = '*「 Pesquisa de msg do grupo 」*\n\n'
num = 0
for (j of a.messages){
num += 1
if (j.message.conversation) {
if (j.key.fromMe){ 
fox += num+'. Quem envio: '+client.user.jid+'\n    Msg: '+j.message.conversation+'\n    ID: '+j.key.id+'\n    Tipo: conversation\n\n'
 } else {
 fox += num+'. Quem envio: '+j.key.participant+'\n    Msg: '+j.message.conversation+'\n    ID: '+j.key.id+'\n    Tipo: conversation\n\n'
} 
}
else if (j.message.extendedTextMessage){
if (j.key.fromMe){ 
fox += num+'. Quem envio: '+client.user.jid+'\n    Msg: '+j.message.extendedTextMessage.text+'\n    ID: '+j.key.id+'\n    Tipo: extendedTextMessage\n\n'
}else{
fox += num+'. Quem envio: '+j.key.participant+'\n    Msg: '+j.message.extendedTextMessage.text+'\n    ID: '+j.key.id+'\n    Tipo: extendedTextMessage\n\n'
} 
}
}
reply(fox)

break



case 'recado':

qtt = body.slice(8)
if (args.length < 1) {texti = '*📡 [RECADO]*\n\n(trollei kkk)'} else {texti = `*📡 [RECADO]*\n\n_${qtt}_\n\n©Albedo`}

		if (!isOwner) return
var group = await albedo.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: `${texti}`,
contextInfo: { mentionedJid: mem },
quoted: mek
}

dfg = await albedo.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await albedo.downloadMediaMessage(encmedia)
for (let _ of dfg) {
albedo.sendMessage(_.jid, buff, image, options, {caption: ``})
}
reply('Transmissão enviada com sucesso')
} else {
for (let _ of dfg) {
sendMess(_.jid, options, ``)
}
reply('Transmissão enviada com sucesso')
}


break								
			
			

case 'getbio':
if (!isOwner) return
var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
var p = await albedo.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply("indisponível")
}
break


       case 'listaonline':
       case 'here':                
       if (!isOwner) if (!isGroupAdmins) return
             if (!isGroup) return reply(`Apenas grupo`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(albedo.chats.get(ido).presences), albedo.user.jid]
             albedo.sendMessage(from, 'Lista Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break

  case 'msginfo':
      case 'infomsg':
      case 'msg':
      if (!isOwner) return
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await albedo.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Lido por:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Entregue a:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('Marcar uma mensagem bot!')
}
             break
             
case 'leave': case 'kitar':
if (!isOwner) return
              if (!isGroup) return reply(mess.only.group)
albedo.updatePresence(from, gravando)
setTimeout( () => {
sendMedia('audio', 'adeus', seloaud);   
 }, 3000)              
              setTimeout( () => {
              albedo.groupLeave(from) 
              }, 9000)
              
              break
             



			
// dono			
      case 'join': 
      case 'convite': 
      case 'entrar': 
      qy = args.join('')
      if (!isOwner) return  reply(mess.ownerB)
             if (!qy) return reply('quero o link')
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('O link é inválido')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = albedo.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Grupo inserido com sucesso')
             break			
             ////
case 'randoperfil': case 'randofoto':
 if (!isOwner) return;
const mathty = Math.floor(Math.random() * 12) + 1;
 medi = fs.readFileSync(`./midia/perfil/${mathty}.jpg`);
await albedo.updateProfilePicture(botNumber, medi);
albedo.sendMessage(from, medi, image, {quoted:mek, caption: '✓ Foto de perfil alterada'})
console.log(`✓ PROFILE UPDATE`);
break             
             
 ////
 
 
			
			

// COMANDOS DE DOWNLOAD

case 'play': 
if (isFiltered(sender)) return reply(mess.spam)
addFilter(sender)
qt = args.join('');
if (args.length === 0) return reply(`Use assim *${prefix + command}* _O título da música a ser pesquisada_`)
setTimeout(function(){
               reply(`📡 Quase lá...`)
               },2500);
reply(mess.wait)
aramas = await yts(qt);
aramat = aramas.all 
var mulaikah = aramat[0].url							
console.log(color('[YT PLAY MÚSICA]', 'magenta'), color(`PROCURANDO A MÚSICA NO YT`, 'yellow')) 
 try {
 yta(mulaikah)
 .then((res) => {
 const { dl_link, thumb, title, filesizeF, filesize } = res
 axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
 .then(async (a) => {
 if (Number(filesize) >= 100000) return 
await sendMediaURL2(from, dl_link).catch(() => reply('error'))
})                
})
} catch (err) {
reply (`erro`)
}
setTimeout(function(){

tujuh = fs.readFileSync('./midia/stickers/music.webp');
albedo.sendMessage(from, tujuh, sticker, {quoted: seloaud})
               },8500);

break 

case 'play2':
var apikeyakame = '4l2Fza99'
var anu = await fetchJson(`http://akame-api.herokuapp.com/api/ytplay?nome=sidoka%20menina%20linda&apikey=${apikeyakame}`)
var imgapi = await getBuffer(anu.resultado.thumb)
var infoapi = `馃摃Nome : ${anu.resultado.t铆tulo}\n馃憗锔廣isualiza莽玫es : ${anu.resultado.visualiza莽玫es}\n鈴癙ublicado : ${anu.resultado.publicado}\n馃帴Canal : ${anu.resultado.canal}\n\n_*!--aguarde o envio do arquivo--!*_`
var resultado_audio = await getBuffer(anu.resultado.link)
akame.sendMessage(from, imgapi, image, {caption: infoapi, quoted: mek, thumbnail: null})
akame.sendMessage(from, resultado_audio, {quoted: mek, mimetype: 'audio/mp4', filename: "akame_api"})
break

case 'playb':     
pesquisar = body.slice(7)  
albedo = await fetchJson(`http://akame-api.herokuapp.com/api/card/promote?nome=AKAME&nomegp=AKAME_APIS&membros=666&perfil=https://telegra.ph/file/692385eb5225c1be33900.jpg&fotogp=https://i.ibb.co/cNZNDBw/89d1c311c6ba.jpg&fundo=https://i.ibb.co/hY3VSzX/56b8ccfacea1.jpg&apikey=akame_gstz}`)
const objs = []
for(i=0;i< albedo.resultado.length; ++i) {let data = {rowId: `#play `+ albedo.resultado[i].title,title: `${akamer.resultado[i].title}`,description: ``}
objs.push(data)}
botãoplay = {listMessage: { title: `*🔎Pesquisa:* ${pesquisar}`, buttonText: "*⃠*", description: `*⚖️Total de músicas encontradas:* ${albedo.resultado.length}`, listType: 1, sections: [{title: "🎵MÚSICAS🎶",rows: objs}]}}
let preparar = await albedo.prepareMessageFromContent(from, botãoplay,{});
await albedo.relayWAMessage(preparar, {waitForAck: true})
break

case 'img':

 if (budy.includes("gore") || (budy.includes("Gore") || (budy.includes("GORE") || (budy.includes("estup") || (budy.includes("Estup") || (budy.includes("ESTUP") || (budy.includes("sangue") || (budy.includes("trip") || (budy.includes("vômit") || (budy.includes("nojen") ||(budy.includes("vomit")))))))))))){
return reply(`detectado palavra ofensiva`)
albedo.groupRemove(from, [sender])
}

if (!isNsfw) if (budy.includes("sex") || (budy.includes("ero") || (budy.includes("Ero") || (budy.includes("ERO") || (budy.includes("anal") || (budy.includes("Anal") || (budy.includes("Sex") || (budy.includes("SEX") || (budy.includes("ANAL") || (budy.includes("pela") || (budy.includes("Pela") || (budy.includes("PELA") || (budy.includes("Vagin") || (budy.includes("vagin") || (budy.includes("VAGIN") || (budy.includes("bucet") || (budy.includes("Bucet") || (budy.includes("BUCET") || (budy.includes("sem roupa") || (budy.includes("SEM ROUPA") || (budy.includes("Sem roupa") || (budy.includes("Sem Roupa") || (budy.includes("boque") || (budy.includes("Boque") || (budy.includes("pornhub") || (budy.includes("Pornhub") || (budy.includes("porn") || budy.includes("Porn") || (budy.includes("PORN") || (budy.includes("hent") || (budy.includes("Hent") || (budy.includes("HENT") || budy.includes("puta") || budy.includes("Puta") || budy.includes("PUTA") || (budy.includes("Cu") || (budy.includes("cu") || (budy.includes("CU") || budy.includes("Nud") || (budy.includes("nud") || (budy.includes("NUD") || (budy.includes("cú") || (budy.includes("Cú") || (budy.includes("CÚ") || (budy.includes("rab") || (budy.includes("Rab") || (budy.includes("RAB") || (budy.includes("Pênis") || (budy.includes("PÊNIS") || (budy.includes("pênis") || (budy.includes("penis") || (budy.includes("Penis") || (budy.includes("PENIS") || (budy.includes("piroca") || (budy.includes("Piroca") || (budy.includes("PIROCA") || (budy.includes("seio") || (budy.includes("Seio") || (budy.includes("SEIO") || (budy.includes("bunda") || (budy.includes("Bunda") || (budy.includes("BUNDA") || (budy.includes("futan") || (budy.includes("Futan") || (budy.includes("FUTAN") || (budy.includes("Futun") || (budy.includes("futun") || (budy.includes("FUTUN") || (budy.includes("yaoi") || (budy.includes("Yaoi") || (budy.includes("YAOI") || (budy.includes("mast") || (budy.includes("MAST") || (budy.includes("Mast") || (budy.includes("pelad") || (budy.includes("Pelad") || (budy.includes("PELAD") || (budy.includes("punhet") || (budy.includes("Punhet") || (budy.includes("PUNHET") || (budy.includes("siriri") || (budy.includes("Siriri") || (budy.includes("SIRIRI") || (budy.includes("BOQUE") || (budy.includes("xvideos") )))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))){
return reply(`*[ X ]* sem sexo, jovem`)
}



if (args.length < 1) return reply('O que você deseja procurar?')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
 espere();
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: ` `})
}
}

break

case 'ytsearch':

if (args.length < 1) return reply('Cade o txt?')
const srch = args[0];
try {
var aramas = await yts(srch);
} catch {
return await albedo.sendMessage(from, 'Error!', MessageType.text, dload)
}
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE* 」'
ytresult += '\n________________________\n\n'
aramas.all.map((video) => {
ytresult += '❏ Titulo: ' + video.title + '\n'
ytresult += '❏ Link: ' + video.url + '\n________________________\n\n'
});
ytresult += `${setting.NamaBot}`
await albedo.sendMessage(from, tbuff, image, {quoted: mek, caption: ytresult})

break 

case 'ytmp4':
if (isFiltered(sender)) return reply(mess.spam)
addFilter(sender)
qy = args.join('');

if (!qy) return reply('Use o comando juntamente com um link do youtube')
if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(`O seguinte link: "${body.slice(command + 2)}" não é um link válido do youtube`)
reply('*「 ❗ 」 Aguarde um pouco, baixando seu vídeo...*')
console.log(`PROCURANDO VIDEO...`)
ase = await y2mateV(qy).catch(e => {
reply('Erro,tente novamente😔')
})
vidionye = await getBuffer(ase[0].link)
albedo.sendMessage(from, vidionye, video, {mimetype: 'video/mp4', filename: `${ase[0].output}`, quoted: mek
})
console.log(`✓ Ok`)
break


case 'baixar':
qpq = args.join('')
if (args.length == 0) return reply(`Insira alguma coisa!`)
if (!qpq.includes('http')) return reply(`link inválido!`)

ppp = await getBuffer(`${qpq}`)

albedo.sendMessage(from, ppp, image)
break

case 'ytmp3':
if (isFiltered(sender)) return reply(mess.spam)
addFilter(sender)
if (args.length === 0) return reply(`Use assim :  *${prefix + command} [linkYt]*`)
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply(`link inválido`)
espere();
try {

yta(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesizeF) >= 30000) return sendMediaURL(from, thumb, `*Dados obtidos com sucesso!*\n\n*Titulo* : ${title}\n*Extração* : mp3\n*Tamanho* : ${filesizeF}\n*Link* : ${a.data}\n\n_Para tamanhos superiores a 30 MB, é apresentado na forma de um link_`)
captions = `*「 YOUTUBE MP3 」*\n\n*Titulo* : ${title}\n*Ext* : mp3\n*Tamanho* : ${filesizeF}\n\n_Enviando o áudio..._`
sendMediaURL(from, thumb, captions)
sendMediaURL(from, dl_link).catch(() => reply(`erro`))
})
})
} catch (err) {
reply(`erro`)
}

break 

case 'playmp4': case 'playvid':
if (isFiltered(sender)) return reply(mess.spam)
addFilter(sender)
ww = args.join('');
if (args.length === 0) return reply(`Use assim : *${prefix + command}* _O título_`) 
espere();
const uangsaku = Math.floor(Math.random() * 1) + 0.3

aramas = await yts(ww);
aramat = aramas.all 
mulaikah = aramat[0].url      
console.log(color('[YT PLAY VÍDEO]', 'magenta'), color(`PROCURANDO O VÍDEO NO YT`, 'yellow'))       
try {
ytv(mulaikah)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 1000000) return sendMediaURL(from, thumb, `*「 REPRODUZIR VÍDEOS 」*\n\n*Titulo* : ${title}\n*Extração* : MP3\n*Tamanho do arquivo* : ${filesizeF}\n*Link* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`)
const captions = `*「 REPRODUZIR VÍDEOS 」*\n\n*Titulo* : ${title}\n*Extração* : MP4\n*Tamanho* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply('error'))
})                
})
} catch (err) {
reply(`erro`)
}

break 
			
			
			
// CASES COM APIS			
/*
			
case 'print':
aguarde();
qt = args.join('');
try {
cu = await getBuffer(`https://akamer.herokuapp.com/api/ssweb?apikey=akame&url=${qt}`);
albedo.sendMessage(from, cu, image, {quoted: selogp})
console.log(` PRINT DA WEB ${qt}`)
} catch {
return reply(`Erro`)
}
break
			*/
			
case 'ddd':
reply (`aguarde`)
teks = args.join(' ')
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/consultas/internacional?ddd=${teks}`)

kyu = `
*Estado:* ${anu.Estado}

*Cidades:* ${anu.Cidades}
`


albedo.sendMessage(from, kyu, text, {quoted:mek})
break
/*
case 'xvideos':
tt = args.join('')
if (args.length == 0) return reply(`Insira alguma coisa!`)

aguarde();


result = await fetchJson(`http://brizas-api.herokuapp.com/porn/xvideos?apikey=brizaloka&query=${tt}`)

resultMidia = await getBuffer(`${result.thumb}`)
console.log(result)
albedo.sendMessage(from, resultMidia, image, {quoted: selo, caption:`*RESULTADOS:*\n\n*nome:* ${result.titulo}\n*link:* ${result.link}\n*views:* ${result.view}\n*duração:* ${result.duration}\n*likes:* ${result.likes}\n*deslikes:* ${result.deslikes}\n*comentários:* ${result.comentarios}\n*canal:* ${result.canal}`})
break

*/
case 'wiki':
if (args.length == 0) return reply(`Insira alguma coisa!`)
aguarde();
reply (`aguarde`)
teks = args.join(' ')
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/educacional/wikipedia?pergunta=${teks}`)

wiki = `
${anu.Resultado}
`
albedo.sendMessage(from, wiki, text, {quoted:mek})		
break			

case 'anime':
if (args.length == 0) return reply(`Insira alguma coisa!`)
reply (`aguarde`)



teks = args.join(' ')

anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/educacional/buscaranimes?anime=${teks}`)



anim = `
*Título:* ${anu.Titulo_anime}


*Info:* ${anu.Info_anime}


*Link:* ${anu.Link_anime}


*Sinopse:* ${anu.Sinopse_anime}
`
albedo.sendMessage(from, anim, text, {quoted:mek})


break





case 'cpf':

result = await fetchJson(`http://brizas-api.herokuapp.com/gerador/cpf?apikey=brizaloka`)
    console.log(result)
reply(`${result.CPF}`)
reply(`*CPF gerado com sucesso ✓*`)
break

case 'anime2':
if (args.length == 0) return reply(`Insira alguma coisa!`)
reply (`aguarde`)

teks = args.join(' ')

anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/search/anime?apikey=apiteam&anime=${teks}`)

enc = `
*${anu.resultado.nome}*

*status:* ${anu.resultado.status}

*episódios:* ${anu.resultado.epanime}

*link:* ${anu.resultado.link}
`
albedo.sendMessage(from, enc, text, {quoted:mek})
break

case 'cep':
reply (`aguarde`)

teks = args.join(' ')

anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/tools/cep?apikey=apiteam&cep=${teks}`)

cep = ` RESULTADOS DA PESQUISA ${teks}

logradouro: ${anu.resultado.logradouro}
complemento: ${anu.resultado.complemento}
bairro: ${anu.resultado.bairro}
localidade: ${anu.resultado.localidade}
estado: ${anu.resultado.uf}
ddd: ${anu.ddd}
`

albedo.sendMessage(from, cep, text)

break

///
			
			

        
             
               		
               						
case 'stk': case 's2':

if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await albedo.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
espere();
await ffmpeg(`./${media}`)
.input(media)
.on('start', function(cmd) {
})
.on('error', function(err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
enviar(ptbr.stick())
})
.on('end', function() {
exec(`webpmux -set exif ${addMetadata(`Albedo`)} ${ran} -o ${ran}`, async(error) => {
if (error) return enviar(ptbr.stick())
albedo.sendMessage(from, fs.readFileSync(ran), sticker, {
quoted: mek
})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,650)':h='min(min(iw\,ih)\,650)',scale=320:320,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await albedo.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
enviar(ptbr.wait())
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function(cmd) {
})
.on('error', function(err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar(`A conversão de ${tipe} para o sticker falhou`)
})
.on('end', function() {
exec(`webpmux -set exif ${addMetadata(`Albedo`)} ${ran} -o ${ran}`, async(error) => {
if (error) return enviar(ptbr.stick())
albedo.sendMessage(from, fs.readFileSync(ran), sticker, {
quoted: mek
})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,320)':h='min(min(iw\,ih)\,320)',scale=200:200,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
.toFormat('webp')
.save(ran)
} else {
enviar(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break
			
			
			
			
		






			
case 'async':
if (!isOwner) return reply(`só dono`)
return eval(`( async () => {
${args.join(' ')}
})()`)
break			
			
			
			
case 'stiker':
				case 'sticker': case 's': case 'st': case 'f': case 'ft':
				espere();
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await albedo.downloadAndSaveMediaMessage(encmedia)
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
								exec(`webpmux -set exif ${addMetadata('BOT', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									albedo.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								albedo.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await albedo.downloadAndSaveMediaMessage(encmedia)
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
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('BOT', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									albedo.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								albedo.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await albedo.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('BOT', authorname)} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									albedo.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
								//albedo.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await albedo.downloadAndSaveMediaMessage(encmedia)
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
								albedo.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					break			



               
case 'menudono': case 'owner':
if (!isOwner) return

sendMedia ('foto', mathFoto, selostt, menudono(prefix))
break


case 'hentai': case 'sexo': case 'menuhentai':
if (!isNsfw) return reply (`Modo *nsfw* desativado`)
espere ();
return sendnsfw('foto', mathnsfw, selostt, menuhentai(prefix))
break

case 'menu':
buttons = [{buttonId: `.help`,buttonText:{displayText: '⚡ MENU ⚡'},type:1},{buttonId:`.hentai`,buttonText:{displayText:'⚡ MENUHENTAI ⚡'},type:1},{buttonId:`.figus`,buttonText:{displayText:'⚡ MENUFIGU ⚡'},type:1}]

imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./logos/tb.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./logos/tb.jpg`)})).imageMessage

lzmodsdominabb = " seja bem vindo ao menu do bot"

buttonsMessage = {
contentText: lzmodsdominabb,
footerText: "escolha uma das opções abaixo", imageMessage: imageMsg,
buttons: buttons,
headerType: 4
}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
client.relayWAMessage(prep)
reply('')
reply('')
break


case 'hentai': case 'sexo': case 'menuhentai':
if (!isNsfw) return reply (`Modo *nsfw* desativado`)
espere ();
return sendnsfw('foto', mathnsfw, selostt, menuhentai(prefix))
break

case 'galeria': case 'fotos': case 'album': case 'álbum':
espere();
sendMedia('foto', mathFoto, selostt, galeria(prefix))

break

case 'menudiv': case 'diversao': case 'diversão': case 'div':
espere ();
sendMedia('image', mathFoto, selostt, menudiv(prefix))
break


case 'allcmd': case 'help':
espere ();
sendMedia('foto', mathFoto, selostt, allmenu(prefix))
break

         case 'help': case 'comandos': case 'help': case 'cmd': case 'cmds':
        case 'help':
        
if (isNsfw) {
return sendnsfw('foto', mathnsfw, selogp, menu2(prefix))
}
           
mathaudio= Math.floor(Math.random() * 7) + 1

audior = fs.readFileSync(`./midia/audios/menu/${mathaudio}.mp3`)

albedo.sendMessage(from, audior, MessageType.audio, {quoted: seloaud, mimetype: 'audio/mp4', ptt:true})            

               
               setTimeout(function(){
               sendMedia('foto', mathFoto, say1, menu(prefix))
               },2500);
               break 
		
		
case 'figus': case 'figurinhas': case 'figu': case 'stickers': case 'sticker': case 'menufigu':
// if (!isUser) return reply (mess.user)

setTimeout(function(){
sendMedia('foto', mathFoto, selogp, menufigu(prefix))
},2000);
setTimeout(function(){
enviarAds('');
},4000);

		break					
			
			case 'menuadms': case 'menuadmin': case 'menuadmins': case 'administrativo': case 'administração': case 'adms':
			// if (!isUser) return reply (`vc não está registrado`)

setTimeout(function(){
sendMedia('foto', mathFoto, say1, menuadms(prefix))
},2500);
		break		
		
case 'menudow':case 'down':
        
if (isNsfw) {
return sendnsfw('foto', mathnsfw, selogp, menudown(prefix))
}
           
mathaudio= Math.floor(Math.random() * 7) + 1

audior = fs.readFileSync(`./midia/audios/menudown/${mathaudio}.mp3`)

albedo.sendMessage(from, audior, MessageType.audio, {quoted: seloaud, mimetype: 'audio/mp4', ptt:true})            

               
               setTimeout(function(){
               sendMedia('foto', mathFoto, say1, menudown(prefix))
               },2500);
               break 
			
case 'metodos': case 'comandos': case 'mds': case 'mts': case 'md':
case 'mod':
        
if (isNsfw) {
return sendnsfw('foto', mathnsfw, selogp, mts(prefix))
}
           
mathaudio= Math.floor(Math.random() * 7) + 1

audior = fs.readFileSync(`./midia/audios/mts/${mathaudio}.mp3`)

albedo.sendMessage(from, audior, MessageType.audio, {quoted: seloaud, mimetype: 'audio/mp4', ptt:true})            

               
               setTimeout(function(){
               sendMedia('foto', mathFoto, say1, mts(prefix))
               },2500);
               break 
			
//
//
//
/// COMANDOS PARA ADMINS;
//


case 'status': case 'ping':

if (!isOwner)return enviar('Este comando e so pro meu criador')

var groups = albedo.chats.array.filter(v => v.jid.endsWith('g.us'))

var privat = albedo.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))

var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`

	uptime = process.uptime();

timestamp = speed();

totalChat = await albedo.chats.all()

charge = charging ? 'sim' : 'não'

listrik = charging ? '⚡' : 'ga di cas'

latensi = speed() - timestamp

	var total = math(`${groups.length}*${privat.length}`)
	
	cu = (isWelkom ? '*ATIVO*':'*NÃO ATIVO*')
	cu2 = (isAntiFake ? '*ATIVO*':'*NÃO ATIVO*')
	cu3 = (isAntiLink ? '*ATIVO*':'*NÃO ATIVO*')
cu4 = (isAntiTravatxt ? '*ATIVO*':'*NÃO ATIVO*')
cu5 = (isNsfw ? '*ATIVO*':'*DESATIVADO*')

	teks = `
*STATUS DO GRUPO:*

➠ Welcome: ${cu}
➠ Anti Fake: ${cu2}
➠ Anti Link: ${cu3}
➠ Anti Trava: ${cu4}
➠ _nsfw:_ ${cu5}

*STATUS DO BOT:*
 
➠ Total de grupos : *${groups.length}*
➠ Total de usuários no pv  : *${privat.length}*
➠ Velocidade : *${latensi.toFixed(4)} Second*
➠ Ativo a : *${kyun(uptime)}*


➠ Servidor: *${os.platform()},${device_manufacturer} - ${albedo.user.phone.device_model}*
➠ Bateria : *${JSON.stringify(baterai)}% ${listrik}*

 _versão do WhatsApp: ${albedo.user.phone.wa_version}_
`

enviar(`${teks}`)

break


case 'merebaixe':
if (!isOwner) return

albedo.groupDemoteAdmin(from, [sender])

reply(`✓`)
break

case 'seradm':
if (!isOwner) return

albedo.groupMakeAdmin(from, [sender])

reply('✓')
break 

case 'antifake':
 

if (!isOwner) if (!isGroupAdmins) return reply (`comando mess para admins`)

       if (!isGroup) return reply(`[📍] SOMENTE EM GRUPOS`)
                if (!isBotGroupAdmins) return reply(`[📍] O BOT PRECISA SER ADMIN`)
					try {														 
					if (args.length < 1) return enviar('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiFake) return enviar('Ja esta ativo')
						antifake.push(from)
						fs.writeFileSync('./json/antifake.json', JSON.stringify(antifake))
						enviar('Ativou com sucesso o recurso de antifake neste grupo✔️')
	 				} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./json/antifake.json', JSON.stringify(antifake))
						enviar('Desativou com sucesso o recurso de antifake neste grupo✔️')
 					} else {
						enviar('1 para ativar, 0 para desativar')
 					}
 					} catch {
						enviar('Deu erro, tente novamente :/')
 					}
     
break

case 'antitravatexto': case 'antitrava':
 

if (!isOwner) if (!isGroupAdmins) return reply (`comando mess para admins`)

       if (!isGroup) return reply(`[📍] SOMENTE EM GRUPOS`)
                if (!isBotGroupAdmins) return reply(`[📍] O BOT PRECISA SER ADMIN`)
					try {														 
					if (args.length < 1) return reply('1 para ativar, 0 para desativar')
					if (Number(args[0]) === 1) {
						antitravatxt.push(from)
						fs.writeFileSync('./json/antitravatxt.json', JSON.stringify(antitravatxt))
						reply('Ativou com sucesso o recurso de anti trava neste grupo✔️')
	 				} else if (Number(args[0]) === 0) {
						antitravatxt.splice(from, 1)
						fs.writeFileSync('./json/antitravatxt.json', JSON.stringify(antitravatxt))
						reply('Desativou com sucesso o recurso de anti trava neste grupo✔️')
 					} else {
						reply('1 para ativar, 0 para desativar')
 					}
 					} catch {
						reply('Deu erro, tente novamente :/')
 					}
     
break

case 'antilink':
// if (!isUser) return reply (mess.user)
if (!isBotGroupAdmins) return reply('O bot precisa ser adm')
if (!isGroupAdmins) if (!isOwner) return
if (args.length < 1) return reply('Digite 1 para ativar\nDigite 0 para desativar')
qp = args.join('')
if (qp == 'ativo' || qp == 'ativar' || qp == 'ligar' || qp == 'ativado' || qp == '1'){
if (isAntiLink) return reply('*RECURSOS ANTILINK ESTÁ ATIVO*')
antilink.push(from)
fs.writeFileSync('./json/antilink.json', JSON.stringify(antilink))
reply('*Antilink ativado com sucesso ✓*')
albedo.sendMessage(from, `*Atenção, antilink esta ativo, qualquer um que nao for adm mandar link, sera expulso do gp imediatamente.*`, text)
} 
if (qp == 'desativo' || qp == 'desativar' || qp == 'desligar' || qp == 'desligado' || qp == '0'){
if (!isAntiLink) return reply('*Já está desativado!!*')
antilink.splice(from)
fs.writeFileSync('./json/antilink.json', JSON.stringify(antilink))
reply('*Desativar grupo anti-link com sucesso neste grupo ✔️*')
}
break

case 'fatality':

fatal = Math.floor(Math.random() * 6) + 1

if (!isGroup) return reply('so em gp burro')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você deseja dar um fatality!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
console.log(mek)
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `${mentioned[0].split('@')[0]} recebeu um [FATALITY] do *${pushname}* 🤕` 
jki = fs.readFileSync(`./midia/gifs/fatal/${fatal}.mp4`)
client.sendMessage(from, jki,  MessageType.video, {mimetype: 'video/gif', quoted: selogif, caption: susp})

break 


case 'licloli': case 'liclolli':

var teste = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1weMG0aarEM85pcGM53DlZdOuL4CrXnviw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPydCz4ZtM_rxJqxDkCfnAd0UImOcQVL6JOw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0uFAgI5ivh98Hfu7dvlGEeEohIB6ew_9nnQ&usqp=CAU"]

cuj = teste[Math.floor(Math.random() * (teste.length))]	

console.log(`${cuj}`)

blim = await getBuffer(`${cuj}`)

albedo.sendMessage(from, blim, image, {quoted: seloimg, caption: ` Parabéns *${pushname}*, agora vc tem uma Licença para ter lolis!`})

break



break





case 'dedada':
case 'jutso':

if (!isGroup) return reply('so em gp burro')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer meter o dedo')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `@${mentioned[0].split('@')[0]} você levou uma dedada do *${pushname}* 🤡` 
const jry = fs.readFileSync('./midia/gifs/dedada.mp4')
client.sendMessage(from, jry,  MessageType.video, {mimetype: 'video/gif', quoted: selogif, caption: susp})
break 



case 'roletahard':
if (!isOwner) if (!isGroupAdmins) return reply (`Só admin`)

if (!isGroup) return reply(`SOMENTE EM GRUPOS`)



jds = []

const A2 = groupMembers

const B2 = groupMembers

const TAMBOR = ["na perna","na cabeça","no pescoço","no peito","no olho","no estômago","na boca","na perna","na testa","no braço"]

 const C2 = A2[Math.floor(Math.random() * A2.length)]

 tpa = TAMBOR[Math.floor(Math.random() * (TAMBOR.length))]	 		

 reply(`😈GIRANDO O TAMBOR, E SE PREPAREM PARA AS CONSEQUÊNCIAS😈 `)
sendMedia('audio', 'bang bang', selo)
 setTimeout( () => {

D1 = `💥POW💥 O TAMBOR GIROU E ACERTOU O @${C2.jid.split('@')[0]}, MORREU COM UM TIRO *${tpa}*`             			

mentions(D1, jds, true)				

}, 5000)

jds.push(C2.jid)				  

setTimeout( () => {

jds.push(C2.jid)

client.groupRemove(from, [C2.jid])



}, 6000)

break

case 'perfil':
case 'infome':
case 'eu':


var pt = await albedo.getStatus(`${sender}`, MessageType.text)


// if (!isUser) return reply (mess.user)
try {
         var ppimg = await albedo.getProfilePicture(`${sender.split('@')[0]}@c.us`)
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
albedo.sendMessage(from, buffer, image, {caption: hisil})



break

case 'pau':
gayy = body.slice(1)
r = Math.floor(Math.random() * 27 + 4)
buffer = await getBuffer('https://i.ibb.co/5B7YTDK/images-9.jpg')
albedo.sendMessage(from, buffer, image, {quoted: mek, caption: `*O TAMANHO DA SUA PINGOLA É: ${r}cm 😨`})
break

case 'gostoso':		
if (args.length < 1) return reply('marque sua mãe aquela gostosa!')
rate = body.slice(9)
var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
var kl = ti[Math.floor(Math.random() * ti.length)]
albedo.sendMessage(from, 'tu e gostoso(a) será?: *'+rate+'*\n\nSua porcentagem de gostoso é : '+ kl+'%🤤\n slk comia ate o pau mofar🌚 kkk', text, { quoted: mek })
break


case 'add9':
 
const q = args.join(' ')
if (!q) return mensagem (`insira o número!`)
if (!isGroup) return mensagem(mess.only.group)
if (!isGroupAdmins) if (!isOwner) return mensagem(mess.only.admin)
if (!isBotGroupAdmins) return mensagem(mess.only.Badmin)
const dl = body.slice(5)
if (dl.length > 13)return mensagem(`Exemplo : ${prefix}add 554389220420`) 
if (args[0].startsWith('08')) return mensagem('Use o código do país, man')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
albedo.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
mensagem('Falha ao adicionar usuário,talvez ele esteja com privacidade ativada mess para contatos')
}

break

//


//

case 'opentime':
 
if (!isOwner) if (!isGroupAdmins) return
ott1 = args.join(" ")
if(isNaN(ott1)) return mensagem('precisa ser um número!!')
if(ott1 > 480) return mensagem('o tempo precisa menor a 480 minutos!')

calculoTempo2 = parseFloat(ott1 * 60)
resultadoFinal2 = `${calculoTempo2}` + `000`


if (!ott1) return reply(`coloque um número!`)
if (!isGroup) return reply(mess.only.group)
if (!isOwner) if (!isGroupAdmins) return reply (`comando mess para admins`)

if (!isBotGroupAdmins) return reply(mess.only.Badmin)


reply (` O grupo será aberto em ${ott1} *minutos!* `)
setTimeout( () => {

var nomor = mek.participant
const close = {
text: `*[ ✓ ]* Grupo *aberto* pelo administrador @${nomor.split("@s.whatsapp.net")[0]}`,
contextInfo: { mentionedJid: [nomor] }
}
albedo.groupSettingChange (from, GroupSettingChange.messageSend, false);
reply(close)
}, resultadoFinal2)

break
//

case 'closetime':
 
if (!isOwner) if (!isGroupAdmins) return
ott = args.join(" ")
if(isNaN(ott)) return mensagem('precisa ser um número!!')
if(ott > 480) return mensagem('o tempo precisa menor a 480 minutos!')

calculoTempo = parseFloat(ott * 60)
resultadoFinal = `${calculoTempo}` + `000`


if (!ott) return reply(`coloque um número!`)
if (!isGroup) return reply(mess.only.group)
if (!isOwner) if (!isGroupAdmins) return reply (`comando mess para admins`)

if (!isBotGroupAdmins) return reply(mess.only.Badmin)


reply (` O grupo será fechado em ${ott} *minutos!* `)
setTimeout( () => {

var nomor = mek.participant
const close = {
text: `*[ X ]* Grupo *fechado* pelo administrador @${nomor.split("@s.whatsapp.net")[0]}`,
contextInfo: { mentionedJid: [nomor] }
}
albedo.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(close)
}, resultadoFinal)

break
//

case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) if (!isOwner) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('ja está ativo chefe')
						welkom.push(from)
						fs.writeFileSync('./json/welkom.json', JSON.stringify(welkom))
						reply('Ativado com sucesso o recurso de boas-vindas neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./json/welkom.json', JSON.stringify(welkom))
						reply('Desativado com sucesso o recurso de boas-vindas neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
                                   break
/*case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply(' JA ESTÁ ATIVO')
						welkom.push(from)
						fs.writeFileSync('./json/welkom.json', JSON.stringify(welkom))
						reply('Ativado com sucesso o recurso de boas-vindas neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./json/welkom.json', JSON.stringify(welkom))
						reply('ativado baka kkkk')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                                      brea*/



case 'setname':
 
if (!isGroup) return reply(mess.only.group)
if (!isOwner) if (!isGroupAdmins) reply (`comando mess para admins`)
qrt = args.join(" ")
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
albedo.groupUpdateSubject(from, `${qrt}`)
albedo.sendMessage(from, 'Sucesso, alterado o nome do grupo', text, {quoted: selogp})
break
//
case 'atividades':  
 
try{
if (!isOwner) if (!isGroupAdmins) reply (`comando mess para admins`)

if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
teks = ` ⋆⃟ۣۜ᭪➣ Atividade dos membros do grupo:\n`
mem = []
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.jid) >=0) {
var indnum = numbersIds.indexOf(obj.jid)
teks += ` ⋆⃟ۣۜ᭪➣ @${countMessage[ind].numbers[indnum].jid.split('@')[0]}\n ⋆⃟ۣۜ᭪➣ Mensagens: ${countMessage[ind].numbers[indnum].messages}\n ⋆⃟ۣۜ᭪➣ Comandos: ${countMessage[ind].numbers[indnum].cmd_messages}*\n`
} else {
teks += ` ⋆⃟ۣۜ᭪➣ @${obj.jid.split('@')[0]}\n ⋆⃟ۣۜ᭪➣ Mensagens: 0\n ⋆⃟ۣۜ᭪➣ Comandos: 0\n`
}
mem.push(obj.jid)
}
albedo.sendMessage(from, teks, extendedText, {quoted: mek, thumbnail:null, contextInfo:{mentionedJid: mem}})
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break

case 'antifake':
 
try {
if (!isGroup) return reply(mess.only.group)
if (!isOwner) if (!isGroupAdmins) reply (`comando mess para admins`)
if (args.length < 1) return reply(' 1 Para ativar/ 0 para desativar')
if (Number(args[0]) === 1) {
if (isAntifake) return reply('Ja esta ativo')
antifake.push(from)
fs.writeFileSync('./others/src/antifake.json', JSON.stringify(antifake))
reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
} else if (Number(args[0]) === 0) {
antifake.splice(from, 1)
fs.writeFileSync('./others/src/antifake.json', JSON.stringify(antifake))
reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}

break

case 'antilink':
 
if (!isGroup) return reply('Só em grupo.')
if (!isOwner) if (!isGroupAdmins) reply (`comando mess para admins`)
if (!isBotGroupAdmins) return reply('O bot precisa ser adm')
if (args.length < 1) return reply('Digite 1 para ativar\nDigite 0 para desativar')
if (Number(args[0]) === 1) {
if (isAntiLink) return reply('*RECURSOS ANTILINK ESTÁ ATIVO*')
antilink.push(from)
fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
reply('*Antilink ativado com sucesso ✓*')
albedo.sendMessage(from, `*Atenção, antilink esta ativo, qualquer um que nao for adm mandar link, sera expulso do gp imediatamente.*`, text)
} else if (Number(args[0]) === 0) {
if (!isAntiLink) return reply('*Já está desativado!!*')
antilink.splice(from)
fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
reply('*Desativar grupo anti-link com sucesso neste grupo ✔️*')
} else {
reply('1 para ativar, 0 para desativar')
}

break

case 'antitravatexto': case 'antitrava':
 

if (!isOwner) if (!isGroupAdmins) return reply (`comando mess para admins`)

       if (!isGroup) return reply(`[📍] SOMENTE EM GRUPOS`)
                if (!isBotGroupAdmins) return reply(`[📍] O BOT PRECISA SER ADMIN`)
					try {														 
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						antitravatxt.push(from)
						fs.writeFileSync('./database/antitravatxt.json', JSON.stringify(antitravatxt))
						reply('Ativou com sucesso o recurso de anti trava neste grupo✔️')
	 				} else if (Number(args[0]) === 0) {
						antitravatxt.splice(from, 1)
						fs.writeFileSync('./database/antitravatxt.json', JSON.stringify(antitravatxt))
						reply('Desativou com sucesso o recurso de anti trava neste grupo✔️')
 					} else {
						reply('1 para ativar, 0 para desativar')
 					}
 					} catch {
						reply('Deu erro, tente novamente :/')
 					}
     
break


case 'topativos':
 
if (!isOwner) if (!isGroupAdmins) reply (`comando mess para admins`)

if (!isGroup) return reply(mess.only.group)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(countMessage[ind].numbers.length < 3) return reply('Necessita do registro de 3 usuarios')
countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
mentioned_jid = []
boardi = '🔥፝⃟    Ranking dos membros mais ativos:\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) boardi += `${i + 1}º 🥇 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 1) boardi += `${i + 1}º 🥈 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 2) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
				
mentioned_jid.push(countMessage[ind].numbers[i].jid)
} 
mentions(boardi, mentioned_jid, true)
} catch (err) {
			console.log(err)
await albedo.sendMessage(from, `É necessário 3 jogadores para se construir um ranking`, text, {quoted: mek})
}

break
//
case 'checkativo': case 'checarativo':
 
if (!isOwner) if (!isGroupAdmins) reply (`comando mess para admins`)
if (!isGroup) return reply(mess.only.group)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque o número que deseja puxar a atividade')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if(numbersIds.indexOf(mentioned[0]) >= 0) {
var indnum = numbersIds.indexOf(mentioned[0])
mentions(`𖣘⃟ᗒ Consulta das atividade de\n𖣘⃟ᗒ @${mentioned[0].split('@')[0]} no grupo\n𖣘⃟ᗒ Mensagens: ${countMessage[ind].numbers[indnum].messages}\n𖣘⃟ᗒ Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}`, mentioned, true)
}
else {
mentions(`⋆⃟ۣۜ᭪➣ Consulta da atividade de ⋆⃟ۣۜ᭪➣ @${mentioned[0].split('@')[0]} no grupo\n⋆⃟ۣۜ᭪➣ Mensagens: 0\n⋆⃟ۣۜ᭪➣ Comandos dados: 0`, mentioned, true)
}

break
//

case 'simih':
 
if (!isGroup) return reply(mess.only.group)
if (!isOwner) if (!isGroupAdmins) reply (`comando mess para admins`)
if (args.length < 1) reply(`1 para ativar, 0 para desativar!\nExemplo: ${prefix}simih 1`)
if (Number(args[0]) === 1) {
if (isSimi) return reply('O modo Simi está ativo!')
samih.push(from)
fs.writeFileSync('./others/src/simi.json', JSON.stringify(samih))
reply('Ativado com sucesso o modo simi neste grupo 😗️')
} else if (Number(args[0]) === 0) {
samih.splice(from, 1)
fs.writeFileSync('./others/src/simi.json', JSON.stringify(samih))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} 
break

case 'setdesc':
 
if (!isGroup) return reply(mess.only.group)
if (!isOwner) if (!isGroupAdmins) reply (`comando mess para admins`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
albedo.groupUpdateDescription(from, `${body.slice(9)}`)
albedo.sendMessage(from, 'Descrição alterada com sucesso', text, {quoted: selogp})

break



case 'ban':
if (!isOwner) if (!isGroupAdmins) return reply(`Só admin burro`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply (`até mais baka kkk`)
setTimeout( () => {
if (mek.message.extendedTextMessage.contextInfo.participant) {
albedo.groupRemove(from, [mek.message.extendedTextMessage.contextInfo.participant])
} else if (!mek.message.extendedTextMessage.contextInfo.participant) {
cucu = body.slice(6) + '@s.whatsapp.net';
albedo.groupRemove(from, [cucu])
}
}, 2000)
albedo.updatePresence(from, gravando)
setTimeout( () => {
sendMedia('audio', 'removido', seloaud)
}, 2000)
break



//

case 'promover': case 'promote': case 'up':

 
if (!isGroup) return mensagem(mess.only.group)
if (!isOwner) if (!isGroupAdmins) mensagem (`comando mess para admins`) 
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return mensagem('Marque alguém!')
if (!isBotGroupAdmins) return mensagem(mess.only.Badmin)
const dlt = body.slice(10)
if (dlt.length > 14)return mensagem(`Exemplo : ${prefix}promover @554389220420`) 

mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
ytb = 'Promovido com sucesso\n'
for (let _ of mentioned) {
ytb += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
//albedo.groupRemove(from, mentioned)
} else {
mentions(`Ok, chefe. esse(a) aqui: @${mentioned[0].split('@')[0]} agora é admin do grupo!`, mentioned, true)
albedo.groupMakeAdmin(from, mentioned)
}
setTimeout( () => {
 sendMedia('audio', 'promovido', seloaud)
 }, 1000)
break
///

case 'rebaixar': case 'demote': case 'dow':

 
if (!isGroup) return mensagem(mess.only.group)
if (!isOwner) if (!isGroupAdmins) mensagem (`comando mess para admins`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return mensagem('Marque alguém!')
if (!isBotGroupAdmins) return mensagem(mess.only.Badmin)
const dlp = body.slice(15)
if (dlp.length >= 15)return mensagem(`Exemplo : ${prefix}rebaixar @554389220420`)

mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
ytb = 'Rebaixado com sucesso\n'
for (let _ of mentioned) {
ytb += `@${_.split('@')[0]}\n`
}
mentions(ytb, mentioned, true)
//albedo.groupRemove(from, mentioned)
} else {
mentions(`Ok, chefe. esse(a) aqui: @${mentioned[0].split('@')[0]} perdeu o adm com sucesso!`, mentioned, true)
albedo.groupDemoteAdmin(from, mentioned)
}
break
//

case 'hidetag':
 
if (!isGroup) return reply(mess.only.group)
if (!isOwner) if (!isGroupAdmins) reply (`comando mess para admins`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await albedo.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
albedo.sendMessage(from, options, text)
break



//
//
//
//
//
//
//
////////////////////

// FIGURINHAS
//
//
case 'arcoirirs':
                case 'figulgbt': case 'sgay':
               // if (!isUser) return enviar(mess.user)
if (!isGroup) if (!isOwner) if (!isPremium) return
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        aguarde();
                        owgi = await albedo.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/rainbow?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return enviar(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            albedo.sendMessage(from, nobg, sticker, {
                                quoted: say1
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        enviar('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    
break
                    case 'figuc': case 'sc': case 'scirculo':
                case 'circulo':
               // if (!isUser) return enviar(mess.user)
if (!isGroup) if (!isOwner) if (!isPremium) return
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        espere();
                        owgi = await albedo.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/circle?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return enviar(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            albedo.sendMessage(from, nobg, sticker, {
                                quoted: say1
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        enviar('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    
break
                                        


case 'figutag': case 'stag':

			                          
if (!isOwner) if (!isGroupAdmins) return enviar('*Só adm*')

                                        if (!isQuotedSticker) return enviar('cadê a figurinha?')

                                        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo

                                        delb = await albedo.downloadMediaMessage(boij)

                                        await fs.writeFileSync(`stctagg.webp`, delb)

                                        var group = await albedo.groupMetadata(from)

                                        var member = group['participants']

                                        var mem = []

                                        member.map(async adm => {

                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))

                                        })

					var itsme = `0@s.whatsapp.net`

					var split = `${body.slice(8)}`

					var selepbot = {

						contextInfo: {

							mentionedJid: mem,

                                                        participant: itsme,                                                                                                                          quotedMessage: {

                                                                extendedTextMessage: {

                                                                text: split,

							   }

					      	      }

					       }

					}

					result = fs.readFileSync(`stctagg.webp`)

                                        albedo.sendMessage(from, result, sticker, selepbot)

					await fs.unlinkSync(`stctagg.webp`)

					break

								case 'setprefix2':
                if (!isOwner && !mek.key.fromMe) return enviar('*Criador?*')
                if (args.length < 1) return enviar(`Use assim\nOpcões :\n=> multi\n=> nopref`)
                if (q === 'multi'){
                    multi = true
                    enviar(`Prefixo alterado com sucesso para ${q}`)
                } else if (q === 'nopref'){
                    multi = false
                    nopref = true
                    enviar(`Prefixo alterado com sucesso para ${q}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${q}`
                    enviar(`Prefixo alterado com sucesso para ${q}`)
                }
                
break

case 'setprefix':
addFilter(from)
if (args.length < 1) return enviar(`Use ${p + comando} !`)
if (!isOwner) return enviar(resposta.macaco)
p = args[0]
enviar(`*O prefix do bot foi alterado com sucesso para*: ${q}`)
break

case 'figuborrada': case 'sborrado': case 'sborrada':
               // if (!isUser) return enviar(mess.user)
if (!isGroup) if (!isOwner) if (!isPremium) return
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        espere();
                        owgi = await albedo.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-gdr2.herokuapp.com/api/pixelate?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return enviar(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            albedo.sendMessage(from, nobg, sticker, {
                                quoted: say1
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        enviar('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    
break   

case 'figuarma': case 'sarma':
               // if (!isUser) return enviar(mess.user)
if (!isGroup) if (!isOwner) if (!isPremium) return
           
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        espere();
                        owgi = await albedo.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/gun?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return enviar(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            albedo.sendMessage(from, nobg, sticker, {
                                quoted: say1
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        enviar('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    
break

  

                    case 'figuwasted':          case 'swasted':    
               // if (!isUser) return enviar(mess.user)
if (!isGroup) if (!isOwner) if (!isPremium) return
          
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        espere();
                        owgi = await albedo.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/wasted?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return enviar(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            albedo.sendMessage(from, nobg, sticker, {
                                quoted: say1
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        enviar('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    
break

case 'triggered':
                case 'figubravo': case 'sbravo':
                       // if (!isUser) return enviar(mess.user)
if (!isGroup) if (!isOwner) if (!isPremium) return

                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        espere();
                        owgi = await albedo.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return enviar(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            albedo.sendMessage(from, nobg, sticker, {
                                quoted: say1
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        enviar('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    
break

case 'figupet':               case 'spet':
               // if (!isUser) return enviar(mess.user)
if (!isGroup) if (!isOwner) if (!isPremium) return

                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        espere();
                        owgi = await albedo.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-gdr2.herokuapp.com/api/petpet?url=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return enviar(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            albedo.sendMessage(from, nobg, sticker, {
                                quoted: say1
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        enviar('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    
break


case 'toimg':
// if (!isUser) return enviar(mess.user)
if (!isGroup) if (!isOwner) if (!isPremium) return
espere();
if (!isQuotedSticker) return reply('{ ❗ } *Marque a figurinha*')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await albedo.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('❌ Falha ao converter adesivo em imagem [ tente utilizar */togif* ]❌')
buffer = fs.readFileSync(ran)
albedo.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: '>//<'})
fs.unlinkSync(ran)
})

break



case 'semoji':
// if (!isUser) return enviar(mess.user)
espere();
if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 😭`)
emoji = args[0]
try {
emoji = encodeURI(emoji[0])
} catch {
emoji = encodeURI(emoji)
}
anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/emoji2png?text=${emoji}`)
buffer = await getBuffer(anu.result)
albedo.sendMessage(from, buffer, image, { quoted: mek })

break 

case 'attp':
// if (!isUser) return enviar(mess.user)
if (!isGroup) if (!isOwner) if (!isPremium) return
espere();
if (args.length < 0) return reply('Cadê o texto, hum? Use assim:\n\n /attp SEU TEXTO')

var txt = encodeURI(body.slice(6))
anu = await getBuffer(`https://api.xteam.xyz/attp?file&text=${txt}`)
albedo.sendMessage( from, anu, sticker, {quoted:mek, thumbnail:null})

break	  


case 'take': case 'rename':
                    case 'roubar':
                  //*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
   
    		if (!isQuotedSticker) return reply('❬ 📍 ❭ Marque alguma figurinha...')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await albedo.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : ``
            dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, albedo, mek, from)
			
break 

case 'stickerlist':
				case 'liststicker':
			     // if (!isUser) return enviar(mess.user)
if (!isGroup) if (!isOwner) if (!isPremium) return
					teks = '*lista das figurinhas :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					albedo.sendMessage(from, teks.trim(), extendedText, { quoted: mek, thumbnail:null, contextInfo: { "mentionedJid": setiker } })
					
break



				case 'addsticker':
			     // if (!isUser) return enviar(mess.user)
if (!isGroup) if (!isOwner) if (!isPremium) return
					if (!isQuotedSticker) return reply('[❗] Marque a figurinha')
					svst = body.slice(12)
					if (!svst) return reply('[❗] qual e o nome da figurinha?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await albedo.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./others/strg/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./others/strg/stik.json`, JSON.stringify(setiker))
					albedo.sendMessage(from, `[❗] figurinha guardada na nuvem 🔐\npara ver a lista de todas as figurinhas guardadas digite ${prefix}liststicker`, MessageType.text, { quoted: mek })
							
break

case 'getsticker':
				case 'gets':
			          // if (!isUser) return enviar(mess.user)
if (!isGroup) if (!isOwner) if (!isPremium) return
					namastc = body.slice(12)
					result = fs.readFileSync(`./others/strg/sticker/${namastc}.webp`)
					albedo.sendMessage(from, result, sticker, {quoted :mek})
					
					
break
///
///
///
///
			
//case Botão
case 'tobi':

	
			sendButMessage(from, 'TOBI', `texto menor`, [
            {              
              buttonId: `tobi`,
              buttonText: {
                displayText:  `botao `,
              },
              type: 1,
            },
          ]);        
                
            break						
			
            case 'video':
sendButMessage(from, 'TEXTO MAIOR', `texto menor`, [
            {              
              buttonId: `tobi`,
              buttonText: {
                displayText:  `Me aperte `,
              },
              type: 1,
            },
            {              
              buttonId: `tobi 2`,
              buttonText: {
                displayText:  `Me aperte 2 `,
              },
              type: 1,
            },
          ]);                    
			break		
			
			
			
			
			
			
			
			
			






			
case 'gitstalk': case 'githubstalk':

const gitStalk = await fetchJson(`https://api-gdr2.herokuapp.com/api/github?username=${q}`)

reply(`
Stalkear Github:

${gitStalk.result.html_url}
repositórios públicos: ${gitStalk.result.public_repos}
`)


break
		

			
case 'e':
case 'z':
if (!isOwner) if (!isGroupAdmins) return reply(`só dono`)
return eval(`${args.join(' ')}`)
break		
		
	
				

				
				case 'calcraiz':
			const calc5 = Math. sqrt(body.slice(10)).toFixed(3)
			reply(`raiz quadrada de *${body.slice(10)}:*
			${calc5}`)
			break
case 'calc':

txtj = body.slice(6)
jrr = parseFloat(txtj.split("+")[0] || txtj.split("-")[0] || txtj.split("*")[0] || txtj.split("/")[0])
jrr2 = parseFloat(txtj.split("+")[1] || txtj.split("-")[1] || txtj.split("*")[1] || txtj.split("/")[1])
const calc1 = parseFloat(jrr + jrr2)
const calc2 = parseFloat(jrr - jrr2)
const calc333 = parseFloat(jrr * jrr2).toFixed(2)
const calc444 = parseFloat(jrr / jrr2).toFixed(2)

if (jrr = parseFloat(txtj.split("+")[1])) {
enviar(`${calc1}`)
} else if (jrr = parseFloat(txtj.split("-")[1])) {
enviar(`${calc2}`)
} else if (jrr = parseFloat(txtj.split("*")[1])) {
enviar(`${calc333}`)
} else if (jrr = parseFloat(txtj.split("/")[1])) {
enviar(`${calc444}`)
} 


break














// comandos para dono




case 'nsfw':

if (!isOwner) return
if (!isBotGroupAdmins) return reply('O bot precisa ser adm')
qp = args.join('')
if (args.length < 1) return reply('...')

if (qp == 'ativo' || qp == 'ativar' || qp == 'ligar' || qp == 'ativado' || qp == '1'){

if (isNsfw) return reply('*😏 A putaria já está ativada*')
nsfw.push(from)
fs.writeFileSync('./json/nsfw.json', JSON.stringify(nsfw))
reply('*✓ A putaria começou*')
return albedo.sendMessage(from, `*( ͡° ͜ʖ ͡°)*`, text)}

if (qp == 'desativo' || qp == 'desativar' || qp == 'desligar' || qp == 'desligado' || qp == '0'){
if (!isNsfw) return reply('*Já está desativado!!*')
nsfw.splice(from)
fs.writeFileSync('./json/nsfw.json', JSON.stringify(nsfw))
return reply('*A putaria foi desativada 😔✊*')
}

reply(`inválido!`)

break
				
				default:
				

/*if (selectedButton == `maiscmds`) {
sendTexto(`indisponivel no momento`, selocont, 'encaminhada')
}
*/

///
///
///
if (selectedButton == 'tobi'){
reply(`kkk`)
return reply (`âœ“`)
}		
				
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						if (isCmd) {
						console.log(color('[ INDEFINIDO ]','red'), 'de', color(sender.split('@')[0]), color ('\n\n'))
						albedo.updatePresence(from, pausar)
setTimeout( () => {

/*mathAk = Math.floor(Math.random() * 2) + 1*/
mathB = Math.floor(Math.random() * 2) + 1

/*randobaka = fs.readFileSync(`./midia/audios/baka/${mathAk}.mp3`)*/
/*randobaka2 = fs.readFileSync(`./midia/audios/dono cmd.mp3`)*/
stikA = fs.readFileSync(`./midia/stickers/s/${mathB}.webp`)

albedo.sendMessage(from, stikA, MessageType.sticker, {quoted: mek})
return albedo.updatePresence(from, pausar)
              }, 3500)



/*if (!isOwner) albedo.sendMessage(from, randobaka, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

if (isOwner) albedo.sendMessage(from, randobaka2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

              }, 3500)*/
						}
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
			return errot();
		}
	})
}
starts()


/*

:3 Albedo muito fofa 

*/