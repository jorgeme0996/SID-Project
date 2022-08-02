require('dotenv').config()

const AlchemyUrl=process.env.ALCHEMY_URL
const PrivateKey=process.env.PIVATE_KEY

module.exports = {
    AlchemyUrl,
    PrivateKey
}
