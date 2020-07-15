# Welcome to the coronavirus API
## This is an overview of all the functions
[![npm version](https://badge.fury.io/js/coronavirus-api.js.svg)](https://badge.fury.io/js/coronavirus-api.js)

```js
const c = require("coronavirus-api.js")
c.covidall().then(console.log())
//logs all covid-19 data

c.covidcountry('USA').then(console.log())
//shows data for a specified country

c.usastate('Texas').then(console.log()) 
//shows data for a specified US state
```
