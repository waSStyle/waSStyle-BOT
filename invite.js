exports.run = (bot, message, args, prefix, Discord) => {
  if(message.content.startsWith(prefix + "")) {
    message.channel.send("", {
      embed: new Discord.RichEmbed()
        .setTitle("Clique ici pour m'inviter")
        .setDescription("Merci de m'ajouter a ton serveur :smiley:")
        .setURL("https://discordapp.com/oauth2/authorize?client_id=426660821834137602&permissions=8&scope=bot")
        .setColor("RANDOM")
    })
  }
}