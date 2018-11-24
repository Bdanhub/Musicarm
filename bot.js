const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "g!"

console.log(`hello`)


client.on('ready', () => {                           
client.user.setGame(`🌈RAINBOW|g!help-R | g!invite`);                                                                                                                                                                                                                                                                                                                                                                                                                            
});

   client.on('message', message => {
	   if(message.content.startsWith(`${prefix}inv.ite`)){
		   if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
		   var embed = new Discord.RichEmbed()
		   .setTitle(">> ClickHere To Add" + `${client.user.username}` + " <<")
		   .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=2080374975")
		   .setTimestamp()
		   .setFooter(`Requested By | ${message.author.username}`)
		   .setColor("RANDOM")
		   message.channel.send(":white_check_mark: | Check Your DM! تم الأرسال بلخاص")
		   message.author.send({embed})
	   }
   });



   client.on("message", message => {
 if (message.content === "g!help-R") {
     message.channel.send('**:heart_exclamation: تم ارسال رسالة في الخاص**  ');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
             
====================🌈 Help Rainbow. 🌈=====================
g!set = لبدا وانشاء رتبه الرينبو | Rainbow Start & Create Rainbow Role
g!invite = لاضافه البوت | Bot Invite 
**!ملاحظه: اذا ما شتغل البوت جرب تحط رتبه البوت اعلى من رتبه الرينبو ** 
**NOTE: If the bot is working, try to drop the bot role higher than the Rainbow role !**
=====================🌈 Help Raibow. 🌈=====================
`)
   message.author.sendEmbed(embed)
   
   }
   });
   client.on("message", message => {
 if(message.content.startsWith(prefix + "set")) {
   let rainbow = message.guild.roles.find(`name`, "Rainbow");
  //start of create role
  if(!rainbow){
         rainbow =  message.guild.createRole({
        name: "Rainbow",
        color: "#000000",
        permissions:[]
      })
    }}})
  


    client.on("message", message => {
console.log('Welcome')
    const config = require('./config.json');
 const roles = config.roleToDisco;
  function discoRole() {
    let RANDOM = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    roles.forEach((role) => {
      let theRole = message.guild.roles.find("name", role);
      if(!theRole) return;
 {

        client.on('ready', () => {                           

        return setInterval(() => { discoRole(); }, config.ms);
        theRole.edit({color: RANDOM}).catch(e => {
      })
    })
}})
  }})
  

    
  
 


client.login(process.env.BOT_TOKEN)

