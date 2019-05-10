exports.run = (bot, message, args, prefix, Discord) => {
    if(message.content.startsWith(prefix + 'cool-file')) {
      message.channel.send(args[0])
    }
}