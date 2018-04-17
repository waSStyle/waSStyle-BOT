exports.run = (bot, message, args, prefix, Discord) => {
if (message.content.startsWith(prefix + "8ball")) {
    var args = message.content.split(" ").slice(1).join(" ");
  	var result = Math.floor(Math.random() * 11);
    if(!args) 
     message.channel.send("Merci de chosir quelque chose a dire");


    
    	       if (result == 1) {
    	  message.channel.send(":8ball: | Oui ");
    	} else if (result == 2) {
    		message.channel.send(":8ball: | Non  ");
    	} else if (result == 3) {
    		message.channel.send(":8ball: | Plus ou moins");
    	} else if (result == 4) {
   	    message.channel.send(":8ball: | Certainement ");
   	  } else if (result == 5) {
    		message.channel.send(":8ball: | Certainement pas");
    	} else if (result == 6) {
    		message.channel.send(":8ball: | Sans doutes");
    	} else if (result == 7) {
    		message.channel.send(":8ball: | Cela reste a voir"); 
      } else if (result == 8) {
        message.channel.send(":8ball: | Prochainement oui")
      } else if (result == 9) {
        message.channel.send(":8ball: | Prochainement non")
      } else if (result == 10) {
        message.channel.send(":8ball: | Repense a ta question")
      } else if (result == 11) {
        message.channel.send(":8ball: | a ton avis")
      } else if (result == 12) {
        message.channel.send(":8ball: | Si tu veux")
      } else if (result == 13) {
        message.channel.send(":8ball: | Je ne sais pas")
      }
}
}