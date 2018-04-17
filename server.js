const Discord = require("discord.js")
const bot = new Discord.Client()
const client = bot;
const fs = require('fs-extra')
const weather = require('weather-js')
bot.login(process.env["TOKEN"])
const express = require('express');
const app = express();
const http = require("http")
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
bot.on("ready", ready => {
  console.log("Prêt! \n" + bot.guilds.map(g => g.name))
  bot.user.setPresence({ game: { name: "w)help | waSStyle'BOT", type: 'WATCHING', Image : 'https://cdn.discordapp.com/attachments/416642247824769044/419488763224522752/IMG_20170708_0001.jpg'}, status: "online", avatar: "https://tmpfilecdn.freelogodesign.org/5d3e064b-84f5-4ab7-a25c-51193b8bf1fa.png"})
});




bot.on("message", message => {
  var cbug= bot.channels.find('id', '435034241659830283');
  var clog= bot.channels.find('id', '429359667064471553');
   let newprefix = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
   var defaultprefix = process.env["Prefix"];
   var mention = "<@426660821834137602>";
   var prefix;
   if(newprefix[message.guild.id]){
    var prefix = newprefix[message.guild.id].prefix;
   }else{
    var prefix = process.env["Prefix"]
   }
  let newautorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
   var autorole;
   if(newautorole[message.guild.id]){
    var autorole = newautorole[message.guild.id].autorole;
   }
  if(message.content.startsWith("w)help")) {
    message.author.send("", {
      embed: new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("Le prefix pour ce serveur est " + prefix)
        .setThumbnail("")
        .setAuthor("Help de " + bot.user.uername, "https://cdn.discordapp.com/avatars/349260377231458325/0c651d828a746f04cc90fc12bfab2f05.png?size=2048")
        .addField(":flashlight: Utiles", `${prefix}invite => invite le bot\n${prefix}support => rejoin le serveur support du bot \n${prefix}météo => te donne la météo d'une ville\n${prefix}ping => pong !`)
        .addField(":book: Information", `${prefix}stats => te donne les statistique du bot\n${prefix}iowner => information sur l'owner du bot\n${prefix}si => les informations sur le serveur`)
        .addField(":video_game: Divetisment", `${prefix}8ball => te repond a une question`)
        .addField(":frame_photo: Photo", `${prefix}avatar => l'avatar de la personne mentionné ou ton avatar`)
        .addField(":mag_right: Recherche", `${prefix}gif => recherche un GIF\n${prefix}ytv => recherche une vidéo YouTube\n${prefix}ytc => recherche une chaine YouTube`)
        .addField(":tools: Administration/Moderation", `${prefix}ban => Bannie un membre\n${prefix}kick => expulse un membre\n${prefix}clear => supprime un nombre précis de messages\n${prefix}ns => change le nom du serveur\n${prefix}role => ajoute/enleve un role a un membre\n${prefix}setprefix => change le prefix du serveur`)
        .addField(":earth_africa: Interserveur", `${prefix}vcs => pour parler entre serveur`)
    })
    }
 if(message.content.startsWith(mention)){
  message.channel.send('Mon prefix en ce serveur est `' + prefix + '`')
 }
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  if (message.author.bot) return;
  if (message.channel.type == "dm") return message.channel.send("tu sais il y a des serveurs pour les commands :joy:"); // ok ok 
  if(message.content.indexOf(prefix) !== 0) return;
 bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'bienvenue');
  // Do nothing if the channel wasn't found on this server
   if(member.guild.roles.find('name', autorole)) return;
     member.addRole(member.guild.roles.find('name', autorole))
     
  if (!channel) return member.send(`Bienvenue au serveur ${member.guild.name}, @${member.tag}`);;
  // Send the message, mentioning the member
  channel.send(`Bienvenue au serveur ${member.guild.name}, @${member.tag}`);
});
  const command = args.shift().toLowerCase();
    try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(bot, message, args, prefix, Discord);
 		clog.send(`${message.author.tag} a utilisé la commande ${command} dans ${message.guild.name}! \nContenu du message : \n${message.content}`)
    } catch (err) {
      console.error(err);
    message.reply("Une érreur s'est produite elle sera bientôt corriger")
        cbug.send('', {
          embed: new Discord.RichEmbed()
            .setColor('0xFFFFF')
            .setTitle('BUG')
            .setDescrition(err)
        })
    }
}) 