module.exports = {
    name: 'ban',
    execute(message, args){
      const member = message.mentions.users.first();
      if(message.member.roles.cache.has('903215322557997086' || '812976369654431754' || '793430561808842772')){  
        if(member){
          const memberTarger = message.guild.members.cache.get(member.id);
          memberTarger.ban();
          message.channel.send('Utilisateur Ban');
        }else{
          message.channel.send('Non Bannable')
        }
      }else{
        message.channel.send('Vous ne pouvez pas faire cette commande');
      }
    }
 }