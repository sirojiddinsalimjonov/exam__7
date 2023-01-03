import jwt from 'jsonwebtoken'
const  SECRET = 'olma'


function checkToken (req, res, next){
  try {
    let { token } = req.headers 
	
		if(!token){
			throw new Error('token required')
		}

		let { userId } = jwt.verify(token, SECRET)

		req.userId = userId

		next()
	} catch (error) {
		res.status(401).json({
			status: 401,
			message: error.message
		})
	}
}

export  {SECRET, checkToken}