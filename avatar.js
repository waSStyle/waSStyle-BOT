exports.run = (bot, message, args, prefix, Discord) => {
    if(message.content.startsWith(prefix + 'avatar')) {
      if(!message.mentions.users.first()) return message.channel.send("", {
        embed: new Discord.RichEmbed()
          .setImage(message.author.displayAvatarURL)
          
        });
      message.channel.send("", {
        embed: new Discord.RichEmbed()
          .setImage(message.mentions.users.first().displayAvatarURL)
          
        });
    }
}