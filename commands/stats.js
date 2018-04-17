const moment = require("moment");
require("moment-duration-format");
var os = require('os');
const fs = require("fs");
var guilds = {};
exports.run = (bot, message, args, prefix, Discord) => {
if (message.content === prefix + "stats")
    message.channel.send("Demander par  @" + message.author.tag)
    message.channel.send(`== = Bot Statistics = ==

  \`  Username ${bot.user.tag}'
  
  =  Statistiques du bot =
     ↪ Nombre d'utilisateurs      :: ${bot.guilds.reduce((p, c) => p + c.memberCount, 0).toLocaleString() } Users
     ↪ Nombre de bots             :: ${bot.users.filter(user => user.bot).size.toLocaleString()} Bots
     ↪ Nombre de serveurs         :: ${bot.guilds.size.toLocaleString()} Servers
     ↪ Emojis personnalisée       :: ${bot.emojis.size.toLocaleString()} Emojis
     ↪ Nombre de salons           :: ${bot.channels.size.toLocaleString()} Channels
     ↪ Nombre de commandes        :: ${fs.readdirSync("./commands").length} Commandes 
  =  Informations du bot =
     ↪ Ping                       :: ${Math.round(bot.ping)}ms
  =  Process Statistics =
     ↪ Version de discord.js      :: ${Discord.version}
     ↪ Version de node.js         :: ${process.version}
     ↪ Processus prêt             :: ${moment.duration(process.uptime() * 1000).format(" D [days] H [hrs] m [mins] s [secs]")}
     ↪ Bot prêt                   :: ${moment.duration(bot.uptime).format(" D [days] H [hrs] m [mins] s [secs]")}
  =  Computer Statistics =
     ↪ Système d'exploitation     :: Windows 10 ( Hosting sur glitch.com/ )
     ↪ Temps de démarrage de L'OS :: ${moment.duration(os.uptime(), "seconds").format(" D [days] H [hrs] m [mins] s [secs]")}
     ↪ Utilisation de la ram      :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
     ↪ Tas de mémoire             :: ${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB
     ↪ Ram total                  :: ${(os.totalmem() / Math.pow(1024, 3)).toLocaleString()} Gigabytes
     ↪ Ram libre                  :: ${(os.freemem() / Math.pow(1024, 3)).toLocaleString()} Gigabytes`, {
              code: 'asciidoc'
     })}