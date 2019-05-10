exports.run = (bot, message, args, prefix, Discord) => { 
    const fs = require('fs-extra');
  let newautorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
if(message.content.startsWith(prefix + "setautorole")){
 if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")){return message.reply("**:x: vous n'avez pas les permissions administrateur**").catch(console.error);
    } else {
     if(!args.join(' ')) return message.channel.send("**:x: S'il vous plait, specifiez un role**")
     newautorole[message.guild.id] = {"autorole": args.join(" ")};
     message.channel.send("Mon nouveau autorole en ce serveur est`"+ args.join(" ") + "`:ok_hand:");
     fs.writeFile("./autorole.json", JSON.stringify(newautorole), (err) => {if (err) console.error(err);});
   }
}
}