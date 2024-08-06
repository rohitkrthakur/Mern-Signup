const ensureAuthenticated = require('../Middlewares/Auth');
const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- logged in user detail ---', req.user);
    res.status(200).json([
        {
            name: "mobile",
            price: 10000
        },
        {
            name: "tv",
            price: 20000
        },
        {
            name: "laptop",
            price: 50000
        },
        {
            name: "tablet",
            price: 15000
        },
        {
            name: "headphones",
            price: 3000
        },
        {
            name: "smartwatch",
            price: 8000
        },
        {
            name: "smartwatch",
            price: 8000
        },
        {
            name: "smartwatch",
            price: 8000
        },
        {
            name: "smartwatch",
            price: 8000
        },
        {
            name: "smartwatch",
            price: 8000
        },
        {
            name: "smartwatch",
            price: 8000
        }
    ]);
});

module.exports = router;
