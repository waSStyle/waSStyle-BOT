
exports.run = (bot, message, args, prefix, Discord) => {
  if(message.content.startsWith(prefix + "kick")) {
        // ---- Les droits nécéssaire à la commande ---- //
        let myrole = message.guild.member(bot.user).hasPermission("KICK_MEMBERS"); // Récupération des droits nécéssaires du bot
        let yourole = message.guild.member(message.author).hasPermission("KICK_MEMBERS"); // Récupération des droits nécéssaires du membre
        var logs = message.guild.channels.find("name", "mod-log");
        
        // ---- Pour les malins ---- //
        var report = message.member.id;
        if(!message.mentions.users.first()) return message.channel.send("La commande est : " + prefix + "kick + @<utilisateur> + <raison>");
        var memberkick = message.mentions.users.first();
        var reason = message.content.split(" ").slice(2).join(" ");
        if(!reason) reason = "Raison non disponible";
        if(!message.guild.members.get(memberkick.id).kickable) return message.channel.send("L'utilisateur ne peut pas être kick");
        if(!message.guild.channels.exists("name", "mod-log")) {
          message.guild.createChannel('mod-log');
          message.reply('je vien de créer le salon mod-log veuillez réessayer')
        }
          
        message.guild.member(memberkick).kick();
        logs.send({
            embed: {
                title: "Gestion des bans/kicks",
                color: 0xFF0000,
                fields: [{
                    name: '_ _',
                    value: '_ _'
                },{
                    name: "Kick de " + memberkick.tag + " par " + message.author.tag,
                    value: "Raison : " + reason
                }],
              footer: {
                icon_url: memberkick.avatarURL,
                text: 'By waSStyle Gaming'
              }
            }
        });
    }
}