const axios = require('axios').default

async function getArmorById(id){
    let url = `https://mhw-db.com/armor/${id}`
    const {data} = await axios.get(url)
    return data
}

module.exports = {
    getArmorById
}