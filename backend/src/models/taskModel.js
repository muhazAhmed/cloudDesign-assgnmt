const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    text : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true,
        enum : ["Open", "In-Progress", "Completed"]
    },

}, {timestamps:true}
)
module.exports = mongoose.model("Task", taskSchema)