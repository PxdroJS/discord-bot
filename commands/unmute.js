module.exports = {
    name:'unmute',
    description: "Unmute les gens, devenus gentils",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
            let memberTarget = message.guild.members.cache.get(target.id);
            
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        }else{
            message.channel.send('Utilisateur Invalide !')
        }
    }
}