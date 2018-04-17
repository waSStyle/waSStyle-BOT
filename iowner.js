exports.run = (bot, message, args, prefix, Discord) => {
  if(message.content.startsWith(prefix + 'iowner')) {
    var owner = bot.users.get('349260377231458325');
    message.channel.send('', {
      embed: new Discord.RichEmbed()
        .setAuthor('Information sur ' + owner.username, owner.displayAvatarURL)
        .setDescription('Voici toute information sur mon owner')
        .addField('YouTube', 'Abonne toi en cliquant [ICI](https://www.youtube.com/channel/UCzMAh2x3BL6GibQU24-u6QA)')
        .addField('Compte créer le', owner.createdAt)
        .setColor('RANDOM')
        .addField('Dicriminator', owner.discriminator)
        .addField('E-mail', 'tutorielW2WOOF@gmail.com')
        .addField('avatar')
        .setImage(owner.displayAvatarURL, "")
        .setTimestamp()
        .setFooter('Un bot créer par waSStyle Gaming', bot.user.displayAvatarURL)
    })
  }
}