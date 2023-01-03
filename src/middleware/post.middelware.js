import { postsSchema, schemaSign } from '../utils/validate.js'

export  const POST = (req, res, next) => {
  try {
    if(req.url == '/sign' && req.method == "POST"){
      
      let validet = schemaSign.validate(req.body)
      
      if(validet.error) throw new Error(validet.error)
      
      next()
      
    }
    if(req.url == '/post' && req.method == "POST"){
      
      let validate = postsSchema.validate(req.body)
      
      if(validate.error) throw new Error(validate.error)
      
      next()
      
    }
  } catch (error) {
    res.status(400).send({status: error.status, message:error.message})
  }  
}



