exports.run = (bot, message, args, prefix, Discord) => {
 if (message.content.startsWith(prefix + "vcs")) {
    message.delete();
    var vcsc = bot.channels.findAll('name', 'vcwass');
    var vcsc2 = message.guild.channels.find('name', 'vcwass');
    if(!vcsc2) {
      message.guild.createChannel('vcwass')
      return message.reply("Le salon vcwass n'existait pas je viens de le créer pour toi. Réessaie maintenant.")
    }
    vcsc.forEach(channel => {
      message.delete();
      const embed = new Discord.RichEmbed()
                   .setDescription(args.join(' '))
                   .setFooter(`${message.guild.name}` , message.guild.iconURL)
                   .setThumbnail(message.author.avatarURL)
      if(message.author.id === "349260377231458325") {
        embed.setColor('#FFFF00')
        embed.setAuthor('Créateur du bot :crown: : ' + message.author.tag, message.author.avatarURL)
      } else if(message.author.id === "284777843093798912" || message.author.id === "") {
        embed.setColor('#2EFEF7')
        embed.setAuthor('Technicien �� : ' + message.author.tag, message.author.avatarURL)
      }
    })
  } 
}