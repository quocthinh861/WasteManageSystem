import express, { Request, Response} from 'express'
const app = express()
require('dotenv').config() 

const port = process.env.PORT || 3000;



app.use(express.urlencoded({ extended: true }));
  
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World')
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })