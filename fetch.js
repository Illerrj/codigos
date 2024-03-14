/*fetch('https://api.coingecko.com/api/v3/exchange_rates', {mode: 'cors'}).then((data) => {
    console.log(data)
    
}) esse e um GET  */

fetch('https://api.coingecko.com/api/v3/exchange_rates?id=332158625558&name=I', 
{
    mode: 'cors',
    method: 'POST',
    body:{
       name: 'Iller',
       age: 42 
    },
    headers:{

    }
}).then((data) => {
    console.log(data)
})