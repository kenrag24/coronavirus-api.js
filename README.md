# Welcome to the coronavirus API
## This is an implementation with a discord bot

```js
const covid = require("coronavirus-api")
const Discord = require("discord.js")
const client = new Discord.Client()

client.on('message', async message => {
    if(message.content === "!covid") {
        let data = covid.covidall()

        message.channel.send(data)
        //not sure why you want to send JSON data to the user but this is just an example
    }
})




client.login("always keep ur token secure")
```