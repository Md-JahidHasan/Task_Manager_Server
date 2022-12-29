const routes = require('express').Router();
const controller = require('../controller/controller')

routes.route('/api')
    .get((req, res)=>res.json("Get request from categories"))


routes.route('/api/tasks')
    .post(controller.create_task)
    .get(controller.get_tasks)


module.exports = routes;