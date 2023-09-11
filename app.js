import express from 'express';
import { taskRouter } from './src/routes/task.routes.js';
import { startDb } from './src/config/database.js';

// const cors = require('cors');
const app = express();
// app.use(cors());

//middlewares
app.use(express.json())

const port = 3000;

app.use('/',taskRouter)

app.listen(port,() => {
    console.log(`server listening http://localhost:${port}`)
    startDb()
})