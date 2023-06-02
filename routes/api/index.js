const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thoughts-routes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;