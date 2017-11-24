const Discord = require('discord.js');

const client = new Discord.Client();


var quote = 0

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === '!emote') {
    message.delete(1)
    quote = Math.floor(Math.random() * 10)
    switch (quote) {
      case 0:
        message.channel.send(message.author.username + ' makes a grand bow')
        .then(console.log('-'))
        .catch(console.error);
        break;
      case 1:
        message.channel.send(message.author.username + ' waves to everyone')
        .then(console.log('-'))
        .catch(console.error);
        break;
      case 2:
        message.channel.send(message.author.username + ' looks at Raj with a twinge of annoyance, as someone would look at a bug, or a hanzo main... wait')
        .then(console.log('-'))
        .catch(console.error);
        break;
      case 3:
        message.channel.send(message.author.username + ' wants to get boosted to the next rank')
        .then(console.log('-'))
        .catch(console.error);
        break;
      case 4:
        message.channel.send(message.author.username + ' is getting aroused')
        .then(console.log('-'))
        .catch(console.error);
        break;
      case 5:
        message.channel.send(message.author.username + ' just had a rough game. Make them feel better')
        .then(console.log('-'))
        .catch(console.error);
        break;
      case 6:
        message.channel.send(message.author.username + ' really needs a hug right now')
        .then(console.log('-'))
        .catch(console.error);
        break;
      case 7:
        message.channel.send(message.author.username + ' is contemplating the complexities of life in the infinite cosmos')
        .then(console.log('-'))
        .catch(console.error);
        break;
      case 8:
        message.channel.send(message.author.username + ' just needs some chocolate and to be serenaded on a romantic date')
        .then(console.log('-'))
        .catch(console.error);
        break;
      case 9:
        message.channel.send(message.author.username + ' has just won a 1v1 Junkratt game against Shadic')
        .then(console.log('-'))
        .catch(console.error);
        break;
    }
  }
     
      //.then(console.log(quote))
      
  }
)


client.login(process.env.BOT_TOKEN);
