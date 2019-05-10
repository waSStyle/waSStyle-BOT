const fs = require('fs-extra')
let pain = JSON.parse(fs.readFileSync("./pains.json", "utf8")); 
 exports.run = (bot, message, args, prefix, Discord) => {
   
    if(message.content.startsWith(prefix + 'monpain')) {
    
if (!pain[message.author.id]) {
    pain[message.author.id] = {
         pain: "0"
         
           }
         }
        
      
       fs.writeFile("./pains.json", JSON.stringify(pain), (err) => { 
 if (err) console.error(err)
 
 })
  
  
 
var userData = pain[message.author.id]
 
message.channel.send("Vous avez " + pain[message.author.id].pain + "pain 🍞!")
  
  
  fs.writeFile("./pains.json", JSON.stringify(pain), (err) => { 
 if (err) console.error(err)
 
 })
    }}