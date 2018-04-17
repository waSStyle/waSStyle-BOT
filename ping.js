exports.run = (bot, message, args, prefix, Discord) => {
if (message.content.startsWith(prefix+'ping')) {
    const responses = ["Mec, c'est lent comme du wifi!", "Hmmm c'est de ma faute ou non?", "C'est de la fibre que j'ai ou je rêve???"]

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}
    let response = randomItem(responses)
    message.react("��")
    message.channel.send('Ping?').then(m => m.edit(`Pong:ping_pong:!\nLatence : ${m.createdTimestamp - message.createdTimestamp}ms. \nLatence de l'API Discord ${Math.round(bot.ping)}ms \n**${response}**`) );
  }
}