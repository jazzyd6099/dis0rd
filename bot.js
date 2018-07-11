const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');
});
client.on("message", (message) => {
  if (message.content.startsWith("Bakugou")) {
    message.channel.send("Eh?! Why are you talking about me? You wanna fight?!");
	    } else
if (message.content.startsWith("bakugou")) {
    message.channel.send("Why are you fucking talking about me? You wanna fight?!"); 
	 } else
if (message.content.startsWith("Hey Bakugou!")) {
    message.channel.send("Tch. This person told me to get you. Happy now person? Better be.");
  }
});
const prefix = "!";
client.on("message", (message) => {
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("Fuck off.");
} else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("What the fuck?");
	   } else
  if (message.content.startsWith(prefix + "hi Bakugou")) {
    message.channel.send("Shut up, dumbass.");
	   } else
  if (message.content.startsWith(prefix + "Bleh")) {
    message.channel.send("Blah, blah, blah. Just shut up.");
	   } else
  if (message.content.startsWith(prefix + "help")) {
    message.channel.send("No, ask another fucking bot.");
	  } else
  if (message.content.startsWith(prefix + "iloveyou")) {
    message.channel.send("Disgusting.");
	  } else
  if (message.content.startsWith(prefix + "i love you")) {
    message.channel.send("No, disgusting.");
	   } else
  if (message.content.startsWith(prefix + "kirishima")) {
    message.channel.send("You mean shitty hair? He's a dumbass.");
	   } else
  if (message.content.startsWith(prefix + "how is kirishima")) {
    message.channel.send("Shitty hair is doing fine.");
	   } else
  if (message.content.startsWith(prefix + "bakugou")) {
    message.channel.send("What do you fucking want?");
	  	   } else
  if (message.content.startsWith(prefix + "todoroki")) {
    message.channel.send("Fucking half-and-half. He can fuck off.");
	   } else
  if (message.content.startsWith(prefix + "get kirishima")) {
    message.channel.send("KIRISHIMA!");
  }

});



client.login(process.env.BOT_TOKEN)
