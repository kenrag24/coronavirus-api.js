const fetch = require('node-fetch')

module.exports = {
    covidall: async function covidall(){
        const res = await fetch("https://disease.sh/v3/covid-19/all")
        const data = await res.json()
        if(!data) throw new Error("No data was returned");
        return data
        },

    covidcountry: async function covidcountry(country)    {
        const res = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
        const data = await res.json()
        if(!data) throw new Error("No data was returned");
        return data
    },

    usastate: async function usastate(state)    {
        if(!state) throw new Error('no state was provided')
        const res = await fetch(`https://disease.sh/v3/covid-19/states/${state}`)
        const data = await res.json()
        if(!data) throw new Error("No data was returned");
        return data
    }
}
