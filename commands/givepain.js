
const fs = require('fs-extra')
let pain = JSON.parse(fs.readFileSync("./pains.json", "utf8")); 
 exports.run = (bot, message, args, prefix, Discord) => {
   var userData = pain[message.author.id]
   const client = bot;
    if(message.content.startsWith(prefix + 'givepain')) {
    
var mentionned = message.mentions.users.first();
   
   if (!mentionned) return message.channel.send("Veuillez mentionner une personne valide!")
   
   if(!mentionned === client.user) {
return message.channel.send("Vous ne pouvez pas de pain 🍞 a un robot, voyons, un robot ne mange pas sa..")
}
   
   if(!mentionned.id === message.author.id){
      
      return message.channel.send("Vous ne pouvez pas vous donnez du pain 🍞 vous même!")
   }
   
   if (!userData === 0) { 
   return message.channel.send("Vous n'avez pas assez de pain.. 🍞!")
   }
   
 
if ((pain[message.author.id].ratelimit > Date.now()) && (pain[message.author.id].ratelimit !== 0)) {
                var now = new Date().getTime();
                var distance = pain[message.author.id].ratelimit - now;
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                return message.channel.send("❌ Vous ne pouvez utiliser cette commande qu'une fois toutes les 5 minutes, temps restant: " + hours + "h " + minutes + "m " + seconds + "s");
                
            }
   if (!pain[mentionned.id]) {
      pain[mentionned.id] = {
         pain: "0"
      }
      pain[message.author.id].ratelimit = Date.now() + 300000 //43200000 c'est 12h en millisecondes
      fs.writeFile("./pains.json", JSON.stringify(pain), (err) => { 
            if (err) console.error(err)
            });
            
      message.channel.send("Vous avez donné un morceau de pain 🍞 à **" + mentionned.username + "**");   
       pain[message.author.id].pain--
   } 
     
pain[mentionned.id].pain++ //Ajoute 1 cookie
      pain[message.author.id].ratelimit = Date.now() + 300000 //43200000 c'est 12h en millisecondes
      
      
       fs.writeFile("./pains.json", JSON.stringify(pain), (err) => { 
            if (err) console.error(err)
            });
            
            
      message.channel.send("Vous avez donné un morceau de pain 🍞 à **" + mentionned.username + "**");       
    }}