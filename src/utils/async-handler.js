//This is a higher order function as this takes another function as parameter
const asyncHandler =(requestHandler)=>{
   return(req,res,next)=>{
      Promise.resolve(requestHandler(req,res,next))
      .catch((err)=> next(err))
   }
}

export {asyncHandler}