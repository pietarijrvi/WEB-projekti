const router = require('express').Router();

router.use('/game_reaction', require('./game_reaction'));
router.use('/game_speedclick', require('./game_speedclick'));

module.exports = router;