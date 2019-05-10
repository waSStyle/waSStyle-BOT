exports.run = (bot, message, args, prefix, Discord) => {
if (message.content === prefix + "ts"){
    var translator = require('google-translator');
 translator('fr' ,'en' ,args.join(' ') ,response => {
    message.channel.send('', {
      embed : new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescrition('FR :flag_fr: : ' + args.join(' ') + '\nEN :flag_us: : ' + response)
    });
});

  }
}