const Router = require('@koa/router')

const router = new Router()

router.use(require('./users'))
router.use(require('./register-login'))
router.use(require('./messages'))

module.exports = router
