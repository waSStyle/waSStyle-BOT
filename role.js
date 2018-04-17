exports.run = (bot, message, args, prefix, Discord) => {
  if(message.content.startsWith(prefix + 'role')) {
     if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")){return message.reply("**:x: vous n'avez pas les permissions administrateur**")}
    if(!message.guild.roles.exists('name', message.content.split(" ").slice(2).join(" "))){return message.reply('Le role ' + message.content.split(" ").slice(2).join(" ") + " n'éxiste pas")}
    if(!message.mentions.users.first()){return message.reply('Veuillez mentionner une personne')}
    var role = message.guild.roles.find('name', message.content.split(" ").slice(2).join(" "));
    var user = message.guild.member(message.mentions.users.first());
    if(user.hasRole(role)) {
      user.removeRole(role)
      message.channel.send('@'+ user.tag + ' a perdu le role ', message.content.split(" ").slice(2).join(" "))
      user.send("vous venez d'avoir le role " + message.content.split(" ").slice(2).join(" "))
    } else {
      user.addRole(role)
      message.channel.send('@'+ user.tag + ' a reçu le role ', message.content.split(" ").slice(2).join(" "))
      user.send("vous venez d'avoir le role " + message.content.split(" ").slice(2).join(" "))
    }
  }
}                  