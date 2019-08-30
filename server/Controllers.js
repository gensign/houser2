module.exports = {
    getHouses: async (req, res) => {
        console.log('Getting Houses')
        console.log('')
        let db = req.app.get('db')
        let house = await db.get_houses()
        console.log('house: ', house)
        console.log('')
        res.status(200).send(house)
    },
    addHouse: async (req, res) => {
        console.log('Adding House')
        console.log('')

    },
    deleteHouse: async (req, res) => {
        console.log('Removing House')
        console.log('')
    }
}