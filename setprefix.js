exports.run = (bot, message, args, prefix, Discord) => { 
    const fs = require('fs-extra');
  let newprefix = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
   var defaultprefix = process.env["Prefix"];
if(message.content.startsWith(prefix + "setprefix")){
 if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")){return message.reply("**:x: vous n'avez pas les permissions administrateur**").catch(console.error);
    } else {
     if(!args.join(' ')) return message.channel.send("**:x: S'il vous plait, specifiez un prefix**")
     newprefix[message.guild.id] = {"prefix": args.join(" ")};
     message.channel.send("Mon nouveau prefix en ce serveur est`"+ args.join(" ") + "`:ok_hand:");
     fs.writeFile("./prefix.json", JSON.stringify(newprefix), (err) => {if (err) console.error(err);});
   }
}
}
