exports.run = (bot , message, args, prefix, Discord) => {
  if(message.content.startsWith(prefix + "reset")) {
    if(message.author.id === "284777843093798912") {
      message.reply("Ok je redémarre!")
      bot.destroy();
      bot.login(process.env["TOKEN"])
    } else {
      return message.reply("Il y a eu une erreur : ba enfaite tu est pas le propriétaire du bot donc sa marche pas")
      }
      
  }
  }