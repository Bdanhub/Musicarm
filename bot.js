const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const suck = JSON.parse(fs.readFileSync('./suck.json', 'utf8'));
const prefix = "g!";
// Mahmoud-QuaStyle
client.on('ready', () => {// Mahmoud-QuaStyle
    console.log(`Logged in as ${client.user.tag} !`);// Mahmoud-QuaStyle
          client.user.setActivity("Rainbow , g!help-R .",{type: 'WATCHING'});
  // Mahmoud-QuaStyle
  });
client.on("message", message => {// Mahmoud-QuaStyle
    fs.writeFile('./suck.json', JSON.stringify(suck));// Mahmoud-QuaStyle
});// Mahmoud-QuaStyle

client.on('ready', () => {
    setInterval(function(){// Mahm// Mahmoud-QuaStyleoud-QuaStyle
        client.guilds.forEach(g => {// Mahmoud-QuaStyle
            if (suck[g.id]) {// Mahmoud-QuaStyle
                if (suck[g.id].role) {// Mahmoud-QuaStyle
                    var role = g.roles.get(suck[g.id].role);// Mahmoud-QuaStyle
                    if (role) {// Mahmoud-QuaStyle
                        role.edit({color : "RANDOM"});// Mahmoud-QuaStyle
                    };// Mahmoud-QuaStyle
                };// Mahmoud-QuaStyle// Mahmoud-QuaStyle
            };// Mahmoud-QuaStyle// Mahmoud-QuaStyle
        });// Mahmoud-Q// Mahmoud-QuaStyle// Mahmoud-QuaStyleuaStyle
    }, 4000);// Mahmoud-QuaStyle// Mahmoud-QuaStyle
})// Mahmoud-QuaStyle// Mahmoud-QuaStyle

client.on("message", message => {// Mahmoud-QuaStyle
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    if (message.channel.type !== "text") return message.reply("This Command Is Only Allowed In Servers");
    var args = message.content.split(" ");// Mahmoud-QuaStyle
    var command = args[0].slice(prefix.length);// Mahmoud-QuaStyle
    switch(command) {// Mahmoud-QuaStyle
        case "set" :// Mahmoud-QuaStyle
        if(!message.member.hasPermission('ADMINSTRATOR')) return message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINSTRATOR`' );// Mahmoud-QuaStyle
        message.guild.createRole({name : "RainbowBot .", color : "RANDOM"}).then(r => {// Mahmoud-QuaStyle
            r.edit({color : "RANDOM"});// Mahmoud-QuaStyle
            suck[message.guild.id] = {role : r.id};// Mahmoud-QuaStyle
        });// Mahmoud-QuaStyle
    };// Mahmoud-QuaStyle// Mahmoud-QuaStyle
});// Mahmoud-QuaStyle
client.on("message", message => {// Mahmoud-QuaStyleBye// Mahmoud-QuaStyle// Mahmoud-QuaStyle
  if (message.content === "g!help-R") {// Mahmoud-QuaStyle// Mahmoud-QuaStyle
      message.react('🌈')/////// Mahmoud-QuaStyle
message.author.send(`**
g!set 
 - لإنشاء رتبة الرينبو وبدا الرينبو
- To create the role of the Rainbow & Start The Rainbow
g!inv 
- لدعوة البوت
- To Invite the bot

خطوات لو الرتبة م أشتغلت .!!
1- ضع رتبة الرينبو فوق الالوان أو الرتب الملونه لو فيه
2- ضع رتبة البوت فوق رتبة الرينبو
The steps of the role did not worked .!!
1- Place the role of the Rainbow above the colors or colored ranks if it
2- Put the bot role above the role of the Rainbow 
رآبط البوت - Bot Invite link
-https://discordapp.com/api/oauth2/authorize?client_id=489487215270035466&permissions=2146958839&scope=bot
**`)
  }})// Mahmoud-QuaStyle
  
client.login(process.env.BOT_TOKEN)
