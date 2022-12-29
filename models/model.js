const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tasks_model = new Schema({
    taskName:{type: String, default:"Anonymous"},
    taskImage:{type: String, default:''},
    taskDetail: { type: String, default: '' },
    isComplete:{type:Boolean, default:false},
    userName: {type: String, default: "Anonymous"},
    userEmail: { type: String, default: '' },
    comments: { type: Array, default: '' },
    submitDate:{type:Date, default:Date.now}
})

const Tasks = mongoose.model('tasks', tasks_model);

exports.default = Tasks;

module.exports = {
    Tasks
}