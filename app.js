import express from 'express';
import { forumRouter } from './src/routes/forum.routes.js';
import { startDb } from './src/config/database.js';
import path from 'node:path'
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { fileURLToPath } from 'node:url';
import { contentSecurityPolicy } from 'helmet';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(helmet({
    contentSecurityPolicy: false
}))

app.use(express.static(path.join(__dirname, "src", "public"))) //pone el src porque nosotros lo congiguramos con la carpeta src y adentro tenemos los views y el public

app.set('views', path.join(__dirname,"src","views")) //pone el src porque nosotros lo congiguramos con la carpeta src y adentro tenemos los views y el public
app.set('views engine','ejs');

const port = 3002

app.use('/',forumRouter)

app.listen(port,() => {
    console.log(`server listening http://localhost:${port}/forums`)
    startDb()
})

