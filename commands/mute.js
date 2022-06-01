const ms = require('ms');
module.exports = {
    name:'mute',
    description:'Mute les gens pas gentils',
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            //let mainRole = message.guild.roles.cache.find(role => role.name === 'Follows/Membres');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
            let memberTarget = message.guild.members.cache.get(target.id);
            
            if(!args[1]){
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            }
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> a été muté pour une durée de ${ms(ms(args[1]))}`);
            setTimeout(function(){
                memberTarget.roles.remove(muteRole.id);
            }, ms(args[1]));

        }else{
            message.channel.send('Utilisateur Invalide !')
        }
    }
}