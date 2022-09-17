const axios = require('axios').default

const API_URL = 'https://mhw-db.com/armor'
let ltPagination = 31
let gtePagination = 0

async function fetchingAPI(){
  const {data} = await axios.get(API_URL, {
    params: {
      p:{
        id: true,
        name: true,
        assets: true,
        defense: true
      },
      q:{
        id:{
          $gte: gtePagination,
          $lt: ltPagination
        }
      }
    }
  })
  return data
}

module.exports = {
  fetchingAPI,
  ltPagination
}
