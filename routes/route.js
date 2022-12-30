const routes = require('express').Router();
const controller = require('../controller/controller')

routes.route('/api')
    .get((req, res)=>res.json("Get request from categories"))


routes.route('/api/tasks')
    .post(controller.create_task)
    // .get(controller.get_tasks)
    .delete(controller.delete_tasks)

routes.route(`/api/tasks/:email`)
    .get(controller.get_tasks)
    

routes.route(`/api/completedTasks/:email`)
    .get(controller.get_complete_tasks)

routes.route(`/api/tasks`).patch(controller.update_task_complete)

routes.route(`/api/completedTasks`).patch(controller.update_task_not_completed)
    

routes.route(`/api/postComment`).patch(controller.post_comment)

module.exports = routes;