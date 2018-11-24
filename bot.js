
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const suck = JSON.parse(fs.readFileSync('./suck.json', 'utf8'));
const prefix = "g!";
/////// Mahmoud-QuaStyle
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} !`);/////// Mahmoud-QuaStyle
          client.user.setActivity("Rainbow , g!help-R .",{type: 'WATCHING'});/////// Mahmoud-QuaStyle
  
  });/////// Mahmoud-QuaStyle
client.on("message", message => {/////// Mahmoud-QuaStyle
    fs.writeFile('./suck.json', JSON.stringify(suck));/////// Mahmoud-QuaStyle
});
/////// Mahmoud-QuaStyle
client.on('ready', () => {/////// Mahmoud-QuaStyle
    setInterval(function(){/////// Mahmoud-QuaStyle
        client.guilds.forEach(g => {/////// Mahmoud-QuaStyle
            if (suck[g.id]) {/////// Mahmoud-QuaStyle
                if (suck[g.id].role) {
                    var role = g.roles.get(suck[g.id].role);/////// Mahmoud-QuaStyle
                    if (role) {/////// Mahmoud-QuaStyle
                        role.edit({color : "RANDOM"});/////// Mahmoud-QuaStyle
                    };/////// Mahmoud-QuaStyle
                };/////// Mahmoud-QuaStyle
            };/////// Mahmoud-QuaStyle
        });/////// Mahmoud-QuaStyle
    }, 4000);/////// Mahmoud-QuaStyle
})/////// Mahmoud-QuaStyle

client.on("message", message => {/////// Mahmoud-QuaStyle
    if (!message.content.startsWith(prefix)) return;/////// Mahmoud-QuaStyle
    if (message.author.bot) return;/////// Mahmoud-QuaStyle
    if (message.channel.type !== "text") return message.reply("This Command Is Only Allowed In Servers");/////// Mahmoud-QuaStyle
    var args = message.content.split(" ");/////// Mahmoud-QuaStyle
    var command = args[0].slice(prefix.length);/////// Mahmoud-QuaStyle
    switch(command) {/////// Mahmoud-QuaStyle
        case "set" :
        if(!message.member.hasPermission('ADMINSTRATOR')) return message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINSTRATOR`' );
        message.guild.createRole({name : "RainbowBot .", color : "RANDOM"}).then(r => {// Mahmoud-QuaStyle
            r.edit({color : "RANDOM"});/// Mahmoud-QuaStyle
            suck[message.guild.id] = {role : r.id};/////// Mahmoud-QuaStyle
        });/// Mahmoud-QuaStyle
    };/ ///Mahmoud-QuaStyle
});/ ///Mahmoud-QuaStyle
client.on("message", message => {
  if (message.content === "g!help-R") {
      message.react('🌈')
message.author.send(`**
g!set 
 - لإنشاء رتبة الرينبو وبدا الرينبو
- To create the role of the Rainbow & Start The Rainbow
g!invite 
- لدعوة البوت
- To Invite the bot
خطوات لو الرتبة م أشتغلت .!!
1- ضع رتبة الرينبو فوق الالوان أو الرتب الملونه لو فيه
2- ضع رتبة البوت فوق رتبة الرينبو
The steps of the role did not worked .!!
1- Place the role of the Rainbow above the colors or colored ranks if it
2- Put the bot role above the role of the Rainbow 
رآبط البوت - Bot Invite link
- https://discordapp.com/api/oauth2/authorize?client_id=489487215270035466&permissions=2146958839&scope=bot
**`)
  }})
   client.on('message', message => {
	   if(message.content.startsWith(`r........#inv`)){
		   if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
                 message.react('🌈')
		   var embed = new Discord.RichEmbed()
		   .setTitle(">> ClickHere To Add" + `${client.user.username}` + " <<")
		   .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=2080374975")
		   .setTimestamp()
		   .setFooter(`Requested By | ${message.author.username}`)
		   .setColor("RANDOM")
		   message.author.send({embed})
	   }
   });




client.on('message', message => {
    var prefix = "rr"
if (message.content.startsWith(prefix + "uptime")) {
   let uptime = client.uptime;

   let days = 0;
   let hours = 0;
   let minutes = 0;
   let seconds = 0;
   let notCompleted = true;

   while (notCompleted) {

       if (uptime >= 8.64e+7) {

           days++;
           uptime -= 8.64e+7;

       } else if (uptime >= 3.6e+6) {

           hours++;
           uptime -= 3.6e+6;

       } else if (uptime >= 60000) {

           minutes++;
           uptime -= 60000;

       } else if (uptime >= 1000) {
           seconds++;
           uptime -= 1000;

       }

       if (uptime < 1000)  notCompleted = false;

   }

   message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});
  
client.login(process.env.BOT_TOKEN)
