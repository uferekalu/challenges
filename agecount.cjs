const https= require('https')
https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  console.log(resp)
})
