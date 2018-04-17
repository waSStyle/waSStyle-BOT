exports.run = (bot, message, args, prefix, Discord) => {
 const weather = require('weather-js')
if (message.content.startsWith(prefix+"meteo")){
           var location = args.join(' ');
           var unit = "C";

  try {
      weather.find({search: location, degreeType: unit}, function(err, data) {
          if(err) {
              console.log(Date.now(), "DANGER", "Je ne peut pas trouvé d'information pour la méteo de " + location);
              message.reply("\n" + "Je ne peut pas trouvé d'information pour la méteo de " + location);
          } else {
              data = data[0];
            if(data.current.skytext = "Mostly Cloudy") {
            message.channel.send("", {
              embed: new Discord.RichEmbed()
                .setColor('#AC58FA')
                .setTitle("météo de " + data.location.name)
                .setDescription("plutôt nuageux")
                .addField("Date", data.current.date)
                .addField("heure d'observation", data.current.observationtime)
                .addField("Temperature", data.current.temperature + "°" + unit)
                .addField("se sent comme", data.current.feelslike + "°" + unit)
                .addField("le vent", data.current.winddisplay)                
                .addField("l'humidité", data.current.humidity)
                .setThumbnail('https://images-ext-2.discordapp.net/external/NXFGhXxJbjxtzk88s3hlmTCSC5wg5IRyhoWazfWJ4xA/http/blob.weather.microsoft.com/static/weather4/en-us/law/28.gif')
           
            })
        } else {
            if(data.current.skytext = "Light Rain") {
            message.channel.send("", {
              embed: new Discord.RichEmbed()
                .setColor('#AC58FA')
                .setTitle("météo de " + data.location.name)
                .setDescription("Pluie légère")
                .addField("Date", data.current.date)
                .addField("heure d'observation", data.current.observationtime)
                .addField("Temperature", data.current.temperature + "°" + unit)
                .addField("se sent comme", data.current.feelslike + "°" + unit)
                .addField("le vent", data.current.winddisplay)                
                .addField("l'humidité", data.current.humidity)
                .setThumbnail('https://cdn.discordapp.com/attachments/427561503345082388/427842261900853260/light_rain.png')
           
            })
            } else {
              if(data.current.skytext = "Sunny") {
            message.channel.send("", {
              embed: new Discord.RichEmbed()
                .setColor('#AC58FA')
                .setTitle("météo de " + data.location.name)
                .setDescription("ensoleillé")
                .addField("Date", data.current.date)
                .addField("heure d'observation", data.current.observationtime)
                .addField("Temperature", data.current.temperature + "°" + unit)
                .addField("se sent comme", data.current.feelslike + "°" + unit)
                .addField("le vent", data.current.winddisplay)                
                .addField("l'humidité", data.current.humidity)
                .setThumbnail('http://blob.weather.microsoft.com/static/weather4/en-us/law/32.gif')
           
            })
            }
            }
        }
}
    
       });
  
      } catch(err) {
      console.log(Date.now(), "ERREUR", "Weather.JS a rencontré une erreur");
      message.reply("Idk pourquoi c'est cassé tbh :sob:");
  }}}