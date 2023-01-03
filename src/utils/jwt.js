import jvt from 'jsonwebtoken'
const SECRET = 'olma'

export default {
  sign: (payload)=>jvt.sign(payload, SECRET),
  verify: (token)=> jwt.verify(token, SECRET)
}