//@ desc Get todos
// @route  GET /api/todos
// @access Private

const getTodos = (req,res)=>{
    res.status(200).json("Get my task")
}
//@ desc Add todo
// @route  POST /api/todos
// @access Private
const addTodo = (req,res)=>{
    res.status(200).json("create my task")
}
//@ desc Update todo
// @route  PUt /api/todos
// @access Private
const updateTodo =(req,res)=>{
    res.status(200).json(`modify my task${req.params.id}`)
}
//@ desc Delete todo
// @route  DELETE /api/todos
// @access Private
const deleteTodo  =  (req,res)=>{
    res.status(200).json(`clear my task${req.params.id}`)
}
module.exports ={ getTodos, addTodo,updateTodo,deleteTodo}