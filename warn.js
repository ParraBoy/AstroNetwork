const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.member.roles.some(r=>["Moderator"].includes(r.name)) )  {  

} else {
  return message.reply("You dont have the role **Moderator**")
}
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let reason = args.join(" ").slice(22);
  message.delete();

  let warnEmbed = new Discord.RichEmbed()
    .setDescription("Warn")
    .setColor("RANDOM")
    .addField("Warned Person", `${rUser} with ID: ${rUser.id}`)
    .addField("Warned By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);

  //return message.channel.send(warnEmbed); 
  let warnsChannel = message.guild.channels.find(`name`, "staff_logs") 


  message.delete().catch(O_o=>{});

  return warnsChannel.send(warnEmbed);
}

module.exports.help = {
  name : "warn"
}
