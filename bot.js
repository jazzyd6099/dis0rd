const Discord = require('discord.js');

const client = new Discord.Client();

function doMagic8BallVoodoo() {
    var rand = [
    " Deku.",
    " Shitty hair.",
    " Raccoon eyes.",
    " Soy sauce face.",
    " Sound girl.",
    " Nerd.",
    " Four eyes.",
    " Glasses.",
    " Ponytail.",
    " Half and half.",
    " Shitty Deku!",
    " Dunce face.",
    " Round face.",
    " Icyhot.",
    " Bug eyes.",
    " Little runt.",
    " Monkey.",
    " Big lips.",
    " Rock face.",
    " Fithy toad.",
];

    return rand[Math.floor(Math.random()*rand.length)];
}


client.on('ready', () => {
    console.log('Tch. Shut up.');
	
		client.user.setPresence({ game: { name: 'Beating your fucking ass!' }, status: 'dnd' })
  .then(console.log)
  .catch(console.error);
});
client.on("message", (message) => {
  if (message.content.startsWith("Bakugou")) {
    message.channel.send("Eh?! Why are you talking about me? You wanna fight?!");
	    } else
if (message.content.startsWith("bakugou")) {
    message.channel.send("Why are you fucking talking about me? You wanna fight?!"); 
	 } else
if (message.content.startsWith("Hey Bakugou!")) {
    message.channel.send("Tch. This person told me to get you. Happy now? Better be.");
} else
	if (message.content.startsWith("prefix?")) {
		message.channel.send("Fuck off. It's '!'");
	} else
		if (message.content.startsWith("I love my bot family")) {
		message.channel.send("I don't care. Fuck off.");
			} else
		if (message.content.startsWith("Hey, be nice")) {
		message.channel.send("Fine. Maybe later on. Just not now!");
			} else
		if (message.content.startsWith(":boom:")) {
		message.channel.send("Fuck, it's not cool if it's just emoji's. That's the best you can fucking get!");
		} else
	 if (message.content == "I hate myself".toLowerCase() || message.content == "I hate myself.".toLowerCase() || message.content == "i hate myself".toLowerCase() || message.content == "i hate myself.".toLowerCase()){
		message.author.send("Tch. Are you okay?")
	 } else
		 if (message.content == "i'm fine.".toLowerCase() || message.content == "i'm fine".toLowerCase() || message.content == "I'm fine".toLowerCase() || message.content == "I'm fine.".toLowerCase()){
			 message.author.send("No you're not fucking fine! Fine never means fine.");
			} else
			if (message.content.startsWith("No you're not fucking fine! Fine never means fine.")){
				message.channel.send("Tell me what the fuck is wrong! I can't respond to what you say but I can fucking listen. Vent!");
				} else
		 if (message.content == "No..".toLowerCase() || message.content == "no..".toLowerCase()){
			 message.author.send("**sighs** You want to talk about it?");
		 } else
			 if (message.content.startsWith("Yeah..")) {
				 message.author.send("I won't be able to respond but I can listen. Fucking vent your guts out. Then be fucking badass afterwards! I'll be here, I guess.");
			 } else
				 if (message.content.startsWith("I won't be able to respond but I can listen. Fucking vent your guts out. Then be fucking badass afterwards! I'll be here, I guess.")) {
					 message.channel.send("If you tell the others about this, i'll kill you!");
				 } else
					 if (message.content == "Okay Bakugou :joy:".toLowerCase() || message.content == "Okay Bakugou" || message.content == "okay bakugou".toLowerCase()){
						 message.channel.send("Tch");
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
  if (message.content.startsWith(prefix + "hi bakugou")) {
    message.channel.send("Shut up, dumbass.");
	   } else
  if (message.content.startsWith(prefix + "bleh")) {
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
  } else
	  if (message.content.startsWith(prefix + "give me a nickname")) {
			message.reply('Shut up,' + doMagic8BallVoodoo());
	  } else 
		if (message.content.startsWith(prefix + "use your quirk")) {
		message.channel.send(":boom: This will be fun. :boom:");
						  	} else
			if (message.content.startsWith(prefix + "kill")) {
				let killedUser = message.mentions.users.first();
            
            if(message.mentions.users.size < 1) return message.reply("You fucking forgot to name someone to fucking kill, dumbass!");
            message.reply("You just fucking killed " + killedUser);
}

});



client.login(process.env.BOT_TOKEN)
