const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready.')
})

client.on('message', message => {
	console.log(message.content);
  
  if (message.content === 'ping') {
	message.channel.send('Pong!');
}

});
