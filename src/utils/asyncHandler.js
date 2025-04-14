const asyncHandler = (requestHandler) =>{
    (req, res, next)=>{
        Promise.resolve().catch((err) => next(err))
    }
}








export {asyncHandler}

//higher order function
// const asyncHandler=(fn)=>()=>{}
// const asyncHandler=( fun) => () => {}
// const asyncHandler = (fun) => async()=> {}





//     const asyncHandler= (fn) => async (req, res , next) =>{
//         try{
// await fn(req, res, next)
//         }
//         catch(error){
// res.status(error.code || 500).json({
//     success: false,
//     massage: error.message
// })
//         }
//     }