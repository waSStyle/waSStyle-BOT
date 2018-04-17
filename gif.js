const giphy = require('giphy-api')('uhdC2lOqTyhjwnAv3Q9vuKSoFzXk4OD2');
const fetchGifs = require('fetch-gifs');
const request = require('request');

exports.run = (bot, message, args, prefix, Discord) => {
    if(message.content.startsWith(prefix+'gif')) {
      let term = args.join(' ')
      if(!term) return message.reply(':x: FORMAT : d!gif [recherche]')
      term = encodeURI(term)
        request('http://api.giphy.com/v1/gifs/search?q='+ term + '&rating=r&api_key=dc6zaTOxFJmzC', function (error, response, body) {
              if (!error && response.statusCode == 200) {
            let content =  JSON.parse(body)
            let item = Math.floor(Math.random() * 10)
            let gif = content.data[item].images.fixed_height.url
            message.channel.send("", {
			    	embed: new Discord.RichEmbed()
				    .setTitle("Giphy search!")
				    .setDescription("Term search : " + term)
				    .setImage(gif)
				    .setFooter(message.author.tag)
				    .setColor("#fffff")
		         });
           }
         })
        }
}