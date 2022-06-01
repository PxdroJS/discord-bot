module.exports = {
    name:'clear',
    description:'Commande pour clear des Messages !',
    async execute(message, args){
        if(message.member.roles.cache.has('903215322557997086' || '812976369654431754' || '793430561808842772')){
            if(!args[0]) return message.reply('Saisissez un nombre de messages à supprimer !');
            if(isNaN(args[0])) return message.reply('Un Nombre de Préférence...');
            if(args[0] > 100) return message.reply('Trop de messages à supprimer... Désolé ! Moins de 100 !');
            if(args[0] < 1) return message.reply('Trop peu de messages');
            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
            })
            message.channel.send('Clear effectué ;)');
        }else{
            message.channel.send('Vous ne pouvez pas faire cette commande !');
        }
    }
}