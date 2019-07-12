const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const client = new Discord.Client();


const adapter = new FileSync('database.json');
const db = low(adapter);

var changed = 0
var number_random = 0;
var prefix = ("CC!")
var party_launch = false;

bot.on('ready', function() {
    bot.user.setUsername("Changed Clicker")
    bot.user.setPresence({ game: { name: 'faire des crepes pour niko'}, status: 'online'})
    console.log("Connected")});

bot.login(process.env.TOKEN);



bot.on('message', message => {

    //AN






















//FR
    if(message.content.startsWith(prefix + "DM")) {

        if(message.mentions.users.first()){

        let messageToSend = message.content.split(" ").slice(2).join(" ");
        let userToSend = message.mentions.users.first();

        userToSend.send(`${message.author.username} vous a envoyer un message!\n${messageToSend}`);
        message.delete(`${message.author.username} vous a envoyer un message!\n${messageToSend}`);
        message.channel.send(`**${message.author}** , votre message a bien été envoyer a **${message.mentions.users.first().username}** :D`)
}else{
    message.delete();
    message.channel.send(`erreur`)

}
}
if(message.content == "G-N start"){
    if(party_launch == true){
        message.channel.send(`une manche est deja en cours ${message.author}`)
    }else{
aléa1();

    if (alé1 == 1){
        message.channel.send(":arrow_forward: cette manche sera entre 0 est 5000 :arrow_forward: ")
        
        number_random = Math.floor(Math.random() * (5000 - 0) + 0)
        console.log(number_random);
}
if (alé1 == 2){
    message.channel.send(":arrow_forward: cette manche sera entre 0 est 20000 :arrow_forward: ")
    
    number_random = Math.floor(Math.random() * (20000 - 0) + 0)
    console.log(number_random);
}
if (alé1== 3){
    message.channel.send(":arrow_forward: cette manche sera entre 0 est 100000 :arrow_forward: ")
    number_random = Math.floor(Math.random() * (100000 - 0) + 0)
    console.log(number_random);
}
party_launch = true;
}
}
if(party_launch && message.content !=null){
    if(Number.isInteger(parseInt(message.content))){
        if(message.content > number_random){
            message.channel.send(":arrow_down: plus petit :arrow_down: ")
        }
        else if(message.content < number_random){
            message.channel.send(":arrow_up: plus grand :arrow_up: ")
        }
        else{
                message.channel.send(`:ballot_box_with_check: ${message.author} a gagner cette manche :ballot_box_with_check:`);
            party_launch = false
        }
    }
}
if(message.content == "G-N stop"){
    if(party_launch == true){
            message.channel.send(`:stop_button: ${message.author} a décider de stoper la manche :stop_button: `)
        party_launch = false;
}else{
 message.channel.send("aucune manche en cours")
}
}
if (message.content === "sigbot!ServeurListe"){
message.channel.send(bot.guilds.map(r => r.name + ` | **${r.memberCount}** membres`))
}



if(message.content.startsWith(prefix + "say")){
    if("234368202379886593".includes(message.author.id)){
    let args = message.content.split(" ").slice(1)
    let thingToEcho = args.join(" ")
    message.delete();
    message.channel.send(`${thingToEcho}`)  
}else{
    message.delete();
}
}
//marche pas








if(message.content.startsWith(prefix + "SaySet 1")){ //set
 changed = 1

    message.channel.send(`SaySet is now at 1`)
}

if(message.content.startsWith(prefix + "SaySet 2")){ //set
 changed = 2
 message.channel.send(`SaySet is now at 2`)
}

if(message.content.startsWith(prefix + "SaySet 3")){ //set
    changed = 3
    message.channel.send(`SaySet is now at 3`)
   }

   if(message.content.startsWith(prefix + "SaySet 4")){ //set
    changed = 4
    message.channel.send(`SaySet is now at 4`)
   }

   if(message.content.startsWith(prefix + "SaySet 16")){ //set
    changed = 16
    message.channel.send(`SaySet is now at 16`)
   }else{
       message.channel.send("error")
   }

if(message.content.startsWith(prefix + "Say")){//say 1
    if (changed == 1){

        let args = message.content.split(" ").slice(1)
        let thingToEcho = args.join(" ")
        
        const embed = new Discord.RichEmbed()
        .setTitle("឵឵ ឵឵")
        .setColor(0x0086AE)
        .setDescription(thingToEcho)
        .setThumbnail("https://raw.githubusercontent.com/hugo59191/Changed-Clicker/master/chara%20changed/1.png") 

        message.delete();

        message.channel.send({embed});
         
    }else{
        if (changed == 2){
        let args = message.content.split(" ").slice(1)
        let thingToEcho = args.join(" ")
        
        const embed = new Discord.RichEmbed()
        .setTitle("឵឵ ឵឵")
        .setColor(0x0086AE)
        .setDescription(thingToEcho)
        .setThumbnail("https://raw.githubusercontent.com/hugo59191/Changed-Clicker/master/chara%20changed/2.png") 

        message.delete();

        message.channel.send({embed});
         
    }else{
        if (changed == 3){
        let args = message.content.split(" ").slice(1)
        let thingToEcho = args.join(" ")
        
        const embed = new Discord.RichEmbed()
        .setTitle("឵឵ ឵឵")
        .setColor(0x0086AE)
        .setDescription(thingToEcho)
        .setThumbnail("https://raw.githubusercontent.com/hugo59191/Changed-Clicker/master/chara%20changed/3.png") 

        message.delete();

        message.channel.send({embed});
         
    }else{
        if (changed == 4){
        let args = message.content.split(" ").slice(1)
        let thingToEcho = args.join(" ")
        
        const embed = new Discord.RichEmbed()
        .setTitle("឵឵ ឵឵")
        .setColor(0x0086AE)
        .setDescription(thingToEcho)
        .setThumbnail("https://raw.githubusercontent.com/hugo59191/Changed-Clicker/master/chara%20changed/4.png") 

        message.delete();

        message.channel.send({embed});
         
    }
}
}
}
}
}
)
