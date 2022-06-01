module.exports = {
    name: 'ping',
    description: "Ping Command Réponse",
    execute(message, args){
        message.channel.send("Pong !");
    }

}