exports.run = (bot, message, args, prefix, Discord) => {
if(message.content.startsWith(prefix + "clear")) {
        message.delete();
      var suppression = message.content.substr(8);
        if (suppression < 2 || suppression > 1001) {
            return message.reply("La valeur que vous avez entré est invalide. Merci de choisir une valeur comprise entre 2 et 1000");
        }
        message.channel.bulkDelete(suppression, true).then(ok => {
            message.channel.send("Suppression de ``" + suppression + "`` messages")
            .then(message => setTimeout(function(){message.delete()}, 1000))
            .catch(err => console.log(err));
        });
    } else {
        let myrole = message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES"); //Récupère les droits nécessaires
        let yourole = message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"); //Récupère les droits nécessaires

        if (!myrole) { 
            return message.author.send("Je n'ai pas les permissions nécessaires pour effacer un/des message(s)");
        }

        if (!yourole) {
            return message.author.send("Vous n'avez pas les permissions nécessaires");
        }

        var suppression = message.content.substr(8);
        if (suppression < 2 || suppression > 1001) {
            return message.reply("La valeur que vous avez entré est invalide. Merci de choisir une valeur comprise entre 2 et 100");
        }
        message.channel.bulkDelete(suppression, true).then(ok => {
            message.channel.send("Suppression de " + suppression + " messages")
            .then(message => setTimeout(function(){message.delete()}, 1000))
            .catch(err => console.log(err));
        });
    }
}