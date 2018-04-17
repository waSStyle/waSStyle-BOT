exports.run = (bot, message, args, prefix, Discord) => {
  
  if(message.content.startsWith(prefix + "yt")) {
    
var search = require('youtube-search');
 
var opts = {
  maxResults: 10,
  key: 'AIzaSyB1cE2ch29yzQemZOvAx3S_rjZqneAufrc',
  order: 'viewCount',
  type: "video",
  
};
 
search(args.join(' '), opts, function(err, results) {
  if(err) return console.log(err);
 
  message.channel.send(results[prefix.length].link)
});
   
  }
}
