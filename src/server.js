import express from 'express'
import cors from 'cors'
import { PORT } from './config.js'
import fileUpload from 'express-fileupload'
import adminRouter from './routes/admin.router.js'
import categoryRouter from './routes/category.router.js'
import postsRouter from './routes/posts.router.js'
import swagger from './swagger.js'


const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload())

app.use(adminRouter)
app.use(categoryRouter)
app.use(postsRouter)
app.use(swagger)

app.listen(PORT, () => console.log('http://localhost:' + PORT))