exports.run = (bot, message, args, prefix, Discord) => {
  if(message.content.startsWith(prefix + "helpc")) {
    if(args[1] = "8ball") {
      message.channel.send('', {
        embed: new Discord.RichEmbed()
          .setColor('BLACK')
      })
    }
  }
}