exports.run = (bot, message, args, prefix, Discord) => {
if(message.content.startsWith(prefix + "triggered")) { 
  if(!message.mentions.users.first()) return message.channel.send("", {
        embed: new Discord.RichEmbed()
          .setImage("http://www.triggered-api.tk/api/v1/url=" + message.author.AvatarURL)
          
        });
var image = message.guild.member(message.mentions.users.first()).displayAvatarURL;  
message.channel.send("", {
        embed: new Discord.RichEmbed()
          .setImage("http://www.triggered-api.tk/api/v1/url=" + message.guild.member(message.mentions.users.first()).displayAvatarURL)
          
        });
}
}
