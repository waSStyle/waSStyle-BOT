exports.run = (bot, message, args, prefix, Discord) => {
  if(message.content.startsWith(prefix + 'ns')){
    if(message.author.id === "349260377231458325") {
      const newname = args.join(' ');
      message.guild.setName(newname)
    } else if(!message.guild.member(message.author).hasPermission("MANAGE_SERVER")){return message.reply("**:x: vous n'avez pas les permissions** `Gérer le serveur`").catch(console.error)};
    if(!message.guild.channels.find('name', 'mod-log')){
      return message.reply("Le salon textuel `mod-log` n'existait pas je vien le creer pour vous veuillez réessayer")
      message.guild.createChannel('mod-log')
  }
       const newname = args.join(' ');
      message.guild.setName(newname)
      message.channel.send('Le nouveau nom du serveur est `' + newname + '`')
      message.guild.channels.find('name', 'mod-log').send({
        embed: new Discord.RichEmbed()
          .setColor('#2EFEF7')
          .setAuthor('Logs moderation/administration', message.guild.iconURL)
          .addField('Changement du nom du serveur', message.author.tag + ' a Changé le nom du serveur en '+ newname)
          
      })
  }
}