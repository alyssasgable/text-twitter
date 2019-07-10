const router = require('express').Router()
const exampleModel = require('../models')


// Async or regular promises I just prefer the flatness of async/await
router.get('/', async (req, res) => {
    try {
        const data = await exampleModel.get('tableName')
        if(data) {
            res.status(200).json(data)
        } else {
            res.status(404).json({ message: 'There was an issue retrieving the data at the specified table.' })
        }
    } catch({ message }) {
        res.status(500).json({ message })
    }
    
    return
});

module.exports = router;