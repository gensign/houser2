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
        console.log(req.body)
        console.log('')
        const { property_name, the_address, city, the_state, zip, image, mortgage, rent } = req.body
        console.log('property_name: ', property_name)
        console.log('')
        let db = req.app.get('db')
        let house = await db.add_house([property_name, the_address, city, the_state, zip, image, mortgage, rent])
        console.log('house: ', house)
        res.status(201).send(house)
    },
    deleteHouse: async (req, res) => {
        console.log('Removing House')
        console.log('')
        const { id } = req.params
        console.log('id: ', id)
        console.log('')
        let db = req.app.get('db')
        let house = await db.houser.destroy({ id })
        console.log('house: ', house)
        console.log('')
        res.status(200).send(house)

    }
}