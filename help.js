exports.run = (bot, message, args, prefix, Discord) => {
  if(message.content.startsWith(prefix + "help")) {
    if(args[0] === "8ball") {
      message.channel.send('', {
        embed: new Discord.RichEmbed()
          .setColor('BLACK')
          .setTitle('`Information sur la commande 8ball :`')
          .addField('Commande :', `${prefix}8ball + <La Question>`, true)
          .addField('Réaction', 'Répond a la question', true)
          .addField('Catégorie', 'Fun', true)
          .addField('Aliasses', `${prefix}8b`, true)
          
      })
    }else if(args[0] === 'avatar'){
          message.channel.send('', {
             embed: new Discord.RichEmbed()
            .setColor('BLACK')
          .setTitle('`Information sur la commande avatar :`')
          .addField('Commande :', `${prefix}avatar + <mention d'un utilisateur>\n${prefix}avatar => pour avoir ton propre avatar`, true)
          .addField('Réaction', 'envoye la photo de profile ', true)
          .addField('Catégorie', 'Image', true)
          .addField('Aliasses', `${prefix}a`, true)
          })
    }else if(args[0] === 'clear'){
           message.channel.send('', {
        embed: new Discord.RichEmbed()
             .setColor('BLACK')
          .setTitle('`Information sur la commande clear :`')
          .addField('Commande :', `${prefix}avatar + <nombre de messages a supprimer>`, true)
          .addField('Réaction', 'supprime un nommbre spésifié de messages ', true)
          .addField('Catégorie', 'Administration/Modération', true)
          .addField('Aliasses', `${prefix}cl`, true)
      })  
    }else if(args[0] === 'ban'){
           message.channel.send('', {
        embed: new Discord.RichEmbed()
             .setColor('BLACK')
          .setTitle('`Information sur la commande ban :`')
          .addField('Commande :', `${prefix}clear + <nombre de messages>`, true)
          .addField('Réaction', 'Bannie un memebre ', true)
          .addField('Catégorie', 'Administration/Modération', true)
          .addField('Aliasses', `${prefix}b`, true)
      })  
    }else if(args[0] === 'csay'){
           message.channel.send('', {
        embed: new Discord.RichEmbed()
             
      })  
    }else if(args[0] === 'eval'){
           message.channel.send('', {
        embed: new Discord.RichEmbed()
      })  
    }else if(args[0] === 'gif'){
           message.channel.send('', {
        embed: new Discord.RichEmbed()
      })  
    }else if(args[0] === 'invite'){
           message.channel.send('', {
        embed: new Discord.RichEmbed()
      })  
    }else if(args[0] === 'iowner'){
           message.channel.send('', {
        embed: new Discord.RichEmbed()
      })  
    }else if(args[0] === 'kick'){
           message.channel.send('', {
        embed: new Discord.RichEmbed()
      })  
    }else if(args[0] === 'météo'){
           message.channel.send('', {
        embed: new Discord.RichEmbed()
      })  
    }else if(args[0] === 'nameserver'){
           message.channel.send('', {
        embed: new Discord.RichEmbed()
      })  
    }else if(args[0] === 'ping'){
           message.channel.send('', {
        embed: new Discord.RichEmbed()
      })  
    }else if(args[0] === 'reset'){
           message.channel.send('', {
        embed: new Discord.RichEmbed()
      })  
    }else if(args[0] === 'setprefix'){
           message.channel.send('', {
        embed: new Discord.RichEmbed()
      })  
    }else if(args[0] === 'si'){
           message.channel.send('', {
        embed: new Discord.RichEmbed()
      })  
    }else if(args[0] === 'stats'){
           message.channel.send('', {
        embed: new Discord.RichEmbed()
      })  
    }else if(args[0] === 'support'){
           message.channel.send('', {
        embed: new Discord.RichEmbed()
      })  
    }else if(args[0] === 'vcs'){
           message.channel.send('', {
        embed: new Discord.RichEmbed()
      })  
    }else if(args[0] === 'ytv'){
           message.channel.send('', {
        embed: new Discord.RichEmbed()
      })  
    }else if(args[0] === 'ytc'){
           message.channel.send('', {
        embed: new Discord.RichEmbed()
      })  
    } else if(args[0] === '') {

    message.author.send("", {
      embed: new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("Le prefix pour ce serveur est " + prefix)
        .setThumbnail("")
        .setAuthor("Help de " + bot.user.uername, bot.user.displayAvatarURL)
        .addField(":flashlight: Utiles", `${prefix}invite => invite le bot\n${prefix}support => rejoin le serveur support du bot\n${prefix}météo => te donne la météo d'une ville\n${prefix}ping => pong !`)
        .addField(":book: Information", `${prefix}stats => te donne les statistique du bot\n${prefix}iowner => information sur l'owner du bot\n${prefix}si => les informations sur le serveur`)
        .addField(":video_game: Divetisment", `${prefix}8ball => te repond a une question`)
        .addField(":frame_photo: Photo", `${prefix}avatar => l'avatar de la personne mentionné ou ton avatar`)
        .addField(":mag_right: Recherche", `${prefix}gif => recherche un GIF\n${prefix}ytv => recherche une vidéo YouTube\n${prefix}ytc => recherche une chaine YouTube`)
        .addField(":tools: Administration/Moderation", `${prefix}ban => Bannie un membre\n${prefix}kick => expulse un membre\n${prefix}clear => supprime un nombre précis de messages\n${prefix}ns => change le nom du serveur\n${prefix}setprefix => change le prefix du serveur`)
        .addField(":earth_africa: Interserveur", `${prefix}vcs => pour parler entre serveur`)
        .setFooter("Un Bot créer par " + bot.users.get('349260377231458325').tag, bot.users.get('349260377231458325').displayAvatarURL)
        .setTimestamp()
    })
    message.reply('Page daide envoyer en mp')
    }
    }
  }