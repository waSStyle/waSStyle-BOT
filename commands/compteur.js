exports.run = async (bot, message, args, prefix, Discord) => {
  if(message.content === prefix + 'compteur') {
    (async function() {
       var i = 0;
       const messageInteractif = await message.channel.send(`${i}`);
       //Réagir à notre message
       await messageInteractif.react("➕");
       await messageInteractif.react("➖");
       //Créer le collecteur
       const collecteur = messageInteractif.createReactionCollector((reaction, user) => user.id = message.author.id);
       //Quand le collecteur collecte
       collecteur.on('collect', async(reaction) => {
         if (reaction.emoji.name === "➕") { //Si la réaction est ce que l'on veut, on utilise toujours l'unicode
           i++;
           messageInteractif.edit(`${i}`);
         }
         if (reaction.emoji.name === "➖") { //Si la réaction est ce que l'on veut, on utilise toujours l'unicode
           i--;
           messageInteractif.edit(`${i}`);
         }
         await reaction.remove(message.author.id); //Supprime la réaction de l'auteur
       }); 
    }());
  }
} 