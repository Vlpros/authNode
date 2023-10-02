const Router =require('express').Router

const router=new Router()
const useController = require('../controllers/user-controller')
const {body}=require('express-validator')

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min:3,max:6}),

    useController.registration)
router.post('/login',useController.login)
router.post('/logout',useController.logout)
router.get('/active/:link',useController.activate)
router.get('/refresh',useController.refresh)
router.get('/users',useController.getUsers)

module.exports =router