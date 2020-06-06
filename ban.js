const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.member.roles.some(r=>["Moderator"].includes(r.name)) )  {  

} else {
  return message.reply("You don't have the role moderator!**")
}
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Deze persoon zit niet op de Discord");
    let bReason = args.join(" ").slice(22);
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je hebt niet genoeg permissies om hem te bannen.");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("RANDOM")
    .addField("Banned Person", `${bUser} met het ID: ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> met het ID: ${message.author.id}`)
    .addField("Banned in channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "staff_logs");
    if(!incidentchannel) return message.channel.send("I can't find the logs channel");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
