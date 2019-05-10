exports.run = (bot, message, args, prefix, Discord) => {
  if(message.content.startsWith(prefix + 'csay')) {
       message.channel.send(':five:').then(m => {
         m.delete()
       })
    message.channel.send(':five:').then(m => {
         m.delete()
       })
    message.channel.send(':four:').then(m => {
         m.delete()
       })
    message.channel.send(':three:').then(m => {
         m.delete()
       })
    message.channel.send(':two:').then(m => {
         m.delete()
       })
    message.channel.send(':one:').then(m => {
         m.delete()
       })
    message.channel.send(args.join(' '))
    }
}