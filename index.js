const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const client = new Discord.Client();
client.login(process.env.TOKEN)


var prefix = ("CH!")



bot.user.setUsername("Changed Cliker")
bot.user.setPresence({ game: { name: 'a faire'}, status: 'online'})
console.log("Connected")





bot.on('message', message => {

        if(message.content.startsWith(prefix + "Say")){
            if("234368202379886593".includes(message.author.id)){
            let args = message.content.split(" ").slice(1)
            let thingToEcho = args.join(" ")
            message.delete();
            message.channel.send(`${thingToEcho}`)  
        }else{
            message.delete();
        }
        }
})

