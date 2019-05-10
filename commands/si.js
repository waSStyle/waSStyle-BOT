exports.run = (bot, message, args, prefix, Discord) => {
    if(message.content.startsWith(prefix+"si")) {
        message.channel.send('', {
            embed: new Discord.RichEmbed()
            .setTitle("Server Information")
            .setThumbnail(message.guild.iconURL)
            
            .addField("Nom", message.guild.name, true)
            
            .addField("Membre", message.guild.memberCount, true)
            
            .addField("Salon", message.guild.channels.size, true)
            
            .addField("émojis", message.guild.emojis.size, true)
      
            .addField("Role", `${message.guild.roles.size}`, true)
            .addField("ID", message.guild.id)
            
            .addField("Salon AFK", message.guild.afkChannel, true)
            
            .addField("Région", message.guild.region, true)
            
            .addField('Niveau de verification', message.guild.verificationLevel, true)
            
            .addField('Propriètère du serveur', "@"+ message.guild.owner.user.tag, true)
            .addField('Créer le', message.guild.createdAt, true)
            .setFooter("Requested by " + message.author.tag)
            .setColor("#FAE901")
        });
    }
}