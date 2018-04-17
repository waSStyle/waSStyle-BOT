exports.run = (bot, message, args, prefix, Discord) => {
if (message.content === prefix + "support"){
    bot.channels.get('429359915019141141').createInvite().then(i => message.channel.send('', {
      embed: new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription("Merci de rejoindre mon serveur support j'èspere que tu y trouvera l'aide que tu cherches")
        .setURL(i.url)
        .setTitle('Clique ici pour rejoindre le support')
    }))
  }
}