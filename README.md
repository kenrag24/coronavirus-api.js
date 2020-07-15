# Welcome to the coronavirus API
## This is an implementation with a discord bot
[![npm version](https://badge.fury.io/js/coronavirus-api.js.svg)](https://badge.fury.io/js/coronavirus-api.js)

```js
const covid = require("coronavirus-api.js")
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
